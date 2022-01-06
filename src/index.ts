import express from "express"
import * as bodyParser from "body-parser"
import {initialRoutes} from './Routes/index'
import cors  from "cors"
import  mongoose from 'mongoose';
import * as cron from 'node-cron'
import 'reflect-metadata'
require('dotenv').config()
class App {

   public expressApp: express.Application
   public initialroutes:initialRoutes = new initialRoutes()
   constructor() {
      this.expressApp = express()
      this.config()
      this.portSetup()
      this.initialroutes.initialRoutes(this.expressApp)
      this.mongoSetup()
   }

   private config(): void {
      this.expressApp.use(bodyParser.json())
      this.expressApp.use(bodyParser.urlencoded({ extended: false }))
      this.expressApp.use(cors({ credentials: true, origin: true }))
   }

   private async mongoSetup(){
      const URL = process.env.mongoUrl || ""
    await mongoose.connect(URL, {useCreateIndex: true,useUnifiedTopology: true,
    useFindAndModify: false, useNewUrlParser: true}).then(() => console.log('mongoDB connected...'))
   }

   private portSetup() :void{
    const PORT = process.env.PORT || 3000

    this.expressApp.listen(PORT, () => {
       console.log('Express server listening on port ' + PORT)
    });
   }

}
export default new App().expressApp
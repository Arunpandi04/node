import { Application } from 'express';
import { userController } from '../Controller/userController'
import { Auth } from '../Auth/Auth'
const Authorization = new Auth();
export class userRoutes {
 constructor(public UserController:userController=new userController()){}
     public userroutes(app: Application):void {
         app.route('/').get(Authorization.Auth,this.UserController.getData)
         app.route('/user/:id').put(Authorization.Auth,this.UserController.updateuser)
         app.route('/signup').post(this.UserController.signup)
         app.route('/signin').post(this.UserController.signin)
         app.route('/user/:id').get(Authorization.Auth,this.UserController.getUser)     
    }
}
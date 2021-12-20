import { Request, Response } from 'express';
import { userService } from '../Service/userService';
import { signupData } from '../Utils/Types'
import { post_response, get_response, error_response, fail_response } from '../Utils/Types'

const UserService =new userService();
export class userController{

    public async getUser(req: Request, res: Response): Promise<void>{
        const id :string= req.params.id;
         const data :post_response | get_response| error_response |fail_response=await UserService.getUser(id);
         res.status(data.statusCode).json(data);
    }

    public async signup(req: Request, res: Response): Promise<void> {
        const  body = req.body
        const data  = await UserService.signup(body);
        console.log("data--->",data)
        res.status(data.statusCode).json(data);
    }
    public async signin(req: Request, res: Response): Promise<void> {
        const  body : signupData= req.body
        const data :post_response | get_response| error_response |fail_response = await UserService.signin(body);
        console.log("data--->",data)
        res.status(data.statusCode).json(data);
    }
    public async updateuser(req: Request, res: Response): Promise<void> {
        const id= req.params.id
        const body : any= req.body;
        const userdata :post_response | get_response| error_response |fail_response= await UserService.updateuser(id,body);
        res.status(userdata.statusCode).json(userdata);
    }
    public async getData(req: Request, res: Response): Promise<void> {
        res.status(200).json({data:"welcome"});
    }
}
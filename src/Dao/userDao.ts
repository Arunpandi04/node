import userModal from '../Modal/userModal';
import {signupData} from '../Utils/Types'

export class userDao {
    public async create_cart(body:any){
        const result = new userModal({
            firstName: body.firstName,
            lastName: body.lastName,
            gender: body.gender ,
            dob: body.dob,
            address: body.address,
            email:body.email,
            password:body.password
          });
        return result.save()
    }

    public async getUser(id:string):Promise<any>{
        return userModal.findById(id)
    }
    public async findone(data:string){
        return await userModal.findOne({email:data}); 
    }
    public async updateuser(id:string,data:any):Promise<object | null>{
    return await userModal.findOneAndUpdate({_id: id}, data);
    }
}
import conf from "../conf/conf";
import { Client , Account , ID } from "appwrite";

export class AuthService {
    client = new Client();
    account : Account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);
            this.account = new Account(this.client);
    }

    async createAccount({email ,password, name}:{email : string ,password : string, name: string}) {
        try {
           const userAccount =  await this.account.create(ID.unique(),email,password,name);

           if(userAccount){
            return this.login({email,password});
           }
           else {
                return userAccount;
           }
        } catch (error) {
            throw console.log("Appwrite : createAcount :: ",error );
        }
    }

    async login({email,password}:{email:string,password:string}) {
        try {
            const session = await this.account.createEmailPasswordSession(email,password);
            return session
        } catch (error) {
            console.log("Appwrite : login :: ",error )
        }
    }   

    async getCurrentUser() {
        
        try {
            const currentUser = await this.account.get();
        return currentUser
        } catch (error) {
            console.log("Appwrite : getCurrentUser :: ",error )
        }
        //if no account is found then null is returned
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSession("current");
        } catch (error) {
            console.log("Appwrite : logout :: ",error )
        }
    }
}

const authService = new AuthService();

export default authService;
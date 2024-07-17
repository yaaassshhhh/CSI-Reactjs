import conf from "../conf/conf";
import { Client , Account, Databases , Storage , Query , ID } from "appwrite";

export class Service {
    client =  new Client();
    databases : Databases;
    bucket : Storage;
    
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
}

const service = new Service();

export default service;
export class register{

    userId:number;
    userName:string;
    userEmail:string;
    userPassword :string;
    userRole :string;

    constructor
    (userId:number,userName:string, userEmail:string, userPassword :string, userRole :string){


        this.userId= userId;
        this.userName= userName;
        this.userEmail= userEmail;
        this.userPassword= userPassword;
        this.userRole= userRole;

    }




}
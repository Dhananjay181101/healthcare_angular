export class BookAppointment{

    
    pid:String;
    pname :string;
    contact:number;

    adress:string;
    age:number;
    atype:string;
adate:Date;
constructor(pid:String,pname :string,contact:number, adress:string, age:number,atype:string, adate:Date      ){

    this.pid=pid;
    this.pname=pname;
    this.contact=contact;
    this.adress=adress;
    this.age=age;
    this.atype=atype;
    this.adate=adate;

}




    
}
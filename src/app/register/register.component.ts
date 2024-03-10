import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel,NgForm } from '@angular/forms';
import { register } from './register';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule , CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  rest_url:string="http://localhost:5555";
  resList:register[]=[];
  err:string="";
  nm:string="";
  status:boolean=false;
  constructor(private http:HttpClient){
  }
  getAll(){
    this.http.get<register[]>(this.rest_url+"/getAll/").subscribe(
      data=>{
                this.status=true;
                console.log("got data!");
                this.resList=data;
            },
      err=>{
                this.status=false;
                console.log("ERROR fecthing data!"+err);
                this.err="DATA NAHI MILA BHAI!";
            }
      );

  }


  addUser(myform:NgForm){
    console.log("GOT DATA = ");
    let newusr:any=myform.value;
    this.http.post<register>(this.rest_url+"/register",newusr).subscribe(
      data=>{
        console.log("post completed"+data);
        alert("resistration complete");
      },
      err=>{
        console.log("post failed"+err);
        alert("resistration Faild");
      }
    )
   
  }

  


}

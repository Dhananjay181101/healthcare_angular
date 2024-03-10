import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookAppointment } from './BookAppointment';

@Component({
  selector: 'app-bookappointment',
  standalone: true,
  imports: [FormsModule , CommonModule,HttpClientModule],
  templateUrl: './bookappointment.component.html',
  styleUrl: './bookappointment.component.css'
})
export class BookappointmentComponent {

  rest_url:string="http://localhost:5555";
  resList1:BookAppointment[]=[];
  resList2:BookAppointment[]=[];
  err:string="";
  nm:string="";
  status:boolean=false;
  constructor(private http:HttpClient){
  }
  
  getAll(){
    this.http.get<BookAppointment[]>(this.rest_url+"/getAllAppointment/").subscribe(
      data=>{
                this.status=true;
                console.log("got data!");
                this.resList1=data;
            },
      err=>{
                this.status=false;
                console.log("ERROR fecthing data!"+err);
                this.err="DATA NAHI MILA BHAI!";
            }
      );

  }

  
  getSpecific(myform:NgForm){

    const  pid:any=myform.controls['pid'].value;
    console.log("data get="+pid);
    this.http.get<BookAppointment[]>(this.rest_url+"/showbyemail/"+pid).subscribe(
      data=>{
                this.status=true;
                console.log("got data!");
                this.resList2=data;
            },
      err=>{
                this.status=false;
                console.log("ERROR fecthing data!"+err);
                this.err="DATA NAHI MILA BHAI!";
            }
      );

  }  



  addUser(myform:NgForm){
    console.log("GOT DATA = "+myform.value);
    let newusr:any=myform.value;
    this.http.post<BookAppointment>(this.rest_url+"/bookAppointment",newusr).subscribe(
      data=>{
        console.log("post completed"+data);
        alert("sucessfully book")
      },
      err=>{
        console.log("post failed"+err);
        alert("Unsucessfully book")
      }
    )
   
  }

  




}



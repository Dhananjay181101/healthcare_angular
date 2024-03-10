import { Component } from '@angular/core';
//import { register } from '../register/register';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bloodbank } from './bloodbank';
//import { bloodbank } from './bloodbank';
@Component({
  selector: 'app-bloodbank',
  standalone: true,
  imports: [FormsModule , CommonModule,HttpClientModule],
  templateUrl: './bloodbank.component.html',
  styleUrl: './bloodbank.component.css'
})
export class BloodbankComponent {

  rest_url:string="http://localhost:5555";
  resList:bloodbank[]=[];
  err:string="";
  nm:string="";
  status:boolean=false;
  constructor(private http:HttpClient){
  }

  getAlldata(){
    this.http.get<bloodbank[]>(this.rest_url+"/getAllblood/").subscribe(
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

  imgpath:string="../../assets/goacamp.jpg";
  imgpath1:string="../../assets/rannofkutchcamp.jpg";
  imgpath2:string="../../assets/jaisalmercamp.jpg";
  imgpath3:string="../../assets/spitivalleycamp.jpg";
  imgpath4:string="../../assets/tsomoriricamp.jpg";
  imgpath5:string="../../assets/rishikeshcamp.jpg";
  imgpath6:string="../../assets/Chandratalcamp.jpg";
  imgpath7:string="../../assets/samsanddunescamp.jpg";
  imgpath8:string="../../assets/anjunaBeachcamp.jpg";
  imgpath9:string="../../assets/mussoorie.jpg";


}

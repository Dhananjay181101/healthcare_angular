import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { AuthLoginService } from '../../../_services/auth-login.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ FormsModule , CommonModule,HttpClientModule, ReactiveFormsModule,HttpClientModule,RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  userForm: FormGroup
  submitted = false;
  rest_url:string="http://localhost:5555";

  constructor(public fb: FormBuilder,
    private router: Router,private http:HttpClient) {
      this.userForm = this.fb.group({
        userId: ['', Validators.required],
        userPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]],
      })
  }

  

  get f(): { [key: string]: AbstractControl }
   {
    return this.userForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;



    }
    // const data = {
    //   username: this.userForm.value.email, password:this.userForm.value.password 
    // }

    const userId: string = this.userForm.controls['userId'].value;
    const password: string = this.userForm.controls['userPassword'].value;
    // this.authLoginService.login(userId, password);
    console.log(userId+""+password);

    this.http.get<SignInComponent>(this.rest_url+"/getbyemailandpassword/"+userId+"/"+password).subscribe(
      data=>{

        if (data==null)
        {
        alert("Login UNSuccessful!!!!"+data);
      //  localStorage.setItem("userIdentity",userId);
       // location.reload();
        //inject component in router-outlet
  
        //this.router.navigate(['/data']);
      }
      else

      {
        alert("Login Successful!!!!"+data);
       
        localStorage.setItem("userIdentity",userId);
      
        this.router.navigate(['/data']);
       // location.reload();
      }
      },
      error=>{
        alert("Login Failed.........!!!!!!");
      }
    );
  
    
  



    
     }


     onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  } 
  }
 
  


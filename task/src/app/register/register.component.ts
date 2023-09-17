import { Component,OnInit } from '@angular/core';
import{FormBuilder, FormGroup,Validators}  from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 
})
export class RegisterComponent implements OnInit{
  signupform!:FormGroup;

constructor(private _fb:FormBuilder,private router:Router){}
ngOnInit(): void {
  this.signupform=this._fb.group({
    username:["",Validators.required],
    email:["",Validators.required],
    mobile:["",Validators.required],
    password:["",Validators.required]
  })
}
signup(){
  console.log(this.signupform.value);
  this.router.navigate(['login'])

}
}

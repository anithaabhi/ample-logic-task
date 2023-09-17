import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
constructor(private _fb:FormBuilder, private router:Router){}
  ngOnInit(): void {
   this.loginform=this._fb.group({
    username:["",Validators.required],
    password:["",Validators.required],
   })
  }
  login(){
    this.router.navigate(['register'])

  }

}

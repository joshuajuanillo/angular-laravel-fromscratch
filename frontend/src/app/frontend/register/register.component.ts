import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseAuthService } from '../../shared/firebase/auth.service';
import { AuthService } from '../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FirebaseService } from '../../shared/firebase/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: any;
  Roles: any = ['Admin', 'Author', 'Reader'];
  errorMessage: string = '';
  successMessage: string = '';
  user: any;
  
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public firebaseAuthService: FireBaseAuthService,
    public authService: AuthService,
    private FirebaseService : FirebaseService,
  ) { 
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value)
    this.firebaseAuthService.doRegister(this.registerForm.value)
    .then((res: any) => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";

      this.getCoa()

      // this.authService.register(this.registerForm.value).subscribe(
      //   (res:any) =>{
      //     console.log(res)
      // })
    }, (err: { message: string; }) => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  getCoa(){
    // this.FirebaseService.getUser().subscribe(
    //   result => {
    //   console.log(result);
    // })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  isLoggedIn$: Observable<boolean>;
  constructor(
    private fb:FormBuilder,
    private authService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],

  });
  this.isLoggedIn$ = this.authService.isLoggedIn

}

   isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      //this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}

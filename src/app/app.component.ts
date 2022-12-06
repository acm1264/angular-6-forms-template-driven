import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subTiers = ["Basic", "Advanced", "Pro"]
  @ViewChild('formRef') signupForm: NgForm;

  //can submit data and store the values to display them back on the page
  //(NOTE: obviously it is not sae to store an actual password like this lol, just for educational purposes)
  submitted = false;
  submittedFormContents = {
    email: '',
    password: '',
    subTier: ''
  }


  onSubmit()
  {
    console.log(this.signupForm.value)

    this.submitted = true;
    this.submittedFormContents.email = this.signupForm.value.email;
    this.submittedFormContents.password = this.signupForm.value.password;
    this.submittedFormContents.subTier = this.signupForm.value.subTier;

    this.signupForm.reset();
  }
}

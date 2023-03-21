import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  email : string ='';
  password : string ='';
  constructor(private auth :AuthService) { }
  ngOnInit(): void {
  }
  create() {
    if(this.email =='') {
    alert("Please enter your email");
    return;
  }
  if(this.password =='') {
    alert("Please enter your password");
    return;
  }
  this.auth.create(this.email, this.password);
  this.email='';
  this.password='';
  
  }}
  

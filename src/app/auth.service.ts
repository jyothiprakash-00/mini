import { Injectable } from '@angular/core';
import { AngularFireAuth} from'@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth :AngularFireAuth, private router :Router) { }

  //login method
  login(email :string, password :string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
localStorage.setItem('token','true');
this.router.navigate(['/home']);
},err =>{
  alert('err.message');
  this.router.navigate(['/login']);
})}
//register method
create(email :string, password :string) {
  this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
    alert('registratin successful');
this.router.navigate(['/login']);
},err =>{
  alert('err.message');
  this.router.navigate(['/create']);
})
}
}
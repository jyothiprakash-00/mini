import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {
  email : string ='' ;
  name : string ='' ;
  address : string ='' ;
  city : string ='' ;
  state : string ='' ;
  zip : string ='' ;
  cardname : string ='' ;
  cardnumber : string ='' ;
  expmonth : string ='' ;
  expyear : string ='' ;
  cvv : string ='' ;

  constructor(private router:Router,private firestore:Firestore){}
  
  addData(f:any)
  {
    if(this.email == ''){
      alert('please enter email')
      return;
    }
    if(this.name == ''){
      alert('please enter name')
      return;
    }
    if(this.address == ''){
      alert('please enter address')
      return;
    }
    if(this.city == ''){
      alert('please enter city')
      return;
    }
    if(this.state == ''){
      alert('please enter state')
      return;
    }
    if(this.zip == ''){
      alert('please enter zip')
      return;
    }
    if(this.cardname == ''){
      alert('please enter cardname')
      return;
      
    }
    if(this.cardnumber == ''){
      alert('please enter cardnumber')
      return;
    }
    if(this.expmonth == ''){
      alert('please enter expmonth')
      return;
    }
    if(this.expyear == ''){
      alert('please enter expyear')
      return;
    }
    if(this.cvv == ''){
      alert('please enter cvv')
      return;
    }
    const collectionInstance =collection(this.firestore,'buynow');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('data saved successfully')
      alert('send successful');
      this.router.navigate(['']);
    })
    .catch((err)=>{
   console.log(err);
    })
  }
}





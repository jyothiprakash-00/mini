import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-doggrooming',
  templateUrl: './doggrooming.component.html',
  styleUrls: ['./doggrooming.component.css']
})
export class DoggroomingComponent {
  constructor(private hero:HeroService,private router:Router){}

  doggrooming = this.hero.getData1()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/viewmore'])
     
      
     

  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-catgrooming',
  templateUrl: './catgrooming.component.html',
  styleUrls: ['./catgrooming.component.css']
})
export class CatgroomingComponent {
  constructor(private hero:HeroService,private router:Router){}

  catgrooming = this.hero.getData4()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/cgviewmore1'])
    
  }

}

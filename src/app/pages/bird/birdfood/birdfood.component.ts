import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-birdfood',
  templateUrl: './birdfood.component.html',
  styleUrls: ['./birdfood.component.css']
})
export class BirdfoodComponent {
  constructor(private hero:HeroService,private router:Router){}

  birdfood = this.hero.getData6()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/bfviewmore1'])
  }
}

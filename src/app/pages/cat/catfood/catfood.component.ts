import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-catfood',
  templateUrl: './catfood.component.html',
  styleUrls: ['./catfood.component.css']
})
export class CatfoodComponent {
  constructor(private hero:HeroService,private router:Router){}

  catfood = this.hero.getData3()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/cfviewmore1'])
  }
}

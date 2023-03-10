import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-birdcage',
  templateUrl: './birdcage.component.html',
  styleUrls: ['./birdcage.component.css']
})
export class BirdcageComponent {
  constructor(private hero:HeroService,private router:Router){}

  birdcage = this.hero.getData7()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/bcviewmore1'])
  }
}

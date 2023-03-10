import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.css']
})
export class AquariumComponent {
  constructor(private hero:HeroService,private router:Router){}

  aquarium = this.hero.getData11()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/faviewmore1'])
    
  }
}

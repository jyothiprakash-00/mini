import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-aquariumsupply',
  templateUrl: './aquariumsupply.component.html',
  styleUrls: ['./aquariumsupply.component.css']
})
export class AquariumsupplyComponent {
  constructor(private hero:HeroService,private router:Router){}

  plant = this.hero.getData12()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/fpviewmore1'])
    
  }
}

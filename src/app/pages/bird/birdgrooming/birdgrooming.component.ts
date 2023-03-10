import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-birdgrooming',
  templateUrl: './birdgrooming.component.html',
  styleUrls: ['./birdgrooming.component.css']
})
export class BirdgroomingComponent {
  constructor(private hero:HeroService,private router:Router){}

  birdgrooming = this.hero.getData8()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/bgviewmore1'])
      

    
}

}

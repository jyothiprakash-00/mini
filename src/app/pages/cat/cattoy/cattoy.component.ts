import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-cattoy',
  templateUrl: './cattoy.component.html',
  styleUrls: ['./cattoy.component.css']
})
export class CattoyComponent {
  constructor(private hero:HeroService,private router:Router){}

  cattoy = this.hero.getData5()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/ctviewmore1'])
    
  }
}

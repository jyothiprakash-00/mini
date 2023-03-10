import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-dogtoy',
  templateUrl: './dogtoy.component.html',
  styleUrls: ['./dogtoy.component.css']
})
export class DogtoyComponent {
  constructor(private hero:HeroService,private router:Router){}

  dogtoy = this.hero.getData2()

  gotohere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/dtviewmore1'])
    
  }

}

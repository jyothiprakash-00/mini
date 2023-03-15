import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-fpviewmore1',
  templateUrl: './fpviewmore1.component.html',
  styleUrls: ['./fpviewmore1.component.css']
})
export class Fpviewmore1Component {

  fpviewmore1:any
 
  constructor(private plant:HeroService,private router:Router){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let fpviewmore1DataArray = this.plant.getData23();
    console.log(pageId);
    
    console.log(fpviewmore1DataArray);

    this.fpviewmore1 = fpviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.fpviewmore1);


    
  }

  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let fpviewmore1DataArray = this.plant.getData23();
    this.fpviewmore1 = fpviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}
import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-ffviewmore1',
  templateUrl: './ffviewmore1.component.html',
  styleUrls: ['./ffviewmore1.component.css']
})
export class Ffviewmore1Component {

  ffviewmore1:any
 
  constructor(private fishfood:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let ffviewmore1DataArray = this.fishfood.getData22();
    console.log(pageId);
    
    console.log(ffviewmore1DataArray);

    this.ffviewmore1 = ffviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.ffviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let ffviewmore1DataArray = this.fishfood.getData22();
    this.ffviewmore1 = ffviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

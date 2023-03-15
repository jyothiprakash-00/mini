import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-bcviewmore1',
  templateUrl: './bcviewmore1.component.html',
  styleUrls: ['./bcviewmore1.component.css']
})
export class Bcviewmore1Component {
  bcviewmore1:any
 
  constructor(private birdcage:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let bcviewmore1DataArray = this.birdcage.getData21();
    console.log(pageId);
    
    console.log(bcviewmore1DataArray);

     this.bcviewmore1 = bcviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.bcviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let bcviewmore1DataArray = this.birdcage.getData21();
    this.bcviewmore1 = bcviewmore1DataArray.filter(d =>d.id === nId)
  }
}





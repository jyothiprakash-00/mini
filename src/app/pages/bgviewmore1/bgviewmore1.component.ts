import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-bgviewmore1',
  templateUrl: './bgviewmore1.component.html',
  styleUrls: ['./bgviewmore1.component.css']
})
export class Bgviewmore1Component {

  bgviewmore1:any
 
  constructor(private birdgrooming:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let bgviewmore1DataArray = this.birdgrooming.getData20();
    console.log(pageId);
    
    console.log(bgviewmore1DataArray);

     this.bgviewmore1 = bgviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.bgviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let bgviewmore1DataArray = this.birdgrooming.getData20();
    this.bgviewmore1 = bgviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

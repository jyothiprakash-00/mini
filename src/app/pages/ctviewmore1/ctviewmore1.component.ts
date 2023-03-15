import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-ctviewmore1',
  templateUrl: './ctviewmore1.component.html',
  styleUrls: ['./ctviewmore1.component.css']
})
export class Ctviewmore1Component {

  ctviewmore1:any
 
  constructor(private cattoy:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let ctviewmore1DataArray = this.cattoy.getData18();
    console.log(pageId);
    
    console.log(ctviewmore1DataArray);

     this.ctviewmore1 = ctviewmore1DataArray.filter(d =>d.id === pageId)
    console.log(this.ctviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let ctviewmore1DataArray = this.cattoy.getData18();
    this.ctviewmore1 = ctviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

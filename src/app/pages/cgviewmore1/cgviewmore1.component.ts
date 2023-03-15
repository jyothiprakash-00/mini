import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-cgviewmore1',
  templateUrl: './cgviewmore1.component.html',
  styleUrls: ['./cgviewmore1.component.css']
})
export class Cgviewmore1Component {

  cgviewmore1:any
 
  constructor(private catgrooming:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let cgviewmore1DataArray = this.catgrooming.getData17();
 
    console.log(pageId);
    
    console.log(cgviewmore1DataArray);
    

    this.cgviewmore1 = cgviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.cgviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let cgviewmore1DataArray = this.catgrooming.getData17();
    this.cgviewmore1 = cgviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-cfviewmore1',
  templateUrl: './cfviewmore1.component.html',
  styleUrls: ['./cfviewmore1.component.css']
})
export class Cfviewmore1Component {

  cfviewmore1:any
 
  constructor(private catfood:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let cfviewmore1DataArray = this.catfood.getData16();
     
    console.log(pageId);
    
    console.log(cfviewmore1DataArray);
    

    this.cfviewmore1 = cfviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.cfviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let cfviewmore1DataArray = this.catfood.getData16();
    this.cfviewmore1 = cfviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

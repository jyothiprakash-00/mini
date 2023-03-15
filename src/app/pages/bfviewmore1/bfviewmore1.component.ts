import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-bfviewmore1',
  templateUrl: './bfviewmore1.component.html',
  styleUrls: ['./bfviewmore1.component.css']
})
export class Bfviewmore1Component {

  bfviewmore1:any
 
  constructor(private birdfood:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let bfviewmore1DataArray = this.birdfood.getData19();
    console.log(pageId);
    
    console.log(bfviewmore1DataArray);

    this.bfviewmore1 = bfviewmore1DataArray.filter(d =>d.id === pageId)
    console.log(this.bfviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let bfviewmore1DataArray = this.birdfood.getData19();
    this.bfviewmore1 = bfviewmore1DataArray.filter(d =>d.id === nId)
  }
}

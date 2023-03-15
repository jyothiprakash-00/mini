import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-dtviewmore1',
  templateUrl: './dtviewmore1.component.html',
  styleUrls: ['./dtviewmore1.component.css']
})
export class Dtviewmore1Component {

  dtviewmore1:any
 
  constructor(private dogtoy:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let dtviewmore1DataArray = this.dogtoy.getData14();
    
    console.log(pageId);

    console.log(dtviewmore1DataArray);
    
    

    this.dtviewmore1 = dtviewmore1DataArray.filter(d =>d.id === pageId)
    console.log(this.dtviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let dtviewmore1DataArray = this.dogtoy.getData14();
    this.dtviewmore1 = dtviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

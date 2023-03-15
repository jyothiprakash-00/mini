import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-faviewmore1',
  templateUrl: './faviewmore1.component.html',
  styleUrls: ['./faviewmore1.component.css']
})
export class Faviewmore1Component {

  faviewmore1:any
 
  constructor(private aquarium:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let faviewmore1DataArray = this.aquarium.getData24();
    console.log(pageId);
    
    console.log(faviewmore1DataArray);

    this.faviewmore1 = faviewmore1DataArray.filter(d =>d.id === pageId)
     console.log(this.faviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let faviewmore1DataArray = this.aquarium.getData24();
    this.faviewmore1 = faviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}

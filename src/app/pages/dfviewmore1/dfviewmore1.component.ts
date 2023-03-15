import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-dfviewmore1',
  templateUrl: './dfviewmore1.component.html',
  styleUrls: ['./dfviewmore1.component.css']
})
export class Dfviewmore1Component {
  dfviewmore1:any
 
  constructor(private dogfoods:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let dfviewmore1DataArray = this.dogfoods.getData13();
    
    console.log(pageId);
    
    console.log(dfviewmore1DataArray);
    

    this.dfviewmore1 = dfviewmore1DataArray.filter(d =>d.id === pageId)
    console.log(this.dfviewmore1);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let dfviewmore1DataArray = this.dogfoods.getData13();
    this.dfviewmore1 = dfviewmore1DataArray.filter(d =>d.id === nId)
  }
  
}


import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent {

  viewmore:any
 
  constructor(private doggrooming:HeroService){}
  ngOnInit():void{
    let pageId = localStorage.getItem('id');
    let viewmoreDataArray = this.doggrooming.getData15();
    
    console.log(pageId);

    console.log(viewmoreDataArray);
    
    

    this.viewmore = viewmoreDataArray.filter(d =>d.id === pageId)
     console.log(this.viewmore);
    
  }
  goto(id:any){
    let nId = ""+id
    console.log(nId)
    let viewmoreDataArray = this.doggrooming.getData15();
    this.viewmore = viewmoreDataArray.filter(d =>d.id === nId)
  }
  
}

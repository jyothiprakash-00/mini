import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { birdfood } from 'src/assets/data/data';
import { Bcviewmore1Component } from './pages/bcviewmore1/bcviewmore1.component';
import { Bcviewmore2Component } from './pages/bcviewmore2/bcviewmore2.component';
import { Bcviewmore3Component } from './pages/bcviewmore3/bcviewmore3.component';
import { Bcviewmore4Component } from './pages/bcviewmore4/bcviewmore4.component';
import { Bcviewmore5Component } from './pages/bcviewmore5/bcviewmore5.component';
import { Bcviewmore6Component } from './pages/bcviewmore6/bcviewmore6.component';
import { Bcviewmore7Component } from './pages/bcviewmore7/bcviewmore7.component';
import { Bcviewmore8Component } from './pages/bcviewmore8/bcviewmore8.component';
import { Bfviewmore1Component } from './pages/bfviewmore1/bfviewmore1.component';
import { Bfviewmore2Component } from './pages/bfviewmore2/bfviewmore2.component';
import { Bfviewmore3Component } from './pages/bfviewmore3/bfviewmore3.component';
import { Bfviewmore4Component } from './pages/bfviewmore4/bfviewmore4.component';
import { Bfviewmore5Component } from './pages/bfviewmore5/bfviewmore5.component';
import { Bfviewmore6Component } from './pages/bfviewmore6/bfviewmore6.component';
import { Bfviewmore7Component } from './pages/bfviewmore7/bfviewmore7.component';
import { Bfviewmore8Component } from './pages/bfviewmore8/bfviewmore8.component';
import { Bgviewmore1Component } from './pages/bgviewmore1/bgviewmore1.component';
import { Bgviewmore2Component } from './pages/bgviewmore2/bgviewmore2.component';
import { Bgviewmore3Component } from './pages/bgviewmore3/bgviewmore3.component';
import { Bgviewmore4Component } from './pages/bgviewmore4/bgviewmore4.component';
import { Bgviewmore5Component } from './pages/bgviewmore5/bgviewmore5.component';
import { Bgviewmore6Component } from './pages/bgviewmore6/bgviewmore6.component';
import { Bgviewmore7Component } from './pages/bgviewmore7/bgviewmore7.component';
import { Bgviewmore8Component } from './pages/bgviewmore8/bgviewmore8.component';
import { BirdfoodComponent } from './pages/bird/birdfood/birdfood.component';
import { BirdgroomingComponent } from './pages/bird/birdgrooming/birdgrooming.component';
import { BirdcageComponent } from './pages/birdcage/birdcage.component';
import { BuynowComponent } from './pages/buynow/buynow.component';
import { CatfoodComponent } from './pages/cat/catfood/catfood.component';
import { CatfoodbuyComponent } from './pages/cat/catfoodbuy/catfoodbuy.component';
import { CatgroomingComponent } from './pages/cat/catgrooming/catgrooming.component';
import { CattoyComponent } from './pages/cat/cattoy/cattoy.component';
import { Cfviewmore1Component } from './pages/cfviewmore1/cfviewmore1.component';
import { Cfviewmore2Component } from './pages/cfviewmore2/cfviewmore2.component';
import { Cfviewmore3Component } from './pages/cfviewmore3/cfviewmore3.component';
import { Cfviewmore4Component } from './pages/cfviewmore4/cfviewmore4.component';
import { Cfviewmore5Component } from './pages/cfviewmore5/cfviewmore5.component';
import { Cfviewmore6Component } from './pages/cfviewmore6/cfviewmore6.component';
import { Cfviewmore7Component } from './pages/cfviewmore7/cfviewmore7.component';
import { Cfviewmore8Component } from './pages/cfviewmore8/cfviewmore8.component';
import { Cgviewmore1Component } from './pages/cgviewmore1/cgviewmore1.component';
import { Cgviewmore2Component } from './pages/cgviewmore2/cgviewmore2.component';
import { Cgviewmore3Component } from './pages/cgviewmore3/cgviewmore3.component';
import { Cgviewmore4Component } from './pages/cgviewmore4/cgviewmore4.component';
import { Cgviewmore5Component } from './pages/cgviewmore5/cgviewmore5.component';
import { Cgviewmore6Component } from './pages/cgviewmore6/cgviewmore6.component';
import { Cgviewmore7Component } from './pages/cgviewmore7/cgviewmore7.component';
import { Cgviewmore8Component } from './pages/cgviewmore8/cgviewmore8.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CreateComponent } from './pages/create/create.component';
import { Ctviewmore1Component } from './pages/ctviewmore1/ctviewmore1.component';
import { Ctviewmore2Component } from './pages/ctviewmore2/ctviewmore2.component';
import { Ctviewmore3Component } from './pages/ctviewmore3/ctviewmore3.component';
import { Ctviewmore4Component } from './pages/ctviewmore4/ctviewmore4.component';
import { Ctviewmore5Component } from './pages/ctviewmore5/ctviewmore5.component';
import { Ctviewmore6Component } from './pages/ctviewmore6/ctviewmore6.component';
import { Ctviewmore7Component } from './pages/ctviewmore7/ctviewmore7.component';
import { Ctviewmore8Component } from './pages/ctviewmore8/ctviewmore8.component';
import { Dfviewmore1Component } from './pages/dfviewmore1/dfviewmore1.component';
import { Dfviewmore2Component } from './pages/dfviewmore2/dfviewmore2.component';
import { Dfviewmore3Component } from './pages/dfviewmore3/dfviewmore3.component';
import { Dfviewmore4Component } from './pages/dfviewmore4/dfviewmore4.component';
import { Dfviewmore5Component } from './pages/dfviewmore5/dfviewmore5.component';
import { Dfviewmore6Component } from './pages/dfviewmore6/dfviewmore6.component';
import { Dfviewmore7Component } from './pages/dfviewmore7/dfviewmore7.component';
import { Dfviewmore8Component } from './pages/dfviewmore8/dfviewmore8.component';
import { DogfoodsComponent } from './pages/dog/dogfoods/dogfoods.component';
import { DoggroomingComponent } from './pages/dog/doggrooming/doggrooming.component';
import { DogtoyComponent } from './pages/dog/dogtoy/dogtoy.component';
import { Dtviewmore1Component } from './pages/dtviewmore1/dtviewmore1.component';
import { Dtviewmore2Component } from './pages/dtviewmore2/dtviewmore2.component';
import { Dtviewmore3Component } from './pages/dtviewmore3/dtviewmore3.component';
import { Dtviewmore4Component } from './pages/dtviewmore4/dtviewmore4.component';
import { Dtviewmore5Component } from './pages/dtviewmore5/dtviewmore5.component';
import { Dtviewmore6Component } from './pages/dtviewmore6/dtviewmore6.component';
import { Dtviewmore7Component } from './pages/dtviewmore7/dtviewmore7.component';
import { Dtviewmore8Component } from './pages/dtviewmore8/dtviewmore8.component';
import { Faviewmore1Component } from './pages/faviewmore1/faviewmore1.component';
import { Faviewmore2Component } from './pages/faviewmore2/faviewmore2.component';
import { Faviewmore3Component } from './pages/faviewmore3/faviewmore3.component';
import { Faviewmore4Component } from './pages/faviewmore4/faviewmore4.component';
import { Faviewmore5Component } from './pages/faviewmore5/faviewmore5.component';
import { Faviewmore6Component } from './pages/faviewmore6/faviewmore6.component';
import { Faviewmore7Component } from './pages/faviewmore7/faviewmore7.component';
import { Faviewmore8Component } from './pages/faviewmore8/faviewmore8.component';
import { Ffviewmore1Component } from './pages/ffviewmore1/ffviewmore1.component';
import { Ffviewmore2Component } from './pages/ffviewmore2/ffviewmore2.component';
import { Ffviewmore3Component } from './pages/ffviewmore3/ffviewmore3.component';
import { Ffviewmore4Component } from './pages/ffviewmore4/ffviewmore4.component';
import { Ffviewmore5Component } from './pages/ffviewmore5/ffviewmore5.component';
import { Ffviewmore6Component } from './pages/ffviewmore6/ffviewmore6.component';
import { Ffviewmore7Component } from './pages/ffviewmore7/ffviewmore7.component';
import { Ffviewmore8Component } from './pages/ffviewmore8/ffviewmore8.component';
import { AquariumComponent } from './pages/fish/aquarium/aquarium.component';
import { AquariumsupplyComponent } from './pages/fish/aquariumsupply/aquariumsupply.component';
import { FishfoodComponent } from './pages/fish/fishfood/fishfood.component';
import { FishfoodbuyComponent } from './pages/fish/fishfoodbuy/fishfoodbuy.component';
import { Fpviewmore1Component } from './pages/fpviewmore1/fpviewmore1.component';
import { Fpviewmore2Component } from './pages/fpviewmore2/fpviewmore2.component';
import { Fpviewmore3Component } from './pages/fpviewmore3/fpviewmore3.component';
import { Fpviewmore4Component } from './pages/fpviewmore4/fpviewmore4.component';
import { Fpviewmore5Component } from './pages/fpviewmore5/fpviewmore5.component';
import { Fpviewmore6Component } from './pages/fpviewmore6/fpviewmore6.component';
import { Fpviewmore7Component } from './pages/fpviewmore7/fpviewmore7.component';
import { Fpviewmore8Component } from './pages/fpviewmore8/fpviewmore8.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ReturnpolicyComponent } from './pages/returnpolicy/returnpolicy.component';
import { ShippingpolicyComponent } from './pages/shippingpolicy/shippingpolicy.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
import { ViewmoreComponent } from './pages/viewmore/viewmore.component';
import { Viewmore1Component } from './pages/viewmore1/viewmore1.component';
import { Viewmore2Component } from './pages/viewmore2/viewmore2.component';
import { Viewmore3Component } from './pages/viewmore3/viewmore3.component';
import { Viewmore4Component } from './pages/viewmore4/viewmore4.component';
import { Viewmore5Component } from './pages/viewmore5/viewmore5.component';
import { Viewmore6Component } from './pages/viewmore6/viewmore6.component';
import { Viewmore7Component } from './pages/viewmore7/viewmore7.component';


const routes: Routes = [{
  path:'', component:HomepageComponent
},
{
  path:'homepage',component:HomepageComponent 
},
{
  path:'login',component:LoginComponent 
},
{
  path:'contactus',component:ContactusComponent
},
{
  path:'privacypolicy',component:PrivacypolicyComponent
},
{
  path:'termsofuse',component:TermsofuseComponent
},
{
  path:'returnpolicy',component:ReturnpolicyComponent
},
{
  path:'shippingpolicy',component:ShippingpolicyComponent
},
{
  path:'fishfood',component:FishfoodComponent
},
{
  path:'dogfoods',component:DogfoodsComponent
},
{
  path:'doggrooming',component:DoggroomingComponent
},
{
  path:'fishfoodbuy',component:FishfoodbuyComponent
},
{
  path:'dogtoy',component:DogtoyComponent
},
{
  path:'catfood',component:CatfoodComponent
},
{
  path:'catfoodbuy',component:CatfoodbuyComponent
},
{
  path:'catgrooming',component:CatgroomingComponent
},
{
  path:'cattoy',component:CattoyComponent
},
{
  path:'birdfood',component:BirdfoodComponent
},
  
{
  path:'create',component:CreateComponent
},
  
{
  path:'viewmore',component:ViewmoreComponent
},
{
  path:'viewmore1',component:Viewmore1Component
},
{
  path:'viewmore2',component:Viewmore2Component
},
{
  path:'viewmore3',component:Viewmore3Component
},
{
  path:'viewmore4',component:Viewmore4Component
}
  ,
{
  path:'viewmore5',component:Viewmore5Component
},
{
  path:'viewmore6',component:Viewmore6Component
},
{
  path:'viewmore7',component:Viewmore7Component
},

  {
    path:'birdcage',component:BirdcageComponent
  },
  {
    path:'birdgrooming',component:BirdgroomingComponent
  }
    ,
  {
    path:'aquarium',component:AquariumComponent
  },
  {
    path:'plant',component:AquariumsupplyComponent
  },
  {
    path:'dfviewmore1',component:Dfviewmore1Component
  },
  {
    path:'dfviewmore2',component:Dfviewmore2Component
  },
  {
    path:'dfviewmore3',component:Dfviewmore3Component
  },
  {
    path:'dfviewmore4',component:Dfviewmore4Component
  },
  {
    path:'dfviewmore5',component:Dfviewmore5Component
  },
  {
    path:'dfviewmore6',component:Dfviewmore6Component
  },
  {
    path:'dfviewmore7',component:Dfviewmore7Component
  },
  {
    path:'dfviewmore8',component:Dfviewmore8Component
  },
  {
    path:'dtviewmore1',component:Dtviewmore1Component
  },
  {
    path:'dtviewmore2',component:Dtviewmore2Component
  },
  {
    path:'dtviewmore3',component:Dtviewmore3Component
  },
  {
    path:'dtviewmore4',component:Dtviewmore4Component
  },
  {
    path:'dtviewmore5',component:Dtviewmore5Component
  },
  {
    path:'dtviewmore6',component:Dtviewmore6Component
  },
  {
    path:'dtviewmore7',component:Dtviewmore7Component
  },
  {
    path:'dtviewmore8',component:Dtviewmore8Component
  },
  
  {
    path:'cgviewmore1',component:Cgviewmore1Component
  },
  {
    path:'cgviewmore2',component:Cgviewmore2Component
  },

  {
    path:'cgviewmore3',component:Cgviewmore3Component
  },
  {
    path:'cgviewmore4',component:Cgviewmore4Component
  },
  {
    path:'cgviewmore5',component:Cgviewmore5Component
  },
  {
    path:'cgviewmore6',component:Cgviewmore6Component
  },
  {
    path:'cgviewmore7',component:Cgviewmore7Component
  },
  {
    path:'cgviewmore8',component:Cgviewmore8Component
  },
  {
    path:'cfviewmore1',component:Cfviewmore1Component
  },
  {
    path:'cfviewmore2',component:Cfviewmore2Component
  },
  {
    path:'cfviewmore3',component:Cfviewmore3Component
  },
  {
    path:'cfviewmore4',component:Cfviewmore4Component
  },
  {
    path:'cfviewmore5',component:Cfviewmore5Component
  },
  {
    path:'cfviewmore6',component:Cfviewmore6Component
  },
  {
    path:'cfviewmore7',component:Cfviewmore7Component
  },
  {
    path:'cfviewmore8',component:Cfviewmore8Component
  },
  {
    path:'ctviewmore1',component:Ctviewmore1Component
  },
  {
    path:'ctviewmore2',component:Ctviewmore2Component
  },
  {
    path:'ctviewmore3',component:Ctviewmore3Component
  },
  {
    path:'ctviewmore4',component:Ctviewmore4Component
  },
  {
    path:'ctviewmore5',component:Ctviewmore5Component
  },
  {
    path:'ctviewmore6',component:Ctviewmore6Component
  },
  {
    path:'ctviewmore7',component:Ctviewmore7Component
  },
  {
    path:'ctviewmore8',component:Ctviewmore8Component
  },
  {
    path:'bgviewmore1',component:Bgviewmore1Component
  },
  {
    path:'bgviewmore2',component:Bgviewmore2Component
  },
  {
    path:'bgviewmore3',component:Bgviewmore3Component
  },
  {
    path:'bgviewmore4',component:Bgviewmore4Component
  },
  {
    path:'bgviewmore5',component:Bgviewmore5Component
  },
  {
    path:'bgviewmore6',component:Bgviewmore6Component
  },
  {
    path:'bgviewmore7',component:Bgviewmore7Component
  },
  {
    path:'bgviewmore8',component:Bgviewmore8Component
  },
  {
    path:'bcviewmore1',component:Bcviewmore1Component
  },
  {
    path:'bcviewmore2',component:Bcviewmore2Component
  },
  {
    path:'bcviewmore3',component:Bcviewmore3Component
  },
  {
    path:'bcviewmore4',component:Bcviewmore4Component
  },
  {
    path:'bcviewmore5',component:Bcviewmore5Component
  },
  {
    path:'bcviewmore6',component:Bcviewmore6Component
  },
  {
    path:'bcviewmore7',component:Bcviewmore7Component
  },
  {
    path:'bcviewmore8',component:Bcviewmore8Component
  },
  {
    path:'bfviewmore1',component:Bfviewmore1Component
  },
  {
    path:'bfviewmore2',component:Bfviewmore2Component
  },
  {
    path:'bfviewmore3',component:Bfviewmore3Component
  },
  {
    path:'bfviewmore4',component:Bfviewmore4Component
  },
  {
    path:'bfviewmore5',component:Bfviewmore5Component
  },
  {
    path:'bfviewmore6',component:Bfviewmore6Component
  },
  {
    path:'bfviewmore7',component:Bfviewmore7Component
  },
  {
    path:'bfviewmore8',component:Bfviewmore8Component
  },
  {
    path:'ffviewmore1',component:Ffviewmore1Component
  },
  {
    path:'ffviewmore2',component:Ffviewmore2Component
  },
  {
    path:'ffviewmore3',component:Ffviewmore3Component
  },
  {
    path:'ffviewmore4',component:Ffviewmore4Component
  },
  {
    path:'ffviewmore5',component:Ffviewmore5Component
  },
  {
    path:'ffviewmore6',component:Ffviewmore6Component
  },
  {
    path:'ffviewmore7',component:Ffviewmore7Component
  },
  {
    path:'ffviewmore8',component:Ffviewmore8Component
  },
  {
    path:'faviewmore1',component:Faviewmore1Component
  },
  {
    path:'faviewmore2',component:Faviewmore2Component
  },
  {
    path:'faviewmore3',component:Faviewmore3Component
  },
  {
    path:'faviewmore4',component:Faviewmore4Component
  },
  {
    path:'faviewmore5',component:Faviewmore5Component
  },
  {
    path:'faviewmore6',component:Faviewmore6Component
  },
  {
    path:'faviewmore7',component:Faviewmore7Component
  },
  {
    path:'faviewmore8',component:Faviewmore8Component
  },
  
  {
    path:'fpviewmore1',component:Fpviewmore1Component
  },
  {
    path:'fpviewmore2',component:Fpviewmore2Component
  },
  {
    path:'fpviewmore3',component:Fpviewmore3Component
  },
  {
    path:'fpviewmore4',component:Fpviewmore4Component
  },
  {
    path:'fpviewmore5',component:Fpviewmore5Component
  },
  {
    path:'fpviewmore6',component:Fpviewmore6Component
  },
  {
    path:'fpviewmore7',component:Fpviewmore7Component
  },
  {
    path:'fpviewmore8',component:Fpviewmore8Component
  },
  {
    path:'buynow',component:BuynowComponent
  },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

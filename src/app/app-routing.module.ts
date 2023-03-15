import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { birdfood } from 'src/assets/data/data';

import { Bcviewmore1Component } from './pages/bcviewmore1/bcviewmore1.component';


import { Bfviewmore1Component } from './pages/bfviewmore1/bfviewmore1.component';

import { Bgviewmore1Component } from './pages/bgviewmore1/bgviewmore1.component';

import { BirdfoodComponent } from './pages/bird/birdfood/birdfood.component';
import { BirdgroomingComponent } from './pages/bird/birdgrooming/birdgrooming.component';
import { BirdcageComponent } from './pages/birdcage/birdcage.component';
import { BuynowComponent } from './pages/buynow/buynow.component';
import { CatfoodComponent } from './pages/cat/catfood/catfood.component';

import { CatgroomingComponent } from './pages/cat/catgrooming/catgrooming.component';
import { CattoyComponent } from './pages/cat/cattoy/cattoy.component';
import { Cfviewmore1Component } from './pages/cfviewmore1/cfviewmore1.component';

import { Cgviewmore1Component } from './pages/cgviewmore1/cgviewmore1.component';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { CreateComponent } from './pages/create/create.component';
import { Ctviewmore1Component } from './pages/ctviewmore1/ctviewmore1.component';

import { Dfviewmore1Component } from './pages/dfviewmore1/dfviewmore1.component';

import { DogfoodsComponent } from './pages/dog/dogfoods/dogfoods.component';
import { DoggroomingComponent } from './pages/dog/doggrooming/doggrooming.component';
import { DogtoyComponent } from './pages/dog/dogtoy/dogtoy.component';
import { Dtviewmore1Component } from './pages/dtviewmore1/dtviewmore1.component';

import { Faviewmore1Component } from './pages/faviewmore1/faviewmore1.component';

import { Ffviewmore1Component } from './pages/ffviewmore1/ffviewmore1.component';

import { AquariumComponent } from './pages/fish/aquarium/aquarium.component';
import { AquariumsupplyComponent } from './pages/fish/aquariumsupply/aquariumsupply.component';
import { FishfoodComponent } from './pages/fish/fishfood/fishfood.component';

import { Fpviewmore1Component } from './pages/fpviewmore1/fpviewmore1.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ReturnpolicyComponent } from './pages/returnpolicy/returnpolicy.component';
import { ShippingpolicyComponent } from './pages/shippingpolicy/shippingpolicy.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
import { ViewmoreComponent } from './pages/viewmore/viewmore.component';



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
  path:'dogtoy',component:DogtoyComponent
},
{
  path:'catfood',component:CatfoodComponent
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
    path:'dtviewmore1',component:Dtviewmore1Component
  },

  {
    path:'cgviewmore1',component:Cgviewmore1Component
  },
  
  {
    path:'cfviewmore1',component:Cfviewmore1Component
  },
  
  {
    path:'ctviewmore1',component:Ctviewmore1Component
  },

  {
    path:'bgviewmore1',component:Bgviewmore1Component
  },
  
  {
    path:'bcviewmore1',component:Bcviewmore1Component
  },
  
  {
    path:'bfviewmore1',component:Bfviewmore1Component
  },

  {
    path:'ffviewmore1',component:Ffviewmore1Component
  },
  
  {
    path:'faviewmore1',component:Faviewmore1Component
  },
 
  
  {
    path:'fpviewmore1',component:Fpviewmore1Component
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

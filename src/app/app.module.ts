import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';
import { PaynowComponent } from './pages/paynow/paynow.component';
import { DoggroomingComponent } from './pages/dog/doggrooming/doggrooming.component';
import { DogtoyComponent } from './pages/dog/dogtoy/dogtoy.component';
import { BreedComponent } from './pages/dog/breed/breed.component';
import { CatComponent } from './pages/cat/cat.component';
import { CatgroomingComponent } from './pages/cat/catgrooming/catgrooming.component';
import { CatfoodComponent } from './pages/cat/catfood/catfood.component';
import { CattoyComponent } from './pages/cat/cattoy/cattoy.component';
import { CatbreedComponent } from './pages/cat/catbreed/catbreed.component';
import { BirdComponent } from './pages/bird/bird.component';
import { BirdgroomingComponent } from './pages/bird/birdgrooming/birdgrooming.component';
import { BirdfoodComponent } from './pages/bird/birdfood/birdfood.component';
import { BirdbreedComponent } from './pages/bird/birdbreed/birdbreed.component';
import { FishComponent } from './pages/fish/fish.component';
import { AquariumComponent } from './pages/fish/aquarium/aquarium.component';
import { AquariumsupplyComponent } from './pages/fish/aquariumsupply/aquariumsupply.component';
import { FishfoodComponent } from './pages/fish/fishfood/fishfood.component';
import { FishtypesComponent } from './pages/fish/fishtypes/fishtypes.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { DogfoodsComponent } from './pages/dog/dogfoods/dogfoods.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
import { ReturnpolicyComponent } from './pages/returnpolicy/returnpolicy.component';
import { ShippingpolicyComponent } from './pages/shippingpolicy/shippingpolicy.component';
import { DogfoodbuyComponent } from './pages/dog/dogfoodbuy/dogfoodbuy.component';
import { CatfoodbuyComponent } from './pages/cat/catfoodbuy/catfoodbuy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FishfoodbuyComponent } from './pages/fish/fishfoodbuy/fishfoodbuy.component';
import { CreateComponent } from './pages/create/create.component';
import { catgrooming } from 'src/assets/data/data';
import { ViewmoreComponent } from './pages/viewmore/viewmore.component';
import { BirdcageComponent } from './pages/birdcage/birdcage.component';
import { Viewmore1Component } from './pages/viewmore1/viewmore1.component';
import { Viewmore2Component } from './pages/viewmore2/viewmore2.component';
import { Viewmore3Component } from './pages/viewmore3/viewmore3.component';
import { Viewmore4Component } from './pages/viewmore4/viewmore4.component';
import { Viewmore5Component } from './pages/viewmore5/viewmore5.component';
import { Viewmore6Component } from './pages/viewmore6/viewmore6.component';
import { Viewmore7Component } from './pages/viewmore7/viewmore7.component';
import { Dfviewmore1Component } from './pages/dfviewmore1/dfviewmore1.component';
import { Dfviewmore2Component } from './pages/dfviewmore2/dfviewmore2.component';
import { Dfviewmore3Component } from './pages/dfviewmore3/dfviewmore3.component';
import { Dfviewmore4Component } from './pages/dfviewmore4/dfviewmore4.component';
import { Dfviewmore5Component } from './pages/dfviewmore5/dfviewmore5.component';
import { Dfviewmore6Component } from './pages/dfviewmore6/dfviewmore6.component';
import { Dfviewmore7Component } from './pages/dfviewmore7/dfviewmore7.component';
import { Dfviewmore8Component } from './pages/dfviewmore8/dfviewmore8.component';
import { Dtviewmore1Component } from './pages/dtviewmore1/dtviewmore1.component';
import { Dtviewmore2Component } from './pages/dtviewmore2/dtviewmore2.component';
import { Dtviewmore3Component } from './pages/dtviewmore3/dtviewmore3.component';
import { Dtviewmore4Component } from './pages/dtviewmore4/dtviewmore4.component';
import { Dtviewmore5Component } from './pages/dtviewmore5/dtviewmore5.component';
import { Dtviewmore6Component } from './pages/dtviewmore6/dtviewmore6.component';
import { Dtviewmore7Component } from './pages/dtviewmore7/dtviewmore7.component';
import { Dtviewmore8Component } from './pages/dtviewmore8/dtviewmore8.component';
import { Bgviewmore1Component } from './pages/bgviewmore1/bgviewmore1.component';
import { Bgviewmore2Component } from './pages/bgviewmore2/bgviewmore2.component';
import { Bgviewmore3Component } from './pages/bgviewmore3/bgviewmore3.component';
import { Bgviewmore4Component } from './pages/bgviewmore4/bgviewmore4.component';
import { Bgviewmore5Component } from './pages/bgviewmore5/bgviewmore5.component';
import { Bgviewmore6Component } from './pages/bgviewmore6/bgviewmore6.component';
import { Bgviewmore7Component } from './pages/bgviewmore7/bgviewmore7.component';
import { Bgviewmore8Component } from './pages/bgviewmore8/bgviewmore8.component';
import { Cgviewmore1Component } from './pages/cgviewmore1/cgviewmore1.component';
import { Cgviewmore2Component } from './pages/cgviewmore2/cgviewmore2.component';
import { Cgviewmore3Component } from './pages/cgviewmore3/cgviewmore3.component';
import { Cgviewmore4Component } from './pages/cgviewmore4/cgviewmore4.component';
import { Cgviewmore5Component } from './pages/cgviewmore5/cgviewmore5.component';
import { Cgviewmore6Component } from './pages/cgviewmore6/cgviewmore6.component';
import { Cgviewmore7Component } from './pages/cgviewmore7/cgviewmore7.component';
import { Cgviewmore8Component } from './pages/cgviewmore8/cgviewmore8.component';
import { Cfviewmore1Component } from './pages/cfviewmore1/cfviewmore1.component';
import { Cfviewmore2Component } from './pages/cfviewmore2/cfviewmore2.component';
import { Cfviewmore3Component } from './pages/cfviewmore3/cfviewmore3.component';
import { Cfviewmore4Component } from './pages/cfviewmore4/cfviewmore4.component';
import { Cfviewmore5Component } from './pages/cfviewmore5/cfviewmore5.component';
import { Cfviewmore6Component } from './pages/cfviewmore6/cfviewmore6.component';
import { Cfviewmore7Component } from './pages/cfviewmore7/cfviewmore7.component';
import { Cfviewmore8Component } from './pages/cfviewmore8/cfviewmore8.component';
import { Ctviewmore1Component } from './pages/ctviewmore1/ctviewmore1.component';
import { Ctviewmore2Component } from './pages/ctviewmore2/ctviewmore2.component';
import { Ctviewmore3Component } from './pages/ctviewmore3/ctviewmore3.component';
import { Ctviewmore4Component } from './pages/ctviewmore4/ctviewmore4.component';
import { Ctviewmore5Component } from './pages/ctviewmore5/ctviewmore5.component';
import { Ctviewmore6Component } from './pages/ctviewmore6/ctviewmore6.component';
import { Ctviewmore7Component } from './pages/ctviewmore7/ctviewmore7.component';
import { Ctviewmore8Component } from './pages/ctviewmore8/ctviewmore8.component';
import { Bfviewmore1Component } from './pages/bfviewmore1/bfviewmore1.component';
import { Bfviewmore2Component } from './pages/bfviewmore2/bfviewmore2.component';
import { Bfviewmore3Component } from './pages/bfviewmore3/bfviewmore3.component';
import { Bfviewmore4Component } from './pages/bfviewmore4/bfviewmore4.component';
import { Bfviewmore5Component } from './pages/bfviewmore5/bfviewmore5.component';
import { Bfviewmore6Component } from './pages/bfviewmore6/bfviewmore6.component';
import { Bfviewmore7Component } from './pages/bfviewmore7/bfviewmore7.component';
import { Bfviewmore8Component } from './pages/bfviewmore8/bfviewmore8.component';
import { Bcviewmore1Component } from './pages/bcviewmore1/bcviewmore1.component';
import { Bcviewmore2Component } from './pages/bcviewmore2/bcviewmore2.component';
import { Bcviewmore3Component } from './pages/bcviewmore3/bcviewmore3.component';
import { Bcviewmore4Component } from './pages/bcviewmore4/bcviewmore4.component';
import { Bcviewmore5Component } from './pages/bcviewmore5/bcviewmore5.component';
import { Bcviewmore6Component } from './pages/bcviewmore6/bcviewmore6.component';
import { Bcviewmore7Component } from './pages/bcviewmore7/bcviewmore7.component';
import { Bcviewmore8Component } from './pages/bcviewmore8/bcviewmore8.component';
import { Ffviewmore1Component } from './pages/ffviewmore1/ffviewmore1.component';
import { Ffviewmore2Component } from './pages/ffviewmore2/ffviewmore2.component';
import { Ffviewmore3Component } from './pages/ffviewmore3/ffviewmore3.component';
import { Ffviewmore4Component } from './pages/ffviewmore4/ffviewmore4.component';
import { Ffviewmore5Component } from './pages/ffviewmore5/ffviewmore5.component';
import { Ffviewmore6Component } from './pages/ffviewmore6/ffviewmore6.component';
import { Ffviewmore7Component } from './pages/ffviewmore7/ffviewmore7.component';
import { Ffviewmore8Component } from './pages/ffviewmore8/ffviewmore8.component';

import { Faviewmore1Component } from './pages/faviewmore1/faviewmore1.component';
import { Faviewmore2Component } from './pages/faviewmore2/faviewmore2.component';
import { Faviewmore3Component } from './pages/faviewmore3/faviewmore3.component';
import { Faviewmore4Component } from './pages/faviewmore4/faviewmore4.component';
import { Faviewmore5Component } from './pages/faviewmore5/faviewmore5.component';
import { Faviewmore6Component } from './pages/faviewmore6/faviewmore6.component';
import { Faviewmore7Component } from './pages/faviewmore7/faviewmore7.component';
import { Faviewmore8Component } from './pages/faviewmore8/faviewmore8.component';
import { Fpviewmore1Component } from './pages/fpviewmore1/fpviewmore1.component';
import { Fpviewmore2Component } from './pages/fpviewmore2/fpviewmore2.component';
import { Fpviewmore3Component } from './pages/fpviewmore3/fpviewmore3.component';
import { Fpviewmore4Component } from './pages/fpviewmore4/fpviewmore4.component';
import { Fpviewmore5Component } from './pages/fpviewmore5/fpviewmore5.component';
import { Fpviewmore6Component } from './pages/fpviewmore6/fpviewmore6.component';
import { Fpviewmore7Component } from './pages/fpviewmore7/fpviewmore7.component';
import { Fpviewmore8Component } from './pages/fpviewmore8/fpviewmore8.component';
import { BuynowComponent } from './pages/buynow/buynow.component';







@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdoptionComponent,
    PaynowComponent,
    DoggroomingComponent,
    DogtoyComponent,
    BreedComponent,
    CatComponent,
    CatgroomingComponent,
    CatfoodComponent,
    CattoyComponent,
    CatbreedComponent,
    BirdComponent,
    BirdgroomingComponent,
    BirdfoodComponent,

    BirdbreedComponent,
    FishComponent,
    AquariumComponent,
    AquariumsupplyComponent,
    FishfoodComponent,
    FishtypesComponent,
    LoginComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
  
    DogfoodsComponent,
    PrivacypolicyComponent,
    TermsofuseComponent,
    ReturnpolicyComponent,
    ShippingpolicyComponent,
  
    DogfoodbuyComponent,
    CatfoodbuyComponent,
    FishfoodbuyComponent,
    CreateComponent,
    DogtoyComponent,
    CatfoodComponent,
    CatgroomingComponent,
    CattoyComponent,
    ViewmoreComponent,
    BirdfoodComponent,
    BirdcageComponent,
    AquariumComponent,
    AquariumsupplyComponent,
    Viewmore1Component,
    Viewmore2Component,
    Viewmore3Component,
    Viewmore4Component,
    Viewmore5Component,
    Viewmore6Component,
    Viewmore7Component,
    Dfviewmore1Component,
    Dfviewmore2Component,
    Dfviewmore3Component,
    Dfviewmore4Component,
    Dfviewmore5Component,
    Dfviewmore6Component,
    Dfviewmore7Component,
    Dfviewmore8Component,
    Dtviewmore1Component,
    Dtviewmore2Component,
    Dtviewmore3Component,
    Dtviewmore4Component,
    Dtviewmore5Component,
    Dtviewmore6Component,
    Dtviewmore7Component,
    Dtviewmore8Component,
    Bgviewmore1Component,
    Bgviewmore2Component,
    Bgviewmore3Component,
    Bgviewmore4Component,
    Bgviewmore5Component,
    Bgviewmore6Component,
    Bgviewmore7Component,
    Bgviewmore8Component,
    Cgviewmore1Component,
    Cgviewmore2Component,
    Cgviewmore3Component,
    Cgviewmore4Component,
    Cgviewmore5Component,
    Cgviewmore6Component,
    Cgviewmore7Component,
    Cgviewmore8Component,
    Cfviewmore1Component,
    Cfviewmore2Component,
    Cfviewmore3Component,
    Cfviewmore4Component,
    Cfviewmore5Component,
    Cfviewmore6Component,
    Cfviewmore7Component,
    Cfviewmore8Component,
    Ctviewmore1Component,
    Ctviewmore2Component,
    Ctviewmore3Component,
    Ctviewmore4Component,
    Ctviewmore5Component,
    Ctviewmore6Component,
    Ctviewmore7Component,
    Ctviewmore8Component,
    Bfviewmore1Component,
    Bfviewmore2Component,
    Bfviewmore3Component,
    Bfviewmore4Component,
    Bfviewmore5Component,
    Bfviewmore6Component,
    Bfviewmore7Component,
    Bfviewmore8Component,
    Bcviewmore1Component,
    Bcviewmore2Component,
    Bcviewmore3Component,
    Bcviewmore4Component,
    Bcviewmore5Component,
    Bcviewmore6Component,
    Bcviewmore7Component,
    Bcviewmore8Component,
    Ffviewmore1Component,
    Ffviewmore2Component,
    Ffviewmore3Component,
    Ffviewmore4Component,
    Ffviewmore5Component,
    Ffviewmore6Component,
    Ffviewmore7Component,
    Ffviewmore8Component,
   
    Faviewmore1Component,
    Faviewmore2Component,
    Faviewmore3Component,
    Faviewmore4Component,
    Faviewmore5Component,
    Faviewmore6Component,
    Faviewmore7Component,
    Faviewmore8Component,
    Fpviewmore1Component,
    Fpviewmore2Component,
    Fpviewmore3Component,
    Fpviewmore4Component,
    Fpviewmore5Component,
    Fpviewmore6Component,
    Fpviewmore7Component,
    Fpviewmore8Component,
    BuynowComponent,
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

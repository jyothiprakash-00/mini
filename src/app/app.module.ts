import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { DoggroomingComponent } from './pages/dog/doggrooming/doggrooming.component';
import { DogtoyComponent } from './pages/dog/dogtoy/dogtoy.component';

import { CatComponent } from './pages/cat/cat.component';
import { CatgroomingComponent } from './pages/cat/catgrooming/catgrooming.component';
import { CatfoodComponent } from './pages/cat/catfood/catfood.component';
import { CattoyComponent } from './pages/cat/cattoy/cattoy.component';

import { BirdComponent } from './pages/bird/bird.component';
import { BirdgroomingComponent } from './pages/bird/birdgrooming/birdgrooming.component';
import { BirdfoodComponent } from './pages/bird/birdfood/birdfood.component';

import { FishComponent } from './pages/fish/fish.component';
import { AquariumComponent } from './pages/fish/aquarium/aquarium.component';
import { AquariumsupplyComponent } from './pages/fish/aquariumsupply/aquariumsupply.component';
import { FishfoodComponent } from './pages/fish/fishfood/fishfood.component';

import { LoginComponent } from './pages/login/login.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { DogfoodsComponent } from './pages/dog/dogfoods/dogfoods.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
import { ReturnpolicyComponent } from './pages/returnpolicy/returnpolicy.component';
import { ShippingpolicyComponent } from './pages/shippingpolicy/shippingpolicy.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './pages/create/create.component';
import { catgrooming } from 'src/assets/data/data';
import { ViewmoreComponent } from './pages/viewmore/viewmore.component';
import { BirdcageComponent } from './pages/birdcage/birdcage.component';

import { Dfviewmore1Component } from './pages/dfviewmore1/dfviewmore1.component';

import { Dtviewmore1Component } from './pages/dtviewmore1/dtviewmore1.component';

import { Bgviewmore1Component } from './pages/bgviewmore1/bgviewmore1.component';

import { Cgviewmore1Component } from './pages/cgviewmore1/cgviewmore1.component';

import { Cfviewmore1Component } from './pages/cfviewmore1/cfviewmore1.component';

import { Ctviewmore1Component } from './pages/ctviewmore1/ctviewmore1.component';

import { Bfviewmore1Component } from './pages/bfviewmore1/bfviewmore1.component';

import { Bcviewmore1Component } from './pages/bcviewmore1/bcviewmore1.component';

import { Ffviewmore1Component } from './pages/ffviewmore1/ffviewmore1.component';


import { Faviewmore1Component } from './pages/faviewmore1/faviewmore1.component';

import { Fpviewmore1Component } from './pages/fpviewmore1/fpviewmore1.component';

import { BuynowComponent } from './pages/buynow/buynow.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';







@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  
    DoggroomingComponent,
    DogtoyComponent,
    
    CatComponent,
    CatgroomingComponent,
    CatfoodComponent,
    CattoyComponent,
   
    BirdComponent,
    BirdgroomingComponent,
    BirdfoodComponent,

  
    FishComponent,
    AquariumComponent,
    AquariumsupplyComponent,
    FishfoodComponent,
  
    LoginComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
  
    DogfoodsComponent,
    PrivacypolicyComponent,
    TermsofuseComponent,
    ReturnpolicyComponent,
    ShippingpolicyComponent,
  
    
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
  
    Dfviewmore1Component,
  
    Dtviewmore1Component,
 
    Bgviewmore1Component,
  
    Cgviewmore1Component,
  
    Cfviewmore1Component,
 
    Ctviewmore1Component,
   
    Bfviewmore1Component,
  
    Bcviewmore1Component,
   
    Ffviewmore1Component,

   
    Faviewmore1Component,
  
    Fpviewmore1Component,
  
    BuynowComponent,
    
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        provideRemoteConfig(() => getRemoteConfig()),
        provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

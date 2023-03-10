import { Injectable } from '@angular/core';
import { aquarium, birdcage, birdfood, birdgrooming, catfood, catgrooming, cattoy, dogfoods, doggrooming, dogtoy, fishfood, plant } from 'src/assets/data/data';
import { AquariumsupplyComponent } from './pages/fish/aquariumsupply/aquariumsupply.component';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return dogfoods
}
  getData1()
{
  return doggrooming
}
  getData2()

{
  return dogtoy
}
getData3()

{
  return catfood
}
getData4()

{
  return catgrooming
}
getData5()

{
  return cattoy
}
getData6()

{
  return birdfood
}
getData7()

{
  return birdcage
}
getData8()

{
  return birdgrooming
}
getData9()

{
  return fishfood
}
getData10()

{
  return fishfood
}
getData11()

{
  return aquarium
}
getData12()

{
  return plant
}

}


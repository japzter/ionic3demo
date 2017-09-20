import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Profile } from '../../models/profile';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TestProvider {
  profile = {} as Profile;
  

  constructor() {
    console.log('Hello TestProvider Provider');
  }
  
  setProfile(profile){
    this.profile = profile;
  }
  
  getProfile(){
    return this.profile;
  }

}

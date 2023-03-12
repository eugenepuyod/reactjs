import { CoolPersoned } from "./coolPersoned";

export function promote(){}

// Note:
// you can add default if the main object you want to add in thie module
// remove default if you are going to add more object to this module
//export default class Teachers extends CoolPersoned {

//}

export class Teachers extends CoolPersoned {
    constructor(name, degree){
      // Once you add a custom constructor you must add the super class inside you custom contructor
      super(name);
      this.degree = degree;
    }
    teach(){
      console.log('Teach')
    }
  }
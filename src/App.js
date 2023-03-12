import Navbar from "./Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container newConainer">
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/pricing" element={ <Pricing />} />
          <Route path="/about" element={ <About />} />
        </Routes>
      </div>
      
    </div>
  )
}

// es6 features in javascript //
// https://www.youtube.com/watch?v=NCwa_xi0Uuc&t=1316s

const Person = {
  name: "Eugene",
  walk(){
    console.log(this);
  }
 }

 let walk = Person.walk.bind(Person);
 walk();



 const squre = function(number){
  return number * number
 }

 const squres = number => 
 number * number
 
 
const listing = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
]

const jobs = listing.filter(function(job){ return job.isActive})
const job = listing.filter(job => job.isActive)

console.log(job);



const person = {
  talk(){
    setTimeout(function(){
      console.log("this", this)
    }, 1000);
  }
}

person.talk();



const persons = {
  talk(){
    var self = this
    setTimeout(function(){
      console.log("self", self)
    }, 1000);
  }
}

persons.talk();

// arrow fuction dont rebind 'this' keyword
const personss = {
  talk(){
    setTimeout(() => {
      console.log("this", this)
    }, 1000);
  }
}

personss.talk();



const colors = ['reds', 'green', 'blue'];
const items = colors.map(color => `<li> ${color}</li>`)

console.log(items);


// -- object destructive -- //
const adress = {
  street: 'Apas cebu',
  city: '',
  country: ''
}

// street = adress.street;
// city = adress.city;
// country = adress.country;

// ---- transfor to object destructive  ---- //

const { street:st, city, country } = adress;
console.log(st);

// Spread
// -- Spread operator --- //
// old ways

const first  = [1, 2, 3];
const second = [3, 4, 5, 6];

const combined = first.concat(second);
console.log(combined);

// spread operator
const combine = {...first, ...second, location: "Philippines"};
console.log(combine);

// Class
// -- Use of class  -- //
// once there are duplicate methods use class to fix this issues;


// const personis = {
//   talk(){
//     console.log("Hello")
//   }
// }

// const personis = {
//   talk(){
//     console.log("Hello")
//   }
// }


class Personed {
  constructor(name){
    this.name = name;
  }
  talk(){
    console.log("Hello")
  }
}

const personed = new Personed("Eugene");
console.log(personed.talk());




// Inheritance 
class CoolPersoned {
  constructor(name){
    this.name = name;
  }
  talk(){
    console.log("Hello")
  }
}

class Teachers extends CoolPersoned {
  teach(){
    console.log('Teach')
  }
}

const chelsey = new Teachers("Chelsey");
console.log(chelsey.teach());



export default App;

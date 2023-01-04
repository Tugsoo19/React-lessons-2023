import logo from './logo.svg';
import './App.css';
import { Profiler } from 'react';

//destructurin 
// function Profile ({img, name, age, profession})

// default value 
// function Profile ({img, name="John", age, profession})


function Profile(props) {
  console.log('props', props);

  //destructuring
  const { img, name, age, profession } = props;

  return (
    <div className='profile'>
      {/* <img src={props.img} alt='people' /> */}

      {/* ----------- destructuring */}
      <img src={img} alt='people' />

      <p>name:{props.name} </p>

      {/*------------ destructuring */}
      <p>name:{name} </p>

      <p>age:{props.age} </p>
      <p>gender:{props.gender} </p>
      <p>hobby:{props.hobby} </p>
      <p>profession:{props.profession} </p>

    </div>
  )
}

function App() {

  // spread syntax ---->
  // const user = {
  //   img: "img/person-1.jpg",
  //   name: "John Smith",
  //   age: 20,
  //   profession: "Frontend Developer"
  // }
  return (
    <div className="App">
      <Profile
        img="avatars/steve.jpg"
        name="John Smith"
        age={20}
        profession='IT'
        gender="male"
        hobby="play basketball"

      // using spread syntax ---->
      // {...user}
      />

      <Profile
        img="avatars/molly.png"
        name="Linda Smith"
        age={34}
        profession='Manager'
        gender="female"
        hobby="read book"


      />
    </div>
  );
}

export default App;

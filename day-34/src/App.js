import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'

function App() {

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };


  // function ashiglaj bno

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }


  // style-iig variable-aar ugch bno
  const customStyle = {
    color: "#2ecc71",
    fontSize: "26px",
  };

  const element = <h1 style={customStyle}>Hello, Teacher</h1>
  const secondElement = (<p className="my-text">My Next Text</p>)

  // const element = (
  //   <h1>
  //     Hello, {formatName(user)}!
  //   </h1>
  // )


  //1 root element butsaadag tul  olon variable duudahdaa div element dotor oruulj ugnu!
  return (
    <div>
      {element}
      {secondElement}
      <HelloWorld/>
    </div>

  );
}

export default App;

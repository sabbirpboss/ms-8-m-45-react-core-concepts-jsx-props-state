import './App.css';
//mileston-8-module-45
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>We're going for JavaScript React ! ! !</p>
      <div className="myGrid">
      <MyFirstReactProject></MyFirstReactProject>
      <Number name = 'Kabir'></Number>
      <Number name = 'Singh'></Number>
      <Person name = 'Rubel'></Person>
      </div>
    </div>
  );
}

//variable declearation
const num1 = 222;
const num2 = 222;
const hablu = {name: 'Hablu Vai', job: 'Programming kore bug fix kora', age: 25}

//style adding by declearing variable
const myStyle = {
  color : "red",
  backgroundColor : "aqua",
  padding : "10px 20px",
  display: "inline-block"
}

function MyFirstReactProject() {
  return (
    <div className='text customStyle'>
      <h3 style={myStyle}>1.Text testing with React JSX:</h3>
      <h2>JSX - JavasScript XML</h2>
      <p>XML stands for "Extensible Markup Language"</p>
    </div>
  )
}

function Number(props) {
  return (
    <div className='number customStyle'>
      <h3 style={myStyle}>2.Number calculation with React JSX:</h3>
      <h1>{props.name}</h1>
      <h5>number function repeated</h5>
      <p>Number: {555 + num1 + num2}</p>
    </div>
  )
}

function Person(props) {
  console.log(props);
  return (
    <div className='person customStyle'>
      <h3 style={myStyle}>3.Object text testing with React JSX:</h3>
      <h1>{props.name}</h1>
      <p>Name: {hablu.name}</p>
      <p>Profession: {hablu.job}</p>
      <p>Age: {hablu.age}</p>
    </div>
  )
}
export default App;

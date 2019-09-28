import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';


class Calculator extends Component{
  constructor(props){
    super(props)
      this.state={
        value :0,
        first : 0,
        second : 0
      }
    }

    first(e){
      this.setState({
        first : Number(e.target.value)
      })
    }

    second(e){
      this.setState({
        second :Number(e.target.value)
      })
    }

    Addition(e){
      e.preventDefault();
      this.setState({
        value : (this.state.first + this.state.second)
      })
    }

    Subtraction(e){
      e.preventDefault();
      this.setState({
        value : (this.state.first - this.state.second)
      })
    }

    Multiplication(e){
      e.preventDefault();
      this.setState({
        value : (this.state.first * this.state.second)
      })
    }

    Division(e){
      e.preventDefault();
      this.setState({
        value : (this.state.first / this.state.second)
      })
    }

    Exponent(e){
      e.preventDefault();
      this.setState({
        value : (this.state.first ** this.state.second)
      })
    }

    render(){
      return(
        <center>
        <div>
        <header>Keenans Calculator!</header>
        <input type="number" placeholder="Input Number" onChange={(e) => this.first(e)}></input>
        <input type="number" placeholder="Input Number" onChange={(e) => this.second(e)}></input><br></br><br></br>
        <button onClick={(e) => this.Addition(e)}>Addition</button><br></br><br></br>
        <button onClick ={(e) => this.Subtraction(e)}>Subtraction</button><br></br><br></br>
        <button onClick ={(e) => this.Multiplication(e)}>Multiplication</button><br></br><br></br>
        <button onclick={(e) => this.Division}>Division</button><br></br><br></br>
        <button onClick ={(e) => this.Exponent(e)}>Exponent</button><br></br>
        <h1>Total = {this.state.value}</h1>
  
        </div>
        </center>
      )
  }
}

  


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Calculator;

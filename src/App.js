import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var name = "Dev Kapadia";
  return (
    <div className="App">
      <header className="App-header">
        <title>Dev's Webpage</title>
        <h1 id="Top Page 1"><em><strong>Welcome to My Website!</strong></em></h1>
        <section className="container">
          <div className="one">        
            <p className="blackText"><strong>
              My name is {name}, and I am a '23 at Dartmouth College. I'm a biomedical engineering major who is also interested in math and economics! Some of the other things I enjoy are:
            </strong></p>
          </div>
          <div className="two"><img src={require("./IMG_0366.jpg")} className="rotateImage"/></div>
        </section>
        <ul>
          <li className="redText">
            <section className="containerList">
              <div className="oneList">
                D<br></br>R<br></br>A<br></br>G<br></br>O<br></br>N<br></br>S
              </div>
              <div className="twoList">
                <img src={require("./dragon.jpeg") } className="scale15"/>
              </div>
            </section>
          </li>
        </ul>
        <ul>
          <li>Basketball
            <ul>
              <li>
                Please let me know if you would like to join my intramural basketball team, the Dunking Donuts. We have mandatory practice every day
                except Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
              </li>
            </ul>
          </li>
          <br></br>
          <br></br>
          <li>Batman<img src={require("./batman.gif")} /></li>
        </ul>
        <form action="https://www.linkedin.com/in/dev-kapadia/" target="_blank"> <input type="submit" value="Go to LinkedIn" /> </form>
        <a href="Top Page 1" className="whiteText">Click me to go back to the top of the page!</a>
      </header>
    </div>
  );
}

export default App;

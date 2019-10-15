import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="background">
        <div id="one" class="artbox">
          <div class="date">
            <p>Jan. 30, 2018</p>
          </div>
          <div class="content">
            <div class="pretitle">
              <p>THE SHIFT</p>
            </div>
            <div class="title">
              <h3>Kodak's Dubious Blockchain Gamble</h3>
            </div>
            <div class="bodyoftext">
              <p>What's a 130 year old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.</p>
            </div>
            <div class="author">
              <p>By KEVIN ROSE</p>
            </div>
          </div>
          <div class="photo">
            <img src="hello.png" />
          </div>
        </div>
        <div id="one" class="artbox">
          <div class="date">
            <p>Jan. 30, 2018</p>
          </div>
          <div  class="content">
            <div class="title">
              <h3>Taiwan Retaliates against Chinese Airlines, Hampering Lunar New Year Travel</h3>
            </div>
            <div class="bodyoftext">
              <p>Taiwan, pushing back against encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.</p>
            </div>
            <div class="author">
              <p>By CHRIS HORTON</p>
            </div>
          </div>
          <div class="photo">
            <img src="hello.png" />
          </div>
        </div>
        <div id="one" class="artbox">
          <div class="date">
            <p>Jan. 29, 2018</p>
          </div>
          <div class="content">
            <div class="title">
              <h3>New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon</h3>
            </div>
            <div class="bodyoftext">
              <p>Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.</p>
            </div>
            <div class="author">
              <p>By BRAD PLUMER</p>
            </div>
          </div>
          <div class="photo">
            <img src="hello.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// {require('/Users/JoeCollins/Desktop/nytproject/applabweek6/src/duck.jpg')}
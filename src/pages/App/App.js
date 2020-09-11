import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import TylersThings from '../TylersThings/TylersThings'
import DavidsThings from '../DavidsThings/DavidsThings'

import AndysThings from '../AndysThings/AndysThings';

class App extends Component {
  state = { 
    tylersThings: [
      { 
        name: 'Guitar',
        image: 'https://i.imgur.com/0GxwOYq.png',
        attributes: ['6-strings', 'Made of Wood', 'Sounds real good', 'plunk, plunk plunk']
      },
      {
        name: 'Piano',
        image: 'https://i.imgur.com/yzsBgJs.jpg',
        attributes: ['Keys', 'Ebony and Ivory', 'not a taco', 'why gravy exists']
      },
      {
        name: 'Leg Roller',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'The Brothers Kramazov',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },

    ],
    davidsThings: [
      {
        name: "Xbox",
        image: "https://i.imgur.com/IsqjVmub.jpg",  
        attributes: ["time consuming", "enjoyable", "intensive", "black"],
      },
      {
        name: "giraffe",
        image: "https://i.imgur.com/qIIVePm.jpg",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Alfredo Pasta",
        image: "https://i.imgur.com/MpCOIuyb.jpg",  
        attributes: ["Pasta", "delicious", "vegan", "creamy"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/MpCOIuyb.jpg",  
        attributes: ["p", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    andysThings: [
      {
        name: "guitar",
        image: "https://i.imgur.com/pQeM1yr.jpg",  
        attributes: ["stringy", "mid sounding", "cool", "beautiful"],
      },
      {
        name: "coffee",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
        attributes: ["great flavor", "keeps me up"], 
      },
      { 
        name: "Baseball", 
        image: "data:image/jpeg;base64,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", 
        attributes: ["america's pasttime", "best sport"], 
      },
    ] 
  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/tylersstuff">Tyler's Things</a><br></br>
              <a href="/davidsThingys">Daye's Things</a> 
              <a href="/andysthings">Andy's Things</a>
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/tylersstuff'
          render={() => 
            <TylersThings 
          tylersThings={this.state.tylersThings}
            />
        }/>
        <Route
          exact path='/davidsThingys'
          render={() => 
          <DavidsThings
          davidsThings={this.state.davidsThings}
          />
          }/>
          <Route 
          exact path='/andysthings'
          render={() => 
            <AndysThings
          andysThings={this.state.andysThings}
            />
        }/>
      </>
      
    );
  }
}
 
export default App;


import React, { Component } from 'react';
import './App.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  constructor(props){
    super(props);

        this.render=this.render.bind(this);
    
  }
  render(props) {
    return (
              <div>
                  <div className="row">
                    <div className="col s12">
                      <div className="card  hoverable">
                        <div className="card-content black-text">
                          <span className="card-title"> helllooo!!!</span>
                          <p>I am a very simple card. I am good at containing small bits of information.
                          I am convenient because I require little markup to use effectively.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
    );
  }
}

export default App;

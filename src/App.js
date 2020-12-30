import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import 'tachyons';
import './App.css';
import React, { Component } from 'react';


const app = new Clarifai.App({
  apiKey: 'c33e9ae08e7c4dc48985735a185030a7'
 });

const particleParams = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 800
      },   
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
}

const particleStyle = {
  width: '100%'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onDetectButton = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict('d02b4508df58432fbb84e800597b8959', this.state.input).then(
      function(response) {
        // Do somth with response
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function(err) {
        // There was an error
      }
    );
  }

  render () {
    return (
      <div className="App">
        <Particles className = 'particles'
        params={particleParams}
        style = {particleStyle}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onDetectButton={this.onDetectButton}
        />
        <FaceRecognition imageUrl = {this.state.imageUrl}/>

      </div>
    );
  }
}

export default App;

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
  apiKey: 'API Key'
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
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (box) => {
    const clarifyFace = box.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifyFace.left_col * width,
      topRow: clarifyFace.top_row * height,
      rightCol: width - clarifyFace.right_col * width,
      bottomRow: height - clarifyFace.bottom_row * height
    }
  }

  displayBbox = (bbox) => {
    this.setState({box: bbox})
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onDetectButton = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict('d02b4508df58432fbb84e800597b8959', this.state.input)
      .then(response => this.displayBbox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
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
        <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>

      </div>
    );
  }
}

export default App;

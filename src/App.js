import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Particles className = 'particles'
      params={particleParams}
      style = {particleStyle}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}

    </div>
  );
}

export default App;

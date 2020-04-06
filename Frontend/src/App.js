import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey: 'a73bc7775cef4100aad4dd026136a551'
});

const paricleOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 789
        }
      }
    }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonClick= () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL
      ,this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))  
    .catch(err => console.log(err));
    }
  
  onRouteChange = (route) => {
    if(route === 'home'){
      this.setState({isSignedIn: true});
    }else if(route === 'signout'){
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }
  
  render(){
  return (
    <div className="App">
    <Particles 
      className='particles' 
      params={paricleOptions} 
    />
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
      { this.state.route==='home'
          ?<div>
            <Logo />
          <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
          </div>
          :(
            this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/> 
            : <Register onRouteChange={this.onRouteChange}/> 
           )
        }
      
    </div>
  );
}
}

export default App;

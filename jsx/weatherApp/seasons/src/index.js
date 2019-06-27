import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component
{
  // Any time we want to create a new instnce of the App component we need to call this constructor
  // the same as java thus here we initialize our STATE , it comes with the props 
  // constructor(props)
  // {
  //   // when we define the constructor function we override the constructor function in the parent class 
  //   // which is in this case is the React.Component class so this is why we call the 'super(props)' function
  //   // so we can still have the ability to access all the data and the instances in the parent class.
  //   // this is not like java - calling super() is mandatory and if it wasnt called it shows an error
  //   super(props);

  //   // this object is our state and that is how we initialize it
  //   this.state = { lat: null, errorMessage: '' };
  // }

  // This line of code can do the same as defining the constructor and the super function inside of it 
  state = { lat: null, errorMessage: '' };

  
  // putting the call in the this function is the better practice than putting it in the constructor
  componentDidMount()
  {
      window.navigator.geolocation.getCurrentPosition(
        position => 
          // This is where we update the state using the setState method
          this.setState( { lat: position.coords.latitude } )
          // you never do this tho
          // this.state.lat = position.coords.latitude; -----> this is bad practice this is only used in the initialization of the STATE ONLY!
        ,
        err => this.setState({ errorMessage: err.message })
      );
  }


  render ()
  {
    
      if(this.state.errorMessage && !this.state.lat)
      {
        return <div>Error: {this.state.errorMessage} </div>
      }
      else if(!this.state.errorMessage && this.state.lat)
      {
        //  This way we can take a state and pass it into another component as a prop
        // using the prop system
        return <SeasonDisplay lat={this.state.lat} />;
      }
      else
      {
        return <div>Loading !</div>
      }
  }
} 

ReactDOM.render(<App />,document.querySelector('#root'));

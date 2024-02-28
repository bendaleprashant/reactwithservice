import  {Component} from 'react'

import Blog from './containers/Blog/Blog';

import "./App.css"

class App extends Component {
  render() {
    return(
      <div className='"App'>
        <Blog></Blog>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Test from './components/users/Test';
import axios from 'axios';
import './App.css';
// import Someusers from './components/users/Someusers';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true})

    const res = await axios.get('https://api.github.com/users')
    //console.log(res.data); 

    this.setState({users: res.data, loading: false})
  }
  render() {
    return (
      <div className="App">
        <Navbar />
          <div className='container'>
            <Users loading={this.state.loading} users={this.state.users}/>
            {/* <Someusers name={'Ethan'} age={37}/> */}
          </div>
          <Test />
      </div>
    );
  }
}

export default App;

import React from 'react';
import SearchBar from './SearchBar';
import SearchImg from './SearchImg';
import Nav from './Nav';
import About from './About';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import {useAuth0} from '@auth0/auth0-react';
import CovidTracker from './Components/CovidTracker/CovidTracker';

export default class Viewer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: '',
        results: [],
        isAuthenticate: false
       }

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(e){
        const {value} = e.target
        this.setState({value: value});
      }
    
    handleClick(){
        if(this.state.value !== ''){
        fetch("https://api.unsplash.com/search/photos?query="+ this.state.value, {
            method: 'get',
            headers: {
                'Authorization':'Client-ID jt0cEbFXBM7IIv0IA8QYCV7Y1Tv_r9_zYvDsJnhjcT0'
            }
        })
        .then(data => data.json())
        .then(response => {
                   this.setState({results: response.results})
                });
    }
}

render(){
    //const isLoggedIn = IsUserLoggedIn();
    return (
        <Router >
         <div>
           <Nav/>
           <Switch>
               {/* <Route path="/" exact render= { () => { return (isLoggedIn ? <Redirect to="/home"/> :<Redirect to="/login"/> )}}/> */}
                <Route path="/login" exact component={Login}/>
                <Route path="/home" exact >
                    <SearchBar value={this.state.value} 
                                handleChange={this.handleChange}
                                handleClick={this.handleClick}/>
                    {this.state.results?<SearchImg imgs={this.state.results}/> :"Loading..." }
                </Route>
                <Route path="/about" exact component={About}/>
                <Route path="/covid" exact component={CovidTracker}/>
            </Switch>
        </div>
        </Router>
    );
}

}

// function IsUserLoggedIn(){
//   const isAuthenticated = useAuth0();
//   return isAuthenticated;
// }

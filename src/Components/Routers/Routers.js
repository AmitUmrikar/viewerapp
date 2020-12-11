import React ,{ useState }from 'react';
import SearchBar from '../../SearchBar';
import SearchImg from '../../SearchImg';
import Nav from '../../Nav';
import About from '../../About';
import Login from '../../Login';
import CovidTracker from '../../Components/CovidTracker/CovidTracker';
import Message from '../Common/Message';
import { fetchSearchResult } from '../../Api';
import {useAuth0} from '@auth0/auth0-react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
const Routers = () =>{
   
   // state react hook
   const [value,setValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const {isAuthenticated} = useAuth0();
   const handleChange = (event) =>{
        setValue(event.target.value);
   }

   const handleClick = async () =>{
    if(value !== '')
        setSearchResult(await fetchSearchResult(value));
   }
   
   return (
       <Router>
           <div>
                <Nav/>
                <Switch>
                    <Route path="/" exact render= { () => { return (isAuthenticated ? <Redirect to="/home"/> :<Redirect to="/login"/> )}}/>
                    <Route path="/login" exact component={Login}/>
                    {isAuthenticated ?  
                    (<div>
                    <Route path="/home" exact >
                        <SearchBar value={value} 
                                    handleChange={handleChange}
                                    handleClick={handleClick}/>
                        {searchResult?<SearchImg imgs={searchResult}/> :"Loading..." }
                    </Route>
                    <Route path="/about" exact component={About}/>
                    <Route path="/covid" exact component={CovidTracker}/></div>)
                    :<Message/>}  {/* To do : Create a Message for signUp first */}
                    
                </Switch>
           </div>
       </Router>
   );
}
export default Routers;
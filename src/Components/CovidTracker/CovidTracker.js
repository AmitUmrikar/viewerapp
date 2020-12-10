import React from 'react';
import {Cards, Charts, Picker} from '../index';
import {fetchData} from '../../Api';
import covidImage from '../../Images/image.png';
import '../../index.css';

export default class CovidTracker extends React.Component {
    state = {
       data: {},
       country: ''
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData , country: country});
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    render(){
        const style = {
            marginLeft: '38%'
        };
        const {data,country} = this.state;
        return(
            <div className="container">
                <img className="covidImg" src={covidImage} alt="Covid-19"/>
                <Cards data={data}/>
                <Picker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        );
    };
} 
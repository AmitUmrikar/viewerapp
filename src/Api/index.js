import axios from 'axios';
require('dotenv').config();

const url = 'https://covid19.mathdro.id/api';
const unsplashApi = 'https://api.unsplash.com/search/photos?query=';


export const fetchData = async (country) =>{   // api for multiple endpoint
    try {
        var changeUrl = url;
        if(country){
            changeUrl = `${url}/countries/${country}`
        }
        const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeUrl);
        return  { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries = async() => {
    try {
        const {data:{ countries }} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}

export const fetchSearchResult = async(searchText) => {
    try {
        const {data: {results}} = await axios.get(`${unsplashApi}${searchText}`,{ headers: {'Authorization':`Client-ID ${process.env.REACT_APP_API_CLIENTID}}`}});
        return (results);
    } catch (error) {
        console.log(error);
    }
}

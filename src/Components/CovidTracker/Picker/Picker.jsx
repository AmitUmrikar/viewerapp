import React,{useState,useEffect} from 'react';
import { fetchCountries } from '../../../Api';
import { NativeSelect, FormControl} from '@material-ui/core';
import style from './Picker.module.css';

const Picker = ({handleCountryChange}) =>{
   
   const[countries, setCountries] = useState([]);
   
   useEffect(()=>{
       const fetchCountriesData = async() =>{
           setCountries(await fetchCountries());
       }

       fetchCountriesData();
   },[setCountries]);


   return (
       <div className={style.container}>
       <FormControl>
           <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               {countries.map((country, i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
       </div>
   );
}
export default Picker;
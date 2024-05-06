
import Heading from "../heading";

import peoples from "./peoples.svg";
import bedroom from "./bedroom.svg";
import b from "./b.svg";
import bathroom from "./bathroom.svg";

import ListItem from "../list-item";
import "./index.css";
import Box from "../box";


export default function Details( {title, guests, bedrooms, beds, baths } ) {
    return (
    <Box className="property-details">
     <div className="details">
        <Heading> <span className="details__title"> {title} </span> </Heading>
        
        <ul className="details__list">
        
        <ListItem>      
        <img src={peoples} alt="icon"/> 
        <span> гостей: {guests} </span>                 
        </ListItem>

        <ListItem>
         <img src={bedroom} alt="icon"/>                
         <span>спальних кімнат: {bedrooms} </span>
        </ListItem>

        <ListItem>
         <img src={b} alt="icon"/>    
         <span> ліжок: {beds} </span>
        </ListItem>

        <ListItem>   
        <img src={bathroom} alt="icon"/>   
        <span> ванних кімнат: {baths}</span>
        </ListItem>

        </ul>
    </div> 
    </Box>
    );
}




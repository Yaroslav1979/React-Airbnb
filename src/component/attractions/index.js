// import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";


import "./index.css";


export default function Attractions ( {title, list} ) {
    return (  
        <Box className="attraction__block">      

            <Heading>{title} </Heading>
            
            <div >
               {list.map(({id, name, link}) => (
                    <ListItem className="attraction__list">
                     <a className="attraction" href={link} id={id} >{name}</a>
                    </ListItem>  
                 ))}
            </div>
              
        </Box>        
    )
}




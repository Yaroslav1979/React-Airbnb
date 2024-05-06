
import Heading from "../heading";
import ListItem from "../list-item";
import "../details/index.css";
import Box from "../box";

import poolZone from "./pool.svg";
import gymZone from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parkingLocation from "./parking.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import concierge from "./concierge.svg";
import roomServices from "./room-service.svg";
import child from "./child.svg";


export default function Amenities( {
    title,
    pool,
    gym, 
    freeBreakfast, 
    freeWiFi, 
    parking, 
    petsAllowed, 
    airportShuttle, 
    conciergeService, 
    roomService, 
    childFriendly,
    } ) {
    return (
    <Box className="property-details">
     <div className="details">
        <Heading> <span className="details__title"> {title} </span> </Heading>
        
        <ul className="details__list">

        {pool &&
            <ListItem>          
                <img src={poolZone} alt="icon"/> 
                <span> Басейн </span> 
            </ListItem>
        }

        {gym &&
            <ListItem> 
                <img src={gymZone} alt="icon"/>                
                <span>Спортивний зал {gym} </span>               
            </ListItem>        
        }

        {freeBreakfast &&
            <ListItem>
                <img src={breakfast} alt="icon"/>    
                <span> Безкоштовний сніданок {freeBreakfast} </span>
            </ListItem>
          }

        {freeWiFi &&
            <ListItem>   
                <img src={wifi} alt="icon"/>   
                <span> Безкоштовний Wi-Fi {freeWiFi}</span>
            </ListItem>
        }  

        {parking &&
        <ListItem>   
        <img src={parkingLocation} alt="icon"/>   
        <span> Безкоштовний вуличний паркінг {parking}</span>
        </ListItem>
       }

       {petsAllowed &&
            <ListItem>   
                <img src={pets} alt="icon"/>   
                <span> Дозволено розміщення з домашніми тваринами {petsAllowed}</span>
            </ListItem>
        }

        {airportShuttle &&
            <ListItem>   
                <img src={airport} alt="icon"/>   
                <span> Трансфер до/з аеропорту {airportShuttle}</span>
            </ListItem>
        }

        {conciergeService &&
            <ListItem>   
                <img src={concierge} alt="icon"/>   
                <span> Консьєрж-сервіс {conciergeService}</span>
            </ListItem>
        }

        {roomService &&
            <ListItem>   
                <img src={roomServices} alt="icon"/>   
                <span> Обслуговування номерів {roomService}</span>
            </ListItem>
        }

        {childFriendly &&
            <ListItem>   
                <img src={child} alt="icon"/>   
                <span> Підходить для дітей {childFriendly}</span>
            </ListItem>
        }

        </ul>
    </div> 
    </Box>
    );
}




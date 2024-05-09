
import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";

import "../details/index.css";
import "./index.css";

export default function Add( {
    title,
    rules,
    policy, 
    transport, 
    offers, 
    instructions,
    list,     
    } ) {
    return (
    <Box className="property-details add">
     <div className="details">
        <Heading> <span className="details__title"> {title} </span> </Heading>
        
        <ul className="list-item__block add">
            <ListItem> 
                <div className="list-item__block">                      
                    <div className="list-item__title">{title="Правила дому"}</div>
                   <span> {rules} </span>
                </div>
             </ListItem> 
                         
            <ListItem>
                <div className="list-item__block">
                    <h2 className="list-item__title">{title="Політика скасування"} </h2>                
                    <span>{policy}</span>  
                </div>             
            </ListItem>             
                 
            <ListItem> 
                <div className="list-item__block">
                    <h2 className="list-item__title">{title="Місцевий транспорт"} </h2>                    
                    <span> {transport}</span>
                </div> 
            </ListItem>

            <ListItem>
            <div className="list-item__block">
              <h2 className="list-item__title">Мови хоста</h2>
              <div>
                {list.map((language, index) => (
                  <span key={index}> {language},</span>
                ))}
              </div>
            </div>
          </ListItem>
            
            <ListItem>   
                <div className="list-item__block">
                    <h2 className="list-item__title"> {title="Спеціальні пропозиції"} </h2>    
                    <span> {offers}</span>
                </div> 
            </ListItem>
      
            <ListItem> 
                <div className="list-item__block">
                    <h2 className="list-item__title">{title="Інструкції щодо реєстрації"}</h2>     
                    <span> {instructions}</span>
                </div> 
            </ListItem> 
        </ul>
    </div> 
    </Box>
    );
}





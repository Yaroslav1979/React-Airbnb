
import "./index.css";

import Box from "../box";
import ListItem from "../list-item";


export default function Price({ price, discount, curency, ...rest }) {
    return ( 
       <Box className="price"> 
        <div className="price__header">
            <span 
                className={`price__value ${
                    discount ? "price__value--has-discount" : ""
                }`}
            >
                {curency}
                {price}
            </span>
            {discount && (
                <span className={`price__value`}>
                    {curency}
                    {discount}
                </span>
            )}
        </div>
        <List {...rest} curency={curency}/>
       </Box>
    );
}

function List({ curency, cleaning = 0, service = 0, checkin, checkout}) {
    return (
        <ul className="price__list">

            <ListItem>
                <span>Плата за прибирання:</span>
                <span>
                    {curency}
                    {cleaning}
                </span>
            </ListItem>

            <ListItem>
                <span>Сервісний збір:</span>
                <span>
                    {curency}
                    {service}
                </span>
            </ListItem>

            <ListItem>
                <span>Дата прибуття:</span>
                <span> {checkin} </span>
            </ListItem>

            <ListItem>
                <span>Дата від'їзду:</span>
                <span> {checkout} </span>
            </ListItem>

        </ul>
    );
}

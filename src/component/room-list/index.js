import { Fragment } from "react";
import Heading from "../heading";
import Box from "./box";

import "./index.css";

export default function RoomList({list }) {
    return (
        <div className="room__block">
            <Heading border>Типи номерів </Heading>

            <div className="room-list">
                {list.map(({id, ...rest}) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div> 
    );
}

function Item({ type, pricePerNight: price, curency, capacity }) {
    return (
        <Box className="room">
            <span className="room-title">{type} </span>
            <span className="room-info">Кількість гостей: {capacity} </span>
            <span className="room-price">
                {curency}
                {price}
            </span>
        </Box>
    );
}


import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
// import "../room-list/index.css";

import "./index.css";


export default function Reviews ( {title, list} ) {
    return (        
        <div className="reviews__block">
            <Heading>{title} </Heading>
            <div className="reviews-list">
               {list.map(({id, ...rest}) => (
                   <Fragment key={id}>
                        <Item {...rest} />
                     </Fragment>
                 ))}
            </div>
        </div>         
    )
}


function Item({ guestName, rating, review }) {
    return (
        <Box className="reviews">
            <div>
                <span className="reviews__name">{guestName} </span>
                <span className="reviews__rating-text">Рейтинг: {rating} </span>
            </div>
            <span className="reviews__descr"> {review}</span>
        </Box>
    );
}





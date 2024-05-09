// import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Description from "../description";

export default function Contact({title, src, rate, time, info, phone }) {
    return (
       <div className="contact__block">
        <div className="contact">
            <img src={src} width={80} height={80} alt="me"/> 

            <div className="contact__sub-block">
            
                <Heading> Господар - {title} </Heading>
          
                <div className="title__sub-block">
                    <span className="title__sub-value">{phone} </span>
                    <span className="title__sub-value">{time} </span>
                    <span className="title__sub-value">{rate}% швидкості вдгуку</span>
                </div>
           
            </div>             
        </div>
        <Description>{info}</Description>
        </div>
    );
}







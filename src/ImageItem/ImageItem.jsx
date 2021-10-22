import { useState } from "react";

function ImageItem( props ) {
    //const[name, setName] = useState(  null );

    const[show, setShow] = useState(  false );    

    const toggleImage = () => {
        setShow( !show );
    }

    return (
    <div>
        {
            show? 
            <img src={props.image.location} onClick={ toggleImage }></img>:
            <h1 onClick={ toggleImage }>{props.image.altText}</h1>
        }     
    </div>
    )
}

export default ImageItem;
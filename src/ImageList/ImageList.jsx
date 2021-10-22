import { useState } from "react";
import ImageItem from "../ImageItem/ImageItem";

function ImageList( props ) {
    //const [name, setName] = useState(  null );
    return (
    <div>
        <h1>ImageList</h1>
        <p>{ JSON.stringify( props )}</p>
        {
            props.imagesArray.map( thisImage =>(
                <ImageItem image={ thisImage }/>
            ))
        }
    </div>
    )
}

export default ImageList;
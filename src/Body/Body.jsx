import { useState } from "react";
import ImageList from "../ImageList/ImageList";

function Body() {
    //const[name, setName] = useState(  null );
    const[images, setImages] = useState(  
        [
            //This is the STATIC way to do it!
            // { location: './img/canada_flag.jpg', altText: 'Canada flag' },
            // { location: './img/nb_flag.png', altText: 'New Brunswick flag' },
            // { location: './img/usa_flag.png', altText: 'USA flag' },
            // { location: './img/minnesota_flag.svg', altText: 'Minnesota flag' }
        ] 
    );
    //This is the DYNAMIC way to do it!
    const[currentImage, setCurrentImage] = useState( {
        altText: '',
        location: ''
    } );
    
const addImage=()=>{
    setImages( [
        ...images,
        currentImage
    ])
}

    const updateAltText = ( event )=> {
        setCurrentImage({
            ...currentImage,
            altText: event.target.value
        })
    }

    const updateLocation = ( event )=> {
        setCurrentImage({
            ...currentImage,
            location: event.target.value
        })
    }


    return( 
    <div>
        <h1>Body</h1>
        <p>{ JSON.stringify( currentImage ) }</p>
        <input type="text" placeholder="location" onChange={ ( event )=>updateLocation( event ) }></input>
        <input type="text" placeholder="alt text" onChange={ ( event )=>updateAltText( event ) }></input>
        <button onClick={ addImage }>Add</button>
        <ImageList imagesArray={ images } />
    </div>
    )
}

export default Body;
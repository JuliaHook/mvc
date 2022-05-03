import './picture.css';
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import  axios  from "axios";
import { useState } from "react"


const PicturesComponent = () => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:7208/api/images")
      .then((response) => {
        let images = response.data;
        setImages(images)
      });
    }, [])
        

        return(
            <div className="images">
                <nav>
                    <h1>Bilder</h1>
                    <div>
                    <button className="button" id="create-imagebtn">ladda upp bild</button>
                    </div>
                    
                    {images.map((image) => {
                       return (
                      <ul>
                        <li>
                        <Link
                        to={`/images/${image.title}`}
                        key={image.id}
                        >
                        {image.title}
                        </Link>
                          
                        </li>
                      </ul>
                        
                       )}

                    )};
          </nav>
          <Outlet />
       </div>
        );

                    


    //första Övningen
    // <div className="buttonContainer">
    //    <button Onclick={props.callbackProp}>Bilder</button>
    // </div>
}

export default PicturesComponent;
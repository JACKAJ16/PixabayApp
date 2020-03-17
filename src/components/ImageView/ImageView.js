import React from "react"
import { Link } from "react-router-dom"
import "./ImageView.css"



const ImageView = (props) => {
  
  const { largeImageURL: image, user: owner, tags, pageURL } = props.location.state.image


  return (
    
        <div className="img-container">
          <div>
            <img src={image} alt={tags} className="imageView__img" />
            <div>
              <p>&copy;pixabay</p>
            </div>
          </div>
          <div className="img-info">
            <h4>Owner: <span>{owner}</span></h4>
            <h4><span><a target="_blank" href={pageURL}>Original page</a></span></h4>
              <Link className="home-btn" to="/">Home</Link>
          </div>
        </div>

  )
}

export default ImageView
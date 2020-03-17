import React from "react"

import ImageList from "../ImageList/ImageList"
import ImageSearch from "../ImageSearch/ImageSearch"
import "./App.css"



const API_KEY = "15529781-dacf89feac40bc7ef21d23a77"

class App extends React.Component {
  state = {
    images: [],
    error: null
  }



  //Making search request
  handleMakeRequest = async (e) => {
    e.preventDefault()

    const searchValue = e.target.elements.searchValue.value
    const request = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&per_page=21`)
    const results = await request.json()
  

    !searchValue ? this.setState({ 
        error: "Please provide a value." 
      })
    :
      this.setState({ 
        images: results.hits, error: null 
      })
    
  }

  render() {

    return (

      <div>
        <ImageSearch handleMakeRequest={this.handleMakeRequest} />
        { 
          this.state.error !== null ? 
          <div className="error">{ this.state.error }</div> : 
          <ImageList images={this.state.images} /> 
        }
      </div>

    )

  }
}

export default App
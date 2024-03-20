import React from "react";
import "../Styles/Home.css";
import Wallpaper from "./Wallpaper.js";
import QuickSearch from "./QuickSearch.js";
import axios from "axios";

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      locations : [],
      mealtypes: []
    }
  }
  componentDidMount(){
    sessionStorage.clear();
    axios({
      method:'GET',
      url:'https://zomato-clone-api-1-d34l.onrender.com/locations',
      headers:{'Content-Type':'application/json'}

    })
    .then(response =>{
      this.setState({locations:response.data})
    })
    .catch(err=> console.log(err))
    // mealtypes
    axios({
      method:'GET',
      url:'https://zomato-clone-api-1-d34l.onrender.com/mealtypes',
      headers:{'Content-Type':'application/json'}

    })
    .then(response =>{
      this.setState({mealtypes:response.data})
    })
    .catch(err=> console.log(err))

  }
  render() {
     const { locations }=this.state;
     const { mealtypes }=this.state;

    return (
      <div>
        
        <Wallpaper locationsData = { locations }/>

        <QuickSearch mealtypeData = { mealtypes }/>
      </div>
    );
  }
}

export default Home;

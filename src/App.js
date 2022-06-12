import { useState } from "react";
import axios from 'axios';
import logo from './images/movieposter3.png'
function App(){
  const [text,setText]=useState("")
  const [movie,setMovie]=useState([])
  const [afterSearch,setClass]=useState("")
  const changeText=(event)=>{
      setText(event.target.value)
  }
  const getMovie=(e)=>{
    e.preventDefault();
    setClass('afterSearch');
    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=1a5a45c8`)
    .then((response)=>{
      
      setMovie(response.data.Search)
     
    }).catch(err => {
      alert("Movie Name Not Found");
      window.location.reload(false);
    }) 
  }
  return (
    <>
           
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href={"#"}>Movie App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={""}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"#"}>Link</a>
        </li>   
      </ul>
      <form className="d-flex"  onSubmit={getMovie}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text } onChange={changeText}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="container">
    <div className="row">
          {
            movie.map((value,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="card" style={{width: "100%",height:"auto"}}>
                    <img src={value.Poster} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{value.Year}</h5>
                        <h4 className="card-text">{value.Title} </h4>
                        <h4 className="card-text">{value.Rated} </h4>
                       
                        
                      </div>
                 </div>
          </div>
              )
            })
          }
        
    </div>
     
    <img src={logo} style={{width:"100%"}} alt="name"/>
      
</div>
     
    </>
  )
}
export default App;
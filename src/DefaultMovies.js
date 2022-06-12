import React,{useState,useEffect} from 'react'
import axios from 'axios';

const DefaultMovies = (props) => {
    const [data, setData] = useState([]);
    const apiGet = () => {
      let moviename;
      const movieArr = ["dil", "marvel", "spider man", "friends", "big bang", "sheldon", "american"];
  
      moviename = movieArr[Math.floor(Math.random() * movieArr.length)]
      axios.get(`https://www.omdbapi.com/?s=${moviename}&apikey=1a5a45c8`)
        .then((response) => {
          setData(response.data.Search)
        })
    }
    useEffect(() => {
      apiGet();
    }, [])
  return (
    <div>
        <div className="container">
           <div className="row">
           {
            data.map((value,index)=>{
              return(
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <div className="card" style={{width: "100%",height:"auto"}}>
                    <img src={value.Poster} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{value.Year}</h5>
                        <h4 className="card-text">{value.Title} </h4>
                        
                      </div>
                 </div>
          </div>
              )
            })
          }
          
        </div>
     
    
      
      </div>
     
    </div>
  )
}

export default DefaultMovies
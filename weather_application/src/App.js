import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react"
import Time from './components/Time';


function App() {

  const[city,setCity]=useState("Mumbai");
  const[message,setMessage]=useState("Mumbai");
  const[data,setData]=useState("");
  const[bg,setBg]=useState("");
  const[iframe,setiframe]=useState("");

  useEffect(()=>{
    const fetchAPI=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${message}&units=metric&appid=b4ee8e02f25f1c61072d1862d42bf717`;
      const response=await fetch(url);
      const resJson= await response.json();
      console.log(resJson);
      setData(resJson);

      if(resJson.main.temp<20){
        setBg("dark");
      }
      else{
        setBg("card")
      }

    }
    fetchAPI();

  })

  const handleChange=(event)=>{
    setCity(event.target.value);
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    setMessage(`${city}`);
  }

  return (
    <div className="App">
      <div className={`${bg}`} id='Card'>
      {!data ?(
    <p>data not found</p>
  ):(
    <>
    <div className='container'>
    <div className="card-body">
      <Time></Time>
    <h5 className="card-title" id='cityName'>{message}</h5>
    {/* <h3 className='humidity'> humidity:{data.main.humidity} </h3> */}
    <h1 className='temp'>{data.main.temp}<span> o</span></h1>
    </div>
    <div>
    <i class="fa-solid fa-cloud" id='cloud'></i>
    <h2 className='desc'>{data.weather[0].description} </h2> 
  </div>
  </div>
  </>
  )}
        <div>
          <input type='text' id='city' placeholder='Enter City' onChange={handleChange}></input>
          <a onClick={onSubmit}><i className="fa-solid fa-magnifying-glass"></i></a>
        </div>
  {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
</div>
      
    </div>
    
  );
  
  
  
}

export default App;

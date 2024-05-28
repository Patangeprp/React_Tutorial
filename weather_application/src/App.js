import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react"
import Time from './components/Time';


function App() {

  const[city,setCity]=useState("Pune");
  const[message,setMessage]=useState("Pune");
  const[data,setData]=useState("");
  const[bg,setBg]=useState("");
  const[image,setImage]=useState("");

  useEffect(()=>{
    const fetchAPI=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${message}&units=metric&appid=b4ee8e02f25f1c61072d1862d42bf717`;
      const response=await fetch(url);
      const resJson= await response.json();
      console.log(resJson);
      setData(resJson);

      if(resJson.weather[0].description=="clear" || resJson.weather[0].description === "clear sky"){
        setBg("clear");
        setImage("https://cdn-icons-png.flaticon.com/512/4814/4814268.png")
      }
      else if(resJson.weather[0].description=="broken clouds" || resJson.weather[0].description === "clouds"){
        setBg("clouds");
        setImage("https://cdn-icons-png.flaticon.com/512/1163/1163763.png")
      }else if(resJson.weather[0].description=="rain"){
        setBg("rain");
        setImage("https://cdn-icons-png.flaticon.com/128/1163/1163657.png")
      }else if(resJson.weather[0].description=="light rain" || resJson.weather[0].description === "drizzle"){
        setBg("rain");
        setImage("https://cdn-icons-png.flaticon.com/128/1163/1163657.png")
      }else if(resJson.weather[0].description=="snow"){
        setBg("snow");
        setImage("https://cdn-icons-png.flaticon.com/512/2315/2315309.png")
      }else if(resJson.weather[0].description=="mist" || resJson.weather[0].description === "dust"){
        setBg("smoke");
        setImage("https://cdn-icons-png.flaticon.com/128/13447/13447144.png")
      }else if(resJson.weather[0].description=="fog"){
        setBg("fog");
        setImage("https://cdn-icons-png.flaticon.com/128/495/495651.png")
      }else if(resJson.weather[0].description=="haze"){
        setBg("haze");
        setImage("https://cdn-icons-png.flaticon.com/128/1779/1779807.png")
      }else if(resJson.weather[0].description=="smoke"){
        setBg("smoke");
        setImage("https://cdn-icons-png.flaticon.com/128/13447/13447144.png")
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
      <h1>Welcone To Weather App</h1>
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
    <div className='desc'>
    <img src={image}/>
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

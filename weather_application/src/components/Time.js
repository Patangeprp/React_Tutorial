import React,{useState,useEffect} from "react"

function Time(){
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect only runs once after initial render

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0'); // Pad with leading zero if necessary
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Pad with leading zero if necessary
    return `${hours}:${minutes}`;
  };

  return (
    <div className="time">
      <h1 style={{fontSize:"50px",margin:"-25px"}}>{formatTime(currentDateTime)}</h1>
      <h3 style={{top:"-40px"}}>{currentDateTime.toLocaleDateString()}</h3>
    </div>
  );
}
 export default Time;

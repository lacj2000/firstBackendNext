const Time = () =>{
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();
  return(
    <div>
      Data dinâmica: {dynamicDateString} 
    </div>
  )
}

export default Time;
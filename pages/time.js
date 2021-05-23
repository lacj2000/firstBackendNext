const Time = (props) =>{
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();
  
  const { staticDateString } = props;
  
  return( 
    <div>
      <div>Data dinâmica: {dynamicDateString}</div>
      <div>Data Estática: {staticDateString}</div>
    </div>
  )
}

export function getStaticProps(){
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();
  
  return {
    props: {
      staticDateString,
      revalidate: 2, 

    }
  }
}


export default Time;
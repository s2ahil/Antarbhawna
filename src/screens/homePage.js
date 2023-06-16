import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles/HomePage.css";
// import Image from "./imagePage";


export default function HomePage() {
  const mybuttonstyle = {
    color: "white",
    backgroundColor: "grey",
    padding: "10px 50px 10px 50px",
    fontFamily: "Arial",
    borderRadius: "25px",
    textDecoration: "none",
    fontSize:"2rem"
  };

  const cardStyles = {
     backgroundColor:"#343541",
    margin:"5rem 1rem  0"
  };

  const linktext = {
    textDecoration:"none"
  }


  return (
    <>
      {/* hello */}
      <h1 class="text-center" style={{marginTop:"5rem",fontSize:"4rem"}}>Home Page🏠</h1>

      {/* cards  section*/}
      <div class="card-deck " style={{margin:"0 1rem 0"}}>
        {/* <Link to="/"> */}
          <div class="card" style={cardStyles}>
          
          <Link to="/AnalyzeText" style={linktext}>
            <img class="card-img-top " src="https://www.displayr.com/wp-content/uploads/2018/07/shutterstock_374965561.jpg" height="auto"  alt="Card image cap" style={{width:"15em"}}/>
            <div class="card-body">
              <h5 class="card-title" style={{color:'lightGreen'}}>Analyze text</h5>
              <p class="card-text" style={{fontSize:"2rem",color:"whitesmoke"}}>
                find sentiment from text
              </p>
            </div>
            </Link>
          </div>


        {/* </Link> */}
        {/* <Link to="/"> */}
          <div class="card" style={cardStyles} >
          <Link to="/Image" style={linktext} >
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bfgEXPsElh1vKoz9m0gNIkohOX5pqpKpMw&usqp=CAU" alt="Card image cap" style={{width:"15em"}}/>
            <div class="card-body">
              <h5 class="card-title"  style={{color:'lightGreen'}} >Analyze Image</h5>
              <p class="card-text" style={{fontSize:"2rem",color:"whitesmoke"}}>
              find sentiment from image 
              </p>
            </div>
            </Link>
          </div>
          
        
      </div>

      <div className="text-center mt-4 mb-5">
        <Link to="/" style={mybuttonstyle}>click to go back</Link>
      </div>
    </>
  );
}

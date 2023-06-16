import Home from "./homePage";
import "../styles/firstPage.css";
import image from "../image/sentiment.png";
import { Link } from "react-router-dom";
export default function FirstPage() {
  const mybuttonstyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px 50px 10px 50px",
    fontFamily: "Arial",
    borderRadius: "25px",
    textDecoration: "none"
  };
  
  // const 

  const myimg = {
    width: "400px",
    height: "200px",
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="navbar-header"></div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/Home">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
            </ul>

            <div class="mx-auto"></div>

            <div class="d-flex ms-auto order-5">
              <ul class="navbar-nav">
                
                <li class="nav-item ">
                  <Link class="nav-link" to="/Login">
                    Login
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="head">
        <div class="divi">
          <h1 class="text-center mt-2">AntarBhawana</h1>
          <br></br>
          <h3 class="text-center">~ A Sentimental Analyser</h3>
          <p class="mr-5 ml-5">
            <b>
            Sentiment analysis, also referred to as opinion mining, is an approach to natural language processing (NLP) 
            that identifies the emotional tone behind a body of text. 
            </b>
          </p>
        </div>
      </div>

      <div class="text-center">
        <img src={image} style={myimg} class="ml-5"></img>
      </div>

      <div class="text-center mt-5">
        <Link to="/Login" style={mybuttonstyle}>
          Get Started
        </Link>
      
      </div>
    </div>
  );
}

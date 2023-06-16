import "../../src/styles/login.css";
import { Link } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export default function Login() {
  const mybuttonstyle = {
    color: "white",
    backgroundColor: "grey",
    textDecoration: "None",
    padding: "10px 50px 10px 50px",
    fontFamily: "Arial",
    borderRadius: "25px",
  };
  return (
    <>
      <body>
        <div class=" flex-r container">
          <div class="flex-r login-wrapper">
            <div class="login-text">
              <div class="logo">
                <div class="text-right ">
                  {/* favicon */}
                  <Link to="/">
                  <ClearOutlinedIcon
                    style={{
                      color:"black",
                      height: "2rem",
                      width: "2rem",
                      paddingBottom: "0px",
                    }}
                  ></ClearOutlinedIcon>
                  </Link>
                 
                </div>
              </div>
              <h1>Sign Up</h1>
              <p>It's not long before you embark on this journey! </p>

              <form class="flex-c">
                <div class="input-box">
                  <span class="label">E-mail</span>
                  <div class=" flex-r input">
                    <input type="text" placeholder="name@abc.com" />
                    <i class="fas fa-at"></i>
                  </div>
                </div>

                <div class="input-box">
                  <span class="label">Password</span>
                  <div class="flex-r input">
                    <input type="password" placeholder="8+ (a, A, 1, #)" />
                    <i class="fas fa-lock"></i>
                  </div>
                </div>

                <div class="check">
                  <input type="checkbox" name="" id="" />
                  <span>I've read and agree with T&C</span>
                </div>

                <Link class="btn" type="submit" value="Create an Account" to="/Home">create account</Link>
                
                <span class="extra-line">
                  <span>Already have an account?</span>
                  <a href="#">Sign In</a>

                </span>
              </form>
            </div>
          </div>
        </div>
      </body>
      {/* logged in */}
    </>
  );
}

// npm install @material-ui/icons

// npm install @material-ui/core

import { useState } from "react";

import { Link } from "react-router-dom";

export default function AnalyzingText() {
  const Styling={
    marginTop: "5rem",
    color:"#ECECF1 ",
    fontWeight:"bold"

  }
   
  
  const result={
    marginTop:'5rem',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    // borderStyle:'groove',

    color:'cyan',
    fontSize:'30px'
  }
   



    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

  // working 1

  async function handleSubmit(e) {

    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", text);
  
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      }
      );
  
      const resJson = await res.json();
      if (res.status === 200) {
        setMessage("Text sent and response: " + resJson[0]);
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }



  return (
    <div >
     <style>{`
        body {
          background-color: #343541;
        }
      `}</style>

      <button><Link to="/Home" >Home</Link></button>
    <div className="text-center">
    <h1 style={Styling}>Analyze text</h1>
    </div>

      <div style={Styling} className="text-center">
        <form onSubmit={handleSubmit} >
        <div class="input-group" style={{width:"auto",margin:"0 100px 0"}}>
          <div class="input-group-prepend" >
            <span class="input-group-text" name="predict-text" >Enter Text</span>
          </div>
          <textarea class="form-control" aria-label="With textarea" value={text} onChange={(e)=>setText(e.target.value)} style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} ></textarea>
          
          <button >click to submit</button>
        </div>

        </form>
      </div>

      

      <div style={result} >
      <div>Sentiment Report</div>
      {loading ? <div >Loading...</div> : message ?<div>{message}</div> : null}
      
      </div>

     


    </div>
  );
}

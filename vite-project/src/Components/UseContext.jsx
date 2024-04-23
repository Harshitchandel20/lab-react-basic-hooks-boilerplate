
import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";



function UseContext(){

    const[text,setText] = useState(false)
    const[likes,setLikes] = useState(0)

    useEffect(()=>{
        alert("content Button is Clicked")
    },[text])
    // useContext hook to consume the data pass inside my context
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>

      {/* This is made by Kalvium */}
{text &&
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur omnis qui deleniti doloribus eos illo obcaecati odit adipisci voluptatibus officia, praesentium blanditiis aperiam. Beatae perferendis nam sapiente unde in odio!</p>
}

      <button onClick={()=>setText(!text)}>Content</button>

    <h1>{likes}</h1>

      <button onClick={()=>setLikes((prev)=>prev+1)}>Like</button>
    </div>
  )
}

export default UseContext;

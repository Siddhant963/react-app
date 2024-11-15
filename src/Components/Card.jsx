import React from "react";
const Card = (props) =>{ 
    console.log(props);
    
    return(
       <div id="card">
        <img id="card-img" src="https://imgs.search.brave.com/pkq3B99-Cy6TyeqzsgLyzOhkNxBanAsJW6uy6nssx2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNlFRRThp/dkQwRHpBc3paSzZE/MzBMYS84Yjg2ODk3/MjJkZGZiNmI1Nzc5/ZjczNmY3OTUxNGM3/Yy9fZnJlZS1pbWFn/ZS1yZXNpemVyLXNo/dXR0ZXJzdG9jay5q/cGc_Zml0PWZpbGwm/dz04MDAmaD00NTAm/Zm09d2VicA" alt="" />
        <div id="card-body">
            <h1 id="card-head">{props.name} </h1>
             <p id="card-desc">{props.desc}  </p>
             <button id="card-button">Check More ...</button>


        </div>
       </div>
    )
}
export default  Card;
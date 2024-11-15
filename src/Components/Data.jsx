import { defaults } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
const Data =  function () {
    const [data, setdata] = useState([]);

    const getData = async () =>{ 
      const  responce = await axios.get("https://picsum.photos/v2/list");
        setdata(responce.data)
        console.log(data);
       
     
    }
  return (
    <>
      <button  onClick={ getData} className="bg-amber-500 p-1 m-2 rounded active:scale-150"> Get data</button>
         { 
            data.map((elem)=>{ 

            return <div className="bg-white w-50 h-full p-10 mt-5">
            <img  className="h-full w-full" src={elem.download_url} alt="" />
            <h3></h3>
          </div>
            })
         }
    </>
  );
};
export default Data;

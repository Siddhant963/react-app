// import { useState, useSyncExternalStore } from "react";

// function App() {
// const  [a , seta] = useState(10)
// const changeA = () => {
//   console.log("chal gya ");
//   seta(60)
// }
//   return (
//     <div>
//       <h1>hello {a} </h1>
//       <button onClick={changeA}>change user </button>
//     </div>
//   );
// }
// export default App;

import { useState, useSyncExternalStore } from "react";
import Card from "./Components/Card";
import Data from "./Components/data";

function App() {
  // const [number, setNumber] = useState(0);
  // const increment = () => {  
  //   setNumber( number + 1);
  // }
  // const decrement = () => { 
  //   setNumber( number - 1);
  // }
  const data = [
    {
      "image": "https://example.com/course1.jpg",
      "name": "Python Programming for Beginners",
      "desc": "Learn the fundamentals of Python programming language."
    },
    {
      "image": "https://example.com/course2.jpg",
      "name": "Web Development with React",
      "desc": "Build dynamic web applications using ReactJS."
    },
    {
      "image": "https://example.com/course3.jpg",
      "name": "Data Science with Python",
      "desc": "Explore data analysis and machine learning with Python."
    },
    {
      "image": "https://example.com/course4.jpg",
      "name": "Artificial Intelligence",
      "desc": "Dive into the world of AI and its applications."
    },
    {
      "image": "https://example.com/course5.jpg",
      "name": "Machine Learning with TensorFlow",
      "desc": "Build intelligent machine learning models with TensorFlow."
    },
    {
      "image": "https://example.com/course6.jpg",
      "name": "Digital Marketing",
      "desc": "Learn the strategies and tactics of digital marketing."
    },
    {
      "image": "https://example.com/course7.jpg",
      "name": "UI/UX Design",
      "desc": "Design beautiful and user-friendly interfaces."
    },
    {
      "image": "https://example.com/course8.jpg",
      "name": "Cybersecurity",
      "desc": "Protect systems and networks from cyber threats."
    },
    {
      "image": "https://example.com/course9.jpg",
      "name": "Cloud Computing with AWS",
      "desc": "Leverage the power of AWS for cloud-based solutions."
    },
    {
      "image": "https://example.com/course10.jpg",
      "name": "Blockchain Technology",
      "desc": "Understand the fundamentals of blockchain and cryptocurrency."
    } ,
    {
      "image": "https://example.com/course1.jpg",
      "name": "Python Programming for Beginners",
      "desc": "Learn the fundamentals of Python programming language."
    },
    {
      "image": "https://example.com/course2.jpg",
      "name": "Web Development with React",
      "desc": "Build dynamic web applications using ReactJS."
    },
    {
      "image": "https://example.com/course3.jpg",
      "name": "Data Science with Python",
      "desc": "Explore data analysis and machine learning with Python."
    },
    {
      "image": "https://example.com/course4.jpg",
      "name": "Artificial Intelligence",
      "desc": "Dive into the world of AI and its applications."
    },
    {
      "image": "https://example.com/course5.jpg",
      "name": "Machine Learning with TensorFlow",
      "desc": "Build intelligent machine learning models with TensorFlow."
    },
    {
      "image": "https://example.com/course6.jpg",
      "name": "Digital Marketing",
      "desc": "Learn the strategies and tactics of digital marketing."
    },
    {
      "image": "https://example.com/course7.jpg",
      "name": "UI/UX Design",
      "desc": "Design beautiful and user-friendly interfaces."
    },
    {
      "image": "https://example.com/course8.jpg",
      "name": "Cybersecurity",
      "desc": "Protect systems and networks from cyber threats."
    },
    {
      "image": "https://example.com/course9.jpg",
      "name": "Cloud Computing with AWS",
      "desc": "Leverage the power of AWS for cloud-based solutions."
    },
    {
      "image": "https://example.com/course10.jpg",
      "name": "Blockchain Technology",
      "desc": "Understand the fundamentals of blockchain and cryptocurrency."
    }
  ]
  
  return (
    // <div>
    // <h1 className='text-xl bg-pink-700 text-black'>number is {number}</h1>
    // <button onClick={increment}>increment</button>
    // <button onClick={decrement}>decrement</button>
    // </div>
  //  <div className="flex justify-between flex-wrap">
  //      {
  //        data.map(function(elem ){ 
  //         return <Card   name={elem.name} desc={elem.desc} photo={elem.image}  />
  //        })
  //      }
  //  </div>
  <>
  <Data />
  </>
  );
}
export default App;

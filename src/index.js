

// function MainContent(){
//     return <h1>I'm learning React</h1>
// }


// ReactDOM.render(
//     <div>
//         <MainContent/>
//     </div>,
//     document.querySelector("#root")
// );

// let header1 = document.createElement("h1");
// header1.textContent = "Hatz Johnule";
// header1.className = "HEADER";
// let parent = document.querySelector("#root");
// parent.appendChild(header1);

// const page = (
//     <div>
//         <h1 className="header">Nelson Mandela</h1>
//         <p>Hatz Johnnule</p>
//     </div>
// )


// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// console.log(page);


// const navbar = (
//     <nav>
//         <h1>Moldova's best shop</h1>
//         <ul >
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contacts</li>
//         </ul>
//         <p>Asq questions?!</p>
//     </nav>
// )

//     document.querySelector("#root").append(navbar);   

// let content = (
//     <div>
//     <img src="react.png" width="40px"></img>
//     <h1>Fun Facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was oringinally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//     </div>
// )

// ReactDOM.render(
//     content,
//     document.querySelector("#root")
// )

import ReactDOM from 'react-dom'
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import './index.css'




function Reasons() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Reasons />, document.getElementById("root"));
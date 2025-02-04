// import React, { useContext, useState } from "react";
// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = ({ setShowLogin }) => {

//   const [menu, setMenu] = useState("home");

//   return (
//     <div className="navbar">
//       <Link to="/">
//         <h2 style={{textAlign:"start"}}>Food</h2>
//       </Link>
//       <ul className="navbar-menu">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           Home
//         </Link>
//         <a
//           href="/spoonacular"
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           Spoonacular
//         </a>
//         <a
//           href="/add-recipe"
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           Add Recipe
//         </a>
//         <a
//           href="/contact"
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           Contact Us
//         </a>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo"  style={{textDecoration: "none"}}>

        <h2>SpiceQuest</h2>
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} style={{textDecoration: "none"}}>
          Home
        </Link>
        <Link to="/spoonacular" onClick={() => setMenu("spoonacular")} className={menu === "spoonacular" ? "active" : ""} style={{textDecoration: "none"}}>
          Find Recipe
        </Link>
        <Link to="/add-recipe" onClick={() => setMenu("add-recipe")} className={menu === "add-recipe" ? "active" : ""} style={{textDecoration: "none"}}>
          Add Recipe
        </Link>
        <Link to="/contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""} style={{textDecoration: "none"}}>
          Contact Us
        </Link>
      </ul>
      <div className="navbar-auth">
        <button onClick={() => alert("Login")}>Login</button>
        <button onClick={() => alert("Register")}>Register</button>
      </div>
    </div>
  );
};

export default Navbar;

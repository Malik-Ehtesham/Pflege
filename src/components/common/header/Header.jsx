// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import Head from "./Head"
// import "./header.css"

// const Header = () => {
//   const [click, setClick] = useState(false)
//   const [dropdown, setDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setDropdown(!dropdown);
//   };

//   // Use an effect hook to listen for clicks outside the dropdown to close it
// useEffect(() => {
//   const closeDropdown = (event) => {
//     if (event.path[0].tagName !== 'LI') {
//       setDropdown(false);
//     }
//   };
//   document.body.addEventListener('click', closeDropdown);
//   return () => document.body.removeEventListener('click', closeDropdown);
// }, []);

//   return (
//     <>
//       <Head />
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/about'>Über Uns</Link>
//             </li>
//             <li>
//               <Link to='/courses'>Leistungen</Link>
//             </li>
//             <li onClick={toggleDropdown} className='menu-item'>
//             <Link to='#' className='menu-link'>
//               Pflegeinformation<i className='fa fa-caret-down'></i>
//             </Link>
//             {dropdown && (
//               <div className="dropdown">
// <Link to='/Pflegebe'>Pflegebedürftigkeit</Link>
// <Link to='/Pflegehilf'>Pflegehilhsmittel</Link>
// <Link to='/Pflegesachleistung'>Ambulante Pflegesachleistung </Link>
// <Link to='/Pflegestärkungsgesetze'>Pflegestaerkungsgesetz 1 (psg-1)</Link>
// <Link to='/Pflegestärkungsgesetze'>Pflegestaerkungsgesetz 2 (psg-2)</Link>
// <Link to='/Pflegestärkungsgesetze'>Pflegestaerkungsgesetz 3 (psg-3)</Link>
//               </div>
//             )}
//           </li>

//             <li>
//               <Link to='/Vollmacht'>Vollmachten</Link>
//             </li>
//             <li>
//               <Link to='/team'>Team</Link>
//             </li>
//             <li>
//               <Link to='/karriere'>Karriere</Link>
//             </li>
//             <li>
//               <Link to='/contact'>Kontakt</Link>
//             </li>
//           </ul>
//           <div className='start'>

//           <Link to='/Betreung' className='red-link'>Vereinbaren sie ein Beratungsgespräch</Link>

//           </div>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header

import { useMediaQuery } from "react-responsive";

import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const Header = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? (
    <SideDrawer page={props.page} />
  ) : (
    <Navbar page={props.page} />
  );
};

export default Header;

import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import ForestIcon from "@mui/icons-material/Forest";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import CallIcon from "@mui/icons-material/Call";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";

import Logo from "/images/logo.jpg";

export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      //   className="bg-rose-200 h-screen"
    >
      <List className="flex flex-col items-center">
        <ListItem disablePadding className=" border-b-4 border-rose-500 p-2">
          {/* <p className=" gradient-text text-lg font-bold">Call Up!</p> */}
          <img
            src={Logo}
            className="w-24 h-16 pt-1 rounded-md border-2 border-rose-500  mx-2"
          />{" "}
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className="text-rose-500" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Home
              </p>
              {/* <ListItemText primary="Home" /> */}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/about">
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Über Uns
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/courses">
            <ListItemButton>
              <ListItemIcon>
                <MedicalServicesIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Leistungen
              </p>
            </ListItemButton>
          </Link>
        </ListItem>{" "}
        {/* <li className="  "> */}
        <ListItem className="cursor-pointer">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" flex mt-2 ">
              <ListItemIcon>
                <HealthAndSafetyIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Pflegeinformation
              </p>
            </div>

            {/* <ListItemButton> */}
            <ul
              tabIndex={0}
              className=" p-2 shadow menu dropdown-content z-[1] bg-slate-100 rounded-box w-52"
            >
              <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                <Link to="/Pflegebe" className="w-full">
                  Pflegebedürftigkeit
                </Link>
              </ListItem>{" "}
              <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                <Link to="/Pflegehilf" className="w-full">
                  {" "}
                  Pflegehilhsmittel
                </Link>
              </ListItem>{" "}
              <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                <Link to="/Pflegesachleistung">
                  Ambulante Pflegesachleistung{" "}
                </Link>
              </ListItem>{" "}
              <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                <Link to="/Pflegestärkungsgesetze">
                  Pflegestaerkungsgesetz 1 (psg-1)
                </Link>
              </ListItem>{" "}
              <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                <Link to="/Pflegestärkungsgesetze">
                  Pflegestaerkungsgesetz 2 (psg-2)
                </Link>
              </ListItem>{" "}
              <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                <Link to="/Pflegestärkungsgesetze">
                  Pflegestaerkungsgesetz 2 (psg-2)
                </Link>
              </ListItem>{" "}
            </ul>
          </div>
        </ListItem>
        {/* <ListItem>
          <details className="dropdown ">
            <summary className="flex ">
              <span>
                <ListItemIcon>
                  <HealthAndSafetyIcon className="text-rose-500" />
                </ListItemIcon>
              </span>{" "}
              open or close
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details> */}
        {/* </ListItem> */}
        {/* </li> */}
        {/* </ListItemButton> */}
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/Vollmacht">
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Vollmachten
              </p>
            </ListItemButton>
          </Link>
        </ListItem>{" "}
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/team">
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Team
              </p>
            </ListItemButton>
          </Link>
        </ListItem>{" "}
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/karriere">
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Karriere
              </p>
            </ListItemButton>
          </Link>
        </ListItem>{" "}
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/contact">
            <ListItemButton>
              <ListItemIcon>
                <CallIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Kontakt
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/Betreung">
            <ListItemButton>
              <ListItemIcon>
                <ContactPhoneIcon className="text-rose-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-500 ">
                Vereinbaren sie ein Beratungsgespräch
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      className={`  z-20 mt-8  ${
        props.page === "Home" ? "absolute top-0 " : ""
      }  `}
    >
      <div className=" top-4 right-4">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className=" flex w-screen justify-between border-b-4 border-rose-500 px-1">
              <div className="flex justify-center items-center ">
                {/* <img src={Logo} className="w-16 my-2 h-16 mx-2 rounded-full " /> */}
                <p
                  className={`m-2 text-xl sm:text-3xl font-bold ${
                    props.page === "Home" ? " text-white " : "text-black"
                  }`}
                >
                  PFLEGEDIENST MALIK
                </p>
              </div>
              <Button onClick={toggleDrawer(anchor, true)} className="">
                <MenuIcon fontSize="large" className="text-rose-500 " />
              </Button>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

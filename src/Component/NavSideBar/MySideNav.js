import React, { useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<HomeIcon sx={{ fontSize: 28 }}/>
        },
        {
            path:"/ConfigureProjectGrid",
            name:"Project",
            icon:<PostAddIcon sx={{ fontSize: 28 }} />
        },
        {
            path:"/ResourceGrid",
            name:"Onboarding",
            icon:<GroupAddIcon sx={{ fontSize: 28 }}/>
        },
        {
            path:"/OffboardingPage",
            name:"Offboarding",
            icon:<GroupRemoveIcon sx={{ fontSize: 28 }}/>
        }
        
    ]
    return (
        <div className="dashboard-container">
           <div style={{width: isOpen ? "256px" : "64px"}} className="sidebar">
               <div className="top_section">
                {isOpen ? (
                    <CloseIcon sx={{ fontSize: 30 }} onClick={toggle} />
                ) : (
                    <MenuIcon sx={{ fontSize: 30 }} onClick={toggle} />
                )}
    
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{paddingRight:'5px', backgroundColor: '#dedede', minHeight: '163vh'}}>{children}</main>
        </div>
    );
};
// backgroundColor: '#b5bbbf',
export default Sidebar;
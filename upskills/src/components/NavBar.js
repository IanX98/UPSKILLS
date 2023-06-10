import React from 'react';
import { FaUserAlt, FaPencilRuler }from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdPower } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<CgHome/>
        },
        {
            path:"/perfil",
            name:"Perfil",
            icon:<FaUserAlt/>
        },
        {
            path:"/novoProjeto",
            name:"Novo Projeto",
            icon:<FaPencilRuler/>
        },
        {
            path:"/colaboradores",
            name:"Colaboradores",
            icon: <BsPeopleFill/>
        },
        {
            path:"/chat",
            name:"Conversas",
            icon:<HiOutlineChatBubbleLeftRight/>
        },
        {
            path:"/",
            name:"Sair",
            icon:<IoMdPower/>
        }
    ]
    return (
        <div>
           <div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div>{item.icon}</div>
                           <div>{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
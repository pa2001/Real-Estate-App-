import React from 'react'
import { Router, Route } from 'react-router'
import styled from 'styled-components'
import {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
// import {Bars} from '../images/Bars.svg'
import {FaBars} from 'react-icons/fa'
 const Nav = styled.nav`
  height:60px;
  display:flex;
  justify-content:space-between;
  background:#000;
  padding:1rem 2rem;
  z-index:100;
  position:fixed;
  width:100%;
  background:transparent;
`;
const NavLink=css`
color:#fff;
display:flex;
align-item:center;
padding:0 1rem;
cursor:pointer;
height:100%;
text-decoration:none;
`;
const Logo=styled(Link)`
${NavLink}
font-style:italic;
`;
const Menubar=styled(FaBars)`
display:none;
@media only screen and (max-width:768px) {
    display:block;
}
`;
const NavMenu=styled.div`
display:flex;
align-items:center;
margin-right:~48px;
@media only screen and (max-width:768px){
    display:none;
}
`;
const NavMenuLinks=styled(Link)`
${NavLink}
color:#fff;
`;
const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media only screen and (max-width:768px){
    display:none;
}
`;
const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <Menubar onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to={"/Contact"} primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar

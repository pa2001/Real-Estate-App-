import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
const DropDowncontainer=styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#cd853f;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({isOpen})=>(isOpen?'1':'0')};
top:${({isOpen})=>(isOpen?'0':'-100%')};
`;
const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon=styled(FaTimes)`
color:#000d1a;
`;
const DropdownWrapper=styled.div``;
const DropdownMenu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4,80px);
text-align:center;
margin-bottom:4rem;
@media screen and (max-width:480px)
{
    grid-template-rows:repeat(4,60px);
}
`;
const DropdownLink=styled(Link)`
display:flex;
color:#fff;
align-item:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
text-style:none;
color:#fff;
cursor:pointer;
transition:0.2s ease-in-out;
line-height:6rem;
&:hover
{
    color:#000d1a;
}
`;
const Btnwrap=styled.div`
display:flex;
justify-content:center;
`;
const DropDown = ({isOpen,toggle}) => {
    return (
        <DropDowncontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                {menuData.map((item,index)=>(
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                ))}
                </DropdownMenu>
                <Btnwrap>
                    <Button primary="true" round="true" big="true" to="/content">Contact Us</Button>
                </Btnwrap>
            </DropdownWrapper>
        </DropDowncontainer>
    )
}

export default DropDown

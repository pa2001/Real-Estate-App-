import React from 'react'
import { Button } from '../components/Button'
import styled from 'styled-components'
const Card=styled.div`
box-sizing: content-box;
width: 20%;
border: solid #8CA1A5 2px;
padding: 5px;
margin:50px;
font-size:0.8rem;
background-color:#63B4B8;
@media only screen and (max-width:768px) {
    margin:10px;
    font-size:0.5rem;
}
`;
const Main=styled.div`
background-color:#316B83;
justify-content:center;
align-items:center;
`;
const Cardcontainer=styled.div`
display:flex;
padding:5px;
`;
const Footer=styled.div`
margin-top:400px;
box-sizing:content-box;
width:100%;
background-color:#6D8299;
display:grid;
justify-content:center;
color:#fff;
`;
const Contact = () => {
    return (
        <Main>
            <h1>Contact Us</h1>
            <p>Have any Queries?<br/>We would love to hear from you.</p>
            <Cardcontainer>
            <Card>
                <h1>Sales Related</h1>
                <Button primary="true">Click Here</Button>
            </Card>
            <Card>
                <h1>Buisness Related</h1>
                <Button primary="true">Click Here</Button>
            </Card>
            <Card>
                <h1>Rent Related</h1>
                <Button primary="true">Click Here</Button>
            </Card>
            </Cardcontainer>
            <Footer>
            <p>Always On Your Service</p>
            </Footer>
        </Main>
    )
}

export default Contact
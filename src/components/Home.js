import React, { useEffect } from "react";
import "../stylesheets/Home.css";
import {Button, Container} from "reactstrap";
import { Link } from "react-router-dom";

function Home() {
    useEffect(()=>{document.title="Home - Sales Commission Calculator"},[])
    
    return (
        <div>
            <div className="jumbotron text-center">
                <h2>Welcome to Sales Commission Calculator</h2>
                <p className="p1">This app helps to calculate the commission for each product and total commission for each salesman. All you need to do is upload a file containing the list of salesman and products in Json format and this app will do the rest.</p>
                <p className="p2">With this app you can:
                <ul>
                    <li>Quickly calculate commission for each product and salesman</li>
                    <li> Save time and reduce errors by automating commission calculations</li>
                    <li>Easily track sales performance for each salesman</li>
                </ul>
                </p>
                <p> Get started by clicking the button now!</p>
                <Container>
                    <Button color="primary" >
                        <Link tag="a" to="/add-sales" action className="text-decoration-none" style={{color:"white"}}>Start Using </Link>
                    </Button>
                </Container>
            </div>
        </div>
    );
}

export default Home;
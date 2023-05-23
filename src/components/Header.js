import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Card className="mt-3 mb-3" style={{backgroundColor:'#222831'}}>
                <CardBody>
                    <Link tag='a' to='/' action style={{textDecoration:'none'}}>
                        <h1 className="text-center my-3" style={{color:'white'}}>Sales Commission Calculator</h1>
                    </Link>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;
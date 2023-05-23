import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import '../stylesheets/Menu.css'

const Menu = () => {
    return (
        <div className='wrapper' >
            <ListGroup >
                <Link className="list-group-item list-group-item-action accordion link" tag="a" to="/" action  >
                    Home
                </Link>
                <Link className="list-group-item list-group-item-action accordion link" tag="a" to="/add-sales" action >
                    PostSales
                </Link>
                <Link className="list-group-item list-group-item-action accordion link" tag="a" to="/view-sales" action >
                    GetSales
                </Link>
                <Link className="list-group-item list-group-item-action accordion link" tag="a" to="/about" action >
                    About
                </Link>
            </ListGroup>

        </div>
    )
}

export default Menu;
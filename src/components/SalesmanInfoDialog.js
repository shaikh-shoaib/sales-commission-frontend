import React from "react";
import "../stylesheets/ProductInfoDialog.css"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "reactstrap";

function SalesmanInfoDialog({ salesman, onClose }) {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/salesman-info?name=${salesman.salesmanName}`);
            const data = await response.json();
            setTableData(data);
            console.log(data);
        };
        fetchData();
    }, [salesman]);

    return (
        <div className="product-dialog">
            <div className="product-name">{salesman.salesmanName}</div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Area</th>
                        <th>Total Sales Value</th>
                        <th>Commission</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.area}>
                            <td>{row.area}</td>
                            <td>{row.totalValue}</td>
                            <td>{row.commission}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={onClose}>Close</Button>
            
        </div>
    );
}

export default SalesmanInfoDialog;
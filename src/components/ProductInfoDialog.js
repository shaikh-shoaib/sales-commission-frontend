import React from "react";
import "../stylesheets/ProductInfoDialog.css"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "reactstrap";

function ProductInfoDialog({ product, onClose }) {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/product-info?name=${product.productName}`);
            const data = await response.json();
            setTableData(data);
            console.log(data);
        };
        fetchData();
    }, [product]);

    return (
        <div className="product-dialog">
            <div className="product-name">{product.productName}</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Area</th>
                        <th>Total Quantity</th>
                        <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.area}>
                            <td>{row.area}</td>
                            <td>{row.totalQuantity}</td>
                            <td>{row.totalSales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={onClose}>Close</Button>
        </div>
    );
}

export default ProductInfoDialog;
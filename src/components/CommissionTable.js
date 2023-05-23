import React, { useState } from "react";
import "../stylesheets/Table.css"
import { Button } from 'reactstrap';
import ProductInfoDialog from "./ProductInfoDialog";
import SalesmanInfoDialog from "./SalesmanInfoDialog";

function CommissionTable({ commissions }) {

    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(1);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSalesman, setSelectedSalesman] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    const handleSalesmanClick = (salesman) => {
        setSelectedSalesman(salesman);
    }

    const handleSort = (columnName) => {
        if (sortColumn === columnName) {
            setSortDirection(sortDirection * -1);
        }
        else {
            setSortColumn(columnName);
            setSortDirection(1);
        }
    };

    const sortedData = commissions.slice().sort((a, b) => {
        if (sortColumn) {
            const sortValue = a[sortColumn] > b[sortColumn] ? 1 : -1;
            return sortValue * sortDirection;
        }
        return 0;
    });

    return (
        <div>
            <h3 className="text-center"> Sales Commission Report</h3>
            <div className="commission-table">
                <table className="table table-bordered table-hover">
                    <thead >
                        <tr className="table-secondary">
                            <td className="table-header" onClick={() => handleSort("primaryKey")}> Sr. No.</td>
                            <td className="table-header" onClick={() => handleSort("productName")}> Product Name</td>
                            <td className="table-header" onClick={() => handleSort("productQuantity")}> Product Quantity</td>
                            <td className="table-header" onClick={() => handleSort("salesAmount")}> Sales Amount</td>
                            <td className="table-header" onClick={() => handleSort("salesmanName")}> Salesman Name</td>
                            <td className="table-header" onClick={() => handleSort("salesmanCommission")}> Salesman Commission</td>
                            <td className="table-header" onClick={() => handleSort("salesmanArea")}> Salesman Area</td>
                            <td className="table-header" onClick={() => handleSort("createdDate")}> Date Created</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            sortedData.map(
                                commission =>
                                    <tr key={commission.primaryKey}>
                                        <td> {commission.primaryKey}</td>
                                        <td> <Button className="Button" outline onClick={() => handleProductClick(commission)}> {commission.productName}</Button></td>
                                        <td> {commission.productQuantity}</td>
                                        <td> {commission.salesAmount}</td>
                                        <td> <Button className="Button" outline onClick={() => handleSalesmanClick(commission)}> {commission.salesmanName}</Button> </td>
                                        <td> {commission.salesmanCommission}</td>
                                        <td> {commission.salesmanArea}</td>
                                        <td> {commission.createdDate}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {selectedProduct && (
                <ProductInfoDialog 
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
            {selectedSalesman && (
                <SalesmanInfoDialog 
                    salesman={selectedSalesman}
                    onClose={() => setSelectedSalesman(null)}
                />
            )}
        </div>
    )
}

export default CommissionTable;

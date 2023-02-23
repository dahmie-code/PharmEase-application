import { useState } from "react";
// import { Link } from "react-router-dom";
import {TbArrowsUpDown} from "react-icons/tb"
import {BiChevronsRight} from "react-icons/bi"
import "./Dashboard.css"



const ordersData = [
    { id: 1, product: 'Amplicox', status: 'Pending', batchNumber: 'AX1234', quantity: 5, price: 10.99 },
    { id: 2, product: 'Penicilin', status: 'Shipped', batchNumber: 'PN5678', quantity: 10, price: 7.99 },
    { id: 3, product: 'Antacid', status: 'Delivered', batchNumber: 'AA2468', quantity: 3, price: 15.99 },
    { id: 4, product: 'Medical Gloves', status: 'Cancelled', batchNumber: 'MG1357', quantity: 8, price: 12.99 },
    { id: 5, product: 'Paracetamol', status: 'Pending', batchNumber: 'BP3691', quantity: 2, price: 9.99 },
  ];

const  RecentOrders = () => {
    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const handleSort = (column) => {
    if (sortColumn === column) {
    setSortOrder(sortOrder === 'asc'? 'desc' : 'asc');
    } else {
    setSortColumn(column);
    setSortOrder('asc');
    }
}
    const sortedData = sortColumn ? ordersData.sort((a, b) => {
        if(sortOrder === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;            
        } else {
        return a[sortColumn] < b[sortColumn]? 1 : -1;        
        }
    }) : ordersData;

    return (
        <div className="recent-orders">
            <div style={{display:"flex", justifyContent:"space-between", alignContent:"center"}}>
                <h2>Recent Orders</h2>
            <a href="/orders" style={{color:"#65BC50", textDecoration: "none", fontSize:"15px"}}>View All <BiChevronsRight /></a>
            </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name<TbArrowsUpDown onClick={() => handleSort('product')}/></th>
                        <th scope="col">Batch No <TbArrowsUpDown onClick={() => handleSort('batchNumber')}/></th>
                        <th scope="col">Quantity <TbArrowsUpDown onClick={() => handleSort('quantity')}/></th>
                        <th scope="col">Status <TbArrowsUpDown onClick={() => handleSort('status')}/></th>               
                        <th scope="col">Price <TbArrowsUpDown onClick={() => handleSort('price')}/></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((order) => (
                        <tr key={order.id}>
                            <td>{order.product}</td>
                            <td>{order.batchNumber}</td>
                            <td>{order.quantity}</td>
                            <td>{order.status}</td>
                            <td>{order.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default RecentOrders;
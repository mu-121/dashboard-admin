import React, { useState } from 'react';
import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BsSearch, BsFillBellFill, BsPersonCircle, BsPlus } from 'react-icons/bs'; // Import icons from react-icons/bs
import './TablePage.scss'; // Import SCSS file

const TablePage = () => {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const handleSearchInputChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);

        // Filter data based on search value
        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase()) // Adjusted to search by product name
        );
        setFilteredData(filtered);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleView = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const products = [
        { id: 1, name: 'Lab Earrings', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'InActive' },
        { id: 2, name: 'Apple', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'Active' },
        { id: 3, name: 'Apple', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'Active' },
        { id: 4, name: 'Apple', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'Active' },
          { id:5, name: 'Apple', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'Active' },
          { id: 6, name: 'Apple', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'Active' },
          { id: 7, name: 'Apple', category: 'Jewelry', description: 'This is jewelry', price: '$24', qty: 9, dateCreated: '27/02/2023', status: 'Active' },
    ];

    return (  <div className="dashboard-container">
            <div className="header-container">
                <div className="header">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <div className="search-bar">
                        <BsSearch className="search-icon" />
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <div className="active-icons">
                        <span className="active-text">Active</span>
                        <BsFillBellFill className="notification-icon" /> {/* Notification icon */}
                        <BsPersonCircle className="profile-icon" /> {/* Profile icon */}
                    </div>
                </div>
                <div className="store-title">
                    <h2>My Store</h2>
                    <div className="rounded-rectangle">
                        100
                    </div>
                    <div className="filter-container">
                        <div className="filter-bar">
                            <BsSearch className="filter-icon" /> {/* Filter icon */}
                            <span className="filter-text">Filter</span> {/* Filter text */}
                        </div>
                        <div className="rounded-rectangle add-items">
                            <BsPlus className="plus-icon" /> {/* Plus icon */}
                            <span className="add-items-text">Add more items</span> {/* Text */}
                        </div>
                    </div>
                </div>
            </div>
            <TableContainer className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Product Category</TableCell>
                            <TableCell>Product Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Date Created</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.qty}</TableCell>
                                <TableCell>{product.dateCreated}</TableCell>
                                <TableCell>{product.status}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleView(product)}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal open={open} onClose={handleClose}>
                <div className="modal-content">
                   {selectedProduct && (
                        <div>
                           {selectedProduct.name === 'Lab Earrings' && (
                                <div>
                                    <h3>Craft Description</h3>
                                    <p>Earthenware pots, often called terracotta, absorbs liquids such as water. However, earthenware can be made impervious. Earthenware is glazed or unglazed nonvitreous pottery that has normally been fired below 1,200 °C. Basic earthenware, absorbs liquids such as water. However, earthenware can be made impervious to liquids by coating it with a ceramic glaze, which the great majority of modern domestic earthenware has.</p>
                                    <p>Dimensions (cm): 10 (W) X 10 (L) X 10(H)</p>
                                    <p>Weight in grams: 10g</p>
                                    <p>Colour: Rosegold</p>
                                    <p>Material Used: Clay</p>
                                    
                                </div>
                            )}
                            {selectedProduct.name === 'Apple' && (
                                <div>
                                    <h3>Craft Description</h3>
                                    <p>Earthenware pots, often called terracotta, absorbs liquids such as water. However, earthenware can be made impervious. Earthenware is glazed or unglazed nonvitreous pottery that has normally been fired below 1,200 °C. Basic earthenware, absorbs liquids such as water. However, earthenware can be made impervious to liquids by coating it with a ceramic glaze, which the great majority of modern domestic earthenware has.</p>
                                    <p>Dimensions (cm): 10 (W) X 10 (L) X 10(H)</p>
                                    <p>Weight in grams: 10g</p>
                                    <p>Colour: Rosegold</p>
                                    <p>Material Used: Clay</p>
                                    
                                </div>
                            )}
                        </div>
                    )}
                    <Button onClick={handleClose}>Close</Button>
                </div>
            </Modal>
        </div>
    );
}

export default TablePage;

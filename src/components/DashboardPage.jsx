import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsSearch, BsFillBellFill, BsPersonCircle, BsChatDots } from 'react-icons/bs';
import './dashboard.scss';

const DashboardPage = () => {
    const [isActive, setIsActive] = useState(true);
    const [rating, setRating] = useState(0);

    const data = [
        { day: 'Monday', revenue: 2000 },
        { day: 'Tuesday', revenue: 3000 },
        { day: 'Wednesday', revenue: 4000 },
        { day: 'Thursday', revenue: 3500 },
        { day: 'Friday', revenue: 5000 },
        { day: 'Saturday', revenue: 6000 },
        { day: 'Sunday', revenue: 7000 },
    ];

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    return (
        <div className="dashboard-container">
            <div className="header-container">
                <div className="header">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <div className="search-bar">
                        <input className="search-input" type="text" placeholder="Search..." />
                        <BsSearch className="search-icon" />
                    </div>
                    <div className="toggle-switch">
                        <Switch checked={isActive} onChange={handleToggle} />
                        <span className="active-text">{isActive ? 'Active' : 'Inactive'}</span>
                    </div>
                    <div className="active-icons">
                        <BsChatDots className="message-icon" />
                        <BsFillBellFill className="notification-icon" />
                        <BsPersonCircle className="profile-icon" />
                    </div>
                </div>
                <div>
                    <Typography variant="h6" component="h2" className="text-lg font-semibold mb-2">
                        Hello, Chidinma 
                    </Typography>
                    <Typography variant="h6" component="h2" className="text-lg font-semibold mb-2">
                        Saturday, 22 January 2022
                    </Typography>
                </div>
            </div>
            <div className="flex-container">
                <Card className="bg-white rounded-lg shadow-md card">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Total Visits
                        </Typography>
                        <Typography color="textSecondary">
                            1000
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="bg-white rounded-lg shadow-md card">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Total Revenue
                        </Typography>
                        <Typography color="textSecondary">
                            $50,000
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="bg-white rounded-lg shadow-md card">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Total Views
                        </Typography>
                        <Typography color="textSecondary">
                            5000
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="bg-white rounded-lg shadow-md card">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Total Orders
                        </Typography>
                        <Typography color="textSecondary">
                            200
                        </Typography>
                    </CardContent>
                </Card>
                {/* New Card for Ratings */}
                <Card className="bg-white rounded-lg shadow-md card">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Ratings
                        </Typography>
                        <div className="rating-container">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} onClick={() => setRating(index + 1)} style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}>★</span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md col-span-3">
                <h2 className="text-lg font-semibold mb-2">Revenue</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default DashboardPage;

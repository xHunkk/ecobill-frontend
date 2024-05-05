import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import stcImage from '../assets/STC_2-400x400.png'

const InvoiceComponent = () => {

    const [statistics, setStatistics] = useState([]);
    const phoneNumber = '966553604747';
    const numberOfMonths = 3;

    useEffect(() => {
        const apiUrl = `http://localhost:8383/invoices/statistics?phone_number=${phoneNumber}&months=${numberOfMonths}`;

        axios.get(apiUrl)
            .then(response => {
                setStatistics(response.data);
            })
            .catch(error => {
                console.error('Error fetching statistics:', error);
            });
    }, []);

    console.log(statistics)


    return (
        <div>
            <div>
                {statistics ? (
                    <div>
                        <p>Total Spent This Month</p>
                        <h1>{statistics.thisMonthSpendings}</h1>
                        <p>{statistics.monthlySpendingsDifference}% Compared to the last month</p>

                    </div>
                ) : (
                    <p>Loading statistics...</p>
                )}
            </div>
            <div>
                {statistics ? (
                    <div>
                        <p>Average Spent For Last 3 Months</p>
                        <h1>{statistics.averageSpent}</h1>
                        <p>Any text can be written here</p>

                    </div>
                ) : (
                    <p>Loading statistics...</p>
                )}
            </div>
            <div>
                {statistics ? (
                    <div>
                        <p>Last Month Spendings</p>
                        <h1>{statistics.lastMonthSpendings}</h1>
                        <p>Any text can be written here</p>

                    </div>
                ) : (
                    <p>Loading statistics...</p>
                )}
            </div>
            <div>
                {statistics ? (
                    <div>
                        <p>Your Favorite Organization</p>
                        <h1>{statistics.mostVisitedCompany}</h1>
                        <img src={statistics.invoice.epr.logo} alt="EPR Logo" className="ml-2" />

                        <p>Any text can be written here</p>

                    </div>
                ) : (
                    <p>Loading statistics...</p>
                )}
            </div>


        </div>

    )
}

export default InvoiceComponent
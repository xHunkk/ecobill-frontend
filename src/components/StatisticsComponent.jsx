import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StatisticsComponent = () => {
  const [statistics, setStatistics] = useState([]);
  const phoneNumber = "966553604747";
  const numberOfMonths = 3;

  useEffect(() => {
    const apiUrl = `http://localhost:8383/invoices/statistics?phone_number=${phoneNumber}&months=${numberOfMonths}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setStatistics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching statistics:", error);
      });
  }, []);

  console.log(statistics);

  return (
    <div className="Stat">
      {statistics ? (
        <div style={styles.frame}>
          <p style={styles.text}>Total Spent This Month</p>
          <h1 style={styles.bigText}>{statistics.thisMonthSpendings}</h1>
          <p style={styles.smallText}>
            {statistics.monthlySpendingsDifference}% Compared to the last month
          </p>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
      {statistics ? (
        <div style={styles.frame}>
          <p style={styles.text}>Average Spent For Last 3 Months</p>
          <h1 style={styles.bigText}>{statistics.averageSpent}</h1>
          <p style={styles.smallText}>Any text can be written here</p>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
      <div style={styles.thirdFrame}>
        {statistics ? (
          <div style={styles.smallFrame}>
            <p style={styles.text}>Last Month Spendings</p>
            <p style={styles.smallNum}>{statistics.lastMonthSpendings}</p>

            <p style={styles.smallText}>Any text can be written here</p>
          </div>
        ) : (
          <p>Loading statistics...</p>
        )}
        {statistics ? (
          <div style={styles.smallFrame}>
            <p style={styles.text}>Your Favorite Organization</p>
            <div style={styles.imgFrame}>
              <img
                src={statistics.invoice.epr.logo}
                alt="EPR Logo"
                style={styles.image}
              />
              <p style={styles.text}>{statistics.mostVisitedCompany}</p>
            </div>
            <p style={styles.smallText}>Any text can be written here</p>
          </div>
        ) : (
          <p>Loading statistics...</p>
        )}
      </div>
    </div>
  );
};

export default StatisticsComponent;

// Styles
const styles = {
  frame: {
    width: "100%",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
    backgroundColor: "#FBFBFB",
    padding: "24px",
    marginBottom: "1rem",
  },
  smallFrame: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBFBFB",
    borderRadius: "12px",
    padding: "1.5rem",
  },
  text: {
    width: "100%",
    fontSize: "20px",
    color: "#131515",
  },
  bigText: {
    width: "100%",
    fontSize: "64px",
    fontFamily: "PoppinsSemiBold",
    color: "#131515",
  },
  smallText: {
    width: "100%",
    fontSize: "20px",
    color: "rgba(19, 21, 21, 0.5)",
  },
  thirdFrame: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "16px",
    marginBottom: "1rem",
  },
  imgFrame: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "8px",
  },
  image: {
    width: "36px",
    height: "36px",
    borderRadius: "6px",
  },
  smallNum: {
    width: "100%",
    color: "#131515",
    fontFamily: "PoppinsSemiBold",
    fontSize: "30px",
  },
};

import React, { useState } from "react";

// Popup component
function AnalyticsPopup() {
  const [organization, setOrganization] = useState("");
  const [afterDate, setAfterDate] = useState("");
  const [beforeDate, setBeforeDate] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  return (
    <div style={styles.popup}>
      <div style={styles.header}>
        <h2 style={styles.title}>Analytics</h2>
        <p style={styles.subtitle}>
          Please enter some values ​​about what to be shown.
        </p>
      </div>
      <div style={styles.inputs}>
        <div style={styles.inputFrame}>
          <label style={styles.label}>Organization</label>
          <input
            style={styles.input}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Type an organization name"
          />
        </div>
        <div style={styles.inputFrame}>
          <label style={styles.label}>Date</label>
          <div style={styles.dateInputs}>
            <input
              style={styles.input}
              value={afterDate}
              onChange={(e) => setAfterDate(e.target.value)}
              placeholder="After"
            />
            <input
              style={styles.input}
              value={beforeDate}
              onChange={(e) => setBeforeDate(e.target.value)}
              placeholder="Before"
            />
          </div>
        </div>
        <div style={styles.inputFrame}>
          <label style={styles.label}>Amount</label>
          <div style={styles.dateInputs}>
            <input
              style={styles.input}
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
              placeholder="Min"
            />
            <input
              style={styles.input}
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
              placeholder="Max"
            />
          </div>
        </div>
        <button style={styles.button}>Apply</button>
      </div>
    </div>
  );
}
export default AnalyticsPopup;

// Styles
const styles = {
  popup: {
    width: "auto",
    height: "auto",
    borderRadius: "11px",
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  header: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "28px",
    fontFamily: "PoppinsSemiBold",
    color: "#131515",
  },
  subtitle: {
    fontSize: "16px",
    color: "rgba(19, 21, 21, 0.5)",
  },
  inputs: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  },
  inputFrame: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "20px",
  },
  input: {
    width: "100%",
    height: "45px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid rgba(19, 21, 21, 0.25)",
  },
  dateInputs: {
    display: "flex",
    gap: "36px",
  },
  button: {
    width: "100%",
    height: "45px",
    borderRadius: "9px",
    backgroundColor: "#34846F",
    color: "white",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

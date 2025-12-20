# Transaction Anomaly Detection System 🚨

An end-to-end Machine Learning web application that detects abnormal financial transactions using unsupervised learning and serves predictions in real time via a Flask-based web interface.

---

## 🔍 Problem Statement
Financial systems face challenges in identifying suspicious transactions due to:
- Rare fraud occurrences
- Dynamic user behavior
- High transaction volumes

This project uses **Isolation Forest** to learn normal transaction patterns and flag anomalies based on deviation.

---

## 🧠 Solution Overview
- Generate and analyze transaction data
- Engineer behavioral features
- Train an anomaly detection model
- Deploy the model as a web application
- Provide real-time predictions via UI

---

## ⚙️ Tech Stack
- **Machine Learning:** Scikit-learn (Isolation Forest)
- **Backend:** Flask
- **Frontend:** HTML, CSS, JavaScript
- **Data Analysis:** Pandas, NumPy, Matplotlib
- **Deployment:** Local Flask Server
- **Notebook:** Google Colab

---

## 📁 Project Structure
transaction-anomaly-detection/
│
├── app.py
├── requirements.txt
├── isolation_forest.pkl
├── scaler.pkl
│
├── notebooks/
│ └── Transaction_Anomaly_Detection.ipynb
│
├── templates/
│ └── index.html
│
└── static/
├── style.css
└── script.js


---

## 📊 Features Used
- Transaction Amount
- Transaction Hour
- Transaction Count
- Location Distance

---

## 🚀 How to Run the Project

### 1️⃣ Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate   # Windows

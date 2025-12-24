function checkTransaction() {
    const data = {
        transaction_amount: Number(document.getElementById("amount").value),
        transaction_hour: Number(document.getElementById("hour").value),
        transaction_count: Number(document.getElementById("count").value),
        location_distance: Number(document.getElementById("distance").value)
    };

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        const resultText = document.getElementById("result");
        const descText = document.getElementById("description");

        if (result.prediction === "Anomaly") {
            resultText.innerText = "Result: Anomalous Transaction 🚨";
            resultText.style.color = "red";
            descText.innerText =
                "This transaction significantly deviates from normal behavior based on amount, time, frequency, or location. It may require further verification.";
        } else {
            resultText.innerText = "Result: Normal Transaction ✅";
            resultText.style.color = "lightgreen";
            descText.innerText =
                "This transaction follows typical user behavior patterns and does not indicate suspicious activity.";
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

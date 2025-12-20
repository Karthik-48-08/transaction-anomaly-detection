function checkTransaction() {
    console.log("Button clicked");

    const data = {
        transaction_amount: Number(document.getElementById("amount").value),
        transaction_hour: Number(document.getElementById("hour").value),
        transaction_count: Number(document.getElementById("count").value),
        location_distance: Number(document.getElementById("distance").value)
    };

    console.log("Sending data:", data);

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log("Response received");
        return response.json();
    })
    .then(result => {
        console.log("Result:", result);

        const resultDiv = document.getElementById("result");
        resultDiv.innerText = "Result: " + result.prediction;

        resultDiv.style.color =
            result.prediction === "Anomaly" ? "red" : "lightgreen";
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

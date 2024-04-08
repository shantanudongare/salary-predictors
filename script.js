// Sample data - years of experience and corresponding salaries
const yearsOfExperience = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const salaries = [30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000];

// Predict salary based on years of experience
function predictSalary() {
    const yearsInput = document.getElementById('years');
    const years = parseFloat(yearsInput.value);

    if (!isNaN(years)) {
        const predictedSalary = linearRegression(years);
        const predictionElement = document.getElementById('prediction');
        predictionElement.innerText = `Predicted salary for ${years} years of experience: $${predictedSalary.toFixed(2)}`;
    } else {
        alert('Please enter a valid number for years of experience.');
    }
}
// Predict salary based on years of experience
function predictSalary() {
    const yearsInput = document.getElementById('years');
    const years = parseFloat(yearsInput.value);

    if (!isNaN(years)) {
        const predictedSalaryUSD = linearRegression(years);
        const predictedSalaryINR = predictedSalaryUSD * 74.28; // Assuming the exchange rate is 1 USD = 74.28 INR
        const predictionElement = document.getElementById('prediction');
        predictionElement.innerText = `Predicted salary for ${years} years of experience: ₹${predictedSalaryINR.toFixed(2)}`;
    } else {
        alert('Please enter a valid number for years of experience.');
    }
}


// Perform linear regression
function linearRegression(years) {
    const n = yearsOfExperience.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;

    for (let i = 0; i < n; i++) {
        sumX += yearsOfExperience[i];
        sumY += salaries[i];
        sumXY += yearsOfExperience[i] * salaries[i];
        sumXX += yearsOfExperience[i] * yearsOfExperience[i];
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return slope * years + intercept;
}

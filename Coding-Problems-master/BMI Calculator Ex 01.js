function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Determine the health classification based on BMI
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25  ||  bmi < 29.9) {
        return "Overweight";
    } else if (bmi > 29.9){
        return "Obese";
    }
}

// Example of using the function:
const weightInKg = 65; // Replace with actual weight in kilograms
const heightInMeters = 1.75; // Replace with actual height in meters

const classification = calculateBMI(weightInKg, heightInMeters);
console.log(`Based on your BMI, you are classified as: ${classification}`);

function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }

    const validDays = days.filter(day => day.calories !== undefined);

    if (validDays.length === 0) {
        return 0;
    }

    const totalCalories = validDays.reduce((sum, day) => {
        let calories = day.calories;

        if (day.intensity === 'high') {
            calories *= 1.1; 
        } else if (day.intensity === 'low') {
            calories *= 0.9; 
        }
        
        return sum + calories;
    }, 0);

    const averageCalories = totalCalories / validDays.length;

    if (averageCalories > 3000) {
        console.log("The athlete consumes enough calories.");
    } else if (averageCalories < 2000) {
        console.log("The athlete does not consume enough calories.");
    }

    return averageCalories;
}

let weeklyCalories = [
    { day: "monday", calories: 3010, intensity: 'medium' },
    { day: "tuesday", calories: 3200, intensity: 'high' },
    { day: "wednesday", calories: 3120, intensity: 'low' },
    { day: "thursday", calories: 2900, intensity: 'medium' },
    { day: "friday", calories: 3450, intensity: 'high' },
    { day: "saturday", calories: 3280, intensity: 'low' },
    { day: "sunday", calories: 3300, intensity: 'medium' }
];
console.log(calcAverageCalories(weeklyCalories)); // 3180, виведе "The athlete consumes enough calories."

weeklyCalories = [
    { day: "monday", calories: 2040, intensity: 'low' },
    { day: "tuesday", calories: 2270, intensity: 'medium' },
    { day: "wednesday", calories: 2420, intensity: 'high' },
    { day: "thursday", calories: 1900, intensity: 'medium' },
    { day: "friday", calories: 2370, intensity: 'low' },
    { day: "saturday", calories: 2280, intensity: 'medium' },
    { day: "sunday", calories: 2610, intensity: 'medium' }
];
console.log(calcAverageCalories(weeklyCalories)); // 2270, нічого не виведе, оскільки значення в межах норми.

weeklyCalories = [
    { day: "monday", calories: 1400, intensity: 'low' },
    { day: "tuesday", calories: 1600, intensity: 'low' }
];
console.log(calcAverageCalories(weeklyCalories)); // 1530, виведе "The athlete does not consume enough calories."

console.log(calcAverageCalories([])); // 0, не виведе жодних повідомлень.

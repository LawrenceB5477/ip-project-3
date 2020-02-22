//Everything needs to be to two decimal places

function calcMean(array) {
    return (calcSum(array) / array.length).toFixed(2);
}

function calcMedian(array) {
    array.sort((a, b) =>  a-b); 
    let mid = Math.floor(array.length / 2); 
    return array.length % 2 == 0 ? ((array[mid] + array[mid - 1]) / 2).toFixed(2) : array[mid].toFixed(2);
}

function calcMode(array) {
    let modes = [];
    let maxSize = 0; 

    for (let val of array) {
        modes[val] = modes[val] ? modes[val] + 1 : 1;
        if (modes[val] > maxSize) {
            maxSize = modes[val];
        } 
    }

    let res = []; 
    for (let [val, num] of modes.entries()) {
        if (num == maxSize) {
            res.push(val);
        }
    }
    console.log(modes);
    console.log(res); 
    return res.join(" ");
}

function calcSum(array) {
    return (array.reduce((val, accum) => val + accum, 0)).toFixed(2);
}

function calcStdDev(array) {
    return Math.sqrt(calcVariance(array)).toFixed(2); 
}

function calcVariance(array) {
    let mean = calcMean(array);
    let variance = 0;
    for (let val of array) {
        variance += Math.pow((val - mean), 2); 
    }
    variance /= array.length; 
    return variance.toFixed(2); 

} 

function findMax(array) {
    let max = array[0];
    for (let value of array) {
        if (value > max) {
            max = value; 
        }
    }

    return max.toFixed(2); 
}

function findMin(array) {
    let max = array[0];
    for (let value of array) {
        if (value < max) {
            max = value; 
        }
    }

    return max.toFixed(2); 
} 

function performStatistics() {
    let values = document.querySelector("#values").value;
    values = values.split(" ");

    //validate length
    if (values.length < 5 || values.length > 20) {
        alert("Please enter 5 to 20 vlaues.");
        return false; 
    }

    //validate that each input is a number
    for (let i = 0; i < values.length; i++) {
        let num = Number.parseInt(values[i]);

        if (num < 0 || num > 100 || Number.isNaN(num)) {
            alert("Please only enter numbers from 0 to 100");
            return false; 
        }

        values[i] = num; 
    }

    const mean = calcMean(values);
    const median = calcMedian(values);
    const mode = calcMode(values);
    const stddev = calcStdDev(values);
    const sum = calcSum(values); 
    const variance = calcVariance(values);
    const max = findMax(values);
    const min = findMin(values);

    document.getElementById("max").value = max; 
    document.getElementById("mean").value = mean; 
    document.getElementById("median").value = median;
    document.getElementById("min").value = min;
    document.getElementById("mode").value = mode; 
    document.getElementById("stddev").value = stddev;
    document.getElementById("sum").value = sum; 
    document.getElementById("variance").value = variance; 

    console.log(mean);
    console.log(median);
    return false;
}
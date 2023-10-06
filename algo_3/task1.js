function kadai1(data) {
    var histogram = [];

    data.sort(function(a, b) {
        return a - b;
    });

    var currentNumber = null;
    var currentFrequency = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i] !== currentNumber) {
            if (currentNumber !== null) {
                histogram.push([currentNumber, currentFrequency])
            }

            currentNumber = data[i];
            currentFrequency = 1;
        } else {
            currentFrequency++;
        }
    }

    if (currentNumber !== null) {
        histogram.push([currentNumber, currentFrequency]);
    }

    return histogram;
}
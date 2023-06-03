let myWorkHere = {
    range: function (start, end, step = 1) {
        let rangeArray = [];
        if (step < 0) {
            for (let i = start; i >= end; i = i + step) {
                rangeArray.push(i);
            }
        }
        else {
            for (let i = start; i <= end; i = i + step) {
                rangeArray.push(i);
            }
        }

        return rangeArray;
    },
    sum: function (numbers) {
        let sum = 0;
        for (let number of numbers) { sum += number; }
        return sum;
    },
    reverseArray: function (array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            let arrayElementPosition = (array.length - i) - 1;
            newArray.push(array[arrayElementPosition]);
        }
        return newArray;
    },
    reverseArrayInPlace: function (array) {
        let temp = 0;
        for (let i = 0; i < (array.length / 2); i++) {
            temp = array[i];
            array[i] = array[array.length - i - 1];
            array[array.length - i - 1] = temp;
            console.log(array);
        }
        return array;
    }
}
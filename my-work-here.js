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
    },
    listToArray: function (list) {
        if (list.rest !== null) {
            let array = [];
            for (let val of Object.keys(list)) {
                if (typeof list[val] !== 'object') { array.push(list[val]); }
                else { return array.concat(myWorkHere.listToArray(list[val])); }
            }
        }
        else { return list.value }
    },
    arrayToList: function (array) {
        let list = {};
        console.log(array);
        if (array[0] != null) {
            for (let val of array) {

                list.value = val;
                list.rest = myWorkHere.arrayToList(array.slice(1));
                return list;
            }
        } else {
            list.rest = null;
            return list
        }
    },
    listPrepend: function (list, elt) {
        let newList = {};
        newList.value = elt;
        newList.rest = list;
        return newList;
    },
    listNth: function (list, nth) {
        if (nth === 0) { return list.value; }
        else if (list.rest !== null) { return myWorkHere.listNth(list.rest, nth - 1); }
        else { return undefined }
    },
    checkObjectProperties: (val1, val2) => {// arrow function that returns false if even one element is not found in the other object
        let result = false;
        if (Object.keys(val1).length !== Object.keys(val2).length) { result = false;}
        else {
            for (let innerVal of Object.keys(val1)) {
                if (!(innerVal in val2)) { result = false; break; }
                else { result = true; }
            }
        }
        return result;
    }
}
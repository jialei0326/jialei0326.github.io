(function () {
    "use strict";
    //Practice 2:
    function reverseArray(array){
        let newArray = [];
        if(array.length === 0){
            return newArray;
        }
        for(let i= array.length-1;i>=0;i--){
            newArray.push(array[i]);
        }
        return newArray;
    }

    let reverseArrayInPlace = function(array) {
        for(let left =0, right = array.length-1; left < right; left++, right--){
            let leftcopy = array[left];
            array[left] = array[right];
            array[right] = leftcopy;
        }
    };
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);

    // Practice 2:
    let prepend = function(val,prepend){
        let pre = {value:val,rest:prepend};
        return pre;
    };

    let arrayToList = function (array,pre) {
        if(pre === undefined){
            pre = null;
        }
        if(array.length === 0){
            return pre;
        }
        pre = prepend(array[array.length-1],pre);
        array.splice(array.length-1,1);
        return arrayToList(array,pre);
    };

    let listToArray = function (list,arr) {
        if (arr === undefined){
            arr = [];
        }
        if(list === null){
            return arr;
        }
        arr.push(list.value);
        return listToArray(list.rest,arr);

    };

    let nth = function(list,i){
        let arr = listToArray(list);
        if(i > arr.length || i < 0){
            return undefined;
        }
        return arr[i];
    };

    let arr = [10,20,30];
    console.log(arrayToList(arr));
    let arr1 = [10,20,30];
    console.log(listToArray(arrayToList(arr1)));
    console.log(nth(arrayToList([10,20,30]),3));
});
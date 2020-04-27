// Number 2:
function max() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var max = document.getElementById("max");
    max.value = ((n1 > n2 ? n1 : n2));
}

// Number 3:
function maxOfThree() {
    var n1 = document.getElementById("3_n1").value;
    var n2 = document.getElementById("3_n2").value;
    var n3 = document.getElementById("3_n3").value;
    var max = document.getElementById("3_max");
    var a = [n1, n2, n3];
    a.sort();
    max.value = a[2];
}

// Number 4:
function isVowel() {
    var s = document.getElementById("letter").value;
    var vowel = document.getElementById("isvowel");
    var a = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if(a.indexOf(s) > -1){
        vowel.innerText = true;
    }else{
        vowel.innerText = false;
    }
}

// Number 5:
var a = [];
function add() {
    var number = document.getElementById("input_array");
    a.push(number.value);
    number.value = "";
}
function calculate() {
    var sum = document.getElementById("sum");
    var mul = document.getElementById("mul");
    var s = 0;
    var m = 1;
    for(var i = 0; i < a.length; i++){
        s += Number(a[i]);
        m *= a[i];
    }
    sum.innerText = s;
    mul.innerText = m;
}

// Number 6:
function reverse() {
    var input_string = document.getElementById("reverse").value;
    var re = input_string.split("").reverse().join("");
    var result = document.getElementById("reverse_result")
    result.innerText = re;
}

// Number 7:
function findLongestWord() {
    var input = document.getElementById("words").value;
    var longest = document.getElementById("longestWord");
    var arr = input.split(" ");
    var word = "";
    for(var i = 0; i < arr.length; i++){
        if(word.length < arr[i].length){
            word = arr[i];
        }
    }
    longest.innerText = word;
}

// Number 8:
function filterLongWords() {
    var words = document.getElementById("8_words").value;
    var len = document.getElementById("len").value;
    var arr = words.split(" ");
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > len){
            result.push(arr[i]);
        }
    }
    var output = document.getElementById("longer")
    output.innerText = result;
}

// Number 9:
function map() {
    var input = document.getElementById("array").value;
    var mul = document.getElementById("multiple");
    var fil = document.getElementById("filter");
    var redu = document.getElementById("reduce");
    var arr = input.split(",").map(Number);
    mul.innerText = arr.map(function (elem, i, array) {
        return elem * 10;
    });
    fil.innerText = arr.filter(function (elem,i,array) {
        return elem === 3;
    });
    redu.innerText = arr.reduce(function (preval,elem) {
        return preval * elem;
    }, 1);
}
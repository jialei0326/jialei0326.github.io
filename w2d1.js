window.onload = function () {
    document.getElementById("calculate").onclick = function () {
        var num = document.getElementById("input_array").value;
        var a = num.split("").map(Number);
        var sum = a.reduce((x, y) => x + y);
        var mul = a.reduce((x, y) => x * y);
        document.getElementById("sum").innerText = sum;
        document.getElementById("mul").innerText = mul;
    }

    document.getElementById("reverseButton").onclick = function () {
        var input_string = document.getElementById("reverse").value;
        document.getElementById("reverse_result").innerText = input_string.split("").reverse().join("");
    }

    document.getElementById("filter").onclick = function () {
        var words = document.getElementById("8_words").value;
        var len = document.getElementById("len").value;
        var arr = words.split(" ");
        var re = arr.filter((x) => x.length > len);
        document.getElementById("longer").innerText = re;
    }
}
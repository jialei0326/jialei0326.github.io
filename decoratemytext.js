window.onload = function(){
    var textarea = document.getElementById("textarea");
    document.getElementById("bigger").onclick = function () {
        textarea.rows = "8";
        textarea.cols = "60";
    }
    var  checked = document.getElementById("check")
    checked.onclick = function () {
        if(checked.checked){
            alert("Changing!");
            textarea.innerText.color = "green";
        }
    };

}

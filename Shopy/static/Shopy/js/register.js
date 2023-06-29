document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");
    var labels = form.getElementsByTagName("label");
    
    for (var i = 0; i < labels.length; i++) {
        labels[i].innerText = "";
    }
});
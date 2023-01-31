function myfun() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var title1 = document.getElementById("title").value;
    var dis2 = document.getElementById("dis").value;
    cell1.innerHTML = "<h1>" + title1 + "   " + "</h1>                " + dis2;
    cell2.innerHTML = "<input type=\"button\" value=\"Delete\" id=\"delete\" onclick=\"mydel(this)\">";
    document.getElementById("dis").value = "";
    document.getElementById("title").value = "";
    cell2.style.border="none";

}

function mydel(r) {
    var i = r.parentNode.parentNode.rowIndex;
    console.log(i);
    document.getElementById("mytable").deleteRow(i);
}

function delallit() {
    var tableHeaderRowCount = 0;
    var table = document.getElementById("mytable");
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}
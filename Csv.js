function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
    // Read file into memory as UTF-8
    reader.readAsText(fileToRead);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split());
    }
    console.log(lines);
    drawOutput(lines);
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

function drawOutput(lines){
    //Clear previous data
    document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < lines[i].length; j++) {
            var firstNameCell = row.insertCell(-1);
            firstNameCell.appendChild(document.createTextNode(lines[i][j]));
        }
    }
    document.getElementById("output").appendChild(table);
}


//----------------------------------------------------------------------------------------------------------------------
//csv 2

function handleFiles2(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText2(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText2(fileToRead2) {
    var reader2 = new FileReader();
    // Handle errors load
    reader2.onload = loadHandler2;
    reader2.onerror = errorHandler2;
    // Read file into memory as UTF-8
    reader2.readAsText(fileToRead2);
}

function loadHandler2(event) {
    var csv2 = event.target.result;
    processData2(csv2);
}

function processData2(csv2) {
    var allTextLines = csv2.split(/\r\n|\n/);
    var lines2 = [];
    while (allTextLines.length) {
        lines2.push(allTextLines.shift().split());
    }
    console.log(lines2);
    drawOutput2(lines2);
}

function errorHandler2(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

function drawOutput2(lines2){
    //Clear previous data
    document.getElementById("output2").innerHTML = "";
    var table2= document.createElement("table");
    for (var i = 0; i < lines2.length; i++) {
        var row2 = table2.insertRow(-1);
        for (var j = 0; j < lines2[i].length; j++) {
            var firstNameCell2 = row2.insertCell(-1);
            firstNameCell2.appendChild(document.createTextNode(lines2[i][j]));
        }
    }
    document.getElementById("output2").appendChild(table2);
}
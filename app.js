// from data.js
var tableData = data;
console.log(tableData);

//var table = d3.select("table");  
//table.attr("class", "table table-striped")
//var tbody = table.append("tbody")

// YOUR CODE HERE!
tbody = d3.select("tbody");

// Loop and print
data.forEach(function(alienSighting) {
    console.log(alienSighting);

    
    var row = tbody.append("tr");
   
    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);
        
        var cell = tbody.append("td");
        cell.text(value);
    });
}); 

// Set up button
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    d3.event.preventDefault();
    d3.select("tbody").html("");
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    // Loop for filtered results
    filteredData.forEach((datetime) => {
        var row = tbody.append("tr");
        Object.entries(datetime).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

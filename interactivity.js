var globalData = [];
d3.csv("/ExampleData.csv", function(data) {
    globalData.push(data);
});

function sort(compareObject,display) {
    var table = document.getElementById("recordsTable"),
    tbody = table.getElementsByTagName("tbody")[0];
    
}

function highlightHighest(compareObject){

}

function dropLowest(compareObject){
}


function compareDate(a, b){
    var aDate = new Date(a.PurchaseDate)
    var bDate = new Date(b.PurchaseDate)

}

function compareAmount(a,b){
    var aAmount = parseFloat(a.PurchaseAmount.replace("$", ""))
    var bAmount = parseFloat(b.PurchaseAmount.replace("$", "")) 

}

function compareName(a,b){

}
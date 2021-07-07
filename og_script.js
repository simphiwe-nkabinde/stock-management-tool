// initial stock levels and Ave prices
var p1AveragePrice = 0;
var p2AveragePrice = 0;
var p3AveragePrice = 0;
var p1TotalStock = 0;
var p2TotalStock = 0; 
var p3TotalStock = 0;

var buyerEmails = [];

//adds user input value to total stock levels and Average price for specified product
function handleClickOnAdd() {
    //get user input
    var product = document.getElementById('add-product').value;
    var stockAdded = parseInt(document.getElementById('add-number').value);
    var stockPrice = parseFloat(document.getElementById('add-price').value);
    
    if (!product || !stockAdded || !stockPrice) return;

    if (product === 'p1') {
        p1TotalStock+= stockAdded
        p1AveragePrice = p1AveragePrice ? (p1AveragePrice + stockPrice) / 2 : stockPrice;
        //display stock level and Ave Price
        document.getElementById(product +'-stock').innerText = p1TotalStock;
        document.getElementById(product +'-average-price').innerText = p1AveragePrice.toFixed(2);
        
    } else if (product === 'p2') {
        p2TotalStock+= stockAdded
        p2AveragePrice = p2AveragePrice ? (p2AveragePrice + stockPrice) / 2 : stockPrice;
        //display new stock level and Ave Price
        document.getElementById(product +'-stock').innerText = p2TotalStock;
        document.getElementById(product +'-average-price').innerText = p2AveragePrice.toFixed(2);

    } else if (product === 'p3') {
        p3TotalStock+= stockAdded
        p3AveragePrice = p3AveragePrice ? (p3AveragePrice + stockPrice) / 2 : stockPrice;
        //display stock level and Ave Price
        document.getElementById(product +'-stock').innerText = p3TotalStock;
        document.getElementById(product +'-average-price').innerText = p3AveragePrice.toFixed(2);
    }
}

/*subtracts user input value from total stock levels for specified product
validates email for single use only
*/
function handleClickOnRemove() {
    //get user input
    var product = document.getElementById('remove-product').value;
    var email = document.getElementById('remove-email').value;    
    var stockRemoved = parseInt(document.getElementById('remove-number').value);
    
    //validate email
    if (buyerEmails.includes(email)) {
        document.getElementById('email-error').innerText = "This email has already been used" //displays alert
        return
    }

    document.getElementById('email-error').innerText = "";
    buyerEmails.push(email);

    if (product === 'p1') {
        p1TotalStock-= stockRemoved
        //display new stock level
        document.getElementById(product +'-stock').innerText = p1TotalStock;

    } else if (product === 'p2') {
        p2TotalStock-= stockRemoved
        //display new stock level
        document.getElementById(product +'-stock').innerText = p2TotalStock;
    } else if (product === 'p3') {
        p3TotalStock-= stockRemoved
        //display new stock level
        document.getElementById(product +'-stock').innerText = p3TotalStock;
    }
}




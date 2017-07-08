// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let avgPrice = 0
  for (var i = 0; i < data.length; i++) {
  avgPrice = avgPrice + data[i].price
  }
  avgPrice = ((avgPrice / (data.length)) * 100)
  avgPrice = Math.round(avgPrice)
  avgPrice = (avgPrice / 100)
  return "The average price is $" + avgPrice
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let row = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].price > 14 && data[i].price < 18) {
      row.push (data[i])
    }
  }
  return row
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbp = ""
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gbp = (data[i].title + " costs " + data[i].price) + " pounds.";
      // console.log(i);
    }
  }
  return gbp;
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}

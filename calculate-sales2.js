  var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];




function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var results = {}
  for (var i = 0; i < salesData.length; i++) {
    var prov = salesData[i].province;
    var taxRates1 = taxRates[prov];

    if (results[salesData[i].name]) {
     results[salesData[i].name].totalSales += calcAry(salesData[i].sales);
     results[salesData[i].name].totalTaxes += taxRates1 * calcAry(salesData[i].sales);
    }
    else {
        results[salesData[i].name] = {
        totalSales: calcAry(salesData[i].sales),
        totalTaxes: taxRates1 *calcAry(salesData[i].sales)
      }
    }
  }console.log(results)

}

function calcAry(array) {
  var counter = 0
  for (var i = 0; i < array.length; i++ ) {
    counter += array[i];
  } return counter;
}
calculateSalesTax(companySalesData, salesTaxRates)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

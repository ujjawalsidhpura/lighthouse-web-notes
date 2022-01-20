

const calculateSalesTax = function (salesData, taxRates) {

  let result = {};
  let input = {};

  for (let data of salesData) {
    if (result.data) {
      // result.data.name['totalSales'] += totalSales(data);
      // result.data.name['totalTaxes'] += salesTax(data, taxRates)

    } else {
      result[data.name] = {}
    }
  }
  return result;

}

const totalSales = function (salesData) {
  let totalSales = 0;

  for (let i = 0; i < salesData.sales.length; i++) {
    totalSales += salesData.sales[i]
  }
  return totalSales;
}

console.log(totalSales(companySalesData))

const salesTax = function (companySalesData, salesTaxRates) {
  let totalTax;

  for (let sales in salesData) {
    let taxRate = taxRates[province];
    let totalSale = totalSales(salesData);
    totalTax = taxRates * totalSale;
  }
  return totalTax;
}
console.log(salesTax(salesData, taxRates))


const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates))
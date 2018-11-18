export default function() {
  this.namespace = 'api';

  let products = [{
    "id":"46",
    "type":"products",
    "attributes":{  
      "name":"Rustic Copper Clock",
      "price":14.75,
      "department":{  
        "id":46,
        "name":"Automotive"
      },
      "active-promotion":{
        "id":5,
        "code":"PremiumDeal18",
        "start_date":"2018-11-15T00:00:00.000Z",
        "end_date":"2018-11-18T00:00:00.000Z",
        "percent":81
      },
      "discounted-price":11.9475
    }
  }];

  this.get('/products?page[number]=1&page[size]=10');

  this.get('/products', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredProducts = products.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredProducts };
    } else {
      return { data: products };
    }
  });
}

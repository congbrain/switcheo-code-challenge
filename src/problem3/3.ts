const axios = require('axios');

class Datasource {
    getPrices = async function() {
        const prices = await axios.get('https://static.ngnrs.io/test/prices').then(res => res.data.data.prices);
        return prices.map(price => new Price(price));
    };
};

class Price {
    constructor(obj) {
        this.buy = obj.buy;
        this.sell = obj.sell;
        this.pair = obj.pair;
    }

    mid= function() {
        return (this.buy + this.sell) / 2 / 100;
    };

    quote= function() {
        return this.pair.substr(-3);
    }
};

var ds = new Datasource;

ds.getPrices()
    .then(prices => {
        console.log(prices);
        prices.forEach((price) => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error);
    });

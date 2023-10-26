//km
const kiloMeters = prompt('quanti kilometri devi percorrere?');
//age
const clientAge = prompt('quanti anni hai?');
//km price
const kmPrice = kiloMeters * 0.21;
//ticketprice
let ticketPrice;
//discount
let discount;
//discountapplied
let discountapplied;

if(clientAge<18){
discount= (kmPrice * 20) / 100;
discountapplied = 20;
}
else if(clientAge>65){
discount= (kmPrice *40) / 100;
discountapplied = 40;
}
else if(!clientAge<18 || !clientAge>65){
discount = 0;
discountapplied = 0;
}

//Tot
ticketPrice= kmPrice - discount



//Console log

console.log('kiloMeters', kiloMeters)
console.log('clienAge', clientAge)
console.log('kmPrice', kmPrice)
console.log('discount', discount)
console.log('ticketPrice', ticketPrice)

//Visibletot
document.getElementById('ticketprice').innerHTML = (`Il prezzo del tuo biglietto è ${parseFloat(ticketPrice).toFixed(2)} con sconto del ${discountapplied}`)

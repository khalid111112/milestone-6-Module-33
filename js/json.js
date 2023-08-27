const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
// javaScript object Notation (json)
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);


const shop = {
    owner: 'Alia',
    address: {
    street:'kochukhet voot er goli',
    city: 'ranbir',
    couctry: 'BD'
},
products: ['laptop', 'mic', 'monutor', 'keyboard'],
revenue: 45000,
isOpen: true,
isNew: false
};
console.log(shop);

const shopJSON = JSON.stringify(shop)
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)


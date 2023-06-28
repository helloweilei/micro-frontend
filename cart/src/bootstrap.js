import faker from 'faker';

let content = `You have add ${faker.random.number(1000)} items in cart.`;

document.querySelector('#app-cart').innerHTML = content;
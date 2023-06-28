import faker from 'faker';

let content = '';
for (let index = 0; index < 10; index++) {
  content += `<div>${faker.commerce.productName()}</div>`;
}

document.querySelector('#app').innerHTML = content;
import { adds } from './model.js'

const addList = await adds()

export const addsView = () => {
  const addsView = addList.map(add => `
    <a href="/routes/ad-details.html">
      <li>
        <img src="${add.image}" alt="${add.description}" />
        <h4>Name: ${add.name}</h4>
        <p>Description: ${add.description}</p>
        <p>Price: ${add.price}</p>
        <p>For: ${add.for}</p>
      </li>
    </a>
    `).join('\n')

  const addsUl = document.createElement('ul')
  addsUl.innerHTML = addsView
  return addsUl
}
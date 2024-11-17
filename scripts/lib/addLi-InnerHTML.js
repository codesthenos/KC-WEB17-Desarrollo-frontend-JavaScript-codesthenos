import { pDescription, pFor } from './consts.js'

export const addLiHTML = add => {
  return `
  <img src="${add.image}" alt="${add.name}" />
  <h3>${add.name}</h3>
  <p class="${pDescription}">${add.description}</p>
  <p><span>Price:</span> ${add.price}€</p>
  <p class="${pFor}">${add.for.toUpperCase()}</p>
  `
}

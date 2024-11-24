import { divDescriptionClassName, pFor } from './consts.js'

export const addLiHTML = add => {

  return `
  <h4>${add.user.username}</h4>
  <img src="${add.image ? add.image : '/public/placeholder.jpg'}" alt="${add.image ? add.name : 'placeholder'}" />
  <h3>${add.name}</h3>
  <p class="${divDescriptionClassName}">${add.description}</p>
  <p><span>Price:</span> ${add.price}€</p>
  <p class="${pFor}">${add.for.toUpperCase()}</p>
  `
}

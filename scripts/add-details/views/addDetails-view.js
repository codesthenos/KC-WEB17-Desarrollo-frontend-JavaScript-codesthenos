import { addDetailsModel } from '../models/addDetails-model.js'

export const addDetailsView = ({ add }) => {
  const finalViewHTML = `
  <h2 class="add-details-h2">${add.for}</h2>
  <img class="add-details-img" src="${add.image}" alt="${add.name}"/>
  <h3>${add.name}</h3>
  <span>${add.price}€</span>
  <p>${add.description}</p>
  <span>owner: ${add.owner}</span>
  `
  const finalView = document.createElement('article')
  finalView.innerHTML = finalViewHTML
  return finalView
}
const addIntoHTML = (add) => {
  const addHTML = `
    <a href="/routes/add-details.html?id=${add.id}">
      <li>
        <img src="${add.image}" alt="${add.description}" />
        <h3>${add.name}</h3>
        <p><span>Description:</span></p>
        <p>${add.description}</p>
        <p><span>Price:</span> ${add.price}€</p>
        <p><span>For:</span> ${add.for}</p>
      </li>
    </a>
    `
    return addHTML
}

export const addListHTML = ({ adds }) => {
  const addsHTML = adds.map(addIntoHTML).join('\n')
  return addsHTML
}

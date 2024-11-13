import { fetchAdds } from './model.js'

const response = await fetchAdds()
export const addsView = () => {
  if (response.adds) {
    const addsUlInnerHTML = response.adds.map(add => `
      <a href="/routes/ad-details.html">
        <li>
          <img src="${add.image}" alt="${add.description}" />
          <h3>${add.name}</h3>
          <p><span>Description:</span></p>
          <p>${add.description}</p>
          <p><span>Price:</span> ${add.price}€</p>
          <p><span>For:</span> ${add.for}</p>
        </li>
      </a>
      `).join('\n')
      
        const addsUl = document.createElement('ul')
        addsUl.innerHTML = addsUlInnerHTML
        return addsUl
  }
  if (response.error) {
    const errorView = `${response.error}`
    const errorPre = document.createElement('pre')
    errorPre.textContent = errorView
    errorPre.style.color = 'yellow'
    errorPre.style.textAlign = 'center'
    return errorPre
  }
}

export const addsHeading = () => {
  let addsH2Text = 'Adds'
  const addsH2 = document.createElement('h2')
  if (response.error) {
    addsH2Text = 'Error'
    addsH2.style.color = 'yellow'
  }
  addsH2.textContent = addsH2Text
  addsH2.style.textAlign = 'center'
  return addsH2
}
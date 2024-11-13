import { fetchAdds } from './model.js'

const response = await fetchAdds()

export const addsView = () => {
  if (response.adds) {
    const addsUlInnerHTML = response.adds.map(add => `
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
        addsUl.innerHTML = addsUlInnerHTML
        return addsUl
  }
  if (response.error) {
    const errorView = `${response.error}`
    const errorP = document.createElement('p')
    errorP.textContent = errorView
    return errorP
  }
}

export const addsHeading = () => {
  let addsH2Text = 'Adds'
  if (response.error) {
    addsH2Text = 'Error'
  }
  const addsH2 = document.createElement('h2')
  addsH2.textContent = addsH2Text
  return addsH2
}
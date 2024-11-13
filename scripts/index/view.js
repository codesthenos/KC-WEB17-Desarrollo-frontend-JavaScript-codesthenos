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
    const errorPre = document.createElement('pre')
    errorPre.textContent = errorView
    errorPre.style.color = 'yellow'
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
  return addsH2
}
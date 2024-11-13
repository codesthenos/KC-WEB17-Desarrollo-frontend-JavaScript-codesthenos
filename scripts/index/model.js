const addsEndpoint = 'adds'
export const fetchAdds = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/${addsEndpoint}`)
    if (response.status === 404) return { error: '404 Not found\n\nThat collection doesnt exist' }
    const fetchedAdds = { adds: await response.json() }
    return fetchedAdds.adds.length > 0 ? fetchedAdds : { error: 'No adds' }
  } catch (error) {
    return { error }
  }
}

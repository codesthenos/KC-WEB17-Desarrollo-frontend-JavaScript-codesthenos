export const createAddModel = async ({ addName, addPrice, addDescription, addFor, addImage, token, endpoint }) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        name: addName,
        price: addPrice,
        description: addDescription,
        for: addFor,
        image: addImage
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    if (!response.ok) {
      throw new Error('Error creating add')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
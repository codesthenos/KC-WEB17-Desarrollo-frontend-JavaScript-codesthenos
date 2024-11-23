import { API } from '../lib/consts.js'

export const createAddModel = async ({ addName, addPrice, addDescription, addFor, addImage, token }) => {
  try {
    const response = await fetch(API.ADDS, {
      method: 'POST',
      body: JSON.stringify({
        addName,
        addPrice,
        addDescription,
        addFor,
        addImage
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
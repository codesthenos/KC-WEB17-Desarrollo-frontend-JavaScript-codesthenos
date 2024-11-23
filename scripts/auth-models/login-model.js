import { API } from '../lib/consts.js'

export const loginUser = async ({ userEmail, userPassword }) => {
  try {
    const response = await fetch(API.LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        username: userEmail,
        password: userPassword
      }),
      headers: {
        "Content-Type": "application/json"
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
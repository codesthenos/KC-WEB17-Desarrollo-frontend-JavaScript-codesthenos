import { REGISTER_API } from './lib/consts.js'

export const registerUser = async ({ userEmail, userPassword }) => {
  try {
    const response = await fetch(REGISTER_API, {
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
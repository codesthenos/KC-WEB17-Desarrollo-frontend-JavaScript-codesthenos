export const fetchAdds = async () => {
  try {
    const fetchedAdds = await fetch('http://localhost:8000/api/adds').then(res => res.json())
    return { adds: fetchedAdds }
  } catch (error) {
    return { error: error }
  }
} 
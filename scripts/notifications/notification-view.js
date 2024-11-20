export const notificationView = ({ notificationMessage, notificationClassName }) => {
  const notificationH2 = document.createElement('h2')
  notificationH2.textContent = notificationMessage
  notificationH2.classList.add(notificationClassName)
  return notificationH2
}
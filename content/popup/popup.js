const { sendMessage } = chrome.runtime
const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', () => {
  sendMessage({ type: 'TOGGLE_CHECKBOX' }, ({ payload }) => {
    if (!payload) return

    checkbox.checked = payload.isExtensionActive
  })
}, false)

sendMessage({ type: 'CHECK_EXTENSION_STATE' }, ({ payload }) => {
  if (!payload) return

  checkbox.checked = payload.isExtensionActive
})

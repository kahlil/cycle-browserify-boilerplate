function createRenderTarget(id = null) {
  const element = document.createElement(`div`)
  element.className = `cycletest`

  if (id) {
    element.id = id
  }

  document.body.appendChild(element)

  return element
}

export default createRenderTarget

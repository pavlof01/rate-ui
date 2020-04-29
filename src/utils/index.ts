export const autoGrowTextArea = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.style.height = '5px'
    element.style.height = element.scrollHeight + 'px'
  }
}

function trucate(number: Number) {
  const numStr = String(number)
  const [whole] = numStr.split('.')
  return Number(whole)
}

export { trucate }

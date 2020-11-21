export const alphabetic = (data, direction) =>
  data.sort((a, b) => {
    const first = a.node.name.toLowerCase()
    const second = b.node.name.toLowerCase()

    const x = direction === "asc" ? first : second
    const y = direction === "asc" ? second : first

    if (x < y) return -1
    if (x > y) return 1

    return 0
  })

export const time = (data, direction) =>
  data.sort((a, b) => {
    const first = new Date(a.node.createdAt)
    const second = new Date(b.node.createdAt)

    const x = direction === "asc" ? second : first
    const y = direction === "asc" ? first : second

    if (x < y) return -1
    if (x > y) return 1

    return 0
  })

export const price = (data, direction) =>
  data.sort((a, b) => {
    const first = a.node.variants[0].price
    const second = b.node.variants[0].price

    const x = direction === "asc" ? second : first
    const y = direction === "asc" ? first : second

    if (x < y) return -1
    if (x > y) return 1

    return 0
  })

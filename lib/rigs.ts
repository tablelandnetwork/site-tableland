export default function getRigs(count: number, fleet?: string): string[] {
  let indexes: number[] = []
  let max = 100
  const path = fleet || "all"
  if (!fleet) {
    max = 1000
  }
  if (count > max) {
    return []
  }
  if (count === max) {
    indexes = shuffle([...Array(count).keys()])
  } else {
    while (indexes.length < count) {
      const j = Math.floor(Math.random() * max)
      if (!indexes.includes(j)) {
        indexes.push(j)
      }
    }
  }
  return indexes.map((v) => {
    return "/img/rigs/samples/" + path + "/" + v + ".jpg"
  })
}

// https://stackoverflow.com/a/2450976/641834
function shuffle(array: number[]) {
  let currentIndex = array.length
  let randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

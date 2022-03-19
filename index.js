// is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"]
// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    return cats.push(name)
}
// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
// removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    return cats.pop()
}
// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
// appends a cat to the cats array and returns a new array, 
// leaving the cats array unchanged
function appendCat(name) {
    const copyCats = [...cats, name]
    return copyCats
}
// prepends a cat to the cats array and returns a 
// new array, leaving the cats array unchanged
function prependCat(name) {
    const copyCats = [name, ...cats]
    return copyCats
}
// removes the last cat in the cats array and 
// returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const copyCats = cats.slice(0, cats.length - 1)
    return copyCats
}
// removes the first cat from the cats array and returns 
// a new array, leaving the cats array unchanged
function removeFirstCat() {
    const copyCats = cats.slice(1)
    return copyCats
}
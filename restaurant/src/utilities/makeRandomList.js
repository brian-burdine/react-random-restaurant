// Returns a randomized list using recursion
// First argument is the list to draw random entries from
// Second argument is the length of desired list

function makeRandomList (list, length) {
    if (list.length < length) {
        console.log("List is too short!");
        return null;
    }

    let randomIndex = Math.floor(Math.random() * (list.length - 1));
    // return a single-element array
    if (length === 1) {
        return [list[randomIndex]];
    } else {
        return [list[randomIndex]].concat(makeRandomList(list.filter((item, index) => index !== randomIndex), length - 1));
    }
}

export default makeRandomList;
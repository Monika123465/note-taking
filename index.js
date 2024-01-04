const fs = require("node:fs")

const notejs = fs.readFileSync("./index.json", "utf-8")
const note = JSON.parse(notejs)

let command = process.argv[2]

command = command.toUpperCase()


if (command === "ADD") {
    console.log("add your new list")

    let title = process.argv[3]
    let body = process.argv[4]
    let newNote = {
        title: title,
        body: body
    }
    note.push(newNote)
    fs.writeFileSync("./index.json", JSON.stringify(note))
    mainList()
} else if (command === "REMOVE") {
    console.log("remove from list")
    // console.log(note)
    let title = process.argv[3]
    let newArr = note.filter((el) => el.title !== title)
    fs.writeFileSync("./index.json", JSON.stringify(newArr))
    // console.log(newArr)

} else if (command === "LIST") {
    let searchTitle = process.argv[3]
    console.log("list your note")
    mainList(searchTitle)
} else {
    console.log("there is no list")

    console.log()
    console.log("add comaands to procedd :-add,remove,list")

}
function mainList(searchTitle) {
    for (let i = 0; i <= note.length - 1; i++) {
        let title = note[i].title
        let body = note[i].body
        if (title.includes(searchTitle)) {
            console.log(`${i + 1}.Title:${title} Body:${body}`)
        }
    }
}


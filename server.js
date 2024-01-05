const fs=require('node:fs')
const express=require('express')
const { KeyObject } = require('node:crypto')
const app=express()
const port=3000

app.use(express.json({}))

app.get('/',(req,res)=>{
    res.send("hello world !")
})


app.get('/notes', (req, res) => {
    const notesadded= fs.readFileSync('./index.json','utf-8')
    const note=JSON.parse(notesadded)
    console.log(note)

    // send notes; file se read karo notes. aur josn me parse kar ke send kar do 

    return res.send(note)

})

app.post('/notes', (req,res) => {
 const {id,title,body}=req.body
 try {
    const notesadded= fs.readFileSync('./index.json','utf-8')
    const note=JSON.parse(notesadded)
    console.log(note)

    const newNote={
        id:id,
        title:title,
        body:body
    }
    note.push(newNote)
    fs.writeFileSync('./index.json',JSON.stringify(note))

    return res.send({message: 'creared '})

 } catch (error) {
    return res.status(500).send({message: error.message})
 }
    //title, body, 
    // notes create karo aur file me save kar do 
    // file karead karod ... naya usme add karo aur 

})
app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const notesadded= fs.readFileSync('./index.json','utf-8')
    const note=JSON.parse(notesadded)
    console.log(note)
     
    const newArr=note.filter((el)=>el.id==id)
    console.log(newArr)
    
           return res.send(newArr)

    // notes ko get karo aur notes ko filter kar ke single note bhej dena hai 0

})

app.patch('/notes/:id', (req, res) => {
    
    // title body req.body se nikal lenge
    // id 
    /// find kie 
    //  dono kko updatekenge fise send kar denge 
})


//zoom link bhjokk//

/*
    notes ka api,
    create notes.
    list notes.
    delte notes.

    // LATER update notes
*/

app.listen(port,()=>{
    console.log(` app listening on port ${port}`) 
})


// wht happed na khul rha postman
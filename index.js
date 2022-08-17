fetch('http://localhost:3000/shows')
.then(res => res.json())
.then(data => {
data.forEach(name => {
       console.log(name.title)
   }) 
})

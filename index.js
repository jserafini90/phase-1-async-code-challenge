const searchInput = document.querySelector('[data-search]')

  let search = []

 searchInput.addEventListener("input", (e) => {
     const value = e.target.value.toLowerCase()
     search.forEach(search => {
        const isVisible = 
        search.title.toLowerCase().includes(value)
        search.element.classList.toggle("hide", !isVisible)
     })
      
})
 

fetch('http://localhost:3000/shows')
.then(res => res.json())
.then(data => {
    const list = document.getElementById('list')
    search = data.map(movie => {
        let title = document.createElement('li')
        title.innerText = movie.title
        //console.log(movie)
        list.append(title)
        return {title: movie.title}
        //list.addEventListener('click', (e) => {
   }) 
})
//})
    

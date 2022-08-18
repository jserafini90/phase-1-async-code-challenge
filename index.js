const searchInput = document.getElementById("search");

  let search = []
  let que = []

 searchInput.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(search);
    const filteredTitles = search.filter(() => {
        return search.includes(searchString)
        console.log(filteredTitles)
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
        //return {title: movie.title}   
    title.addEventListener('click', (e) => {
        que = []
    que.push(title.innerText)
    const queMovie = document.getElementById('queued')
    que.map(show => {
        let queTitle = document.createElement('li')
        queTitle.innerText = show
        queMovie.append(queTitle)
        //console.log(show)
        queTitle.addEventListener('click', (e) => {
            que.removeChild(title.innerText)
        })
    })
})
})
}) 

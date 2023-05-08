const div = document.querySelector('#movie-list')
const images2 = document.querySelector('.detail-image')
const h2 = document.querySelector('.name')
const h3 = document.querySelector('.year')
const h4 = document.querySelector('.director')
const h5 = document.querySelector('.genre')
const trailerLink = document.querySelector('iframe')
const span = document.querySelector('#ranking-display')
 const form = document.querySelector('#new-movie')
 const description = document.querySelector('#description')

fetch("http://localhost:3000/Movies")
    .then((res) => res.json())
    .then(updateList) 

    function updateList(movie){
        movie.forEach(movie  => {
            const images = document.createElement('img')
            images.src = movie.images
            const button = document.createElement('btn')
            button.textContent = "X"
            div.appendChild(button)
            div.appendChild(images)

            images.addEventListener('click', (e) => {
                e.preventDefault();
                h2.textContent = movie.names
                images2.src = movie.images
                h3.textContent = movie.year
                h4.textContent = movie.director
                h5.textContent = movie.genre
                trailerLink.src= movie.trailer
                console.log(trailerLink)
                span.textContent = movie.rank
                description.textContent = movie.description


            })
            button.addEventListener('click', () =>{
                button.remove()
                images.remove()
            })
            })


        }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newImg = document.createElement('img')
        newImg.src = e.target['new-image'].value
        console.log(e.target['new-image'].value)
        div.append(newImg)

        const newObj = {
            name: e.target['new-name'].value,
            director: e.target['new-director'].value,
            genre: e.target['new-genre'].value,
            rating: e.target['new-rating'].value,
            comment: e.target['new-comment'].value,


        }

    })
 
        
    
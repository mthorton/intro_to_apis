//console.log("Hello World")
let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

fetch(url) // The fetch is a method available to us in the browser 
           // and we supply at least a url and it will kick off a 
           // "GET" request to that url
    .then(res => res.json()) // .then() can be chained on a fetch to allow us
                             // to take the response adn do something with it
    .then(json => { // In this case I have used the json data to display in the console
        console.log(json)
        console.log(json.title) // These logs are unique to the json that we got back
        console.log(json.locations) // and only work on this objects structure
        console.log(json.director)
    })


/*
BASIC fetch usage

fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)

*/

const baseURL = "https://ghibliapi.herokuapp.com"
fetch(baseURL + "/films")
    .then(res => res.json())
    .then(json => {
        let myArr = json.map(film => {
                return{
                    title: film.title,
                    rt_score: film.rt_score
                }
        }).sort((cur, prev) => cur.rt_score - prev.rt_score)

        //console.log(myArr)
        displayResults(myArr)
    })

// Display Results
function displayResults(films){
    console.log("Hello from display results!", films)
    let filmList = document.getElementById("film-list")
    films.map(film => {
        let filmLi = document.createElement('li')
        filmLi.innerText = `${film.title} ${film.rt_score}`
        filmList.appendChild(filmLi)
    })
}











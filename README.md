# Movie-info-microservice


This web microservice maintains a database of movies and their info such as plot summaries and poster images.
It is hosted on OSU Flip server and so requires a VPN connection to OSU.
API is provided for third-party access as explained below using cURL for command-line request as an example.


Get All Movies:

REQ/RES
curl http://flip3.engr.oregonstate.edu:1155/movies

(JSON format)
    {
        "_id": 1,
        "title": "The Shawshank Redemption",
        "plot_summary": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "poster_url": "https://www.screenwritersnetwork.org/beta/wp-content/uploads/2021/02/The-Shawshank-Redemption-Script.jpg"
    },
    {
        "_id": 2,
        "title": "The Godfather",
        "plot_summary": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "poster_url": "https://www.screenwritersnetwork.org/wp-content/uploads/2021/02/Godfather-Script.jpg"
    },
    {
        "_id": 3,
        "title": "The Dark Knight",
        "plot_summary": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "poster_url": "https://images.squarespace-cdn.com/content/v1/5fc28a8d8fbfcf634c11b69c/1612823532797-R575JX5GED8FR6AHXYCW/91KkWf50SoL._SL1500_.jpg"
    },
    {
        "_id": 4,
        "title": "Pulp Fiction",
        "plot_summary": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster_url": "https://static.wikia.nocookie.net/filmguide/images/3/35/Pulp_Fiction_1994_Poster.jpg/revision/latest?cb=20200228111902"
    },
    {
        "_id": 5,
        "title": "Schindler's List",
        "plot_summary": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    }


    
Get Movie Poster:

REQ/RES
curl http://flip3.engr.oregonstate.edu:1155/movies/{MOVIE_TITLE}/poster

(string)
"https://www.screenwritersnetwork.org/beta/wp-content/uploads/2021/02/The-Shawshank-Redemption-Script.jpg"



Get Movie Summary:

REQ/RES
curl http://flip3.engr.oregonstate.edu:1155/movies/{MOVIE_TITLE}/summary

(string)
"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."



<img width="868" alt="UML" src="https://github.com/aauin/Movie-info-microservice/assets/21292668/bb4a8d36-1436-4c9a-9b31-ef3bfbc08a48">






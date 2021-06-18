var baseUrl = "http://127.0.0.1:5000/"

var moviesDatabase = [
{
    "Title": "Aquaman",
    "Description": "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
    "Postor": "aqua.jpg",
    "Background": "382613.jpg",
    "Trailer": "https://www.youtube.com/embed/WDkg3h8PCVU",
    "Genre": "Action|Adventure|Fantasy",
    "IDMBRating": 6.9,
    "AiredBy": "Netflix",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Ferdinand",
    "Description": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.",
    "Postor": "ferdinand.jpg",
    "Background": "2011711.jpg",
    "Trailer": "https://www.youtube.com/embed/HBXVM7oUPVk",
    "Genre": "Comedy|Adventure|Animation",
    "IDMBRating": 6.7,
    "AiredBy": "Disney",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "12 Years a Slave",
    "Description": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    "Postor": "12yr.jpg",
    "Background": "2564420.jpg",
    "Trailer": "https://www.youtube.com/embed/z02Ie8wKKRg",
    "Genre": "Biography|Drama|History",
    "IDMBRating": 8.1,
    "AiredBy": "Paramount",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "Mission Impossible: Ghost Protocol",
    "Description": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
    "Postor": "MI.jpg",
    "Background": "3440775.jpg",
    "Trailer": "https://www.youtube.com/embed/EDGYVFZxsXQ",
    "Genre": "Action|Adventure|Thriller",
    "IDMBRating": 7.4,
    "AiredBy": "HBO",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "The Pursuit of Happiness",
    "Description": "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    "Postor": "persuitOf happiness.jpg",
    "Background": "2024750.jpg",
    "Trailer": "https://www.youtube.com/embed/DMOBlEcRuw8",
    "Genre": "Biography|Drama",
    "IDMBRating": 8.0,
    "AiredBy": "Netflix",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Pirates of The Carribean",
    "Description": "Blacksmith Will Turner teams up with eccentric pirate  Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    "Postor": "pocccccccc.jpg",
    "Background": "1103973.jpg",
    "Trailer": "https://www.youtube.com/embed/Hgeu5rhoxxY",
    "Genre": "Action|Adventure|Fantasy",
    "IDMBRating": 8.0,
    "AiredBy": "Netflix",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "John Wick: Chapter 3",
    "Description": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    "Postor": "wick.jpg",
    "Background": "1460186.jpg",
    "Trailer": "https://www.youtube.com/embed/M7XM597XO94",
    "Genre": "Action|Crime|Thriller",
    "IDMBRating": 7.4,
    "AiredBy": "Netflix",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "Black Panther",
    "Description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    "Postor": "bppp.jpg",
    "Background": "54056.jpg",
    "Trailer": "https://www.youtube.com/embed/xjDjIWPwcPU",
    "Genre": "Action|Adventure| Sci-Fi",
    "IDMBRating": 7.3,
    "AiredBy": "Marvel",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Avengers: Endgame",
    "Description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "Postor": "endgame.jpg",
    "Background": "329583.jpg",
    "Trailer": "https://www.youtube.com/embed/TcMBFSGVi1c",
    "Genre": "Action|Adventure|Drama",
    "IDMBRating": 8.4,
    "AiredBy": "Marvel",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "Game of Thrones",
    "Description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    "Postor": "GOT.jpg",
    "Background": "25498.jpg",
    "Trailer": "https://www.youtube.com/embed/rlR4PJn8b8I",
    "Genre": "Action|Adventure|Drama",
    "IDMBRating": 9.3,
    "AiredBy": "HBO",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Thor: Ragnarok",
    "Description": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    "Postor": "Thor3.jpg",
    "Background": "222191.jpg",
    "Trailer": "https://www.youtube.com/embed/ue80QwXMRHg",
    "Genre": "Action|Adventure|Comedy",
    "IDMBRating": 7.9,
    "Screening": "2021-04-04T00:00:00",
    "AiredBy": "Marvel",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "No Time TO Die",
    "Description": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    "Postor": "NoTimeToDie.jpg",
    "Background": "2198206.jpg",
    "Trailer": "https://www.youtube.com/embed/vw2FOYjCz38",
    "Genre": "Action|Adventure|Thriller",
    "IDMBRating": 6.3,
    "AiredBy": "Paramount",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Fast and Furious 9",
    "Description": "Cypher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
    "Postor": "fasssstttt.png",
    "Background": "2601718.jpg",
    "Trailer": "https://www.youtube.com/embed/_qyw6LC5pnE",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Action|Adventure|Crime",
    "IDMBRating": 6.3,
    "AiredBy": "HBO Max",
    "Screening": "2021-04-04T00:00:00",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Godzilla Vs Kong",
    "Description": "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
    "Postor": "godzillaVsKongPs.jpg",
    "Background": "godzillaVsKong.jpg",
    "Trailer": "https://www.youtube.com/embed/odM92ap8_c0",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Action|Sci-Fi|Thriller",
    "IDMBRating": 6.3,
    "AiredBy": "HBO",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Free Guy",
    "Description": "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
    "Postor": "freeeee.jpg",
    "Background": "free-guy-movie-2020-r4.jpg",
    "Trailer": "https://www.youtube.com/embed/JORN2hkXLyM",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Action|Adventure|Comedy",
    "IDMBRating": 9.5,
    "AiredBy": "Amazon Prime",
    "ReleaseDate": "2021-06-01T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Mulan",
    "Description": "A young Chinese maiden disguises herself as a male warrior in order to save her father.",
    "Postor": "mulan.jpeg",
    "Background": "4251936.jpg",
    "Trailer": "https://www.youtube.com/embed/KK8FHdFluOQ",
    "Screening": "2021-04-04T00:00:00",
    "Genre": " Action|Adventure|Drama",
    "IDMBRating": 5.6,
    "AiredBy": "Disney +",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Black Widow",
    "Description": "A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.",
    "Postor": "black widow.jpg",
    "Background": "430398.jpg",
    "Trailer": "https://www.youtube.com/embed/RxAtuMu_ph4",
    "Screening": "2021-04-04T00:00:00",
    "Genre": " Action|Adventure|Sci-Fi",
    "IDMBRating": 6.3,
    "AiredBy": "Marvel",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Holidate",
    "Description": "Fed up with being single on holidays, two strangers agree to be each other's platonic plus-ones all year long, only to catch real feelings along the way.",
    "Postor": "holidate.jpg",
    "Background": "emma_roberts_holidate_2020_4k_hd_movies.jpg",
    "Trailer": "https://www.youtube.com/embed/p-_J_YllcP0",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Comedy|Romance",
    "IDMBRating": 6.1,
    "AiredBy": "HBO",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "Joker",
    "Description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "Postor": "jocker.jpg",
    "Background": "",
    "Trailer": "https://www.youtube.com/embed/-_DJEzZk2pc",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Action|Crime|Thriller",
    "IDMBRating": 8.4,
    "AiredBy": "HBO",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "Croods New Age",
    "Description": "The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.",
    "Postor": "croods.jpg",
    "Background": "the_croods_a_new_age_4k_hd_movies.jpg",
    "Trailer": "https://www.youtube.com/embed/a-o8xbEcuSY",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Animation|Adventure|Comedy",
    "IDMBRating": 7.0,
    "AiredBy": "Disney+",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Not Available"
},
{
    "Title": "Tom and Jerry",
    "Description": "Adaptation of the classic Hanna-Barbera property, which reveals how Tom and Jerry first meet and form their rivalry.",
    "Postor": "tom.jpg",
    "Background": "tom_and_jerry_2021_hd_tom_and_jerry.jpg",
    "Trailer": "https://www.youtube.com/embed/fgqEyC19538",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Animation|Adventure|Comedy",
    "IDMBRating": 5.6,
    "AiredBy": "Disney+",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Raya and The Last Dragon",
    "Description": "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
    "Postor": "raya.png",
    "Background": "raya_and_the_last_dragon_poster_hd_the_last_dragon.jpg",
    "Trailer": "https://www.youtube.com/embed/1VIZ89FEjYI",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Animation|Action|Adventure",
    "IDMBRating": 6.3,
    "AiredBy": "Disney",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Available"
},
{
    "Title": "Minions: Rise of Gru",
    "Description": "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
    "Postor": "gru.jpg",
    "Background": "x1080.jpg",
    "Trailer": "https://www.youtube.com/embed/pN1HNkoL2QA",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Animation|Comedy|Adventure",
    "IDMBRating": 6.3,
    "AiredBy": "Disney",
    "ReleaseDate": "2021-09-11T00:00:00",
    "Ticket": "Available"
}
]
// moviesDatabase.forEach(movie => addMovie(movie))
var one = {
    "Title": "Maleficent",
    "Description": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies and dark new forces at play.",
    "Postor": "malificent.jpg",
    "Background": "wallpaper2you_310693.jpg",
    "Trailer": "https://www.youtube.com/embed/n0OFH4xpPr4",
    "Screening": "2021-04-04T00:00:00",
    "Genre": "Adventure|Family|Fantasy",
    "IDMBRating": .6,    "AiredBy": "HBO",
    "ReleaseDate": "2021-04-04T00:00:00",
    "Ticket": "Available"
};


function addMovie(data) {
    fetch("http://127.0.0.1:5000/api/v1/movies",{
         method : "POST",
         body : JSON.stringify(data),
         headers : {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0',
            Accept: 'application/json',
            "Content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin' : '*',
            'Accept-Encoding': 'gzip',
            // 'Authorization' : "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjM5NjUzODgsImlhdCI6MTYyMzk2NTA4OCwibmJmIjoxNjIzOTY1MDg4LCJpZGVudGl0eSI6M30.tfqmgssWHZ-hOga4KESDnQ7Lt9rRZ2_l62sUAREAKYQ"
         },
    })
    .then((resp) => resp.text())
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error);
    });
    }
//#endregion
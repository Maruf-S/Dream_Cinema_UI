var dataTable;
$(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#DT_load tfoot th').each(function () {
        var title = $(this).text();
        //Jump empty feilds
        if (title !== "") { $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" />');}
    });

    loadDataTable();
    //DeTAils
    $('#DT_load tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
})
function format(d) {
    // `d` is the original data object for the row
    return '<table class="table-striped border" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Description:</td>' +
        '<td>' + `${d.description}` + '</td>' +
        '</tr>'+
        '</table>';
}
// "ajax": {
//     "url": "Contracts/GetAllContrats",
//     "type": "GET",
//     "datatype": "json"
// },
function loadDataTable() {
    table = $('#DT_load').DataTable({
        'data':tempData,
        select: {
         style: 'single',
        className: 'row-selected'
        },
        dom: 'Bfrtip',
        "buttons": [
            { extend: 'excel', className: 'btn btn-success', text: 'Export table to excel' },
        ],
        deferRender: true,
        scrollY: 400,
        "scrollX": true,
        //scrollCollapse: true,
        scroller: true,
        "order": [[0, "desc"]],//SET DEFAULT SORTING
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;

                $('input', this.footer()).on('keyup change clear', function () {
                    if (that.search() !== this.value) {
                        that
                            .search(this.value)
                            .draw();
                    }
                });
            });
        },

        "columns": [
            { "data": "id" },
            { "data": "name" },
            { "data": "genre" },
            { "data": "release" },
            {
                "data": "screening",
                "render": function (data) {
                    if (data == undefined || data == null) {
                        return null;
                    }
                    else {
                        return moment.utc(data).local().format('MMMM Do YYYY, h:mm:ss a');
                    }
                }
            },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": '',
                "render": function () {
                    return '<i class="fa fa-info-circle btn btn-light shadow" style="border-radius:20%;" data-toggle="tooltip" data-placement="top" title="Details"></i>';
                },
                width: "25px"
            },
        ],
        "language": {
            "emptyTable": "no data found"
        },
        width: "100%"

    })
}

//$.fn.dataTable.ext.errMode = 'throw';

var tempData = [{
    "id": 111,
    "name": "Maleficent",
    "description": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies and dark new forces at play.",
    "postor": "malificent.jpg",
    "background": "wallpaper2you_310693.jpg",
    "trailer": "https://www.youtube.com/embed/n0OFH4xpPr4",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Adventure", "Family", "Fantasy"],
    "idmbRating": "6.6",
    "aired": "HBO",
    "release": "18 October 2019 (USA)",
    "ticket": "Available"
},
{
    "id": 112,
    "name": "Aquaman",
    "description": "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
    "postor": "aqua.jpg",
    "background": "382613.jpg",
    "trailer": "https://www.youtube.com/embed/WDkg3h8PCVU",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Fantasy"],
    "idmbRating": "6.9",
    "aired": "Netflix",
    "release": " 21 December 2018 (USA)",
    "ticket": "Available"
},
{
    "id": 113,
    "name": "Ferdinand",
    "description": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.",
    "postor": "ferdinand.jpg",
    "background": "2011711.jpg",
    "trailer": "https://www.youtube.com/embed/HBXVM7oUPVk",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Comedy", "Adventure", " Animation"],
    "idmbRating": "6.7",
    "aired": "Disney",
    "release": "15 December 2017 (USA)",
    "ticket": "Available"
},
{
    "id": 114,
    "name": "12 Years a Slave",
    "description": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    "postor": "12yr.jpg",
    "background": "2564420.jpg",
    "trailer": "https://www.youtube.com/embed/z02Ie8wKKRg",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Biography", "Drama", "History"],
    "idmbRating": "8.1",
    "aired": "Paramount",
    "release": "8 November 2013 (USA)",
    "ticket": "Not Available"
},
{
    "id": 115,
    "name": "Mission Impossible: Ghost Protocol",
    "description": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
    "postor": "MI.jpg",
    "background": "3440775.jpg",
    "trailer": "https://www.youtube.com/embed/EDGYVFZxsXQ",
    "screening": "Mar 5, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Thriller"],
    "idmbRating": "7.4",
    "aired": "HBO",
    "release": "21 December 2011 (USA)",
    "ticket": "Available"
},
{
    "id": 116,
    "name": "The Pursuit of Happiness",
    "description": "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    "postor": "persuitOf happiness.jpg",
    "background": "2024750.jpg",
    "trailer": "https://www.youtube.com/embed/DMOBlEcRuw8",
    "screening": "Mar 5, 2021 00:00:00",
    "genre": ["Biography", "Drama"],
    "idmbRating": "8.0",
    "aired": "Netflix",
    "release": "15 December 2006 (USA)",
    "ticket": "Available"
},
{
    "id": 117,
    "name": "Pirates of The Carribean",
    "description": "Blacksmith Will Turner teams up with eccentric pirate  Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    "postor": "pocccccccc.jpg",
    "background": "1103973.jpg",
    "trailer": "https://www.youtube.com/embed/Hgeu5rhoxxY",
    "screening": "Mar 5, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Fantasy"],
    "idmbRating": "8.0",
    "aired": "Netflix",
    "release": " 9 July 2003 (USA)",
    "ticket": "Not Available"
},
{
    "id": 118,
    "name": "John Wick: Chapter 3",
    "description": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    "postor": "wick.jpg",
    "background": "1460186.jpg",
    "trailer": "https://www.youtube.com/embed/M7XM597XO94",
    "screening": "Mar 5, 2021 00:00:00",
    "genre": ["Action", "Crime", "Thriller"],
    "idmbRating": "7.4",
    "aired": "Netflix",
    "release": " 17 May 2019 (USA)",
    "ticket": "Not Available"
},
{
    "id": 119,
    "name": "Black Panther",
    "description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    "postor": "bppp.jpg",
    "background": "54056.jpg",
    "trailer": "https://www.youtube.com/embed/xjDjIWPwcPU",
    "screening": "Mar 6, 2021 00:00:00",
    "genre": ["Action", "Adventure", " Sci-Fi"],
    "idmbRating": "7.3",
    "aired": "Marvel",
    "release": "16 February 2018 (USA)",
    "ticket": "Available"
},
{
    "id": 120,
    "name": "Avengers: Endgame",
    "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "postor": "endgame.jpg",
    "background": "329583.jpg",
    "trailer": "https://www.youtube.com/embed/TcMBFSGVi1c",
    "screening": "Mar 6, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Drama"],
    "idmbRating": "8.4",
    "aired": "Marvel",
    "release": "26 April 2019 (USA)",
    "ticket": "Not Available"
},
{
    "id": 121,
    "name": "Game of Thrones",
    "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    "postor": "GOT.jpg",
    "background": "25498.jpg",
    "trailer": "https://www.youtube.com/embed/rlR4PJn8b8I",
    "screening": "Mar 6, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Drama"],
    "idmbRating": "9.3",
    "aired": "HBO",
    "release": " TV Series (2011–2019)",
    "ticket": "Available"
},
{
    "id": 122,
    "name": "Thor: Ragnarok",
    "description": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    "postor": "Thor3.jpg",
    "background": "222191.jpg",
    "trailer": "https://www.youtube.com/embed/ue80QwXMRHg",
    "screening": "Mar 6, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Comedy"],
    "idmbRating": "7.9",
    "aired": "Marvel",
    "release": " 3 November 2017 (USA)",
    "ticket": "Not Available"
},
{
    "id": 123,
    "name": "No Time TO Die",
    "description": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    "postor": "NoTimeToDie.jpg",
    "background": "2198206.jpg",
    "trailer": "https://www.youtube.com/embed/vw2FOYjCz38",
    "screening": "Oct 8, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Thriller"],
    "idmbRating": "x.x",
    "aired": "Paramount",
    "release": " 8 October 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 124,
    "name": "Fast and Furious 9",
    "description": "Cypher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
    "postor": "fasssstttt.png",
    "background": "2601718.jpg",
    "trailer": "https://www.youtube.com/embed/_qyw6LC5pnE",
    "screening": "May 28, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Crime"],
    "idmbRating": "x.x",
    "aired": "HBO Max",
    "release": " 28 May 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 125,
    "name": "Godzilla Vs Kong",
    "description": "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
    "postor": "godzillaVsKongPs.jpg",
    "background": "godzillaVsKong.jpg",
    "trailer": "https://www.youtube.com/embed/odM92ap8_c0",
    "screening": "Mar 31, 2021 00:00:00",
    "genre": ["Action", "Sci-Fi", "Thriller"],
    "idmbRating": "x.x",
    "aired": "HBO",
    "release": "31 March 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 126,
    "name": "Free Guy",
    "description": "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
    "postor": "freeeee.jpg",
    "background": "free-guy-movie-2020-r4.jpg",
    "trailer": "https://www.youtube.com/embed/JORN2hkXLyM",
    "screening": "May 21, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Comedy"],
    "idmbRating": "9.5",
    "aired": "Amazon Prime",
    "release": " 21 May 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 127,
    "name": "Mulan",
    "description": "A young Chinese maiden disguises herself as a male warrior in order to save her father.",
    "postor": "mulan.jpeg",
    "background": "4251936.jpg",
    "trailer": "https://www.youtube.com/embed/KK8FHdFluOQ",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Drama"],
    "idmbRating": "5.6",
    "aired": "Disney +",
    "release": " 4 September 2020 (USA)",
    "ticket": "Available"
},
{
    "id": 128,
    "name": "Black Widow",
    "description": "A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.",
    "postor": "black widow.jpg",
    "background": "430398.jpg",
    "trailer": "https://www.youtube.com/embed/RxAtuMu_ph4",
    "screening": "May 7, 2021 00:00:00",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "idmbRating": "x.x",
    "aired": "Marvel",
    "release": "7 May 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 129,
    "name": "Holidate",
    "description": "Fed up with being single on holidays, two strangers agree to be each other's platonic plus-ones all year long, only to catch real feelings along the way.",
    "postor": "holidate.jpg",
    "background": "emma_roberts_holidate_2020_4k_hd_movies.jpg",
    "trailer": "https://www.youtube.com/embed/p-_J_YllcP0",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Comedy", "Romance"],
    "idmbRating": "6.1",
    "aired": "HBO",
    "release": " 28 October 2020 (USA)",
    "ticket": "Not Available"
},
{
    "id": 130,
    "name": "Joker",
    "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "postor": "jocker.jpg",
    "background": "",
    "trailer": "https://www.youtube.com/embed/-_DJEzZk2pc",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Crime", "Drama", "Thriller"],
    "idmbRating": "8.4",
    "aired": "HBO",
    "release": "4 October 2019 (USA)",
    "ticket": "Not Available"
},
{
    "id": 131,
    "name": "Croods New Age",
    "description": "The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.",
    "postor": "croods.jpg",
    "background": "the_croods_a_new_age_4k_hd_movies.jpg",
    "trailer": "https://www.youtube.com/embed/a-o8xbEcuSY",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Animation", "Adventure", "Comedy"],
    "idmbRating": "7.0",
    "aired": "Disney+",
    "release": " 25 November 2020 (USA)",
    "ticket": "Not Available"
},
{
    "id": 132,
    "name": "Tom and Jerry",
    "description": "Adaptation of the classic Hanna-Barbera property, which reveals how Tom and Jerry first meet and form their rivalry.",
    "postor": "tom.jpg",
    "background": "tom_and_jerry_2021_hd_tom_and_jerry.jpg",
    "trailer": "https://www.youtube.com/embed/fgqEyC19538",
    "screening": "Mar 4, 2021 00:00:00",
    "genre": ["Animation", "Adventure", "Comedy"],
    "idmbRating": "5.6",
    "aired": "Disney+",
    "release": " 26 February 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 133,
    "name": "Raya and The Last Dragon",
    "description": "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
    "postor": "raya.png",
    "background": "raya_and_the_last_dragon_poster_hd_the_last_dragon.jpg",
    "trailer": "https://www.youtube.com/embed/1VIZ89FEjYI",
    "screening": "Mar 5, 2021 00:00:00",
    "genre": ["Animation", "Action", "Adventure"],
    "idmbRating": "x.x",
    "aired": "Disney",
    "release": "5 March 2021 (USA)",
    "ticket": "Available"
},
{
    "id": 134,
    "name": "Minions: Rise of Gru",
    "description": "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
    "postor": "gru.jpg",
    "background": "x1080.jpg",
    "trailer": "https://www.youtube.com/embed/pN1HNkoL2QA",
    "screening": "Jul 2, 2021 00:00:00",
    "genre": ["Comedy", "Adventure"],
    "idmbRating": "x.x",
    "aired": "Disney",
    "release": " 2 July 2021 (USA)",
    "ticket": "Available"
}
]
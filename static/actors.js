//beginning of actors page code
//###################################################

    var actors_section = document.getElementById("actor-list");
    var actors_info = document.getElementById("actor-info");
    var request = new XMLHttpRequest();
    request.open('GET', filename = 'static/movies.json');

    request.onload = function () {
        var data = JSON.parse(request.responseText);
        ConvertArray(data);
    }
    request.send();

//sort array alphabetically
    function Sort(array) {
        array.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

//converts json to array
//loops to include sub elements in cast
    function ConvertArray(data) {
        let filter_actors = new Array();

        for (i = 0; i < data.length; i++) {
            for (j = 0; j < data[i].cast.length; j++) {
                filter_actors.push(data[i].cast[j]);
            }
        }
        FilterArray(filter_actors, data);
    }

//Removes unnecessary symbols from front of array
//Removes duplicates
    function FilterArray(filter_actors, data) {
        Sort(filter_actors)
        let slice_actors = new Array();
        slice_actors = filter_actors.slice(221, filter_actors.length - 491);
        let unique_actors = new Set(slice_actors);
        const actors = Array.from(unique_actors);
        addButtons(actors, data);

    }

//inserts HTML
    function addButtons(actors, data)
    {
        let matchIndex = new Array();
        for (i = 0; i < actors.length; i++) {
            const button = document.createElement("button");
            button.innerText = actors[i];

            (function (i) {
                button.addEventListener("click", function ()
                {
                    for (total_index = 0; total_index < data.length; total_index++)
                    {
                        for (sub_index = 0; sub_index < data[total_index].cast.length; sub_index++)
                        {
                            if (actors[i] == data[total_index].cast[sub_index])
                            {
                                matchIndex.push(data[total_index].title);

                            }
                        }
                    }
                    addHTML(matchIndex);
                })
            })(i)
            actors_section.appendChild(button);
        }
    }



function addHTML(matchIndex)
{
    var movie_appearance = ""

    for (i =0; i<matchIndex.length; i++)
    {
        movie_appearance += "<p>" + matchIndex[i];
    }

    actors_info.insertAdjacentHTML("beforeend",movie_appearance);
}
//end of actors page code
//################################################





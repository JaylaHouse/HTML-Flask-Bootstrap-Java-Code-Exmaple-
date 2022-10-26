 var movies_section = document.getElementById("movies-list");
var titlebtn = document.getElementById("title");
var yearbtn =document.getElementById("year");


titlebtn.addEventListener("click", function()
{
    var request = new XMLHttpRequest();
    request.open('GET', filename = 'static/movies.json');
    request.onload = function ()
    {
        var data = JSON.parse(request.responseText);
        ConvertArray(data);
    }
        request.send();
});

yearbtn.addEventListener("click", function()
{
    var request = new XMLHttpRequest();
    request.open('GET', filename = 'static/movies.json');
    request.onload = function ()
    {
        var data = JSON.parse(request.responseText);
        yearHTML(data);
    }
        request.send();
});

function ConvertArray(data)
{
        let movies_array = new Array();

        for (i = 0; i < data.length; i++)
        {
                movies_array.push(data[i].title);
        }
        SortTitle(movies_array,data);
}
 function SortTitle(array,data)
 {
        array.sort(function (a, b)
        {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
        TitleIndex(array,data);
 }

 function TitleIndex(array,data)
 {
      let matchIndex = new Array();
      for (i =0; i < data.length; i++)
      {
          for (j = 0; j < data.length; j++)
          {
              if (array[i] == data[j].title)
              {
                  matchIndex.push(j);
              }
          }
      }
      titleHTML(array,data,matchIndex);
 }




function titleHTML(array,data,index)
{
    var movie_list = ""

    for (i =0; i<data.length; i++)
    {
        movie_list += "<p>" + "Title: " + array[i] + " Year: " + data[index[i]].year + " Cast: " + data[index[i]].cast;
    }
    movies_section.insertAdjacentHTML("beforeend",movie_list);
}

function yearHTML(data)
{
    var movie_list = ""

    for (i =data.length-1; i > 0; i--)
    {
        movie_list += "<p>" + "Year: " + data[i].year + " Title: " + data[i].title + " Cast: " + data[i].cast;
    }
    movies_section.insertAdjacentHTML("beforeend",movie_list);
}


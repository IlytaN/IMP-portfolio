function doStuff(){
  $.ajax({
    dataType: "jsonp",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
  });
}

function jsonCallback(json)
{
  console.log(json);
  $.each(json, function(index, element) {
        $('body').append($('<div>', {
            text: element.name
        }));
        $('body').append($('<a>', {
            text: element.email
        }));
    });
}

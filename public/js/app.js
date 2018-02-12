

$("#scrape").on("click", function() {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function(data) {
        console.log(data)
        window.location = "/"
    })
});


//Save Article button
$(".save").on("click", function() {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/save/" + thisId
    }).done(function(data) {
        window.location = "/"
    })
});


//Save Button
$(".saveNote").on("click", function() {
    var thisId = $(this).attr("data-id");
      $.ajax({
            method: "POST",
            url: "/notes",
          }).done(function(data) {
              console.log(data);
              window.location = "/saved"
          });
    }
});

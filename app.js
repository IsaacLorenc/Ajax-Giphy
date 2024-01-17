async function searchGiphy(searchTerm) {
    try {
      const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
      });
  
      let numResults = response.data.data.length;

      if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let gifUrl = response.data.data[randomIdx].images.original.url;

        let $newGif = $("<img>", {
          src: gifUrl,
          class: "col-md-4 col-12 mb-4"
        });

        $("#gif-area").append($newGif);
      } else {
        console.log("No results found for the search term:", searchTerm);
      }
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  }
  
  $("form").on("submit", function (event) {
    event.preventDefault();

    let searchTerm = $("#search").val();
  
    $("#search").val("");
    searchGiphy(searchTerm);
  });
  
  $("#remove").on("click", function () {
    $("#gif-area").empty();
  });
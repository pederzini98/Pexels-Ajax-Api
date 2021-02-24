$(document).ready(() => {
  $("#serach-form").on("submit", (e) => {
    let searchValue = $("#search-text").val();
    getContent(searchValue);
    e.preventDefault();
  });
});

//563492ad6f91700001000001d71dded66fec411f8174808b5aa8ca37

function getContent(searchValue) {
  console.log(searchValue);
  axios.get("https://api.pexels.com/v1/search?query=" + searchValue, {
      headers: {
        Authorization:
          "563492ad6f91700001000001d71dded66fec411f8174808b5aa8ca37",
      },
    })
    .then((response) => {
      let data = response.data.photos;
      let output = "";

      $.each(data, (index, photo) => {
        output += `
            <div class="col-md-3">
            <div class="well text-center">
              <img src="${photo.src.large}">
              <h5>${photo.photographer}</h5>
              <a onclick="photoSelected('${photo.id}')" class="btn " href="#">Photo Details</a>
            </div>
          </div>
            `;
      });

      $("#photos").html(output);
    })
    .catch((e) => {
      console.log(e);
    });
}
function photoSelected(id) {
  sessionStorage.setItem("photoId", id);
  window.location = "photo.html";
  return false;
}


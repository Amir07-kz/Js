fetch('https://api.artic.edu/api/v1/artworks')
    .then(response =>{
        return response.json();
    })
    .then(data => {
        let list = "";
        data.data.map((values) => {
            list += `
            <div class="modal-1-img">
            <img height="350" width="250" src="${values.thumbnail.lqip}"/>
            <p>Автор: ${values.artist_display}<p>
            <p>Город : ${values.place_of_origin}<p>
        </div>
        <div class="modal-1-word">
            <h2>${values.title}</h2>
            <br>
            <p>${values.publication_history}<p>
            <br>
            <p>${values.exhibition_history}<p>
        </div>`;
    })
     // const checkStatus = response => {
     //   if (response.ok) {
     // response.status >= 200 && response.status < 300
     //     return response;
     //   } else {
     //       throw new HTTPResponseError(response);
     //   }
     //   }
    document.getElementById("main-content").innerHTML = list;
});


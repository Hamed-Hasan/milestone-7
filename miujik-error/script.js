const elementById = (id) => document.getElementById(id);


const handleSearch = () => {
  const keyword = elementById("keyword");
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
 
  fetch(url)
    .then((res) => res.json())
    .then((data) => showArtists(data));
    document.getElementById('keyword').value = ''
};

const showArtists = (data) => {
  const artistContainer = elementById("artists");
  artistContainer.textContent = ''
  data?.artists?.forEach((artist) => {
    const div = document.createElement("div");
    div.classList.add("artist-card");
    div.innerHTML = `<div class="image-container">
    <div class="image-container-inner">
      <img
        src="${artist.strArtistThumb ? artist.strArtistThumb : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDSu1e5xdCvA29mo_nBSGUMcMei7fYeK6Eg&usqp=CAU'}"
        alt=""
      />
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist}</h1>
    <p>Country: ${artist.strCountry ? artist.strCountry : 'No Country'}</p>
    <p>Style: ${artist.strGenre ? artist.strGenre : 'No Any Style'}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
  </button>`;
    artistContainer.appendChild(div);
  });
};

const fetchAlbums = (id) => {
  const url = `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAlbum(data));
  const artistContainer = elementById("artists");
  artistContainer.innerHTML = "";
};

const showAlbum = (data) => {
  const albumContainer = elementById("albums");

  data.album.forEach((item) => {

    const div = document.createElement("div");
    div.classList.add("album");
    div.innerHTML = `
        <div class="album-image-container">
          <img
            src="${item.strAlbumThumb ? item.strAlbumThumb : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiF0nD34iXbedhiuKeJ_4lZI0KoQenzN3ORA&usqp=CAU'}"
            alt=""
          />
        </div>
        <div class="album-name">
          <h3>${item.strAlbum}</h3>
        </div>
      `;

    albumContainer.appendChild(div);
  });
};

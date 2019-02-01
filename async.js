// write a function to retrieve a blob of json
// make a ajax request! Use the fetch function
// http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   fetch('/api/music_albums')
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

const fetchAlbums = async () => {
  const res = await fetch('/api/music_albums');
  const json = await res.json();
  console.log(json);
};

fetchAlbums();

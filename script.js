const img = document.querySelector('img');
const refreshButton = document.querySelector('.refresh-button');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&s=cats', { mode: 'cors' })
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url;
  });

refreshButton.addEventListener('click', () => {
  window.location.reload();
});

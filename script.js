const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&s=cats', { mode: 'cors' })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });

const retrieveGif = () => {
  const img = document.querySelector('img');
  const refreshButton = document.querySelector('.refresh-button');
  const errorElement = document.querySelector('.error');

  const setURL = (searchInput) => {
    let url = '';
    if (searchInput) {
      url = `https://api.giphy.com/v1/gifs/translate?api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&s=${searchInput}`;
    } else {
      url = 'https://api.giphy.com/v1/gifs/translate?api_key=JCi4z2AIWowzJTWX7HtbX7OjQIeZEHpT&s=cats';
    }
    return url;
  };

  async function retrieveImage(url) {
    const response = await fetch(url, { mode: 'cors' });
    const gifData = await response.json();

    if (gifData) {
      img.src = gifData.data.images.original.url;
      errorElement.style.display = 'none';
    } else {
      errorElement.style.display = 'block';
    }
  }

  const userInput = () => {
    const searchButton = document.querySelector('.search');

    searchButton.addEventListener('click', (event) => {
      const inputField = document.querySelector('#input');
      let enteredValue = '';

      event.preventDefault();
      enteredValue = inputField.value;
      retrieveImage(setURL(enteredValue));
    });
  };

  const newGif = () => {
    refreshButton.addEventListener('click', () => {
      retrieveImage(setURL('cat'));
    });
  };

  retrieveImage(setURL(userInput()));
  newGif();
};

retrieveGif();

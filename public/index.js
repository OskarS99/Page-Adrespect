window.onload = () => {
  const elem = document.querySelector('.grid');

  const masnr = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
  });
};

const search = document.querySelector('#search');
const serchBar = document.querySelector('#searchBar');

//Searchbar

search.addEventListener('click', () => {
  if (serchBar.classList.contains('w-0')) {
    searchBar.classList.add('w-40');
    searchBar.classList.remove('w-0');
  } else {
    searchBar.classList.add('w-0');
    searchBar.classList.remove('w-40');
  }
});

//Dropdown menu

const button = document.querySelector('#button');
const slideList = document.querySelector('#list');

button.addEventListener('click', () => {
  if (slideList.classList.contains('hidden')) {
    slideList.classList.remove('hidden');
  } else {
    slideList.classList.add('hidden');
  }
});

//popup image

const photos = document.querySelectorAll('.grid-item');
const popup = document.querySelector('.popup-image');
photos.forEach((photo) => {
  photo.onclick = () => {
    popup.classList.remove('hidden');
    document.querySelector('.popup-image img').src = photo.getAttribute('src');
  };
});
popup.onclick = () => {
  document.querySelector('.popup-image').classList.add('hidden');
};

//more iamge

const loadMore = document.querySelector('#load-more');
const imgs = 18;
const gradient = document.querySelector('.gradient');
const buttonText = document.querySelector('.button-text');

loadMore.addEventListener('click', () => {
  buttonText.innerHTML = gradient.classList.contains('opacity-0')
    ? 'Rozwiń'
    : 'Zwiń';
  let img = [...document.querySelectorAll('.grid-item')];
  for (let i = 9; i <= imgs - 1; i++) {
    img[i].classList.toggle('opacity-100');
  }
});

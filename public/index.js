const elem = document.querySelector('.grid');

const masnr = new Masonry(elem, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true,
});

//Searchbar

const search = document.querySelector('#search');
const serchBar = document.querySelector('#searchBar');

search.addEventListener('click', () => {
  searchBar.classList.toggle('w-0');
  searchBar.classList.toggle('w-40');
  searchBar.classList.toggle('invisible');
});

//Dropdown menu

const button = document.querySelector('#button');
const slideList = document.querySelector('#list');

button.addEventListener('click', () => {
  slideList.classList.contains('hidden')
    ? slideList.classList.remove('hidden')
    : slideList.classList.add('hidden');
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
const imgs = 13;
const gradient = document.querySelector('.gradient');
const buttonText = document.querySelector('.button-text');
const morePhotos = document.querySelector('.more-photos');

loadMore.addEventListener('click', () => {
  let img = [...document.querySelectorAll('.grid-item')];
  for (let i = 9; i <= imgs - 1; i++) {
    img[i].classList.toggle('opacity-0');
  }
  buttonText.innerHTML = gradient.classList.contains('opacity-0')
    ? 'Rozwiń'
    : 'Zwiń';
  gradient.classList.toggle('opacity-0');
});

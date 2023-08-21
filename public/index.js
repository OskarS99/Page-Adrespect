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

//Slider section

const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const images = document.querySelector('#images').children;
const totalImages = images.length;
let currentIndex = 0;

next.addEventListener('click', () => {
  images[currentIndex].classList.add('hidden');
  if (currentIndex === totalImages - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  images[currentIndex].classList.remove('hidden');
});

previous.addEventListener('click', () => {
  images[currentIndex].classList.add('hidden');
  if (currentIndex === 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex--;
  }
  images[currentIndex].classList.remove('hidden');
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
const imgs = 9;
const gradient = document.querySelector('.gradient');
const buttonText = document.querySelector('.button-text');

loadMore.addEventListener('click', () => {
  buttonText.innerHTML = gradient.classList.contains('opacity-0')
    ? 'Rozwiń'
    : 'Zwiń';
  let img = [...document.querySelectorAll('.grid-item')];
  for (let i = 3; i <= imgs - 1; i++) {
    img[i].classList.toggle('opacity-100');
  }
  gradient.classList.toggle('opacity-0');
});

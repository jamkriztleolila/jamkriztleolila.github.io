
import baek from '../imgs/baek.png';
import img from '../imgs/me-red1-500.jpg';
import img1 from '../imgs/me.jpg';
import intro from '../imgs/intro-me.jpg';
import raket from '../imgs/raket-sprite.png';

export const imageGridOptions = {
  imgSrc: img,
  imgSrc2: img1,
  containerName: 'me-placeholder',
  rows:5,
  columns:5,
  margin:2,
  animTime:0.3
};

export const carouselSettings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000
};
export const cardContentItems = [
  {
    leftText: 'posters',
    rightText: '2023',
    thumbnail: baek,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
  }, 
  {
    leftText: 'posters',
    rightText: '2023',
    thumbnail: baek,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    leftText: 'posters',
    rightText: '2023',
    thumbnail: baek,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
  },
  {
    leftText: 'posters',
    rightText: '2023',
    thumbnail: baek,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
  },
];

export const productCarousel = [
  {
    name: 'Raket',
    date: '2023',
    type: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    img: raket
  },
  {
    name: 'asdasd',
    date: '2023',
    type: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    img: raket
  },
];
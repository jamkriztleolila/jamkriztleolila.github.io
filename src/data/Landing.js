import img from '../imgs/landing-6.jpg';
import img1 from '../imgs/landing-11.jpg';
//cards
import posterCard from '../imgs/poster.png';
import webdesCard from '../imgs/webdes.png';
import devCard from '../imgs/mobile.png';
import designCard from '../imgs/book.jpg';
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
  autoplay: true,
  autoplaySpeed: 2000
};
export const cardContentItems = [
  {
    leftText: 'Graphic Design',
    rightText: '2023',
    thumbnail: designCard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    filter: 'Graphic Design'
  },
  {
    leftText: 'posters',
    rightText: '2023',
    thumbnail: posterCard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    filter: 'Graphic Design'
  }, 
  {
    leftText: 'Web design',
    rightText: '2023',
    thumbnail: webdesCard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    filter: 'UI/UX design'
  },
  {
    leftText: 'Development',
    rightText: '2023',
    thumbnail: devCard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    filter: 'Development'
  },
];
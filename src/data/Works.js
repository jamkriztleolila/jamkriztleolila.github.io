//thumbnails
import raket_t from '../imgs/works/raket/thumbnail.jpg';
import raket1 from '../imgs/works/raket/1.jpg';
import raket2 from '../imgs/works/raket/2.jpg';
import raket3 from '../imgs/works/raket/credits.jpg';

import gobiker_t from '../imgs/works/gobiker/thumbnail.jpg';
import gobiker1 from '../imgs/works/gobiker/1.jpg';
import gobiker2 from '../imgs/works/gobiker/2.jpg';
import gobiker3 from '../imgs/works/gobiker/3.jpg';
import gobiker4 from '../imgs/works/gobiker/4.jpg';
import gobiker5 from '../imgs/works/gobiker/credits.jpg';

import kitads_t from '../imgs/works/kitads/thumbnail.jpg';
import kitads1 from '../imgs/works/kitads/1.jpg';
import kitads2 from '../imgs/works/kitads/2.jpg';
import kitads3 from '../imgs/works/kitads/3.jpg';
import kitads4 from '../imgs/works/kitads/4.jpg';
import kitads5 from '../imgs/works/kitads/credits.jpg';

import smooth_t from '../imgs/works/smoothboard/thumbnail.jpg';
import smooth1 from '../imgs/works/smoothboard/1.jpg';
import smooth2 from '../imgs/works/smoothboard/2.jpg';
import smooth3 from '../imgs/works/smoothboard/credits.jpg';

import siargao_t from '../imgs/works/siargao/thumbnail.jpg';
import siargao1 from '../imgs/works/siargao/1.jpg';
import siargao2 from '../imgs/works/siargao/2.jpg';
import siargao3 from '../imgs/works/siargao/credits.jpg';

import bambini_t from '../imgs/works/bambini/thumbnail.jpg';
import bambini1 from '../imgs/works/bambini/1.jpg';
import bambini2 from '../imgs/works/bambini/2.jpg';
import bambini3 from '../imgs/works/bambini/credits.jpg';

import book_t from '../imgs/works/pb/thumbnail.jpg';
import book1 from '../imgs/works/pb/1.jpg';
import book2 from '../imgs/works/pb/2.jpg';
import book3 from '../imgs/works/pb/3.jpg';
import book4 from '../imgs/works/pb/4.jpg';
import book5 from '../imgs/works/pb/5.jpg';
import book6 from '../imgs/works/pb/6.jpg';
import book7 from '../imgs/works/pb/7.jpg';
import book8 from '../imgs/works/pb/8.jpg';
import book9 from '../imgs/works/pb/9.jpg';
import book10 from '../imgs/works/pb/credits.jpg';

import chooco1 from '../imgs/works/chooco/1.jpg';
import chooco2 from '../imgs/works/chooco/2.jpg';
import chooco_t from '../imgs/works/chooco/chooco-sample.png';
import chooco_credits from '../imgs/works/chooco/chooco credits.jpg';
import p1 from '../imgs/works/p1.jpg';
import p2 from '../imgs/works/p2.jpg';
import p3 from '../imgs/works/p3.jpg';
import p4 from '../imgs/works/p4.jpg';
import p5 from '../imgs/works/p5.jpg';
import p6 from '../imgs/works/p6.jpg';
import p7 from '../imgs/works/p7.jpg';
import p8 from '../imgs/works/p8.jpg';
import p9 from '../imgs/works/p9.jpg';

import quaranta from '../imgs/works/Posters/quaranta.jpg';
import tc from '../imgs/works/Posters/tc.jpg';
import sd from '../imgs/works/Posters/sd.jpg';
import sb from '../imgs/works/Posters/sb.jpg';
import rc from '../imgs/works/Posters/rc.jpg';
import tio from '../imgs/works/Posters/tio.png';
import wfe from '../imgs/works/Posters/wfe.jpg';
import boxer from '../imgs/works/Posters/boxer.jpg';
import uw from '../imgs/works/Posters/uw.jpg';


//TAGS
const UI_UX = 'ui/ux';
const MOBILE = 'mobile';
const WEB = 'web';
const GRAPHIC_DESIGN = 'graphic design';
const POSTER = 'poster';
const LOGO = 'logo';
const DEVELOPMENT = 'development';

export const fullCollection = [
  {
    id: 17,
    title: 'Chooco',
    type: 'Graphic Design',
    pictures: [chooco1, chooco2, chooco_credits],
    text: 'Chooco is a a mock product to showcase my skills in product and banner design.',
    thumbnail: chooco_t,
    date:'2023',
    tags: [GRAPHIC_DESIGN]
  },
  {
    id: 16,
    title: 'Raket',
    type: 'UI/UX design',
    pictures: [raket1, raket2, raket3],
    text: 'Raket! is a mobile application with the goal to automate job process and help Filipino jobseekers that are near their area and fit for their skillset and give small businesses/employers the ability to acquire manpower quickly and effeciently',
    thumbnail: raket_t,
    date:'2020',
    tags: [UI_UX, MOBILE]
  },
  {
    id: 15,
    title: 'Go Biker',
    type: 'UI/UX Design & Development',
    pictures: [gobiker1, gobiker2, gobiker3, gobiker4, gobiker5],
    text: 'Go Biker is an android app for bikers where they can track their rides and connect with other bikers',
    thumbnail: gobiker_t,
    date:'2020',
    tags: [LOGO, UI_UX, MOBILE, DEVELOPMENT]
  },
  {
    id: 14,
    title: 'Bambini',
    type: 'UI/UX Design & Development',
    pictures: [bambini1, bambini2, bambini3],
    text: 'Bambini Photography is a portrait studio based in Singapore. I designed and coded the booking system UI on their website for their customers',
    thumbnail: bambini_t,
    date:'2019',
    tags: [UI_UX, WEB, DEVELOPMENT]
  },
  {
    id: 13,
    title: 'Smoothboard',
    type: 'UI/UX Design & Development',
    pictures: [smooth1, smooth2, smooth3],
    text: 'Smoothboard app is a React Native application to help user book their bus ticket. Based in Singapore',
    thumbnail: smooth_t,
    date:'2019',
    tags: [UI_UX, MOBILE, DEVELOPMENT]
  },
  {
    id: 12,
    title: 'Kitads',
    type: 'UI/UX Design & Development',
    pictures: [kitads1, kitads2, kitads3, kitads4, kitads5],
    text: 'An advertising application for businesses, making advertisment more accessible to users and consumers',
    thumbnail: kitads_t,
    date:'2019',
    tags: [LOGO, UI_UX, MOBILE, GRAPHIC_DESIGN]
  },
  {
    id: 11,
    title: 'Siargao Surfers',
    type: 'UI/UX Design & Development',
    pictures: [siargao1, siargao2, siargao3],
    text: 'A website template for resort',
    thumbnail: siargao_t,
    date:'2018',
    tags: [UI_UX, WEB, DEVELOPMENT]
  },
  {
    id: 10,
    title: 'FEU Tech Summit 3.0',
    type: 'Graphic Design',
    pictures: [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10],
    text: 'Graphic materials for a school event',
    thumbnail: book_t,
    date:'2018',
    tags: [GRAPHIC_DESIGN, LOGO]
  },
  {
    id: 9,
    title: 'Santa Quaranta',
    type: 'Graphic Design',
    pictures: [quaranta],
    thumbnail: p1,
    date:'2021',
    tags: [POSTER]
  },
  {
    id: 8,
    title: 'Tunnel Caprica',
    type: 'Graphic Design',
    pictures: [tc],
    thumbnail: p2,
    date:'2021',
    tags: [POSTER]
  },
  {
    id: 7,
    title: 'Underwater',
    type: 'Graphic Design',
    pictures: [uw],
    thumbnail: p3,
    date:'2021',
    tags: [POSTER]
  },
  {
    id: 6,
    title: 'Skinny Dip',
    type: 'Graphic Design',
    pictures: [sd],
    thumbnail: p4,
    date:'2021',
    tags: [POSTER]
  },
  {
    id: 5,
    title: 'Rollercoaster',
    type: 'Graphic Design',
    pictures: [rc],
    thumbnail: p5,
    date:'2021',
    tags: [POSTER]
  },
  {
    id: 4,
    title: 'Spellbound',
    type: 'Graphic Design',
    pictures: [sb],
    thumbnail: p6,
    date:'2021',
    tags: [POSTER]
  },
  {
    id: 3,
    title: 'The Imaginary One',
    type: 'Graphic Design',
    pictures: [tio],
    thumbnail: p7,
    date:'2020',
    tags: [POSTER]
  },
  {
    id: 2,
    title: 'The Boxer',
    type: 'Graphic Design',
    pictures: [boxer],
    thumbnail: p8,
    date:'2020',
    tags: [POSTER]
  },
  {
    id: 1,
    title: 'Wanted For Error',
    type: 'Graphic Design',
    pictures: [wfe],
    thumbnail: p9,
    date:'2020',
    tags: [POSTER]
  },
];
function collectData() {
  let result = [];
  fullCollection.forEach((item) => {
    result.push({
      id: item.id,
      title: item.title,
      type: item.type,
      thumbnail: item.thumbnail
    });

  });
  console.log(result);
  return result;
}
export const collection = collectData();
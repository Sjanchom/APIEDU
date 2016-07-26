import WelcomeText from '../../src/models/Welcometext';
import ImageType from '../../src/models/ImageType';
import News from '../../src/models/News';



export const AUTO_INCREMENT = ["ImageType"];
export const FIND_TOP_NEWS = ["News"];
export const LIST_WELCOME_TEXT = [
    new WelcomeText({
        imgpath: 'index/welcome/1.jpg',
        detail: 'ข้อความที่ 1 ',
        title: 'หัวข้อที่ 1 '
    }),
    new WelcomeText({
        imgpath: 'index/welcome/2.jpg',
        detail: 'ข้อความที่ 2 ',
        title: 'หัวข้อที่ 2 '
    }),
    new WelcomeText({
        imgpath: 'index/welcome/1.jpg',
        detail: 'ข้อความที่ 3 ',
        title: 'หัวข้อที่ 3 '
    })
];

export const IMAGE_TYPE = [
  new ImageType({name:'ชื่อที่ 1'}),
  new ImageType({name:'ชื่อที่ 2'}),
  new ImageType({name:'ชื่อที่ 3'}),
];

export const NEWS_DETAIL = [
  new News({
    title:'หัวข้อข่าว 1',
    imgpath:'news/1.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 1',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 2',
    imgpath:'news/2.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 2',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 3',
    imgpath:'news/3.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 3',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 4',
    imgpath:'news/4.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 4',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 5',
    imgpath:'news/5.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 5',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 6',
    imgpath:'news/6.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 6',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 7',
    imgpath:'news/7.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 7',
    topnews:false
  }),new News({
    title:'หัวข้อข่าว 8',
    imgpath:'news/8.jpg',
    detail:'รายละเอียดข่าวสารต่างๆที่ 8',
    topnews:true
  }),
];

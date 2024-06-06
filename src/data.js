import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLink = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 11, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 12, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 13, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const service = [
  {
    id: 21,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 22,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 23,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
]

export const tours = [
  {
    id: 31,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 32,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 33,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 34,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: 20,
    price: 3300,
  },
]

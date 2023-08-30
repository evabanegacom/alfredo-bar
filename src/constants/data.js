import images from './images';

const wines = [
  {
    title: 'Heineken',
    price: 'NGN 1000',
    tags: 'Beer | Bottle',
  },
  {
    title: 'Desperado',
    price: 'NGN 1000',
    tags: 'Beer | Bottle',
  },
  {
    title: 'Trophy',
    price: 'NGN 700',
    tags: 'Beer | Bottle',
  },
  {
    title: 'Domino wine',
    price: 'NGN 10000',
    tags: 'Wine | 750 ml',
  },
  {
    title: 'Edward Classic',
    price: 'NGN 10000',
    tags: 'Wine | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Bar Bomber',
    price: 'NGN 2000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Virgin Colada',
    price: 'NGN 2500',
    tags: 'Colada | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Screaming Orgasm',
    price: 'NGN 3000',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Audios Motherfucker',
    price: 'NGN 4000',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Smoothie Jug',
    price: 'NGN 5000',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };

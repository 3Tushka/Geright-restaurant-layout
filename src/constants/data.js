import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
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

const customers = [
  {
    imageCustUrl: images.customer1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    nameCus: 'Wade Warren',
    positionCus: 'Sommelier'
  },

  {
    imageCustUrl: images.customer2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    nameCus: 'Jane Cooper',
    positionCus: 'Chef'
  },
  {
    imageCustUrl: images.customer3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    nameCus: 'Robert Fox',
    positionCus: 'Chef'
  },
  {
    imageCustUrl: images.customer4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
    nameCus: 'Brooklyn Simmons',
    positionCus: 'Caterer'
  },
];

const blog = [
  {
    blogImageUrl: images.blog1,
    blogDate: '11 Apr 2021',
    blogName: 'Annalisa L',
    blogTitle: 'tips for prepping and caring for your grill',
    blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
  },

  {
    blogImageUrl: images.blog2,
    blogDate: '23 May 2021',
    blogName: 'John Michael',
    blogTitle: 'summer cocktails and mocktails',
    blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
  },

  {
    blogImageUrl: images.blog3,
    blogDate: '06 Aug 2021',
    blogName: 'Fred W',
    blogTitle: 'easy cooking for college students',
    blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
  },
];

const frequentQuestions = [
  {
    qestion: 'How do i reach to the restaurant?',
    answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },

  {
    qestion: 'Is there a reservation required?',
    answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },

  {
    qestion: 'Can i host an event at The restaurant?',
    answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },

  {
    qestion: 'Is valet parking available at the restaurant?',
    answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    qestion: 'When are the happy hours of your bar?',
    answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    qestion: 'Is seafood available at the restaurant?',
    answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

const chefs = [
  {
    chefImage: images.cook1,
    chefName: 'Kevin Luo',
    chefPosition: 'Head Chef',
  },

  {
    chefImage: images.cook2,
    chefName: 'Patrick Choi',
    chefPosition: 'Deputy Chef',
  },

  {
    chefImage: images.cook3,
    chefName: 'Jack Biscoff',
    chefPosition: 'Station Chef',
  },

  {
    chefImage: images.cook4,
    chefName: 'Stacy Lee',
    chefPosition: 'Station Chef',
  },

  {
    chefImage: images.cook5,
    chefName: 'Aren Goodman',
    chefPosition: 'Junior Chef',
  },

  {
    chefImage: images.cook6,
    chefName: 'Javier Dowsing',
    chefPosition: 'Junior Chef',
  },
];

export default { wines, cocktails, awards, customers, blog, frequentQuestions, chefs };

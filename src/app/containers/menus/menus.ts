export const MENU = [
  {
    id: 1,
    label: 'Cocktail',
    description: 'some description for cocktail',
    parent: null,
    products: [
      {
        label: 'Cocktail 1',
        description: 'Stoli Vodka, Lychee, Lemon, Cranberry Juice, Orange Juice',
        product_meta: {
          price: 14.00
        }
      },
      {
        label: 'Cocktail 2',
        description: 'Jalapeno Infused Tequila, Cucumber, Lime Juice',
        product_meta: {
          price: 14.00
        }
      },
      {
        label: 'Cocktail 3',
        description: 'Riesling, Strawberry Liquer, Sprite, Splash Lime',
        product_meta: {
          price: 14.00
        }
      },
      {
        label: 'Cocktail 4',
        description: `Bailey's, Grand Manier, Pineapple`,
        product_meta: {
          price: 14.00
        }
      },
      {
        label: 'Cocktail 5',
        description: 'Ciroc Peach, Sour Apple, Cranberry',
        product_meta: {
          price: 14.00
        }
      },
      {
        label: 'Cocktail 6',
        description: 'Rum, Mint, Simple Syrup, Club Soda, lime Juice',
        product_meta: {
          price: 14.00
        }
      },
      {
        label: 'Cocktail 7',
        description: 'Malibu, Captain Morgan, Bacard, Orange Juice',
        product_meta: {
          price: 14.00
        }
      }
    ]
  },
  {
    id: 2,
    label: 'Beer',
    description: 'some description for beer',
    parent: null,
    products: [
      {
        label: 'Bud Light',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Amstel Light',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Blue Moon',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Heineken',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Stella',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Brooklyn Lager',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Sapporo',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Asahi',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Angry Orchard',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      },
      {
        label: 'Guiness',
        description: null,
        product_meta: {
          pint: 8.00,
          pitcher: 25.00
        }
      }
    ]
  },
  {
    id: 3,
    label: 'Soju',
    description: 'some description for soju',
    parent: null,
    products: [
      {
        label: 'Chamisul Fresh',
        description: null,
        product_meta: {
          price: 25.00
        }
      },
      {
        label: 'Soju Cocktail',
        description: 'Lycgee, Yogurt, Strawberry, Mango, Lemon, Peach, Apple',
        product_meta: {
          carafe: 30,
          pitcher: 45.00
        }
      }
    ]
  },
  {
    id: 4,
    label: 'Soft Drink',
    description: null,
    parent: null
  },
  {
    id: 5,
    label: 'Spirit',
    description: null,
    parent: null,
    children: [
      {
        id: 6,
        label: 'Whiskey',
        description: null,
        parent: 5
      },
      {
        id: 7,
        label: 'Single Malt',
        description: null,
        parent: 5
      },
      {
        id: 8,
        label: 'Bourbon',
        description: null,
        parent: 5
      },
      {
        id: 9,
        label: 'Gin',
        description: null,
        parent: 5
      },
      {
        id: 10,
        label: 'Rum',
        description: null,
        parent: 5
      },
      {
        id: 11,
        label: 'Vodka',
        description: null,
        parent: 5
      },
      {
        id: 12,
        label: 'Tequila',
        description: null,
        parent: 5
      }
    ]
  },
  {
    id: 13,
    label: 'Wine',
    description: null,
    parent: null,
    children: [
      {
        id: 14,
        label: 'Red',
        description: null,
        parent: 13
      },
      {
        id: 15,
        label: 'White',
        description: null,
        parent: 13
      },
      {
        id: 16,
        label: 'Sparkling',
        description: null,
        parent: 13
      },
      {
        id: 17,
        label: 'Champagne',
        description: null,
        parent: 13
      }
    ]
  }
];

const APP_MENU = {
  drinks: [
    {
      label: 'Cocktail', price: 14.00, list: [
      { label: 'Cocktail 1', description: 'Stoli Vodka, Lychee, Lemon, Cranberry Juice, Orange Juice'},
      { label: 'Cocktail 2', description: 'Jalapeno Infused Tequila, Cucumber, Lime Juice'},
      { label: 'Cocktail 3', description: 'Riesling, Strawberry Liquer, Sprite, Splash Lime'},
      { label: 'Cocktail 4', description: `Bailey's, Grand Manier, Pineapple`},
      { label: 'Cocktail 5', description: 'Ciroc Peach, Sour Apple, Cranberry'},
      { label: 'Cocktail 6', description: 'Rum, Mint, Simple Syrup, Club Soda, lime Juice'},
      { label: 'Cocktail 7', description: 'Malibu, Captain Morgan, Bacard, Orange Juice'}
    ]
    },
    {
      label: 'Beer', list: [
      { label: 'Bud Light', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Corona Light', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Amstel Light', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Blue Moon', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Heineken', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Stella', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Brooklyn Lager', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Sapporo', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Asahi', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Angry Orchard', price: { pint: 8.00, pitcher: 25.00 } },
      { label: 'Guiness', price: { pint: 8.00, pitcher: 25.00 } },
    ]
    },
    {
      label: 'Soju', list: [
      { label: 'Chamisul Fresh', price: 25.00 },
      {
        label: 'Soju Cocktail',
        price: { carafe: 30, pitcher: 45.00 },
        description: 'Lycgee, Yogurt, Strawberry, Mango, Lemon, Peach, Apple'
      }
    ]
    },
    {
      label: 'Soft Drinks', list: [
      { label: 'Juice', description: 'Cranberry, Pinnapple, Orange', price: 4},
      { label: 'Soda', description: 'Coke, Sprite, Ginger Ale', price: 3},
      { label: 'Water', price: 2},
      { label: 'Red Bull', price: 5}
    ]
    },
    {
      label: 'Sprits',
      list: [
        { label: 'Whiskey', list: [
          { label: 'Ballentine 12 yr', price: { shot: 8.00, '4oz': 14.00 } },
          { label: 'Ballentine 12 yr', price: { shot: 8.00, '4oz': 14.00 } },
        ] },
        { label: 'Single Malt', list: [] },
        { label: 'Bourbon', list: [] },
        { label: 'Gin', list: [] },
        { label: 'Rum', list: [] },
        { label: 'Vodka', list: [] },
        { label: 'Tequila', list: [] },
        { label: 'Brandy', list: [] },
      ]
    },
    {
      label: 'Wine',
      list: [
        { label: 'Red', list: [] },
        { label: 'White', list: [] },
        { label: 'Sparkling', list: [] },
        { label: 'Champagne', list: [] }
      ]
    },
  ],
  foods: [],
  packages: []
};

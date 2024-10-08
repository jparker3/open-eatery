const restHours = [
  {
    name: 'Kushi Tsuru',
    times: ['Mon-Thu, Sun 11:30 am - 9 pm', 'Fri-Sat 11:30 am - 9:30 pm'],
  },
  {
    name: 'Osakaya Restaurant',
    times: ['Mon-Thu, Sun 11:30 am - 9 pm', 'Fri-Sat 11:30 am - 9:30 pm'],
  },
  {
    name: 'The Stinking Rose',
    times: ['Mon-Thu, Sun 11:30 am - 10 pm', 'Fri-Sat 11:30 am - 11 pm'],
  },
  {
    name: "McCormick & Kuleto's",
    times: ['Mon-Thu, Sun 11:30 am - 10 pm', 'Fri-Sat 11:30 am - 11 pm'],
  },
  {
    name: 'Mifune Restaurant',
    times: ['Mon-Sun 11 am - 10 pm'],
  },
  {
    name: 'The Cheesecake Factory',
    times: [
      'Mon-Thu 11 am - 11 pm',
      'Fri-Sat 11 am - 12:30 am',
      'Sun 10 am - 11 pm',
    ],
  },
  {
    name: 'New Delhi Indian Restaurant',
    times: ['Mon-Sat 11:30 am - 10 pm', 'Sun 5:30 pm - 10 pm'],
  },
  {
    name: 'Iroha Restaurant',
    times: ['Mon-Thu, Sun 11:30 am - 9:30 pm', 'Fri-Sat 11:30 am - 10 pm'],
  },
  {
    name: 'Rose Pistola',
    times: ['Mon-Thu 11:30 am - 10 pm', 'Fri-Sun 11:30 am - 11 pm'],
  },
  {
    name: "Alioto's Restaurant",
    times: ['Mon-Sun 11 am - 11 pm'],
  },
  {
    name: 'Canton Seafood & Dim Sum Restaurant',
    times: ['Mon-Fri 10:30 am - 9:30 pm', 'Sat-Sun 10 am - 9:30 pm'],
  },
  {
    name: 'All Season Restaurant',
    times: ['Mon-Fri 10 am - 9:30 pm', 'Sat-Sun 9:30 am - 9:30 pm'],
  },
  {
    name: 'Bombay Indian Restaurant',
    times: ['Mon-Sun 11:30 am - 10:30 pm'],
  },
  {
    name: "Sam's Grill & Seafood Restaurant",
    times: ['Mon-Fri 11 am - 9 pm', 'Sat 5 pm - 9 pm'],
  },
  {
    name: '2G Japanese Brasserie',
    times: ['Mon-Thu, Sun 11 am - 10 pm', 'Fri-Sat 11 am - 11 pm'],
  },
  {
    name: 'Restaurant Lulu',
    times: ['Mon-Thu, Sun 11:30 am - 9 pm', 'Fri-Sat 11:30 am - 10 pm'],
  },
  {
    name: 'Sudachi',
    times: [
      'Mon-Wed 5 pm - 12:30 am',
      'Thu-Fri 5 pm - 1:30 am',
      'Sat 3 pm - 1:30 am',
      'Sun 3 pm - 11:30 pm',
    ],
  },
  {
    name: 'Hanuri',
    times: ['Mon-Sun 11 am - 12 am'],
  },
  {
    name: 'Herbivore',
    times: ['Mon-Thu, Sun 9 am - 10 pm', 'Fri-Sat 9 am - 11 pm'],
  },
  {
    name: 'Penang Garden',
    times: [
      'Mon-Thu 11 am - 10 pm',
      'Fri-Sat 10 am - 10:30 pm',
      'Sun 11 am - 11 pm',
    ],
  },
  {
    name: "John's Grill",
    times: ['Mon-Sat 11 am - 10 pm', 'Sun 12 pm - 10 pm'],
  },
  {
    name: 'Quan Bac',
    times: ['Mon-Sun 11 am - 10 pm'],
  },
  {
    name: 'Bamboo Restaurant',
    times: ['Mon-Sat 11 am - 12 am', 'Sun 12 pm - 12 am'],
  },
  {
    name: 'Burger Bar',
    times: ['Mon-Thu, Sun 11 am - 10 pm', 'Fri-Sat 11 am - 12 am'],
  },
  {
    name: 'Blu Restaurant',
    times: ['Mon-Fri 11:30 am - 10 pm', 'Sat-Sun 7 am - 3 pm'],
  },
  {
    name: "Naan 'N' Curry",
    times: ['Mon-Sun 11 am - 4 am'],
  },
  {
    name: 'Shanghai China Restaurant',
    times: ['Mon-Sun 11 am - 9:30 pm'],
  },
  {
    name: 'Tres',
    times: ['Mon-Thu, Sun 11:30 am - 10 pm', 'Fri-Sat 11:30 am - 11 pm'],
  },
  {
    name: 'Isobune Sushi',
    times: ['Mon-Sun 11:30 am - 9:30 pm'],
  },
  {
    name: 'Viva Pizza Restaurant',
    times: ['Mon-Sun 11 am - 12 am'],
  },
  {
    name: 'Far East Cafe',
    times: ['Mon-Sun 11:30 am - 10 pm'],
  },
  {
    name: 'Parallel 37',
    times: ['Mon-Sun 11:30 am - 10 pm'],
  },
  {
    name: 'Bai Thong Thai Cuisine',
    times: ['Mon-Sat 11 am - 11 pm', 'Sun 11 am - 10 pm'],
  },
  {
    name: 'Alhamra',
    times: ['Mon-Sun 11 am - 11 pm'],
  },
  {
    name: 'A-1 Cafe Restaurant',
    times: ['Mon, Wed-Sun 11 am - 10 pm'],
  },
  {
    name: "Nick's Lighthouse",
    times: ['Mon-Sun 11 am - 10:30 pm'],
  },
  {
    name: 'Paragon Restaurant & Bar',
    times: ['Mon-Fri 11:30 am - 10 pm', 'Sat 5:30 pm - 10 pm'],
  },
  {
    name: 'Chili Lemon Garlic',
    times: ['Mon-Fri 11 am - 10 pm', 'Sat-Sun 5 pm - 10 pm'],
  },
  {
    name: 'Bow Hon Restaurant',
    times: ['Mon-Sun 11 am - 10:30 pm'],
  },
  {
    name: 'San Dong House',
    times: ['Mon-Sun 11 am - 11 pm'],
  },
  {
    name: 'Thai Stick Restaurant',
    times: ['Mon-Sun 11 am - 1 am'],
  },
  {
    name: "Cesario's",
    times: ['Mon-Thu, Sun 11:30 am - 10 pm', 'Fri-Sat 11:30 am - 10:30 pm'],
  },
  {
    name: 'Colombini Italian Cafe Bistro',
    times: ['Mon-Fri 12 pm - 10 pm', 'Sat-Sun 5 pm - 10 pm'],
  },
  {
    name: 'Sabella & La Torre',
    times: ['Mon-Thu, Sun 10 am - 10:30 pm', 'Fri-Sat 10 am - 12:30 am'],
  },
  {
    name: 'Soluna Cafe and Lounge',
    times: ['Mon-Fri 11:30 am - 10 pm', 'Sat 5 pm - 10 pm'],
  },
  {
    name: 'Tong Palace',
    times: ['Mon-Fri 9 am - 9:30 pm', 'Sat-Sun 9 am - 10 pm'],
  },
  {
    name: 'India Garden Restaurant',
    times: ['Mon-Sun 10 am - 11 pm'],
  },
  {
    name: 'Sapporo-Ya Japanese Restaurant',
    times: ['Mon-Sat 11 am - 11 pm', 'Sun 11 am - 10:30 pm'],
  },
  {
    name: "Santorini's Mediterranean Cuisine",
    times: ['Mon-Sun 8 am - 10:30 pm'],
  },
  {
    name: 'Kyoto Sushi',
    times: [
      'Mon-Thu 11 am - 10:30 pm',
      'Fri 11 am - 11 pm',
      'Sat 11:30 am - 11 pm',
      'Sun 4:30 pm - 10:30 pm',
    ],
  },
  {
    name: 'Marrakech Moroccan Restaurant',
    times: ['Mon-Sun 5:30 pm - 2 am'],
  },
]
export default restHours

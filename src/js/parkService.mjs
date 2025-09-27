const park = {
  id: "F58C6D24-8D10-4573-9826-65D42B8B83AD",
  url: "https://www.nps.gov/yell/index.htm",
  fullName: "Yellowstone National Park",
  parkCode: "yell",
  description:
    "On March 1, 1872, Yellowstone became the first national park for everyone to enjoy the hydrothermal wonders. Millions visit each year to camp, hike, and explore the park.",
  latitude: "44.59824417",
  longitude: "-110.5471695",
  latLong: "lat:44.59824417, long:-110.5471695",
  states: "ID,MT,WY",
  contacts: {
    phoneNumbers: [
      { phoneNumber: "307-344-7381", type: "Voice" },
      { phoneNumber: "307-344-2014", type: "Fax" },
      { phoneNumber: "307-344-2386", type: "TTY" }
    ],
    emailAddresses: [
      {
        description:
          "Contact Yellowstone's rangers for general questions, lost and found, or special permits.",
        emailAddress: "YELL_Information@nps.gov"
      }
    ]
  },
  addresses: [
    {
      postalCode: "82190",
      city: "Yellowstone National Park",
      stateCode: "WY",
      line1: "2 Officers Row",
      line2: "Yellowstone National Park Headquarters",
      type: "Physical"
    },
    {
      postalCode: "82190-0168",
      city: "Yellowstone National Park",
      stateCode: "WY",
      line1: "PO Box 168",
      type: "Mailing"
    }
  ],
  directionsInfo:
    "Yellowstone covers 3,500 sq miles in NW Wyoming (3% in Montana, 1% in Idaho). Several entrances close in winter; drive times vary. Check road status before visiting.",
  directionsUrl: "http://www.nps.gov/yell/planyourvisit/directions.htm",
  images: [
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg", title: "Grand Prismatic Spring", altText: "Bright blues and greens of a hot spring.", caption: "Colors come from thermophiles." },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg", title: "Aurum Geyser", altText: "People watch a geyser erupt.", caption: "Aurum Geyser erupting" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg", title: "Black Pool", altText: "Visitor on boardwalk near hot spring.", caption: "Black Pool at West Thumb Geyser Basin" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg", title: "Beehive Geyser", altText: "People watch geyser erupt.", caption: "Visitors watch Beehive Geyser" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D3BD3-1DD8-B71B-0BB607F9BAAE1271.jpg", title: "Wolf howling", altText: "Wolf on snowy field.", caption: "Alpha male of Canyon wolf pack" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D573E-1DD8-B71B-0B5C0DF5BB91D043.jpg", title: "Fishing Bridge Museum", altText: "Visitors enter rustic building.", caption: "Prototype architecture for park buildings" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5AB4-1DD8-B71B-0BF91CF45345ED16.jpg", title: "Great Fountain Geyser", altText: "Geyser erupting in pool.", caption: "Great Fountain Geyser erupts" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D610A-1DD8-B71B-0BEF676112007818.jpg", title: "Old Faithful Winter", altText: "Crowd watches geyser in snow.", caption: "Winter watching Old Faithful" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D8903-1DD8-B71B-0BA8669AEEF74379.jpg", title: "Palette Spring", altText: "Bright terraced landscape.", caption: "Colors formed by thermophiles" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D95DD-1DD8-B71B-0BC4FA19BD72F0EC.jpg", title: "Bighorn sheep", altText: "Two bighorn sheep resting.", caption: "Rams rest and chew cud" }
  ],
  weatherInfo:
    "Weather can change fast. Summer highs 70°F+, drops 20°F in storms. Snow any month. Winter lows often below 0°F. Bring layers and rain gear.",
  name: "Yellowstone",
  designation: "National Park"
};

export const parkInfoLinks = [
  { name: "Current Conditions ›", link: "conditions.html", image: park.images[2].url, description: "Check conditions before visiting!" },
  { name: "Fees and Passes ›", link: "fees.html", image: park.images[3].url, description: "Learn about fees and passes." },
  { name: "Visitor Centers ›", link: "visitor_centers.html", image: park.images[9].url, description: "Find visitor center info." }
];

export function getParkData() {
  return park;
}

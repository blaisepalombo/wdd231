const park = {
  id: "F58C6D24-8D10-4573-9826-65D42B8B83AD",
  url: "https://www.nps.gov/yell/index.htm",
  fullName: "Yellowstone National Park",
  parkCode: "yell",
  description:
    "On March 1, 1872, Yellowstone became the first national park for everyone to enjoy the hydrothermal wonders. Millions visit each year to hike, camp, and take in the scenery.",
  latitude: "44.59824417",
  longitude: "-110.5471695",
  latLong: "lat:44.59824417, long:-110.5471695",
  states: "ID,MT,WY",
  contacts: {
    phoneNumbers: [
      { phoneNumber: "307-344-7381", description: "", extension: "", type: "Voice" },
      { phoneNumber: "307-344-2014", description: "", extension: "", type: "Fax" },
      { phoneNumber: "307-344-2386", description: "", extension: "", type: "TTY" }
    ],
    emailAddresses: [
      {
        description:
          "Contact Yellowstone's park rangers for questions, lost and found, or special permits.",
        emailAddress: "YELL_Information@nps.gov"
      }
    ]
  },
  addresses: [
    {
      postalCode: "82190",
      city: "Yellowstone National Park",
      stateCode: "WY",
      countryCode: "US",
      provinceTerritoryCode: "",
      line1: "2 Officers Row",
      type: "Physical",
      line2: "Yellowstone National Park Headquarters",
      line3: ""
    },
    {
      postalCode: "82190-0168",
      city: "Yellowstone National Park",
      stateCode: "WY",
      countryCode: "US",
      provinceTerritoryCode: "",
      line1: "PO Box 168",
      type: "Mailing",
      line2: "",
      line3: ""
    }
  ],
  directionsInfo:
    "Yellowstone covers 3,500 square miles in NW Wyoming (3% in Montana, 1% in Idaho). Five entrances exist, some closed in winter. Driving between entrances can take hours, so check road status before arriving.",
  directionsUrl: "http://www.nps.gov/yell/planyourvisit/directions.htm",
  images: [
    { credit: "NPS/Jim Peaco", title: "Grand Prismatic Spring", altText: "Hot spring with bright colors", caption: "Thermophiles create the bright colors", url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg" },
    { credit: "NPS/Jim Peaco", title: "Aurum Geyser", altText: "People watch geyser erupt", caption: "Aurum Geyser erupting", url: "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg" },
    { credit: "NPS/Diane Renkin", title: "Black Pool", altText: "Visitor near hot spring and lake", caption: "Black Pool at West Thumb Geyser Basin", url: "https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg" },
    { credit: "NPS/Jim Peaco", title: "Beehive Geyser", altText: "People watch geyser erupt", caption: "Upper Geyser Basin Beehive Geyser", url: "https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg" },
    { credit: "NPS/Jim Peaco", title: "Wolf howling", altText: "Wolf howls on snowy field", caption: "Alpha male of Canyon wolf pack", url: "https://www.nps.gov/common/uploads/structured_data/3C7D3BD3-1DD8-B71B-0BB607F9BAAE1271.jpg" }
  ],
  weatherInfo:
    "Weather changes fast, even in one day. Summer highs can reach 70°F, then drop 20+ degrees in storms. Snow can happen any month. Bring layers and rain gear.",
  name: "Yellowstone",
  designation: "National Park"
};

const parkInfoLinks = [
  { name: "Current Conditions ›", link: "conditions.html", image: park.images[2].url, description: "See what conditions to expect before your trip" },
  { name: "Fees and Passes ›", link: "fees.html", image: park.images[3].url, description: "Learn about available fees and passes" },
  { name: "Visitor Centers ›", link: "visitor_centers.html", image: park.images[4].url, description: "Learn about visitor centers" }
];

const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(url) {
  const options = { method: "GET", headers: { "X-Api-Key": apiKey } };
  const response = await fetch(baseUrl + url, options);
  if (!response.ok) throw new Error("Network response not ok");
  return await response.json();
}

export function getInfoLinks(data) {
  return parkInfoLinks.map((item, index) => {
    item.image = data[index + 2].url;
    return item;
  });
}

export async function getParkData() {
  const parkData = await getJson("parks?parkCode=yell");
  return parkData.data[0];
}

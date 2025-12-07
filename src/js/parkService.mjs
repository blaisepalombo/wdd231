const park = {
  id: "F58C6D24-8D10-4573-9826-65D42B8B83AD",
  url: "https://www.nps.gov/yell/index.htm",
  fullName: "Yellowstone National Park",
  parkCode: "yell",
  description:
    "Yellowstone became the first national park in 1872! Today, millions visit every year to hike, camp, and see the geothermal features.",
  latitude: "44.59824417",
  longitude: "-110.5471695",
  states: "ID, MT, WY",
  contacts: {
    phoneNumbers: [
      { phoneNumber: "307-344-7381", type: "Voice" },
      { phoneNumber: "307-344-2014", type: "Fax" },
      { phoneNumber: "307-344-2386", type: "TTY" }
    ],
    emailAddresses: [
      {
        description: "General park questions, lost & found, permits",
        emailAddress: "YELL_Information@nps.gov"
      }
    ]
  },
  addresses: [
    {
      line1: "2 Officers Row",
      line2: "Yellowstone National Park Headquarters",
      city: "Yellowstone National Park",
      stateCode: "WY",
      postalCode: "82190",
      type: "Physical"
    },
    {
      line1: "PO Box 168",
      city: "Yellowstone National Park",
      stateCode: "WY",
      postalCode: "82190-0168",
      type: "Mailing"
    }
  ],
  directionsInfo:
    "Yellowstone covers ~3,500 sq miles in NW Wyoming (tiny parts in MT & ID). Check road status before heading in!",
  directionsUrl: "http://www.nps.gov/yell/planyourvisit/directions.htm",
  images: [
    { title: "Grand Prismatic Spring", url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg" },
    { title: "Aurum Geyser", url: "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg" },
    { title: "Black Pool", url: "https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg" },
    { title: "Beehive Geyser", url: "https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg" },
    { title: "Wolf howling", url: "https://www.nps.gov/common/uploads/structured_data/3C7D3BD3-1DD8-B71B-0BB607F9BAAE1271.jpg" }
  ],
  weatherInfo:
    "Weather changes fast in Yellowstone. Even summer days can swing 20°F in an hour! Bring layers & rain gear."
};

const parkInfoLinks = [
  {
    name: "Current Conditions ›",
    link: "conditions.html",
    image: park.images[2].url,
    description: "Check the park conditions before heading out."
  },
  {
    name: "Fees and Passes ›",
    link: "fees.html",
    image: park.images[3].url,
    description: "Info on passes and entrance fees."
  },
  {
    name: "Visitor Centers ›",
    link: "visitor-center.html",
    image: park.images[4].url,
    description: "Visitor center locations and info."
  }
];

const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(endpoint) {
  const res = await fetch(baseUrl + endpoint, {
    headers: { "X-Api-Key": apiKey }
  });
  if (!res.ok) throw new Error("Failed to fetch data 😬");
  return await res.json();
}

export function getInfoLinks(data) {
  return parkInfoLinks.map((item, i) => {
    item.image = data[i + 2].url;
    return item;
  });
}

export async function getParkData() {
  const json = await getJson("parks?parkCode=yell");
  return json.data[0];
}

export async function getParkAlerts(code) {
  const json = await getJson(`alerts?parkCode=${code}`);
  return json.data;
}

export async function getParkVisitorCenters(code) {
  const json = await getJson(`visitorcenters?parkCode=${code}`);
  return json.data;
}

export async function getParkVisitorCenterDetails(id) {
  const json = await getJson(`visitorcenters?id=${id}`);
  return json.data[0];
}

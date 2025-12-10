const parks = [
  {
    name: "Golden Gate Park",
    location: "Richmond District & Sunset District",
    description:
      "The largest urban park in San Francisco with lakes, gardens, museums, and long walking and biking paths.",
    size: "1,017 acres",
    review: 4.8,
    hours: "24/7 whole week",
    transit: "N Judah, 5, 6, 7, 18, 21, 28",
    amenities:
      "Japanese Tea Garden, Conservatory of Flowers, botanical garden, Stow Lake, picnic areas, playgrounds",
    picture: "pictures/golden-gate-park.jpg",
  },
  {
    name: "Mission Dolores Park",
    location: "Mission District",
    description:
      "One of the most popular parks in SF with big lawns, city views, and a very social atmosphere.",
    size: "13.7–16 acres",
    review: 4.7,
    hours: "6am–10pm for whole week",
    transit: "J Church, 12, 14, 14R, 22, 33",
    amenities:
      "Helen Diller Playground, tennis courts, large lawns, dog play area, city view overlook",
    picture: "pictures/dolores-park.jpg",
  },
  {
    name: "John Mclaren Park",
    location: "Excelsior District / Visitacion Valley",
    description:
      "A huge, more rugged park with hills, trails, dog play areas, and quiet spots away from downtown.",
    size: "312.54 acres",
    review: 4.6,
    hours: "5am–12am for whole week",
    transit: "8, 8BX, 9, 29, 43, 52, 54, 56",
    amenities:
      "McNab Lake, Jerry Garcia Amphitheater, hiking trails, dog play areas, sports fields, picnic sites",
    picture: "pictures/mclaren-park.avif",
  },
  {
    name: "Ina Coolbrith Park",
    location: "Russian Hill",
    description:
      "A small, terraced hillside park with some of the best skyline and Bay views in the city.",
    size: "0.8 acres",
    review: 4.8,
    hours: "5am–12am for whole week",
    transit: "Powell-Hyde cable car, 8, 30, 41, 45",
    amenities:
      "Terraced gardens, panoramic city overlook, walking stairways, landscaped viewpoints, quiet seating terraces",
    picture: "pictures/ina-coolbrith-park.jpg",
  },
  {
    name: "San Francisco Maritime National Historical Park",
    location: "Fisherman’s Wharf / Aquatic Park",
    description:
      "Waterfront park with historic ships, a small beach cove, and views of the Bay and Alcatraz.",
    size: "50 acres",
    review: 4.6,
    hours: "24/7 whole week",
    transit: "19, 30, 49, Powell-Hyde cable car, Powell-Mason cable car",
    amenities:
      "Aquatic Park Pier, beach cove, Hyde Street Pier historic ships, Maritime Museum, waterfront promenade",
    picture: "pictures/sf-maritime-park.webp",
  },
  {
    name: "Francisco Park",
    location: "Russian Hill",
    description:
      "A newer neighborhood park on the site of an old reservoir with lawns, a playground, and Bay views.",
    size: "4.5 acres",
    review: 4.7,
    hours: "6am–10pm for whole week",
    transit: "Powell-Hyde cable car, 19, 30, 49",
    amenities:
      "Viewpoint terrace, children’s playground, great lawn, walking paths, dog-friendly greenspace",
    picture: "pictures/francisco-park.jpg",
  },
  {
    name: "Presidio Park",
    location: "Presidio District",
    description:
      "A former military post turned national park site with forests, beaches, overlooks, trails, and historic buildings.",
    size: "1491 acres",
    review: 4.8,
    hours: "24/7 whole week",
    transit: "28, 29, 30, 43, Presidio GO Shuttle",
    amenities:
      "Trails, forests, beaches, scenic overlooks, Main Parade Lawn, picnic areas, historic sites",
    picture: "pictures/presidio-park.jpg",
  },
  {
    name: "Crissy Field Park",
    location: "Presidio District / Marina",
    description:
      "A flat waterfront park with a beach, marsh, and huge views of the Golden Gate Bridge.",
    size: "100 acres",
    review: 4.7,
    hours: "24 hours for whole week",
    transit: "28, 30, 43, Presidio GO Shuttle",
    amenities:
      "Crissy Field Beach, Golden Gate Promenade, Crissy Marsh, picnic tables, dog-friendly shoreline",
    picture: "pictures/crissy-field-park.jpg",
  },
  {
    name: "Washington Square Park",
    location: "North Beach District",
    description:
      "A classic neighborhood square with lawns, benches, and a big church backdrop in the middle of North Beach.",
    size: "2.26 acres",
    review: 4.5,
    hours: "5am–12am for whole week",
    transit: "Powell-Mason cable car, 8, 30, 41, 45",
    amenities:
      "Central lawn, paved walking paths, seating benches, shade trees, community gathering space",
    picture: "pictures/washington-square-park.jpg",
  },
  {
    name: "Alamo Square Park",
    location: "Hayes Valley / Western Addition",
    description:
      "Famous for the Painted Ladies and skyline backdrop, with lawns, a dog area, and a playground.",
    size: "12.7 acres",
    review: 4.7,
    hours: "5am–12am for whole week",
    transit: "5, 21, 22, 24",
    amenities:
      "Off-leash dog play area, Alamo Square Playground, painted ladies viewpoint, picnic lawn terraces",
    picture: "pictures/alamo-square-park.jpg",
  },
  {
    name: "Pioneer Park",
    location: "Telegraph Hill",
    description:
      "Park surrounding Coit Tower, with stairs, gardens, and some of the best views over SF and the Bay.",
    size: "4.89 acres",
    review: 4.6,
    hours: "5am–12am for whole week",
    transit: "Powell-Hyde cable car, 39 Coit, 30, 45",
    amenities:
      "Coit Tower observation deck, WPA murals, terraced gardens, stairway access, panoramic viewpoints",
    picture: "pictures/pioneer-park.jpg",
  },
  {
    name: "Glen Canyon Park",
    location: "Glen Park District",
    description:
      "A steep, rugged canyon park with hiking trails, rock formations, and a recreation center.",
    size: "66.6 acres",
    review: 4.7,
    hours: "5am–12am for whole week",
    transit: "23, 36, 37, 44",
    amenities:
      "Glen Canyon Recreation Center, tennis courts, baseball field, canyon hiking trails, playground",
    picture: "pictures/glen-canyon-park.avif",
  },
  {
    name: "Yerba Buena Gardens",
    location: "Yerba Buena / SoMa",
    description:
      "Urban gardens and lawns with fountains, public art, and a playground surrounded by museums and shops.",
    size: "87 acres",
    review: 4.6,
    hours: "7am–10pm for whole week",
    transit:
      "J, K, L, M, N, T (Muni Metro), BART (Powell), 8, 14, 14R, 30, 45",
    amenities:
      "MLK Jr. Memorial Waterfall, landscaped gardens, great lawn, children’s playground & carousel, public art, event spaces",
    picture: "pictures/yerba-buena-park.jpg",
  },
  {
    name: "Crane Cove Park",
    location: "Potrero Point / Dogpatch",
    description:
      "A newer waterfront park with a small beach, big lawn, and historic shipyard cranes along the Bay.",
    size: "7 acres",
    review: 4.7,
    hours: "6am–10pm for whole week",
    transit: "T Third, 22, 48, 55",
    amenities:
      "Crane Cove Beach, shoreline launch for kayaks/SUP, large great lawn, children’s play zone, historic cranes, waterfront seating",
    picture: "pictures/crane-cove-park.jpg",
  },

  {
  name: "Lake Merced Park",
  location: "Lake Merced District / Sunset District",
  description:
    "A large freshwater lake surrounded by trails, fishing areas, picnic spots, and natural habitat. Popular for jogging, biking, and peaceful walks away from the city noise.",
  size: "614 acres",
  review: 4.6,
  hours: "5am–12am for whole week",
  transit: "18, 29, 57",
  amenities:
    "Lake Merced Trail, fishing piers, picnic areas, boating/kayak access, golf course",
  picture: "pictures/lake-merced-park.jpg"
}
];

function createParkCard(park) {
  return `
    <div class="col-md-4 col-sm-6">
      <div class="card park-card h-100 shadow-sm border-0">
        <img
          src="${park.picture}"
          class="card-img-top park-image"
          alt="${park.name}"
        />
        <div class="card-body">
          <h5 class="card-title">${park.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            ${park.location} • ${park.size} • ⭐ ${park.review}
          </h6>
          <p class="card-text">${park.description}</p>
          <p class="card-text"><strong>Hours:</strong> ${park.hours}</p>
          <p class="card-text"><strong>Transit:</strong> ${park.transit}</p>
          <p class="card-text"><strong>Amenities:</strong> ${park.amenities}</p>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("parks-grid");
  parks.forEach((park) => {
    grid.insertAdjacentHTML("beforeend", createParkCard(park));
  });
});

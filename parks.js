const parks = [
{
name: "Golden Gate Park",
location: "Richmond District / Sunset District",
description:
"The largest urban park in San Francisco with lakes, gardens, museums, and long walking and biking paths.",
size: "1,017 acres",
review: 4.8,
hours: "24/7 whole week",
transit: "N Judah, 5, 6, 7, 18, 21, 28",
amenities:
"Japanese Tea Garden, Conservatory of Flowers, botanical garden, Stow Lake, picnic areas, playgrounds",
picture: "pictures/golden-gate-park.jpg",
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25231.052113622114!2d-122.50364321528221!3d37.76937633120568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgolden%20gate%20park!5e0!3m2!1sen!2sus!4v1763604542924!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2726097417776!2d-122.43166680672776!3d37.76020564078262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1779aa70a7%3A0xa618e4eff1228d60!2sMission%20Dolores%20Park!5e0!3m2!1sen!2sus!4v1763604559651!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.0164548127113!2d-122.42089042300108!3d37.7192916153524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eee9fa0bfeb%3A0xd5653ca14ef32873!2sJohn%20McLaren%20Park!5e0!3m2!1sen!2sus!4v1763604578164!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6484076055444!2d-122.41603412299878!3d37.79827871080387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580ee05a41e77%3A0xc6bd2f40a566f1b0!2sIna%20Coolbrith%20Park!5e0!3m2!1sen!2sus!4v1763604592361!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.300192791877!2d-122.4239199!3d37.806436999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e1a8edb3ed%3A0xb71a9f534658cd95!2sSan%20Francisco%20Maritime%20National%20Historical%20Park!5e0!3m2!1sen!2sus!4v1763604621321!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.8865632589923!2d-122.42101809667061!3d37.80438642351493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e0!3m2!1sen!2sus!4v1763604651140!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12610.99413301613!2d-122.466342!3d37.7959326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586df085a159b%3A0xb4afb256fcbe7f60!2sPresidio%20of%20San%20Francisco%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1763604398684!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0293202483763!2d-122.4650348502545!3d37.804021786405436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586dc8525b355%3A0x5b15912201aa3600!2sCrissy%20Field!5e0!3m2!1sen!2sus!4v1764811239046!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.7579902915622!2d-122.41049632903201!3d37.80064542498775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f1a98e88a1%3A0x24c815888a8a9ff0!2sWashington%20Square!5e0!3m2!1sen!2sus!4v1764811858225!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.166463515798!2d-122.43481899999999!3d37.7763694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a5506817e5%3A0x974b45672412fa15!2sAlamo%20Square%20Park!5e0!3m2!1sen!2sus!4v1764812576672!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4417863481826!2d-122.41074910645281!3d37.80311979972646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f7217dce23%3A0x548a37271ccb4d43!2sPioneer%20Park!5e0!3m2!1sen!2sus!4v1764813317500!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0675795232896!2d-122.44576002285453!3d37.74155877199377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e76764229f5%3A0x8f353da71333a1f3!2sGlen%20Canyon%20Park%20Recreation%20Centre!5e0!3m2!1sen!2sus!4v1764813297444!5m2!1sen!2sus",
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
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2327396289925!2d-122.40495657615678!3d37.784988371982784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580879c034b09%3A0x9426c73a3d692058!2sYerba%20Buena%20Gardens!5e0!3m2!1sen!2sus!4v1764814051478!5m2!1sen!2sus",
},
{
name: "Crane Cove Park",
location: "Potrero Point",
description:
"A newer waterfront park with a small beach, big lawn, and historic shipyard cranes along the Bay.",
size: "7 acres",
review: 4.7,
hours: "6am–10pm for whole week",
transit: "T Third, 22, 48, 55",
amenities:
"Crane Cove Beach, shoreline launch for kayaks/SUP, large great lawn, children’s play zone, historic cranes, waterfront seating",
picture: "pictures/crane-cove-park.jpg",
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3154.1121539310566!2d-122.39025428979238!3d37.76396835364209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scrane%20cove%20park!5e0!3m2!1sen!2sus!4v1765363177385!5m2!1sen!2sus",
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
picture: "pictures/lake-merced-park.jpg",
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12623.99623026787!2d-122.5039718817364!3d37.719699975369295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7d07c1ee4ec3%3A0x7ebc5e22e7f05496!2sLake%20Merced%20Park!5e0!3m2!1sen!2sus!4v1765375761441!5m2!1sen!2sus",
},
];

function createParkCard(park) {
// Airtable convert to Google Maps embed URL
const mapsUrl = park.mapEmbed;

const amenitiesItems = park.amenities
.split(",")
.map(
(item) =>
`<li><i class="bi bi-star-fill text-warning me-1"></i>${item.trim()}</li>`
)
.join("");

return `
<div class="col-md-4 col-sm-6">
<div class="card park-card h-100 shadow-sm border-0">
<img
src="${park.picture}"
class="card-img-top park-image"
alt="${park.name}"
/>
<div class="card-body d-flex flex-column">
<h5 class="card-title">${park.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">
${park.location} • ${park.size} •
<i class="bi bi-star-fill text-warning"></i> ${park.review}
</h6>

<p class="card-text">${park.description}</p>
<p class="card-text mb-1"><strong>Hours:</strong> ${park.hours}</p>
<p class="card-text mb-3"><strong>Transit:</strong> ${park.transit}</p>

<div class="mb-3">
<h6 class="mb-1">
<i class="bi bi-star-fill text-warning"></i> Amenities
</h6>
<ul class="list-unstyled ms-1 mb-0">
${amenitiesItems}
</ul>
</div>

${
mapsUrl
? `
<div class="ratio ratio-16x9 mt-auto">
<iframe
src="${mapsUrl}"
style="border:0;"
allowfullscreen
loading="lazy"
referrerpolicy="no-referrer-when-downgrade"
></iframe>
</div>
`
: ""
}
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

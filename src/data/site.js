export const site = {
  name: 'Boothe Memorial Railway Society',
  shortName: 'BMRS',
  tagline: 'The Railroad Museum at Boothe Park',
  email: 'bmrailways@gmail.com',
  phoneNote: 'For questions or info, email us anytime.',
  address: '5800 Main Street, Putney, Stratford, CT',
  mailingAddress: 'BMRS c/o Don Masso, 897 Nichols Ave, Stratford, CT 06614',
  quote: 'Wow, what a great place to visit on a Saturday afternoon. We’ll be back soon!',
  founded: 1999,
  mission:
    'To promote an interest in model trains and railroad history, through educational projects, community outreach, and fellowship among members, thus expanding the growth and enjoyment of the hobby, and appreciation of railroad history.',
  mapsUrl: 'https://maps.google.com/?q=5800+Main+Street+Stratford+CT+06614',
  mapsEmbed:
    'https://maps.google.com/maps?q=5800%20Main%20Street%20Stratford%20CT%2006614&t=&z=15&ie=UTF8&iwloc=&output=embed',
  membershipPdf: '/docs/BMRS-Application.pdf',
  social: {
    facebook: 'https://www.facebook.com/Boothe-Memorial-Railway-Society-180409186656',
    instagram: 'https://www.instagram.com/bmrailways',
    youtube: 'https://www.youtube.com/@bmrailways',
    youtubeLive: 'https://www.youtube.com/@bmrailways/streams',
    flickr: 'https://www.flickr.com/photos/200740512@N04/albums',
  },
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/visit', label: 'Visit' },
  {
    to: '/layouts',
    label: 'Layouts',
    children: [
      { to: '/layouts/g-gauge', label: 'G Gauge' },
      { to: '/layouts/o-gauge', label: 'O Gauge' },
      { to: '/layouts/ho-gauge', label: 'HO Gauge' },
      { to: '/layouts/s-gauge', label: 'S Gauge' },
      { to: '/layouts/n-gauge', label: 'N Gauge' },
      { to: '/layouts/tinplate', label: 'Tinplate' },
    ],
  },
  { to: '/outreach', label: 'Outreach' },
  { to: '/media', label: 'Videos & Pics' },
  { to: '/sponsors', label: 'Sponsors' },
  {
    to: '/caboose',
    label: 'The Caboose',
    children: [
      { to: '/caboose/faqs', label: 'FAQs' },
      { to: '/caboose/links', label: 'Links' },
      { to: '/caboose/funding', label: 'Funding' },
      { to: '/caboose/stem', label: 'STEM' },
      { to: '/caboose/workshop', label: 'Workshop' },
    ],
  },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
]

export const twilight = {
  name: 'Trains at Twilight 5',
  date: 'Friday, September 11, 2026',
  shortDate: 'Sept 11, 2026',
  time: '7:00 – 9:30 pm',
  location: 'Boothe Memorial Park, Stratford, CT',
  admission: 'Always free',
  headline: 'The railroad museum’s only nighttime event',
  summary:
    'From 7–9:30 pm, BMRS will be the place to enjoy the special lights, sights, and sounds of our indoor and outdoor train layouts, and more.',
  highlights: [
    'Indoor and outdoor trains running under the lights',
    'Remote-control tank display',
    'Portable trains for visitors to enjoy',
    'Stargazing with the Boothe Memorial Astronomy Society',
    'A real railroad speeder (inspection car) on view',
    'Special commemoration of the 25th anniversary of 9/11',
  ],
  sponsor: 'Special thanks to The Milford Bank for sponsoring Trains at Twilight.',
}

export const layouts = [
  {
    slug: 'g-gauge',
    name: 'G Gauge Outdoor Layout',
    shortName: 'G Gauge',
    kicker: 'Connecticut’s largest',
    summary: 'Yes they run in the snow, but our crew doesn’t!',
    image: '/images/layout-g.jpg',
    gallery: [
      '/images/g-garden-1.jpg',
      '/images/g-garden-2.jpg',
      '/images/g-garden-3.jpg',
      '/images/g-garden-4.jpg',
      '/images/g-garden-5.jpg',
      '/images/layout-g.jpg',
    ],
    description:
      'It’s been years in the making, and it continues to be a highlight for visitors to BMRS and Boothe Memorial Park. Primarily built by BMRS volunteers, the garden railway offers a close look at outdoor railroading with G Gauge trains. Benches around the layout make it easy to linger while the trains roll past plantings that give the line a true garden feel.',
    factsTitle: 'G Gauge facts & figures',
    facts:
      'G Gauge is 1:22.5 and runs on a gauge of 1.75 inches. This is the largest scale commonly offered, making the trains suitable for outdoor garden railroads as well as large indoor spaces. G Scale models are durable and rugged, a favorite for younger visitors who want a closer look.',
    notes: ['Planning for powering the tracks', 'Figuring out where to lay the track', 'Outdoor running, even in the snow'],
  },
  {
    slug: 'o-gauge',
    name: 'O Gauge Layout',
    shortName: 'O Gauge',
    kicker: 'Our biggest indoor layout',
    summary: 'Our biggest indoor layout and the best too! Just ask Don!',
    image: '/images/layout-o.jpg',
    gallery: ['/images/o-1.jpg', '/images/o-2.jpg', '/images/o-3.jpg', '/images/o-4.jpg', '/images/o-5.jpg', '/images/o-6.jpg'],
    description:
      '“It’s O Gauge or no gauge!” That quote, made famous by Sheldon on The Big Bang Theory, sums up the role O gauge trains have in model railroad history. Mention Lionel trains to many visitors and the reply is usually, “When I was a kid, I had…” Climb into the engineer’s seat on our cab-ride video and you’ll see why this layout is a crowd favorite.',
    factsTitle: 'O Gauge facts & figures',
    facts:
      'O Scale in the United States can be traced back to 1915. At the time, it was the smallest available scale compared with the Standard Gauge trains of the era. Now considered the largest of the traditional indoor model railroading scales, its size and durable models make it perfect for introducing young newcomers to the hobby.',
  },
  {
    slug: 'ho-gauge',
    name: 'HO Gauge Layout',
    shortName: 'HO Gauge',
    kicker: 'The oldest at BMRS',
    summary: 'The oldest layout at BMRS. It’s a classic!',
    image: '/images/layout-ho.jpg',
    gallery: ['/images/ho-1.jpg', '/images/ho-2.jpg', '/images/ho-3.jpg', '/images/ho-4.jpg', '/images/ho-5.jpg', '/images/ho-6.jpg'],
    description:
      'This layout was built before the museum building existed. It was donated to Boothe Park and stored until a group of people asked the town about forming a railroad museum. When our building was completed, the layout was moved in. The back side, facing the zoo, was added when it was installed at BMRS.',
    factsTitle: 'HO facts & figures',
    facts:
      'In a bid to offer a small model railroad scale suitable for homes of all sizes, German manufacturer Bing released the Table-top Railway in 1922. Today, HO remains the most popular scale worldwide, with a large and varied selection of realistic models from countries across the globe.',
  },
  {
    slug: 's-gauge',
    name: 'S Gauge Layout',
    shortName: 'S Gauge',
    kicker: 'Connecticut’s own',
    summary: 'Not quite O, but bigger than HO, with a typical 1950s look.',
    image: '/images/layout-s.jpg',
    gallery: ['/images/layout-s.jpg', '/images/outreach-mainstreet.jpg', '/images/gallery-05.jpg'],
    description:
      'American Flyer trains, part of A. C. Gilbert’s company, were based in New Haven, CT, along with Erector sets. Gilbert offered train sets and accessories in a size just slightly smaller than O Gauge. This layout was designed to display a typical S gauge home layout. The buildings are part of the Plasticville line and are a perfect fit for the S gauge trains.',
    factsTitle: 'A 1950s home layout',
    facts:
      'S gauge sits between HO and O. The BMRS display captures the look of a mid-century American Flyer railroad, complete with colorful Plasticville structures that many visitors remember from childhood.',
  },
  {
    slug: 'n-gauge',
    name: 'N Gauge Layout',
    shortName: 'N Gauge',
    kicker: 'A whole room of tiny trains',
    summary: 'We’ve dedicated a whole room to our layout with the smallest trains!',
    image: '/images/ho-3.jpg',
    gallery: ['/images/ho-3.jpg', '/images/ho-6.jpg', '/images/gallery-11.jpg', '/images/video-openhouse.jpg'],
    description:
      'Our “tiny trains” room has scenery that reminds us of an autumn scene in Connecticut. After a visit to the garden railway, it is easy to see the differences in scale that the N Gauge room highlights: a whole landscape packed into a dedicated space.',
    factsTitle: 'Lots of detail in a small scale',
    facts:
      'N scale is among the smallest commonly modeled gauges. That compact size lets volunteers pack a remarkable amount of Connecticut-inspired scenery, track, and tiny details into a single room.',
  },
  {
    slug: 'tinplate',
    name: 'Tinplate O Layout',
    shortName: 'Tinplate',
    kicker: 'Trains of the 1920s and 30s',
    summary: 'A look at the colorful trains of the 1920s and 30s.',
    image: '/images/gallery-06.jpg',
    gallery: ['/images/gallery-06.jpg', '/images/o-2.jpg', '/images/gallery-04.jpg', '/images/sponsors-cover.jpg'],
    description:
      'Our tinplate layout is a replica of a small train display from the 1920s and 30s. You may notice that the scale of items and people isn’t strictly realistic, and the colors of the trains and buildings are bright and bold. That’s what makes a tinplate layout something special. The items on the layout are replicas of trains and accessories manufactured almost 100 years ago. An authentic tinplate train, if you can find one, might cost over $10,000!',
    factsTitle: 'A small layout that lights up the corner',
    facts:
      'Tinplate trains were toys first and scale models second. Bright paint, lithographed metal, and cheerful accessories defined the era. The BMRS corner display celebrates that colorful, almost-100-year-old look.',
  },
]

export const outreachEvents = [
  {
    title: 'ConnJam Boy Scout Jamboree',
    text: 'Every 2 or 3 years, Connecticut Scouts meet in Orange, CT for ConnJam. We’ve participated for many years!',
    image: '/images/outreach-connjam.jpg',
  },
  {
    title: 'Stratford Main Street Festival',
    text: 'Stratford’s Main Street Festival gives us the opportunity to tell people in town about BMRS.',
    image: '/images/outreach-mainstreet.jpg',
  },
  {
    title: 'Cheshire HS Train Show',
    text: 'We’ve attended the RAM train show at Cheshire High School. The children really enjoy our layout, and moms and dads do too!',
    image: '/images/outreach-cheshire.jpg',
  },
  {
    title: 'Boothe House Holiday Tour',
    text: 'The Friends of Boothe have offered a Holiday Open House for a few years. We enjoy setting up a layout to enhance the holiday ambiance!',
    image: '/images/outreach-holiday.jpg',
  },
  {
    title: 'Lord Chamberlain Visit',
    text: 'One of our first visits was to Lord Chamberlain in Stratford. We invited residents and their families to come and enjoy our trains.',
    image: '/images/outreach-portable.jpg',
  },
  {
    title: 'Middle Gate Elementary, Newtown, CT',
    text: 'A visit to the classroom gives us the opportunity to talk about trains. This visit was a “reverse field trip” to learn about railroad transportation.',
    image: '/images/outreach-school.jpg',
  },
  {
    title: 'Atria Senior Living, Spring Village',
    text: 'A visit from BMRS at Christmas made for a special day at Atria in Stratford. We talked about trains with the residents.',
    image: '/images/outreach-atria.jpg',
  },
  {
    title: 'New Jersey HiRailers',
    text: 'We also attend events as a club, and look forward to our visits to the New Jersey HiRailers layouts in Paterson, NJ.',
    image: '/images/outreach-hirailers.jpg',
    href: 'http://www.njhirailers.com',
  },
  {
    title: 'Be on the lookout!',
    text: 'You never know where you’ll encounter a visit with the BMRS portable layout team, even York, PA?',
    image: '/images/outreach-york.jpg',
  },
]

export const calendar = {
  hours: 'Open House hours are 1 pm to 4 pm, unless otherwise noted.',
  note: 'We may plan additional dates or special events. Add your email to our mailing list to receive notices of special openings.',
  workNights:
    'Typically, the 2nd and 4th Wednesday of each month are designated as work nights at BMRS. Members attend to clean our museum, make repairs and upgrades, and discuss new ideas and plans. Hours: 6:30 pm to 8:30 pm. Adult visitors and model train hobbyists are informally invited, but layouts may be under repair and many trains may not be running.',
  season: [
    { when: 'May 17, 2026', what: 'Sunday Open House, 12–5 pm. Boothe Park Opening Day!' },
    { when: 'May 23, 2026', what: 'Closed for Memorial Day weekend' },
    { when: 'May 30, 2026', what: 'Open House, 1–4 pm' },
    { when: 'June 6, 13, 20, 27', what: 'Saturday Open Houses, 1–4 pm' },
    { when: 'July 4 weekend', what: 'Closed for Independence Day weekend' },
    { when: 'July 11, 18, 25', what: 'Saturday Open Houses, 1–4 pm' },
    { when: 'July 12, 19, 26', what: 'Sunday Open Houses, 1–4 pm' },
    { when: 'August 1, 8, 15, 22, 29', what: 'Saturday Open Houses, 1–4 pm' },
    { when: 'September 5, 2026', what: 'Closed for Labor Day weekend' },
    { when: 'September 11, 2026', what: 'Trains at Twilight 5, Friday 7:00–9:30 pm' },
    { when: 'September 19', what: 'Post-season Open House, 1–4 pm' },
    { when: 'October 17', what: 'Post-season Open House, 1–4 pm' },
    { when: 'November 21', what: 'Post-season Open House, 1–4 pm' },
    { when: 'December 19', what: 'Post-season Open House, 1–4 pm' },
  ],
}

export const videos = [
  {
    title: 'A different perspective on the Railroad Museum',
    text: 'Special thanks to Bill Anzaldi for drone views of BMRS. Contact him at billanzaldi@gmail.com.',
    youtubeId: 'q3pgzDeC-Es',
    image: '/images/video-drone.jpg',
    url: 'https://youtu.be/q3pgzDeC-Es',
  },
  {
    title: 'Take a ride on our O Gauge layout',
    text: 'Climb up into the cab and take a spot in the engineer’s seat. You’ll enjoy the sights and scenery as you ride the rails with the engine chugging and the whistle blowing.',
    youtubeId: 'eOS-ENbFROw',
    image: '/images/video-ogauge.jpg',
    url: 'https://youtu.be/eOS-ENbFROw',
  },
  {
    title: 'A look at one of our Open House events',
    text: 'On Saturdays, visitors enjoy the many freight and passenger trains running on our layouts. Everyone pauses to look at the details hand-crafted by our volunteers. Lots to see, and always free!',
    youtubeId: 'o6Vr3PHbekg',
    image: '/images/video-openhouse.jpg',
    url: 'https://youtu.be/o6Vr3PHbekg',
  },
]

export const gallery = [
  '/images/gallery-01.jpg',
  '/images/gallery-02.jpg',
  '/images/gallery-03.jpg',
  '/images/hero-twilight.jpg',
  '/images/gallery-04.jpg',
  '/images/gallery-05.jpg',
  '/images/gallery-06.jpg',
  '/images/gallery-07.jpg',
  '/images/gallery-08.jpg',
  '/images/gallery-09.jpg',
  '/images/gallery-10.jpg',
  '/images/gallery-11.jpg',
  '/images/gallery-12.jpg',
]

export const sponsors = [
  {
    name: 'Exclusively Micros! LLC',
    contact: 'ed@em-llc.com',
    detail: 'Website & consulting services. Over 30 years of software design, website hosting, and consulting for education and small business.',
  },
  {
    name: 'Houseworks Home Inspections LLC',
    contact: 'jminspect@att.net',
    phone: '203-375-9800',
  },
  {
    name: 'Saint Paul’s Child Development Center',
    contact: 'Phenchman@gmail.com',
    phone: '203-384-6023',
  },
  {
    name: 'Pistey Funeral Home Inc.',
    contact: 'Ray Pistey',
  },
  {
    name: 'Lloyd Ralston Gallery Inc.',
    contact: 'ralstontoyauction@gmail.com',
    phone: '203-924-5804',
  },
  {
    name: 'Just Tumble Training Facilities LLC',
    detail: 'Shelton & North Haven, CT. 415 Howe Ave STE 304, Shelton, CT 06484',
    contact: 'jason@justtumblect.com',
    phone: '203-654-0031',
  },
  {
    name: 'Clean Beauty Wellness Spa',
    detail: '901 Bridgeport Ave STE 107, Shelton, CT 06484. Carrie Battaglia, Owner.',
    contact: 'cleanbeautybycarrie@yahoo.com',
    phone: '203-513-2565',
    href: 'https://cleanbeautywellness.com',
  },
  {
    name: 'Edward C. Bitsco, Painters',
    phone: '203-375-3234',
  },
  {
    name: 'Aerial Photos by Bill',
    detail: 'FAA 107 and TRUST certified. Specializing in drone photography and videography.',
    contact: 'billanzaldi@gmail.com',
    phone: '203-913-7190',
    href: 'https://aerialphotosbybill.com',
  },
  {
    name: 'Erin Babineau Memorial Fund Inc.',
  },
  {
    name: 'The Estate of John Aksamit',
  },
  {
    name: 'The Milford Bank',
    detail: 'Proud sponsor of Trains at Twilight.',
  },
]

export const faqs = [
  {
    q: 'Does BMRS charge admission?',
    a: 'All BMRS open house events are free. Stop by and stay as long as you (or your kids) would like! Donations are appreciated.',
  },
  {
    q: 'I’d like to know more about a specific layout or model train. Who do I ask?',
    a: 'Almost all of our volunteers are model railroaders. Feel free to ask questions of any BMRS member. If they don’t have the answer, they will know who you can discuss your questions with.',
  },
  {
    q: 'When are you open?',
    a: 'During the summer we are open on Saturdays from 1 pm to 4 pm. From November to April we open the 3rd Saturday of the month, weather permitting. Check the Visit / Calendar page for specific 2026 dates, including Trains at Twilight on Friday, September 11.',
  },
  {
    q: 'Where are you located?',
    a: 'The Railroad Museum is at Boothe Memorial Park, 5800 Main Street, Putney, Stratford, CT. Look for the red museum building with the garden railway outside.',
  },
  {
    q: 'Can I join the club?',
    a: 'Yes. BMRS is an all-volunteer 501(c)(3). If you have trains, or are interested in learning about and operating model trains, you’re invited. Email bmrailways@gmail.com or download the membership application.',
  },
  {
    q: 'What happens on work nights?',
    a: 'The 2nd and 4th Wednesday of each month, 6:30–8:30 pm, are work nights. Members clean, repair, upgrade, and plan. Adult visitors and hobbyists are informally invited, but layouts may be under repair.',
  },
]

export const partnerLinks = [
  {
    name: 'New Jersey HiRailers',
    href: 'http://www.njhirailers.com',
    text: 'Located in Paterson, NJ, their layout is a bit bigger than ours at BMRS. The dimensions are 185.5 feet in length by an average width of 30 feet, on the third floor of a building in a room 250 feet by 50 feet with unobstructed views. Definitely worth a visit when they have an open house, usually on Sunday afternoons.',
  },
  {
    name: 'Stratford Veterans Museum',
    href: 'https://stfdveteransmuseum.org',
    text: 'The Stratford Veterans Museum’s mission is to recognize those veterans from Stratford who have served our country honorably in war and in peace, and to act as a repository for their stories. The museum is one of our neighbors in Boothe Park!',
  },
  {
    name: 'Friends of Boothe Park',
    href: 'https://boothememorialpark.com/about-the-park/',
    text: 'Boothe Memorial Park & Museum is a 32-acre historic park on the Housatonic. BMRS is one of several volunteer organizations based at the park, alongside the Veterans Museum, Amateur Radio Club, and Boothe Memorial Astronomical Society.',
  },
  {
    name: 'BMRS on Facebook',
    href: 'https://www.facebook.com/Boothe-Memorial-Railway-Society-180409186656',
    text: 'Catch up on the latest news about BMRS.',
  },
  {
    name: 'BMRS on Instagram',
    href: 'https://www.instagram.com/bmrailways',
    text: 'Photos and updates from the museum and garden railway.',
  },
  {
    name: 'BMRS on YouTube',
    href: 'https://www.youtube.com/@bmrailways/streams',
    text: 'Videos and live cameras. On the YouTube screen, click the video with the red LIVE label.',
  },
  {
    name: 'Photo Gallery on Flickr',
    href: 'https://www.flickr.com/photos/200740512@N04/albums',
    text: 'Some of the Railroad Museum’s best pictures, collected in albums.',
  },
]

export const reviews = [
  {
    name: 'Mr. E.',
    meta: 'Google review · Local Guide',
    rating: 5,
    quote:
      'This musium is amazing. I love spending time here. It is a lot of fun watching all the trains. The volunteers there are really passionate about their craft. I was really impressed by how much work goes into creating all the miniature scenes. Sitting outside on the benches watching the garden railway was a real treat.',
  },
  {
    name: 'Corell Thomas',
    meta: 'Google review',
    rating: 5,
    quote:
      'It’s been years but this is where my family always had reunions in the past. Bravo. It’s beautiful and the playground for the kids helps. I love the pavilion and kitchen. Perfect. Family friendly for all ages.',
  },
  {
    name: 'Team Hamtaro',
    meta: 'Google review · Local Guide',
    rating: 5,
    quote:
      'It is open usually the majority of the summer. But after that it’s the third Saturday of each month. A great opportunity to check out some amazing trains you can’t find elsewhere. Good for all ages. There’s usually no wait, and no tickets needed. It’s a walk-in experience.',
  },
]

export const stemLinks = [
  { name: 'Arduino Uno', href: 'https://store-usa.arduino.cc/products/arduino-uno-rev3' },
  { name: 'Arduino Nano', href: 'https://store.arduino.cc/products/arduino-nano' },
  { name: 'Arduino for kids: first project', href: 'https://docs.arduino.cc/built-in-examples' },
  { name: 'Learn about Arduino', href: 'https://www.youtube.com/watch?v=rjbrnMaOQ60' },
  { name: 'Arduino for kids', href: 'https://www.youtube.com/watch?v=CSx6k-zXlLE' },
  { name: 'micro:bit', href: 'https://www.youtube.com/watch?v=_kGzHNKHcAc' },
]




const url4 = 'https://www.amazon.com/dp/B06X9H5HD5?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url5 = 'https://www.amazon.com/dp/B06X9H3B9V?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url6 = 'https://www.amazon.com/dp/B06WWP9XXB?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url7 = 'https://www.amazon.com/dp/B01GER4VGQ?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url8 = 'https://www.amazon.com/dp/B071WQGFT8?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url9 = 'https://www.amazon.com/dp/B01GER4KLM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url10 = 'https://www.amazon.com/dp/B07B2KX563?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url11 = 'https://www.amazon.com/dp/B07B2KDHVD?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url12 = 'https://www.amazon.com/dp/B07B2LHGF4?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url13 = 'https://www.amazon.com/dp/B07B7WRF7M?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url14 = 'https://www.amazon.com/dp/B06XC7BGZ7?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url15 = 'https://www.amazon.com/dp/B074MDB9P7?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url16 = 'https://www.amazon.com/dp/B07K7TPD4J?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url17 = 'https://www.amazon.com/dp/B07K7V66QV?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url18 = 'https://www.amazon.com/dp/B01N6UPROM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url19 = 'https://www.amazon.com/dp/B01GIQ0PVS?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url20 = 'https://www.amazon.com/dp/B01GIQ0PTU?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url21 = 'https://www.amazon.com/dp/B07BD42PQC?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url22 = 'https://www.amazon.com/dp/B01MSB6DN6?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url23 = 'https://www.amazon.com/dp/B07BD3ZSQP?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url24 = 'https://www.amazon.com/dp/B01GOTKHVM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url25 = 'https://www.amazon.com/dp/B07BD2TL74?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url26 = 'https://www.amazon.com/dp/B079K3H3RK?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url27 = 'https://www.amazon.com/dp/B07BD3LMTM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url28 = 'https://www.amazon.com/dp/B01GOTKHSA?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url29 = 'https://www.amazon.com/dp/B07FGBCR45?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';
const url30 = 'https://www.amazon.com/dp/B07DTW8XVR?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1';

const data = [
  {
    link:"https://www.amazon.com/dp/B07GY3FD2W?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
    image:"css/images/11.jpg",
    line1:"Ivilon Drapery Treatment",
    line2:"Window Curtain Rod - Acrylic..",
    price:"$28.99"
  },
  {
    link:"https://www.amazon.com/dp/B07GY18321?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
    image:"css/images/12.jpg",
    line1:"Ivilon Drapery Treatment",
    line2:"Window Curtain Rod - Acrylic..",
    price:"$28.99"
  },
  {
    link:"https://www.amazon.com/dp/B07GXYB4ZM?tag=wixlabs1234-20&linkCode=ogi&th=1&psc=1",
    image:"css/images/13.jpg",
    line1:"Ivilon Drapery Treatment",
    line2:"Window Curtain Rod - Acrylic..",
    price:"$26.99"
  }
]

var old = document.querySelector(".loop").innerHTML

console.log(old);

data.forEach(function(t){
  // addition = "<div class="col"><div><div class="card h-100 text-center">
  //   <a href="#" class="hoverimage caption text-white">
  //   <img src="css/images/11.jpg" class="card-img-top mt-5 mb-5" alt="..."></a></div>
  //   <div><p>Ivilon Drapery Treatment <br> Window Curtain Rod - Acrylic..</p>
  //   <a href="#" class="btn border border-dark">Buy now on Amazon</a></div></div></div>"

  // document.querySelector(".looplink").innerHTML = t.link;
  // document.querySelector(".change2").innerHTML = t.line1+"<br>"+t.line2;
  // var x = document.querySelector(".change1").src;

  document.querySelector(".looplink").innerHTML = "<a href = '#' class='looplink hoverimage caption text-white'><img src='./css/images/11.jpg' class='change1 card-img-top mt-5 mb-5' alt='...'></a>";
  document.querySelector(".change2").innerHTML = t.line1+"<br>"+t.line2;

  document.querySelector(".loop").innerHTML = document.querySelector(".loop").innerHTML+old;
  console.log(document.querySelector(".loop").innerHTML = old+ document.querySelector(".loop").innerHTML);
});



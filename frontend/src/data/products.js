// 20 Ghibli Merchandise Items — Dummy Data
// Prices in IDR (Rupiah)

import img1 from '../assets/Totoro-plush.jpg';
import img2 from '../assets/Calcifer-Lamp.jpg';
import img3 from '../assets/jiji-mug.jpg';
import img4 from '../assets/spirited-bag.jpg';
import img5 from '../assets/soot-pins.jpg';
import img6 from '../assets/no-face-fig.jpg';
import img7 from '../assets/howl-puzzle.jpg';
import img8 from '../assets/mononoke-art.jpg';
import img9 from '../assets/kiki-broom.jpg';
import img10 from '../assets/wind-chime.jpg';
import img11 from '../assets/Ponyo-Plush.jpg';
import img12 from '../assets/totoro-umbrella.jpg';
import img13 from '../assets/bath-candle.jpg';
import img14 from '../assets/catbus-bag.jpg';
import img15 from '../assets/iron-mug.jpg';
import img16 from '../assets/forest-book.jpg';
import img17 from '../assets/haku-key.jpg';
import img18 from '../assets/laputta-terra.jpg';
import img19 from '../assets/pilot-cap.jpg';
import img20 from '../assets/vinyl-box.jpg';

export const products = [
  {
    id: 1,
    name: "Totoro Jumbo Plush",
    category: "Boneka",
    description: "Boneka Totoro berukuran besar dengan bahan bulu premium, ekspresi lembut khas film My Neighbor Totoro. Sempurna untuk dekorasi dan teman tidur.",
    price: 349000,
    stock: 15,
    imageUrl: img1,
    rating: 4.9,
    sold: 312,
  },
  {
    id: 2,
    name: "Calcifer Flame Lamp",
    category: "Dekorasi",
    description: "Lampu meja berbentuk Calcifer si roh api dari Howl's Moving Castle. Berpendar oranye-merah hangat, cocok untuk sudut baca yang cozy.",
    price: 289000,
    stock: 8,
    imageUrl: img2,
    rating: 4.8,
    sold: 198,
  },
  {
    id: 3,
    name: "Jiji Cat Mug",
    category: "Dapur",
    description: "Mug keramik bergambar Jiji, kucing hitam lucu dari Kiki's Delivery Service. Kapasitas 350ml, aman untuk microwave dan dishwasher.",
    price: 125000,
    stock: 42,
    imageUrl: img3,
    rating: 4.7,
    sold: 541,
  },
  {
    id: 4,
    name: "Spirited Away Tote Bag",
    category: "Aksesori",
    description: "Tas tote kanvas premium dengan ilustrasi Chihiro dan No-Face dari Spirited Away. Kapasitas besar, tali bahu nyaman, cocok untuk ke mana saja.",
    price: 165000,
    stock: 25,
    imageUrl: img4,
    rating: 4.6,
    sold: 287,
  },
  {
    id: 5,
    name: "Soot Sprite Pin Set",
    category: "Aksesori",
    description: "Set 5 pin enamel berbentuk Susuwatari (Soot Sprite) dari Spirited Away & My Neighbor Totoro. Desain imut, warna hitam berkilau.",
    price: 89000,
    stock: 60,
    imageUrl: img5,
    rating: 4.8,
    sold: 720,
  },
  {
    id: 6,
    name: "No-Face Enamel Figurine",
    category: "Koleksi",
    description: "Figurin enamel No-Face setinggi 12cm dengan detail lukis tangan. Dilengkapi kotak display transparan eksklusif.",
    price: 425000,
    stock: 5,
    imageUrl: img6,
    rating: 5.0,
    sold: 63,
  },
  {
    id: 7,
    name: "Howl's Castle Puzzle 1000pcs",
    category: "Permainan",
    description: "Puzzle jigsaw 1000 keping bergambar Howl's Moving Castle yang megah. Ukuran selesai 68x48cm, kertas premium anti-silau.",
    price: 215000,
    stock: 12,
    imageUrl: img7,
    rating: 4.7,
    sold: 134,
  },
  {
    id: 8,
    name: "Princess Mononoke Art Print",
    category: "Seni",
    description: "Poster seni A3 bergambar San & Ashitaka dengan teknik cetak fine art pada kertas kanvas 300gsm. Warna tajam dan tahan lama.",
    price: 145000,
    stock: 30,
    imageUrl: img8,
    rating: 4.9,
    sold: 412,
  },
  {
    id: 9,
    name: "Kiki's Broom Pen Holder",
    category: "Alat Tulis",
    description: "Tempat pensil unik berbentuk sapu terbang Kiki dari resin berkualitas tinggi. Muat 15+ pensil, sempurna untuk meja kerja.",
    price: 195000,
    stock: 18,
    imageUrl: img9,
    rating: 4.5,
    sold: 89,
  },
  {
    id: 10,
    name: "Nausicaä Valley Wind Chime",
    category: "Dekorasi",
    description: "Gantungan angin keramik terinspirasi Nausicaä of the Valley of the Wind. Suara merdu, cocok di teras atau jendela.",
    price: 178000,
    stock: 20,
    imageUrl: img10,
    rating: 4.6,
    sold: 156,
  },
  {
    id: 11,
    name: "Ponyo Fish Plush Small",
    category: "Boneka",
    description: "Boneka Ponyo dalam wujud ikan merah kecil dari film Ponyo on the Cliff by the Sea. Ukuran 20cm, bahan fleece lembut.",
    price: 115000,
    stock: 35,
    imageUrl: img11,
    rating: 4.8,
    sold: 398,
  },
  {
    id: 12,
    name: "Totoro Umbrella Green",
    category: "Aksesori",
    description: "Payung lipat hijau bergambar Totoro menunggu di halte bus, seperti adegan ikonik di film. Diameter 100cm saat terbuka.",
    price: 245000,
    stock: 10,
    imageUrl: img12,
    rating: 4.7,
    sold: 201,
  },
  {
    id: 13,
    name: "Spirited Away Bathhouse Candle",
    description: "Lilin aromaterapi dengan wewangian bambu & sakura, dalam wadah keramik bergambar Yubaba's Bathhouse. Durasi bakar ~40 jam.",
    category: "Dekorasi",
    price: 198000,
    stock: 22,
    imageUrl: img13,
    rating: 4.9,
    sold: 267,
  },
  {
    id: 14,
    name: "Catbus Plush Backpack",
    category: "Boneka",
    description: "Ransel anak berbentuk Catbus dari My Neighbor Totoro. Kapasitas 8L, tali bahu empuk, ritsleting tersembunyi di badan Catbus.",
    price: 485000,
    stock: 7,
    imageUrl: img14,
    rating: 5.0,
    sold: 48,
  },
  {
    id: 15,
    name: "Ashitaka Iron Mug",
    category: "Dapur",
    description: "Mug besi bergaya era Ashitaka dari Princess Mononoke. Kapasitas 450ml, material besi cor berkualitas, aman untuk minuman panas.",
    price: 159000,
    stock: 28,
    imageUrl: img15,
    rating: 4.6,
    sold: 183,
  },
  {
    id: 16,
    name: "Ghibli Forest Notebook",
    category: "Alat Tulis",
    description: "Notebook A5 hardcover bergambar hutan magis khas Studio Ghibli. 200 halaman dot-grid, kertas cream 80gsm, friendly untuk berbagai jenis pena.",
    price: 98000,
    stock: 55,
    imageUrl: img16,
    rating: 4.7,
    sold: 634,
  },
  {
    id: 17,
    name: "Haku Dragon Keychain",
    category: "Aksesori",
    description: "Gantungan kunci resin berbentuk Haku dalam wujud naga dari Spirited Away. Detail sisik dan mata yang indah, ukuran 6cm.",
    price: 65000,
    stock: 80,
    imageUrl: img17,
    rating: 4.5,
    sold: 892,
  },
  {
    id: 18,
    name: "Laputa Sky Garden Terrarium",
    category: "Dekorasi",
    description: "Terrarium mini bertema Laputa: Castle in the Sky. Dilengkapi miniatur robot penjaga, tanaman udara asli, dan kotak kaca berbentuk kastil.",
    price: 675000,
    stock: 3,
    imageUrl: img18,
    rating: 5.0,
    sold: 29,
  },
  {
    id: 19,
    name: "Porco Rosso Pilot Cap",
    category: "Aksesori",
    description: "Topi pilot kulit sintetis terinspirasi Marco Pagot dari Porco Rosso. Ukuran universal dengan tali pengatur, cocok untuk koleksi.",
    price: 315000,
    stock: 14,
    imageUrl: img19,
    rating: 4.6,
    sold: 77,
  },
  {
    id: 20,
    name: "Ghibli Soundtrack Vinyl Box",
    category: "Koleksi",
    description: "Box set vinyl 4 piringan hitam berisi soundtrack Spirited Away, Howl's Moving Castle, Princess Mononoke & My Neighbor Totoro oleh Joe Hisaishi.",
    price: 1250000,
    stock: 5,
    imageUrl: img20,
    rating: 5.0,
    sold: 41,
  },
];

export const categories = ["Semua", "Boneka", "Dekorasi", "Dapur", "Aksesori", "Koleksi", "Permainan", "Seni", "Alat Tulis"];

export const formatIDR = (price) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

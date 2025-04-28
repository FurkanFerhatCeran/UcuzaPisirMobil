import { Recipe } from '../utils/types';

// Grouped by categories for better organization
export const RECIPES: Recipe[] = [
  // ÇORBALAR
  {
    id: '1',
    title: 'Mercimek Çorbası',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/mercimek-corbasi-yemekcom.jpg',
    time: 45,
    difficulty: 'Kolay',
    ingredients: [
      { id: '1', name: 'Kırmızı Mercimek', amount: '1', unit: 'su bardağı' },
      { id: '2', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '3', name: 'Havuç', amount: '1', unit: 'adet' },
      { id: '4', name: 'Patates', amount: '1', unit: 'adet' },
      { id: '5', name: 'Sıvı Yağ', amount: '2', unit: 'yemek kaşığı' },
      { id: '6', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '7', name: 'Karabiber', amount: '1/2', unit: 'çay kaşığı' },
    ],
    instructions: [
      'Soğanı yemeklik doğrayın ve sıvı yağda kavurun.',
      'Havuç ve patatesleri küp küp doğrayıp soğanların üzerine ekleyin ve karıştırın.',
      'Yıkanmış mercimekleri de tencereye ekleyin.',
      'Üzerini geçecek kadar sıcak su ekleyin ve kaynamaya bırakın.',
      'Mercimekler ve sebzeler yumuşayınca blenderdan geçirin.',
      'Tuz ve karabiberi ekleyip 5 dakika daha kaynatın.',
      'Üzerine kızdırılmış yağ ve kırmızı biber ekleyerek servis edin.'
    ],
    category: 'Çorba'
  },
  {
    id: '4',
    title: 'Domates Çorbası',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/11/domates-corbasi-yeni.jpg',
    time: 30,
    difficulty: 'Kolay',
    ingredients: [
      { id: '1', name: 'Domates', amount: '5', unit: 'adet' },
      { id: '2', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '3', name: 'Tereyağı', amount: '1', unit: 'yemek kaşığı' },
      { id: '4', name: 'Un', amount: '1', unit: 'yemek kaşığı' },
      { id: '5', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '6', name: 'Karabiber', amount: '1/2', unit: 'çay kaşığı' },
      { id: '7', name: 'Süt', amount: '1', unit: 'su bardağı' },
    ],
    instructions: [
      'Domatesleri rendeleyin.',
      'Soğanı yemeklik doğrayın ve tereyağında kavurun.',
      'Unu ekleyip kokusu çıkana kadar kavurun.',
      'Rendelenmiş domatesi ekleyip karıştırın.',
      'Üzerine su ekleyip kaynamaya bırakın.',
      'Kaynayınca tuz ve baharatları ekleyin.',
      'En son sütü ekleyip karıştırın ve servis edin.'
    ],
    category: 'Çorba'
  },
  {
    id: '5',
    title: 'Tavuk Çorbası',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2016/10/tel-sehriyeli-tavuk-corbasi-tarifi.jpg',
    time: 50,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Tavuk Göğsü', amount: '1', unit: 'adet' },
      { id: '2', name: 'Arpa Şehriye', amount: '1/2', unit: 'su bardağı' },
      { id: '3', name: 'Havuç', amount: '1', unit: 'adet' },
      { id: '4', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '5', name: 'Tereyağı', amount: '1', unit: 'yemek kaşığı' },
      { id: '6', name: 'Limon', amount: '1/2', unit: 'adet' },
      { id: '7', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
    ],
    instructions: [
      'Tavuğu tencereye koyup üzerini geçecek kadar su ekleyin ve haşlayın.',
      'Haşlanan tavuğu soğutup didikleyin.',
      'Başka bir tencerede tereyağını eritip şehriyeleri kavurun.',
      'Yemeklik doğranmış soğan ve havucu da ekleyip kavurun.',
      'Tavuk suyunu ve didiklenmiş tavuğu ekleyin.',
      'Şehriyeler pişene kadar kaynatın.',
      'Tuz ekleyip ocaktan alın ve limon suyunu ekleyerek servis edin.'
    ],
    category: 'Çorba'
  },
  
  // ANA YEMEKLER
  {
    id: '3',
    title: 'Tavuklu Makarna',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2020/04/tavuklu-makarna-yemekcom.jpg',
    time: 30,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Makarna', amount: '1', unit: 'paket' },
      { id: '2', name: 'Tavuk Göğsü', amount: '300', unit: 'gram' },
      { id: '3', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '4', name: 'Sarımsak', amount: '2', unit: 'diş' },
      { id: '5', name: 'Sıvı Yağ', amount: '2', unit: 'yemek kaşığı' },
      { id: '6', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '7', name: 'Karabiber', amount: '1/2', unit: 'çay kaşığı' },
      { id: '8', name: 'Krema', amount: '1', unit: 'kutu' },
    ],
    instructions: [
      'Makarnayı tuzlu suda haşlayın.',
      'Tavuk göğsünü küp küp doğrayın ve sıvı yağda soteleyin.',
      'Yemeklik doğranmış soğan ve sarımsağı tavukların üzerine ekleyin ve kavurun.',
      'Tuz ve karabiber ekleyin.',
      'Kremayı ekleyin ve karıştırın.',
      'Haşlanmış makarnayı süzün ve tavuk karışımıyla birleştirin.',
      'Sıcak olarak servis edin.'
    ],
    category: 'Ana Yemek'
  },
  {
    id: '6',
    title: 'Köfte Patates',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2020/10/firinda-kofte-patates-tarifi.jpg',
    time: 60,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Kıyma', amount: '500', unit: 'gram' },
      { id: '2', name: 'Patates', amount: '5', unit: 'adet' },
      { id: '3', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '4', name: 'Sarımsak', amount: '2', unit: 'diş' },
      { id: '5', name: 'Maydanoz', amount: '1', unit: 'demet' },
      { id: '6', name: 'Ekmek İçi', amount: '2', unit: 'dilim' },
      { id: '7', name: 'Domates Salçası', amount: '1', unit: 'yemek kaşığı' },
      { id: '8', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '9', name: 'Karabiber', amount: '1', unit: 'çay kaşığı' },
    ],
    instructions: [
      'Kıyma, rendelenmiş soğan, sarımsak, maydanoz, ıslatılmış ekmek içi, tuz ve baharatları karıştırın.',
      'Köfte hamurunu yoğurup şekil verin.',
      'Patatesleri dilimleyin ve tepsiye dizin.',
      'Köfteleri patateslerin üzerine yerleştirin.',
      'Salçalı su hazırlayıp tepsiye dökün.',
      '180 derece fırında 40 dakika pişirin.',
      'Sıcak servis yapın.'
    ],
    category: 'Ana Yemek'
  },
  {
    id: '7',
    title: 'Karnıyarık',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2016/05/karniyarik-tarifi.jpg',
    time: 75,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Patlıcan', amount: '6', unit: 'adet' },
      { id: '2', name: 'Kıyma', amount: '400', unit: 'gram' },
      { id: '3', name: 'Soğan', amount: '2', unit: 'adet' },
      { id: '4', name: 'Biber', amount: '2', unit: 'adet' },
      { id: '5', name: 'Domates', amount: '2', unit: 'adet' },
      { id: '6', name: 'Sarımsak', amount: '3', unit: 'diş' },
      { id: '7', name: 'Sıvı Yağ', amount: '4', unit: 'yemek kaşığı' },
      { id: '8', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '9', name: 'Karabiber', amount: '1', unit: 'çay kaşığı' },
    ],
    instructions: [
      'Patlıcanların kabuklarını alacalı soyup yarın ve tuzlu suda bekletin.',
      'Patlıcanları kızartın ve yağını süzdürün.',
      'Soğan ve biberi yağda kavurun, kıymayı ekleyin.',
      'Domates ve baharatları ekleyip harç pişene kadar kavurun.',
      'Patlıcanları tepsiye dizin ve yarıklarını açıp içine harç doldurun.',
      'Üzerine domates dilimleri koyun ve fırında 15-20 dakika pişirin.',
      'Sıcak servis yapın.'
    ],
    category: 'Ana Yemek'
  },
  
  // YAN YEMEKLER
  {
    id: '2',
    title: 'Patates Püresi',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2015/05/patates-puresi-yemekcom.jpg',
    time: 35,
    difficulty: 'Kolay',
    ingredients: [
      { id: '1', name: 'Patates', amount: '4', unit: 'adet' },
      { id: '2', name: 'Süt', amount: '1/2', unit: 'su bardağı' },
      { id: '3', name: 'Tereyağı', amount: '2', unit: 'yemek kaşığı' },
      { id: '4', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '5', name: 'Karabiber', amount: '1/4', unit: 'çay kaşığı' },
    ],
    instructions: [
      'Patatesleri yıkayıp soyun ve küp küp doğrayın.',
      'Tencereye alıp üzerini geçecek kadar su ekleyin ve yumuşayana kadar haşlayın.',
      'Haşlanan patatesleri süzün ve tekrar tencereye alın.',
      'Tereyağı ve sütü ekleyip ezin.',
      'Tuz ve karabiberi ekleyip karıştırın.',
      'Sıcak olarak servis edin.'
    ],
    category: 'Yan Yemek'
  },
  {
    id: '8',
    title: 'Bulgur Pilavı',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2015/01/bulgur-pilavi-yemekcom.jpg',
    time: 30,
    difficulty: 'Kolay',
    ingredients: [
      { id: '1', name: 'Bulgur', amount: '2', unit: 'su bardağı' },
      { id: '2', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '3', name: 'Domates Salçası', amount: '1', unit: 'yemek kaşığı' },
      { id: '4', name: 'Sıvı Yağ', amount: '3', unit: 'yemek kaşığı' },
      { id: '5', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
      { id: '6', name: 'Sıcak Su', amount: '4', unit: 'su bardağı' },
    ],
    instructions: [
      'Soğanı yemeklik doğrayıp yağda kavurun.',
      'Salçayı ekleyip kavurun.',
      'Yıkanmış bulguru ekleyip karıştırın.',
      'Tuz ve sıcak suyu ekleyin.',
      'Kısık ateşte suyunu çekene kadar pişirin.',
      'Ocaktan alıp 15 dakika dinlendirin.',
      'Karıştırıp servis edin.'
    ],
    category: 'Yan Yemek'
  },
  
  // TATLILAR
  {
    id: '9',
    title: 'Sütlaç',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/08/sutlac-yemekcom1.jpg',
    time: 60,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Pirinç', amount: '1/2', unit: 'su bardağı' },
      { id: '2', name: 'Süt', amount: '1', unit: 'litre' },
      { id: '3', name: 'Şeker', amount: '1', unit: 'su bardağı' },
      { id: '4', name: 'Pirinç Unu', amount: '1', unit: 'yemek kaşığı' },
      { id: '5', name: 'Vanilya', amount: '1', unit: 'paket' },
    ],
    instructions: [
      'Pirinci yıkayıp suda yumuşayana kadar haşlayın.',
      'Sütü ekleyip karıştırın.',
      'Şekeri ekleyip karıştırın.',
      'Pirinç ununu biraz sütle açıp karışıma ekleyin.',
      'Kaynamaya başlayınca 10-15 dakika kısık ateşte pişirin.',
      'Ocaktan alıp vanilyayı ekleyin.',
      'Kaselere dökün ve soğumaya bırakın.',
      'İstenirse üzerine tarçın serperek servis edin.'
    ],
    category: 'Tatlı'
  },
  {
    id: '10',
    title: 'Revani',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/revani-yemekcom.jpg',
    time: 60,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Yumurta', amount: '3', unit: 'adet' },
      { id: '2', name: 'Şeker', amount: '1', unit: 'su bardağı' },
      { id: '3', name: 'Yoğurt', amount: '1/2', unit: 'su bardağı' },
      { id: '4', name: 'Un', amount: '1', unit: 'su bardağı' },
      { id: '5', name: 'İrmik', amount: '1', unit: 'su bardağı' },
      { id: '6', name: 'Kabartma Tozu', amount: '1', unit: 'paket' },
      { id: '7', name: 'Limon', amount: '1/2', unit: 'adet' },
    ],
    instructions: [
      'Şerbeti için: 2,5 su bardağı şeker, 2,5 su bardağı su ve yarım limon suyunu kaynatıp soğutun.',
      'Yumurta ve şekeri çırpın.',
      'Yoğurt, sıvı yağ ve vanilyayı ekleyip karıştırın.',
      'Un, irmik ve kabartma tozunu ekleyip karıştırın.',
      'Karışımı yağlanmış tepsiye dökün.',
      '180 derece fırında 30-35 dakika pişirin.',
      'Fırından çıkarıp soğuk şerbeti üzerine dökün.',
      'Şerbeti çekmesi için bekletin ve servis edin.'
    ],
    category: 'Tatlı'
  },
  
  // SALATALAR
  {
    id: '11',
    title: 'Çoban Salatası',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/coban-salatasi-yemekcom2.jpg',
    time: 15,
    difficulty: 'Kolay',
    ingredients: [
      { id: '1', name: 'Domates', amount: '3', unit: 'adet' },
      { id: '2', name: 'Salatalık', amount: '2', unit: 'adet' },
      { id: '3', name: 'Biber', amount: '2', unit: 'adet' },
      { id: '4', name: 'Soğan', amount: '1', unit: 'adet' },
      { id: '5', name: 'Maydanoz', amount: '1/2', unit: 'demet' },
      { id: '6', name: 'Zeytinyağı', amount: '3', unit: 'yemek kaşığı' },
      { id: '7', name: 'Limon', amount: '1/2', unit: 'adet' },
      { id: '8', name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
    ],
    instructions: [
      'Domates, salatalık ve biberleri küp küp doğrayın.',
      'Soğanı piyazlık doğrayın.',
      'Maydanozu ince kıyın.',
      'Tüm malzemeleri bir kaseye alın.',
      'Üzerine zeytinyağı, limon suyu ve tuz ekleyip karıştırın.',
      'Hemen servis edin.'
    ],
    category: 'Salata'
  },
  {
    id: '12',
    title: 'Sezar Salata',
    image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2018/05/tavuklu-sezar-salata-tarifi.jpg',
    time: 30,
    difficulty: 'Orta',
    ingredients: [
      { id: '1', name: 'Marul', amount: '1', unit: 'adet' },
      { id: '2', name: 'Tavuk Göğsü', amount: '1', unit: 'adet' },
      { id: '3', name: 'Kruton', amount: '1', unit: 'avuç' },
      { id: '4', name: 'Parmesan Peyniri', amount: '50', unit: 'gram' },
      { id: '5', name: 'Zeytinyağı', amount: '3', unit: 'yemek kaşığı' },
      { id: '6', name: 'Limon', amount: '1/2', unit: 'adet' },
      { id: '7', name: 'Hardal', amount: '1', unit: 'tatlı kaşığı' },
      { id: '8', name: 'Sarımsak', amount: '1', unit: 'diş' },
    ],
    instructions: [
      'Tavuk göğsünü haşlayıp didikleyin veya küp küp doğrayın.',
      'Marulu yıkayıp yapraklarını koparın.',
      'Sos için: Zeytinyağı, limon suyu, hardal ve ezilmiş sarımsağı karıştırın.',
      'Marul yapraklarını servis kabına alın.',
      'Üzerine tavukları ekleyin.',
      'Krutonları ve rendelenmiş peyniri serpin.',
      'Sosu üzerine gezdirip servis edin.'
    ],
    category: 'Salata'
  }
]; 
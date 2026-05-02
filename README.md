# Dijital Restoran Menüsü

QR kod veya NFC etiketi ile açılabilecek restoran menüsü için çalışan ilk prototip.

## Açma

Proje React + Vite yapısına taşındı. Yerelde çalıştırmak için:

```bash
cd "/Users/stnbl/Documents/Codex/2026-04-28/bir-proje-yapmak-istiyorum-proje-restoranlar"
npm install
npm run dev
```

Geliştirme sunucusu açıldıktan sonra menü sayfası Vite portuna göre açılır. GitHub Pages tabanı nedeniyle yerel adres genelde şu formattadır:

- `http://localhost:5173/digital-menu/?r=luna-bistro`
- Port doluysa Vite `5174` gibi başka bir port verebilir.

Frontend API adresi kök `.env` dosyasından okunur:

```env
VITE_API_URL=http://localhost:5001
```

Ana giriş ve hesap oluşturma ekranı:

- `http://localhost:5173/index.html`
- Yeni restoran kullanıcıları buradan hesap oluşturur ve otomatik 1 aylık ücretsiz deneme lisansı alır.
- Mevcut restoran kullanıcıları da ana giriş ekranından giriş yapar; prototipte kayıtlı restoran hesapları seçim alanından otomatik doldurulabilir.
- Hesap oluşturulduğunda restoran sayfası otomatik oluşturulur.
- Program yöneticisi girişi: `admin@synkard.com` / `admin123`

Yönetim paneli doğrudan menü ekranında görünmez. Paneli açmak için:

- Yerel kullanımda: `http://localhost:5173/index.html?r=luna-bistro#admin`
- Canlı yayında hedef rota: `/admin`

Ana platform yönetim paneli için:

- Yerel kullanımda: `http://localhost:5173/index.html#platform`
- Canlı yayında hedef rota: `/platform`

## Demo giriş

- E-posta: `demo@restoran.com`
- Şifre: `123456`

## Backend ve MongoDB Atlas

Projeye MongoDB destekli Express backend eklendi. Backend klasörü:

```text
backend/
```

Backend teknolojileri:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors

Backend kurulumu:

```bash
cd "/Users/stnbl/Documents/Codex/2026-04-28/bir-proje-yapmak-istiyorum-proje-restoranlar/backend"
npm install
cp .env.example .env
```

`backend/.env` dosyasında MongoDB Atlas bağlantısını gir:

```env
PORT=5001
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/digital-menu?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

Backend çalıştırma:

```bash
npm run dev
```

API adresi:

```text
http://localhost:5001
```

Backend endpointleri:

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `GET /api/categories`
- `POST /api/categories`
- `GET /api/restaurants`
- `GET /api/restaurants/:id`
- `POST /api/restaurants`
- `PUT /api/restaurants/:id`
- `DELETE /api/restaurants/:id`
- `POST /api/visits`
- `GET /api/visits/summary`
- `GET /api/visits/summary?restaurantSlug=luna-bistro`

Restoran bazlı veri için frontend isteklerde `restaurantSlug` kullanır:

```text
GET /api/products?restaurantSlug=luna-bistro
GET /api/categories?restaurantSlug=luna-bistro
```

Frontend mevcut tasarımı bozmadan çalışır. API açıksa kategori ve ürünleri backend'den alır; API kapalıysa mevcut tarayıcı hafızasındaki demo veriyle çalışmaya devam eder.

Örnek MongoDB verisi oluşturmak için:

```bash
cd "/Users/stnbl/Documents/Codex/2026-04-28/bir-proje-yapmak-istiyorum-proje-restoranlar/backend"
npm run seed
```

Bu komut mevcut MongoDB demo kayıtlarını temizler ve 5 restoran, her restorana 5 kategori, her kategoriye 10 yemek ve örnek ziyaret kayıtları ekler.

## İçerik

- Müşteriler mobil uyumlu menü ekranında kategorileri, ürünleri, fotoğrafları ve fiyatları görür.
- Restoran panelinden restoran bilgileri, kategori, ürün, fiyat ve ürün fotoğrafı eklenebilir.
- Para birimi sabit eurodur; restoran panelinde ayrıca para birimi seçimi yapılmaz.
- Menü arayüzünde Almanca ve İngilizce dil seçeneği bulunur.
- Restoran bilgileri, kategori adları, ürün adları ve ürün açıklamaları Almanca/İngilizce ayrı girilebilir.
- Eski demo içerikleri mümkün olduğu ölçüde otomatik olarak Almanca ve İngilizce gösterilecek şekilde dönüştürülür.
- Ana platform panelinden farklı restoran hesapları oluşturulabilir.
- Program yönetim paneli `Dashboard` ve `Kullanıcı Yönetimi` olarak iki sekmeye ayrılmıştır.
- Dashboard ekranında toplam restoran, aktif lisans, süresi dolmuş lisans, 1 ay kalan lisans, haftalık/aylık/toplam kullanım ve ziyaret sıralaması gösterilir.
- 1 ay kalan lisans kartına tıklanınca bu lisansa sahip restoranlar listelenir.
- Her restoran için kullanıcı adı, şifre ve URL adı tanımlanabilir.
- Her restoran hesabı için lisans başlangıç ve bitiş tarihi tanımlanabilir.
- Oluşturulmuş restoran hesaplarının lisans başlangıç ve bitiş tarihleri program yöneticisi tarafından sonradan değiştirilebilir.
- Yeni restoran oluşturulduğunda ayrı bir restoran menü sayfası üretilir.
- Lisans süresi biten restoranların açılış sayfasında lisans süresinin dolduğunu belirten uyarı gösterilir.
- Canlı sistem hedefinde restoran sayfaları `domain.com/restoran-adi` formatında açılacak şekilde tasarlanmıştır.
- Güncel canlı URL hedefi `domain.com/digimenu/restoran-adi` formatıdır.
- Yerel prototipte restoran sayfaları `index.html?r=restoran-adi` formatıyla önizlenir.
- Yerel prototipte `/digimenu/restoran-adi` formatı da restoran sayfasını açacak şekilde desteklenir.
- Veriler bu prototipte tarayıcının yerel hafızasında saklanır.
- QR/NFC bağlantıları ana platform yönetim panelinde listelenir. QR görseli bu ilk prototipte önizlemedir.

## Son yapılan düzenlemeler

- Proje React + Vite yapısına taşındı.
- `package.json`, `package-lock.json`, `src/main.jsx` ve `src/App.jsx` eklendi.
- Uygulama artık Vite geliştirme sunucusu üzerinden çalıştırılabilir.
- Menü bölümü tam mobil uyumlu hale getirildi.
- Yemek kartları her ekranda alt alta listelenecek şekilde düzenlendi.
- Masaüstünde yemeklerin yan yana dizilmesi kaldırıldı.
- Yemek fotoğrafları küçültüldü ve kartın sağ tarafında sabit küçük görsel olarak konumlandırıldı.
- Kategori sekmeleri mobilde yatay kaydırılabilir hale getirildi.
- Menü genişliği mobil uygulama hissi verecek şekilde daraltıldı.
- Mobil görünümde yatay taşma problemi giderildi.
- Para birimi seçeneği kaldırıldı ve tüm ürün fiyatları standart olarak euro gösterilecek şekilde ayarlandı.
- Menü ve giriş butonları müşteri ekranından kaldırıldı.
- Yönetim paneli gizli URL mantığına taşındı.
- Giriş ekranı daha küçük ve sade hale getirildi.
- Puan ve masaya servis bilgileri müşteri menüsünden kaldırıldı.
- Dil değiştirme düğmesi eklendi.
- Yönetim panelinde Almanca ve İngilizce içerik alanları ayrı hale getirildi.
- Mobil kategori sekmelerinin yatay kaydırma davranışı düzeltildi.
- Menü genişliği telefon ekranına taşmayacak şekilde yeniden düzenlendi.
- Kategori veya ürün silerken önce onay penceresi açılacak şekilde güvenli silme akışı eklendi.
- Üstteki logo alanı yönetilebilir hale getirildi: restoran logosu yüklenebilir, logo yoksa restoran adının baş harfi gösterilir.
- Logo/baş harf alanı için yönetim paneline arka plan rengi seçme alanı eklendi.
- Yönetim paneline üçlü marka renk kontrolü eklendi: buton rengi, sayfa arka plan rengi ve yazı rengi.
- Seçilen marka renkleri menü ve yönetim ekranındaki butonlara, arka plana ve temel yazı rengine uygulanır.
- Ana platform yönetim paneli eklendi.
- Platform panelinden restoran hesabı, kullanıcı adı, şifre ve URL adı oluşturma desteği eklendi.
- Her restoran için ayrı menü bağlantısı, canlı URL önizlemesi, yerel önizleme linki, QR önizlemesi ve NFC link kopyalama alanı eklendi.
- QR/NFC bağlantı yönetimi restoran panelinden ana platform paneline taşındı.
- Ana platformdaki restoran listesi satır görünümüne dönüştürüldü.
- Restoran satırında ana aksiyon olarak yalnızca restoran sayfasını açma butonu gösterilir.
- Kullanıcı adı, mevcut şifre, şifre sıfırlama, canlı link, yerel link, NFC link kopyalama ve QR indirme işlemleri sağdaki detay menüsüne taşındı.
- QR kod artık listede resim olarak gösterilmez; `Download QR PNG` butonuyla PNG olarak indirilir.
- Oluşturulan restoran hesaplarının şifresi ana platform panelinden sıfırlanabilir.
- Ana platform başlığı `Kontrol Panel` olarak güncellendi.
- Kontrol panelindeki gereksiz `Open menu` butonu kaldırıldı.
- Menü ekranında kategori şeridi sayfa aşağı kaydırıldığında sabit kalacak şekilde düzenlendi.
- `Kampagnen / Campaigns` kategorisi her restoranda ilk sıraya eklendi.
- İlk görünen menü kartının üst kısmının yarım görünmesi düzeltildi.
- Restoran detaylarında görüntülenme istatistikleri eklendi: bu hafta, bu ay ve toplam görüntülenme.
- Restoran menü sayfasının ilk açılışında arama/kategori/ürün listesi gizlendi.
- Hero görselinin altında aksiyon butonları eklendi: Menü, Google, Instagram, Facebook, TikTok ve WiFi.
- Menü listesi yalnızca `Menü` butonuna basılınca açılır.
- Google, Instagram, Facebook, TikTok ve WiFi butonları sadece restoran panelinde ilgili bağlantı girildiyse görünür.
- Restoran yönetim paneline Google değerlendirme, Instagram, Facebook, TikTok ve WiFi bağlantı giriş alanları eklendi.
- Program yönetim panelinde restoran hesabı oluştururken lisans başlangıç ve bitiş tarihi girilebilir hale getirildi.
- Program yönetim paneli dashboard ve kullanıcı yönetimi olarak iki ayrı menüye ayrıldı.
- Ana giriş ekranı eklendi: kullanıcılar giriş yapabilir veya hesap oluşturabilir.
- Hesap oluşturan restoran kullanıcıları için otomatik restoran kaydı ve 1 aylık ücretsiz deneme lisansı oluşturulur.
- Program yöneticileri aynı giriş ekranından giriş yaparak program yönetim paneline erişir.
- Restoran yönetim panelindeki eski ayrı giriş kartı kaldırıldı; restoran paneline erişim ana giriş ekranı üzerinden yapılır.
- Program yönetim panelinin üst barı restoran bilgisi yerine Synkard logosu ve kontrol panel bilgisi gösterecek şekilde ayrıştırıldı.
- Ana giriş ekranına kayıtlı restoran ve program admin hesaplarını otomatik dolduran geçici hesap seçim alanı eklendi.
- Restoran yönetim paneline restoran URL adını düzenleme alanı eklendi.
- Restoran sayfaları için `digimenu/restoran-adi` formatı desteklendi.
- Dashboard ekranına platform kullanım istatistikleri, lisans özetleri, 1 ay kalan lisans listesi ve restoran ziyaret sıralaması eklendi.
- Kullanıcı yönetimi ekranında yeni kullanıcı/restoran ekleme formu butonla açılacak şekilde düzenlendi.
- Restoran satırlarındaki restoran sayfası ve detay aksiyonları küçük simge butonlara dönüştürüldü.
- Restoran listesi başlığı sadeleştirilerek `Restaurants` olarak güncellendi.
- Restoran satırlarındaki aksiyon simgeleri restoran adının sağında yan yana duracak şekilde sıkılaştırıldı.
- Restoran detaylarında aynı anda yalnızca bir restoran detayı açık kalacak şekilde davranış eklendi.
- Restoran dashboard ekranına lisans başlangıç tarihi, bitiş tarihi ve aktif/süresi doldu bilgisi eklendi.
- Lisansı biten restoran menü sayfasında lisans süresinin dolduğuna dair uyarı gösterimi eklendi.
- Program yönetim panelinde restoran detayından lisans başlangıç ve bitiş tarihini güncelleme desteği eklendi.
- Program yönetim panelindeki ziyaret istatistikleri ayrı bir kartta son 7 gün, son 30 gün ve toplam olarak gösterilecek şekilde düzenlendi.
- Restoran yönetim panelindeki ziyaret istatistikleri de son 7 gün, son 30 gün ve toplam formatına geçirildi.
- Ziyaret istatistiklerine `Heute / Today` kartı eklendi.
- Eski takvim haftası/ayı formatından gelen istatistiklerde `son 30 gün` değerinin `son 7 gün` değerinden küçük görünmesi engellendi.
- Menü sayfasında harita, adres ve açılış saatleri ayrı çerçeveler halinde düzenlendi; adres ve saat simgeleri daha dengeli SVG ikonlara dönüştürüldü.
- Adres alanına kopyalama butonu eklendi.
- Synkard footer alanında `Digitales Menü / Digital Menu` yazısı logonun sağında konumlandırıldı.
- Ana giriş ekranındaki ikonlar ve oranlar daha sade, standart ve mobil uyumlu hale getirildi.
- Restoran yönetim panelinde `Menüseite / Menu page` butonu eklendi.
- Platform ve yönetim ekranlarında kullanılan sabit terimler Almanca/İngilizce çeviri sistemine bağlandı.
- Program yönetim paneline çıkış butonu eklendi.
- Ana giriş ekranındaki Google ile devam et butonunun alt açıklama metni kaldırıldı.
- Restoran ilk açılış ekranında harita, adres ve açılış saatleri görünür bırakıldı; `Menü` butonuyla yemek listesi açıldığında bu bölüm gizlenecek şekilde düzenlendi.
- Restoran ilk açılış ekranındaki Google değerlendirme, sosyal medya ve WiFi alanları daha şık kart görünümlerine dönüştürüldü.
- `Menü` butonu daha yüksek ve belirgin hale getirildi.
- Yerel proje klasörü için hedef ad `digital menü` olarak belirlendi ve README çalıştırma komutu buna göre güncellendi.
- MongoDB Atlas destekli Express backend eklendi.
- Backend içinde `Product` ve `Category` Mongoose modelleri oluşturuldu.
- Backend içinde `Restaurant` Mongoose modeli ve restoran hesabı CRUD endpointleri oluşturuldu.
- Ürün CRUD ve kategori oluşturma/listeleme endpointleri eklendi.
- Frontend restoran, ürün ve kategori verisi için `VITE_API_URL` üzerinden API bağlantısı eklendi.
- Admin panelinde ürün/kategori ekleme, ürün güncelleme ve silme işlemleri API varsa backend'e yazacak, API yoksa eski yerel kayıt davranışıyla çalışacak şekilde düzenlendi.
- Program yönetim panelinde restoran hesabı silme fonksiyonu eklendi.
- MongoDB’ye 5 örnek restoran, her restorana 5 kategori ve her kategoriye 10 yemek basmak için seed komutu eklendi.
- Ziyaret istatistikleri restoran kaydının içinde sayaç olarak tutulmak yerine ayrı `VisitLog` koleksiyonuna taşındı.
- Dashboard istatistikleri `VisitLog` kayıtlarından bugün, son 7 gün, son 30 gün ve toplam olarak hesaplanacak şekilde güncellendi.

## Sonraki gerçek ürün adımları

- Gerçek kimlik doğrulama: restoranlara özel kullanıcı adı ve şifre.
- Dosya depolama: ürün ve kapak fotoğrafları için bulut depolama.
- Gerçek QR üretimi ve restoranlara özel `menu.siteadi.com/restoran-adi` adresleri.
- Çoklu dil, alerjen bilgisi, stokta yok durumu, kampanya ve sipariş entegrasyonu.

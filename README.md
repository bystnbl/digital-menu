# Dijital Restoran Menüsü

QR kod veya NFC etiketi ile açılabilecek restoran menüsü için çalışan ilk prototip.

## Açma

`index.html` dosyasını tarayıcıda açmanız yeterli.

Yönetim paneli doğrudan menü ekranında görünmez. Paneli açmak için:

- Yerel kullanımda: `admin/index.html`
- Canlı yayında hedef rota: `/admin`

Ana platform yönetim paneli için:

- Yerel kullanımda: `platform/index.html`
- Canlı yayında hedef rota: `/platform`

## Demo giriş

- E-posta: `demo@restoran.com`
- Şifre: `123456`

## İçerik

- Müşteriler mobil uyumlu menü ekranında kategorileri, ürünleri, fotoğrafları ve fiyatları görür.
- Restoran panelinden restoran bilgileri, kategori, ürün, fiyat ve ürün fotoğrafı eklenebilir.
- Para birimi sabit eurodur; restoran panelinde ayrıca para birimi seçimi yapılmaz.
- Menü arayüzünde Almanca ve İngilizce dil seçeneği bulunur.
- Restoran bilgileri, kategori adları, ürün adları ve ürün açıklamaları Almanca/İngilizce ayrı girilebilir.
- Eski demo içerikleri mümkün olduğu ölçüde otomatik olarak Almanca ve İngilizce gösterilecek şekilde dönüştürülür.
- Ana platform panelinden farklı restoran hesapları oluşturulabilir.
- Her restoran için kullanıcı adı, şifre ve URL adı tanımlanabilir.
- Yeni restoran oluşturulduğunda ayrı bir restoran menü sayfası üretilir.
- Canlı sistem hedefinde restoran sayfaları `domain.com/restoran-adi` formatında açılacak şekilde tasarlanmıştır.
- Yerel prototipte restoran sayfaları `index.html?r=restoran-adi` formatıyla önizlenir.
- Veriler bu prototipte tarayıcının yerel hafızasında saklanır.
- QR/NFC bağlantıları ana platform yönetim panelinde listelenir. QR görseli bu ilk prototipte önizlemedir.

## Son yapılan düzenlemeler

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

## Sonraki gerçek ürün adımları

- Backend ve veritabanı: restoran hesapları, menüler, ürünler, fotoğraflar.
- Gerçek kimlik doğrulama: restoranlara özel kullanıcı adı ve şifre.
- Dosya depolama: ürün ve kapak fotoğrafları için bulut depolama.
- Gerçek QR üretimi ve restoranlara özel `menu.siteadi.com/restoran-adi` adresleri.
- Çoklu dil, alerjen bilgisi, stokta yok durumu, kampanya ve sipariş entegrasyonu.

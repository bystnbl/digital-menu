# Synkard Digital Menu Backend

Node.js, Express.js, MongoDB Atlas ve Mongoose ile REST API.

## Kurulum

```bash
cd backend
npm install
cp .env.example .env
```

`backend/.env` dosyasında `MONGODB_URI` değerini MongoDB Atlas bağlantı adresinle değiştir.

```env
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/digital-menu?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

## Çalıştırma

```bash
npm run dev
```

API yerelde şu adreste çalışır:

```text
http://localhost:5000
```

## Endpointler

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

Restoran bazlı veri için isteklerde `restaurantSlug` query veya body alanı kullanılabilir.

Örnek:

```text
GET /api/products?restaurantSlug=luna-bistro
GET /api/categories?restaurantSlug=luna-bistro
```

## Örnek ürün

```json
{
  "restaurantSlug": "luna-bistro",
  "categoryId": "CATEGORY_ID",
  "name": {
    "de": "Gebackener Hummus",
    "en": "Baked hummus"
  },
  "description": {
    "de": "Mit Olivenöl und warmem Fladenbrot.",
    "en": "With olive oil and warm pita."
  },
  "price": "8,50",
  "image": ""
}
```

## Not

Fotoğraflar bu aşamada mevcut frontend davranışını bozmamak için base64/data URL olarak saklanabilir. Canlı ürün aşamasında Cloudinary, S3 veya benzeri bir dosya depolama servisine taşınması önerilir.

## Örnek veri oluşturma

MongoDB içindeki mevcut demo restoran, kategori ve ürünleri temizleyip 5 örnek restoran oluşturmak için:

```bash
npm run seed
```

Bu komut 5 restoran, her restorana 5 kategori, her kategoriye 10 ürün ve örnek ziyaret kayıtları ekler.

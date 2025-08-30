# 🍰 Desserts - E-Commerce React App

Modern ve responsive bir tatlı satış uygulaması. React hooks kullanılarak geliştirilmiş, mobile-first yaklaşımıyla tasarlanmış profesyonel bir e-ticaret deneyimi sunar.

## 🌟 Proje Hakkında

Bu proje, kullanıcıların çeşitli tatlıları görüntüleyebileceği, sepete ekleyebileceği ve sipariş verebileceği kapsamlı bir e-ticaret uygulamasıdır. Modern web teknolojileri kullanılarak geliştirilmiş olup, hem mobil hem de masaüstü cihazlarda mükemmel performans gösterir. Ürün kartlarında dinamik durumlar (seçili/seçili değil), akıcı animasyonlar ve kullanıcı dostu arayüz tasarımı ile gerçek bir alışveriş deneyimi yaşatır.

## ✨ Özellikler

- **🛒 Sepet Yönetimi**: Ürün ekleme, çıkarma ve miktar güncelleme
- **📱 Responsive Tasarım**: Mobile-first yaklaşımla tüm cihazlarda uyumlu
- **🎨 Modern UI/UX**: Pixel-perfect tasarım ve smooth animasyonlar  
- **⚡ Dinamik Durumlar**: Seçili ürün gösterimleri ve real-time güncellemeler
- **🔄 State Management**: React hooks ile etkili durum yönetimi
- **📦 Modal Sistem**: Sipariş onayı için modern popup tasarımı
- **🎯 Accessibility**: Keyboard navigation ve screen reader desteği

## 🛠️ Teknolojiler

- **React 18** - Modern component yapısı
- **Vite** - Hızlı geliştirme ortamı
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript ES6+** - Modern syntax ve özellikler
- **Responsive Design** - Mobile-first yaklaşım

## 🚀 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/keremalp72/desserts-app.git

# Proje dizinine gidin
cd desserts-app

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build oluşturun
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Tek sütun, sepet altta)
- **Tablet**: 768px - 1023px (İki sütun grid)
- **Desktop**: > 1024px (Üç sütun grid, yan sepet)

## 🎯 Öne Çıkan Özellikler

### Akıllı Sepet Sistemi
Kullanıcılar ürünleri kolayca sepete ekleyebilir, miktarları güncelleyebilir ve gerçek zamanlı olarak toplam tutarı görebilir. Sepet boş olduğunda kullanıcı dostu bir boş durum gösterimi sunar.

### Dinamik Ürün Kartları
Her ürün kartı, sepete eklenip eklenmediğine göre görsel olarak değişir. Seçili ürünler kırmızı border ile vurgulanır ve miktar kontrolü butonları aktif hale gelir.

### Modern Modal Tasarımı
Sipariş onayı, overlay ile birlikte gelen modern bir modal popup içinde gösterilir. Sipariş detayları, ürün görselleri ve toplam tutar net bir şekilde sunulur.

## 📂 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── ProductCard.jsx  # Ürün kartı bileşeni
│   ├── Cart.jsx         # Sepet bileşeni
│   └── OrderConfirmation.jsx # Sipariş onay modalı
├── images/              # Görsel dosyalar
├── App.jsx              # Ana uygulama bileşeni
├── App.css              # Ana stil dosyası
└── main.jsx             # Uygulama giriş noktası
```

## 🎨 Tasarım Sistemi

- **Renk Paleti**: Kırmızı (#C73B0F), Kahverengi tonları, Beyaz
- **Typography**: Red Hat Text font ailesi
- **Spacing**: 8px grid sistemi
- **Border Radius**: 8px ve 12px değerleri
- **Shadows**: Subtle box-shadow efektleri

## 📈 Performans Optimizasyonları

- **Lazy Loading**: Görseller için optimize edilmiş yükleme
- **Responsive Images**: srcSet ile farklı çözünürlük desteği
- **CSS Optimizasyonu**: Custom properties ve efficient selectors
- **Bundle Optimization**: Vite ile optimize edilmiş production build

## 🔗 Demo

[Canlı Demo](https://desserts-app-snowy.vercel.app/) - Uygulamayı canlı olarak görüntüleyin

## 👨‍💻 Geliştirici

**[Adınız]**
- GitHub: [@keremalp72](https://github.com/keremalp72)
- LinkedIn: [linkedin.com/in/keremalpozsobaci](https://linkedin.com/in/keremalpozsobaci)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
# NeonMerge Web - Deployment Guide

## GitHub Pages'e Deploy Etme

### 1. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun (örn: `neonmerge-web`)
2. Repository'yi public yapın (GitHub Pages için gerekli)
3. Local repository'nizi GitHub'a push edin:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/neonmerge-web.git
git push -u origin main
```

### 2. GitHub Pages Ayarları

1. GitHub repository'nize gidin
2. **Settings** > **Pages** bölümüne gidin
3. **Source** kısmından **GitHub Actions** seçin
4. Artık her push'ta otomatik olarak deploy edilecek

### 3. Domain Ayarları (Hostinger)

#### TTL (Time To Live) Nedir?

**TTL** = DNS kaydının cache'te ne kadar süre tutulacağını belirler (saniye cinsinden).

- **3600 saniye** = 1 saat
- **14400 saniye** = 4 saat

**Farklar:**
- **Düşük TTL (3600)**: DNS değişiklikleri daha hızlı yayılır (1 saat içinde), ama daha fazla DNS sorgusu yapılır
- **Yüksek TTL (14400)**: Daha az DNS sorgusu (performans için iyi), ama değişikliklerin yayılması daha uzun sürer (4 saat)

**Öneri:** İlk kurulumda 3600 kullanın (değişiklikler hızlı yayılsın), sonra 14400'e çıkarabilirsiniz (daha stabil).

#### Hostinger'da DNS Ayarları:

1. Hostinger kontrol panelinize giriş yapın
2. **Domains** > **DNS Zone Editor** bölümüne gidin
3. Aşağıdaki DNS kayıtlarını ekleyin:

**A Records:**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 14400

Type: A
Name: @
Value: 185.199.109.153
TTL: 14400

Type: A
Name: @
Value: 185.199.110.153
TTL: 14400

Type: A
Name: @
Value: 185.199.111.153
TTL: 14400
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: KULLANICI_ADI.github.io
TTL: 14400
```

**ALIAS Record (Hostinger için - GEREKLİ DEĞİL):**

ALIAS kaydı, CNAME kaydına benzer ama root domain (@) için de kullanılabilir. `connect.hostinger.com` genellikle Hostinger'ın kendi hosting servislerini kullanırken gerekir.

**GitHub Pages için ALIAS kaydına GEREK YOK!** GitHub Pages için sadece A kayıtları ve CNAME kaydı yeterlidir.

Eğer eski projenizde bu kayıt varsa ve Hostinger hosting kullanmıyorsanız, bu kaydı **SİLEBİLİRSİNİZ**:

```
Type: ALIAS
Name: @
Value: connect.hostinger.com
TTL: 0
```

**Önemli:** 
- GitHub Pages kullanıyorsanız → ALIAS kaydını **SİLİN**
- Hostinger hosting kullanıyorsanız → ALIAS kaydını **TUTUN**
- İkisini birlikte kullanamazsınız!

**MX Record (Email için - Opsiyonel):**

GitHub Pages sadece web hosting sağlar, email hosting sağlamaz. Eğer `support@neonmerge.fun` gibi email adresleri kullanmak istiyorsanız, ayrı bir email servisi (Google Workspace, Zoho Mail, vs.) kullanmanız gerekir.

Eski projenizde `gigacomobile.cloud` kullanıyorsanız ve aynı email servisini kullanmaya devam edecekseniz:

```
Type: MX
Name: @
Value: gigacomobile.cloud
Priority: 10
TTL: 14400
```

**Not:** 
- Email kullanmayacaksanız MX kaydına gerek yok
- Email kullanacaksanız, email servis sağlayıcınızın verdiği MX kayıtlarını ekleyin
- `gigacomobile.cloud` email servisinizse, yukarıdaki MX kaydını ekleyin

#### GitHub Pages'de Custom Domain:

1. Repository'nizde **Settings** > **Pages** bölümüne gidin
2. **Custom domain** kısmına `www.neonmerge.fun` yazın
3. **Enforce HTTPS** seçeneğini işaretleyin
4. GitHub otomatik olarak bir CNAME dosyası oluşturacak

### 4. Local Build Test

Deploy etmeden önce local'de test edin:

```bash
npm run build
```

Build başarılı olursa `out` klasörü oluşacak. Bu klasör GitHub Pages'e deploy edilecek.

### 5. Otomatik Deploy

Artık her `git push` yaptığınızda:
- GitHub Actions otomatik olarak build alacak
- `out` klasörünü GitHub Pages'e deploy edecek
- Site birkaç dakika içinde canlıya alınacak

### 6. Site URL'leri

- GitHub Pages URL: `https://KULLANICI_ADI.github.io/neonmerge-web`
- Custom Domain: `https://www.neonmerge.fun`

## Sorun Giderme

### Build Hatası
- `npm run build` komutunu local'de çalıştırıp hataları kontrol edin
- GitHub Actions loglarını kontrol edin

### Domain Çalışmıyor
- DNS değişikliklerinin yayılması 24-48 saat sürebilir
- `dig www.neonmerge.fun` komutu ile DNS kayıtlarını kontrol edin
- GitHub Pages'de custom domain'in doğru ayarlandığından emin olun

### 404 Hatası
- `next.config.js` dosyasındaki `basePath` ayarını kontrol edin
- GitHub Pages repository adı ile eşleştiğinden emin olun

## Notlar

- Next.js static export kullanıldığı için server-side features çalışmayacak
- API routes kullanılamaz
- Image optimization devre dışı (GitHub Pages için gerekli)
- Her değişiklikten sonra GitHub'a push yapmanız gerekiyor


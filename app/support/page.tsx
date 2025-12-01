import Link from 'next/link'
import { ArrowLeft, Mail, HelpCircle, Crown, ExternalLink } from 'lucide-react'

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-40 bg-bg/80 backdrop-blur-sm border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary text-glow-primary">Neon</span>
            <span className="text-accent text-glow-accent">Merge</span>
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <div className="space-y-8">
          {/* İletişim Bilgileri */}
          <div className="bg-bg/50 border-2 border-primary rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-primary" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-glow-primary">
                İletişim Bilgileri
              </h2>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="mt-6">
              <a
                href="mailto:destek@neonmerge.com"
                className="inline-flex items-center gap-2 text-xl text-primary hover:text-accent transition-colors font-semibold"
              >
                <Mail size={24} />
                destek@neonmerge.com
              </a>
            </div>
          </div>

          {/* Sık Sorulan Sorular */}
          <div className="bg-bg/50 border-2 border-accent rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-accent" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-accent text-glow-accent">
                Sık Sorulan Sorular (FAQ)
              </h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Satın alma nasıl geri yüklenir?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Satın alımlarınızı geri yüklemek için aynı Apple ID veya Google hesabıyla giriş yapmanız gerekmektedir. 
                  Uygulamayı yeniden yükledikten sonra, Ayarlar menüsünden "Satın Alımları Geri Yükle" seçeneğini kullanabilirsiniz.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Reklamları nasıl kaldırabilirim?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Reklamları kaldırmak için NeonMerge PRO aboneliğine geçebilirsiniz. PRO aboneliği tüm reklamları kaldırır 
                  ve ek özellikler sunar.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Oyun nasıl oynanır?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  NeonMerge, blokları birleştirerek puan kazandığınız bir puzzle oyunudur. Aynı renkteki blokları birleştirerek 
                  daha yüksek değerli bloklar oluşturun. Tahtayı doldurmadan mümkün olduğunca yüksek puan almayı hedefleyin.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Coin nasıl kazanılır?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Coin'leri oyun içinde blokları birleştirerek, günlük ödülleri toplayarak ve görevleri tamamlayarak kazanabilirsiniz. 
                  Coin'ler güçlendiriciler ve özel öğeler satın almak için kullanılabilir.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Güçlendiriciler nedir?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Güçlendiriciler, oyunu daha kolay ve eğlenceli hale getiren özel öğelerdir. Tahtayı temizlemek, 
                  belirli blokları kaldırmak veya ekstra puan kazanmak için kullanılabilirler.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Teknik sorun bildirme
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Teknik sorunlarınızı destek@neonmerge.com adresine e-posta göndererek bildirebilirsiniz. 
                  Lütfen sorununuzu detaylı bir şekilde açıklayın ve cihaz bilgilerinizi ekleyin.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Abonelik nasıl iptal edilir?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  iOS kullanıcıları: Ayarlar → Apple ID → Abonelikler menüsünden iptal edebilirsiniz. 
                  Android kullanıcıları: Google Play Store → Abonelikler menüsünden iptal edebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* NeonMerge PRO Bilgileri */}
          <div className="bg-bg/50 border-2 border-warning rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Crown className="text-warning" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-warning text-glow-warning">
                NeonMerge PRO
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">PRO Özellikleri</h3>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tüm reklamlar kaldırılır</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Özel PRO temaları ve görsel efektler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Günlük bonus coin'ler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Özel güçlendiriciler ve özellikler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Öncelikli destek hizmeti</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-4">Avantajlar</h3>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Kesintisiz oyun deneyimi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Daha hızlı ilerleme ve yüksek skorlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Özel içerik ve özellikler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Oyunu tam potansiyeliyle yaşama fırsatı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Linkler */}
          <div className="bg-bg/50 border-2 border-success rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-success text-glow-success mb-6">
              Linkler
            </h2>
            <div className="space-y-4">
              <Link
                href="/privacy"
                className="flex items-center gap-3 text-xl text-gray-300 hover:text-primary transition-colors group"
              >
                <ExternalLink size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-3 text-xl text-gray-300 hover:text-primary transition-colors group"
              >
                <ExternalLink size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span>Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


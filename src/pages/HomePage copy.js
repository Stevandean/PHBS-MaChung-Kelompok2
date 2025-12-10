import React, { useEffect, useState } from 'react';
import { 
  Droplets, 
  Apple, 
  Sparkles, 
  GlassWater, 
  Cigarette, 
  Trash2,
  Heart,
  Shield,
  Users,
  Leaf
} from 'lucide-react';
import DarkModeToggle from '../components/DarkModeToggle';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-global");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-show");
            entry.target.classList.remove("section-hidden");
          } else {
            // reset animasi ketika keluar viewport
            entry.target.classList.remove("section-show");
            entry.target.classList.add("section-hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => {
      sec.classList.add("section-hidden");
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const phbsTips = [
    {
      icon: Droplets,
      title: 'Cuci Tangan Pakai Sabun',
      description: 'Cuci tangan dengan sabun dan air mengalir sebelum makan, setelah dari toilet, dan setelah beraktivitas. Cuci tangan selama minimal 20 detik untuk membunuh kuman dan virus yang menempel.'
    },
    {
      icon: Apple,
      title: 'Konsumsi Makanan Sehat & Bergizi',
      description: 'Pilih makanan yang kaya nutrisi seperti sayur, buah, protein, dan karbohidrat kompleks. Hindari jajanan tidak sehat dan pastikan makanan bersih serta higienis untuk mendukung daya tahan tubuh.'
    },
    {
      icon: Sparkles,
      title: 'Jaga Kebersihan Kelas & Fasilitas',
      description: 'Bersihkan meja, kursi, dan area belajar secara rutin. Buang sampah pada tempatnya dan jaga kebersihan toilet serta ruang bersama untuk menciptakan lingkungan kampus yang nyaman dan sehat.'
    },
    {
      icon: GlassWater,
      title: 'Minum Air Putih Cukup',
      description: 'Konsumsi minimal 8 gelas air putih per hari untuk menjaga hidrasi tubuh. Air putih membantu konsentrasi belajar, melancarkan metabolisme, dan menjaga kesehatan organ tubuh.'
    },
    {
      icon: Cigarette,
      title: 'Kampus Bebas Rokok',
      description: 'Dukung kampus bebas asap rokok untuk kesehatan bersama. Rokok berbahaya bagi perokok aktif dan pasif. Mari ciptakan lingkungan kampus yang bersih dan sehat tanpa polusi asap rokok.'
    },
    {
      icon: Trash2,
      title: 'Buang Sampah pada Tempatnya',
      description: 'Pisahkan sampah organik dan anorganik. Buang sampah pada tempat yang telah disediakan untuk menjaga kebersihan kampus. Lingkungan bersih menciptakan suasana belajar yang lebih nyaman.'
    }
  ];

  const galleryIcons = [
    { icon: Heart, label: 'Hidup Sehat' },
    { icon: Shield, label: 'Tubuh Terlindungi' },
    { icon: Users, label: 'Komunitas Peduli' },
    { icon: Leaf, label: 'Lingkungan Bersih' }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="nav-header">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
          <span className="heading-3" style={{ fontSize: '1.25rem' }}>Kampus Sehat</span>
        </div>
        <DarkModeToggle />
      </header>

      {/* Hero Section with Parallax */}
      <section className="section-global hero-section parallax-section">
        <div 
          className="parallax-bg"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 800
          }}
        />
        <div className="hero-content fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>
            Healthy Campus!
            <br />
            Happy Students!
          </h1>
          <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Mari wujudkan lingkungan kampus yang bersih, sehat, dan nyaman untuk kita semua.
            Kampanye PHBS untuk mahasiswa Universitas Ma Chung.
          </p>
          <button className="btn-primary">
            Mulai Hidup Sehat
          </button>
        </div>
      </section>

      {/* About PHBS Section */}
      <section className="section-global pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>
              Apa itu PHBS Kampus?
            </h2>
            <p className="body-medium" style={{ marginBottom: '2rem' }}>
              Perilaku Hidup Bersih dan Sehat (PHBS) adalah upaya untuk memberikan pengalaman belajar
              kepada seluruh sivitas akademika tentang pentingnya kesehatan. PHBS di kampus bertujuan
              menciptakan lingkungan yang kondusif, bersih, dan sehat sehingga mendukung prestasi
              dan produktivitas mahasiswa.
            </p>
            <div className="ai-grid" style={{ marginTop: '3rem' }}>
              <div className="product-card" style={{ textAlign: 'center' }}>
                <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
                <h3 className="heading-3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Mahasiswa Sehat</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Meningkatkan kesehatan dan kebugaran mahasiswa
                </p>
              </div>
              <div className="product-card" style={{ textAlign: 'center' }}>
                <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
                <h3 className="heading-3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Lingkungan Bersih</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Menciptakan kampus yang bersih dan nyaman
                </p>
              </div>
              <div className="product-card" style={{ textAlign: 'center' }}>
                <Users className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
                <h3 className="heading-3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Komunitas Peduli</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Membangun kesadaran bersama untuk hidup sehat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Tips PHBS Section */}
      <section className="section-global pad-2xl">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
              6 Tips PHBS untuk Mahasiswa
            </h2>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Terapkan kebiasaan sehat berikut dalam kehidupan kampus sehari-hari
            </p>
          </div>
          
          <div className="ai-grid">
            {phbsTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div 
                  key={index} 
                  className="product-card"
                  style={{
                    transform: scrollY > 300 ? 'translateY(0)' : 'translateY(20px)',
                    opacity: scrollY > 300 ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.1}s`
                  }}
                >
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px',
                    background: 'var(--accent-wash)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon className="w-8 h-8" style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <h3 className="heading-3" style={{ marginBottom: '1rem' }}>{tip.title}</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-global pad-2xl" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
              Manfaat PHBS Kampus
            </h2>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Dampak positif dari penerapan PHBS di lingkungan kampus
            </p>
          </div>
          
          <div className="ai-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {galleryIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="product-card"
                  style={{ 
                    textAlign: 'center',
                    padding: '3rem 2rem'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--gradient-button)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    transform: `scale(${1 + Math.sin(scrollY * 0.005 + index) * 0.05})`
                  }}>
                    <Icon className="w-10 h-10" style={{ color: 'white' }} />
                  </div>
                  <h3 className="heading-3" style={{ fontSize: '1.25rem' }}>{item.label}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-global pad-2xl">
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '700px', 
            margin: '0 auto',
            padding: '4rem 2rem',
            borderRadius: '24px',
            background: 'var(--accent-wash)',
            border: '2px solid var(--accent-primary)'
          }}>
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
              Ayo Mulai Sekarang!
            </h2>
            <p className="body-large" style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Bergabunglah dalam kampanye PHBS dan jadilah bagian dari perubahan untuk kampus yang lebih sehat.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary">Komitmen Hidup Sehat</button>
              <button className="btn-secondary">Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TEAM SECTION ========================= */}
      <section className="section-global" id="team-section">
        <div className="container">

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2">Anggota Kelompok</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Team Kami yang Terlibat dalam Pembuatan Proyek Ini
            </p>
          </div>

          <div className="team-grid">
            {[
              { name: "Nama Anggota 1", nim: "NIM 1", img: "member1.jpg" },
              { name: "Nama Anggota 2", nim: "NIM 2", img: "member1.jpg" },
              { name: "Nama Anggota 3", nim: "NIM 3", img: "member1.jpg" },
              { name: "Nama Anggota 4", nim: "NIM 4", img: "member1.jpg" },
              { name: "Nama Anggota 5", nim: "NIM 5", img: "member1.jpg" },
              { name: "Nama Anggota 6", nim: "NIM 6", img: "member1.jpg" },
            ].map((m, i) => (
              <div
                key={i}
                className="team-card"
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div className="team-photo">
                  <img src={m.img} alt={m.name} />
                </div>
                <h3 className="heading-3" style={{ marginTop: "1rem" }}>{m.name}</h3>
                <p className="body-medium" style={{ color: "var(--text-secondary)" }}>{m.nim}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-light)',
        padding: '3rem 1.5rem 2rem'
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Leaf className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
                <span className="heading-3" style={{ fontSize: '1.5rem' }}>Kampus Sehat</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Program PHBS Universitas Ma Chung untuk menciptakan lingkungan kampus yang sehat dan produktif.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Kontak</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.8' }}>
                <p>Universitas Ma Chung</p>
                <p>Villa Puncak Tidar N-01</p>
                <p>Malang, Jawa Timur 65151</p>
                <p>Telp: (0341) 550 171</p>
              </div>
            </div>
            
            <div>
              <h3 className="heading-3" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Informasi</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.8' }}>
                <p>Tentang PHBS</p>
                <p>Tips Kesehatan</p>
                <p>Kontak Kami</p>
                <p>FAQ</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
            color: 'var(--text-muted)',
            fontSize: '0.875rem'
          }}>
            <p>© 2024 Universitas Ma Chung. Program Kampanye PHBS - Healthy Campus, Happy Students!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
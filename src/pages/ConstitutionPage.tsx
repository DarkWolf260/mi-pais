import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, BookOpen, GraduationCap } from 'lucide-react';

interface Article {
  num: number;
  text: string;
  didactic: string;
  title?: string;
  chapter?: string;
}

export const ConstitutionPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import('../data/constitution_raw.json');
        setArticles(data.articles);
        
        // Manejar scroll a artículo desde búsqueda global
        const params = new URLSearchParams(window.location.search);
        const artNum = params.get('art');
        if (artNum) {
          setTimeout(() => {
            const el = document.getElementById(`art-${artNum}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 500);
        }
      } catch (error) {
        console.error("Error cargando la constitución:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredArticles = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const filtered = articles.filter(art => 
      art.num.toString().includes(term) || 
      art.text.toLowerCase().includes(term) ||
      art.didactic.toLowerCase().includes(term) ||
      (art.title && art.title.toLowerCase().includes(term)) ||
      (art.chapter && art.chapter.toLowerCase().includes(term))
    );
    // Reiniciar el contador de visualización al buscar
    setDisplayCount(20);
    return filtered;
  }, [articles, searchTerm]);

  const visibleArticles = filteredArticles.slice(0, displayCount);

  // Manejador para cargar más al final
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setDisplayCount(prev => Math.min(prev + 20, filteredArticles.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredArticles.length]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-color)', 
      color: 'var(--text-primary)',
      paddingTop: '40px' 
    }}>
      {/* Header Interno */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={20} />
          <span>Volver al Portal</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BookOpen color="var(--vnz-yellow)" />
          <h1 style={{ fontSize: '1.5rem' }}>Constitución Didáctica</h1>
        </div>
      </div>

      {/* Buscador */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto 60px auto', 
        padding: '0 20px',
        textAlign: 'center' 
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Explora la Carta Magna</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          Accede a los 350 artículos de la CRBV con explicaciones en lenguaje sencillo.
        </p>
        
        <div style={{ 
          position: 'relative',
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '50px',
          padding: '12px 25px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <Search color="var(--text-secondary)" size={24} />
          <input 
            type="text" 
            placeholder="Busca por número o palabra (ej: 'salud', 'voto', 'art 2')..."
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.1rem',
              width: '100%',
              outline: 'none'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de Artículos */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
        <div style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Mostrando {visibleArticles.length} de {filteredArticles.length} artículos
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <p style={{ color: 'var(--text-secondary)' }}>Cargando Constitución...</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {visibleArticles.length > 0 ? (
              visibleArticles.map((art, index) => {
                const prevArt = index > 0 ? visibleArticles[index - 1] : null;
                const showTitle = art.title && (!prevArt || prevArt.title !== art.title);
                const showChapter = art.chapter && (!prevArt || prevArt.chapter !== art.chapter);

                return (
                  <React.Fragment key={art.num}>
                    {showTitle && (
                      <div style={{ 
                        marginTop: '40px', 
                        marginBottom: '20px',
                        padding: '20px 0',
                        borderBottom: '2px solid var(--vnz-yellow)'
                      }}>
                        <h2 style={{ 
                          fontSize: '1.8rem', 
                          color: 'var(--vnz-yellow)', 
                          textTransform: 'uppercase',
                          letterSpacing: '2px'
                        }}>
                          {art.title}
                        </h2>
                      </div>
                    )}
                    
                    {showChapter && (
                      <div style={{ 
                        marginBottom: '20px',
                        padding: '10px 0',
                        opacity: 0.8
                      }}>
                        <h3 style={{ 
                          fontSize: '1.2rem', 
                          color: 'var(--vnz-blue)', 
                          fontStyle: 'italic'
                        }}>
                          {art.chapter}
                        </h3>
                      </div>
                    )}

                    <div id={`art-${art.num}`} className="glass-card animate-fade" style={{ padding: '40px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <span style={{ 
                          fontSize: '2rem', 
                          fontWeight: 900, 
                          color: 'var(--vnz-yellow)',
                          opacity: 0.3
                        }}>#{art.num}</span>
                        <h3 style={{ fontSize: '1.5rem' }}>Artículo {art.num}</h3>
                      </div>

                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '40px' 
                      }}>
                        {/* Texto Oficial */}
                        <div>
                          <h4 style={{ 
                            color: 'var(--text-secondary)', 
                            fontSize: '0.8rem', 
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            <BookOpen size={14} /> Texto Oficial
                          </h4>
                          <p style={{ 
                            lineHeight: 1.6, 
                            color: '#e0e0e0', 
                            fontSize: '1.05rem',
                            fontStyle: 'italic'
                          }}>
                            "{art.text}"
                          </p>
                        </div>

                        {/* Didáctico */}
                        <div style={{ 
                          backgroundColor: 'rgba(255, 204, 0, 0.05)', 
                          padding: '25px', 
                          borderRadius: '15px',
                          borderLeft: '4px solid var(--vnz-yellow)'
                        }}>
                          <h4 style={{ 
                            color: 'var(--vnz-yellow)', 
                            fontSize: '0.8rem', 
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            <GraduationCap size={16} /> Explicación Sencilla
                          </h4>
                          <p style={{ 
                            lineHeight: 1.5, 
                            color: 'white', 
                            fontSize: '1.1rem',
                            fontWeight: 500
                          }}>
                            {art.didactic || "Pronto: Explicación didáctica para este artículo."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', padding: '60px', opacity: 0.5 }}>
                <Search size={48} style={{ marginBottom: '20px' }} />
                <p>No se encontraron artículos</p>
              </div>
            )}
          </div>
        )}
      </div>

      <footer style={{ 
        textAlign: 'center', 
        padding: '60px 20px', 
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>Gaceta Oficial N° 36.860 - Constitución de la República Bolivariana de Venezuela</p>
      </footer>
    </div>
  );
};

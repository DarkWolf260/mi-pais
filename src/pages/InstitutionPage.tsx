import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, ShieldCheck, Info, CheckCircle2, Globe, FileText, Scale } from 'lucide-react';
import { instituciones } from '../data/instituciones';
import { vicepresidencias } from '../data/ministerios';

export const InstitutionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const inst = instituciones.find(i => i.id === id);

  if (!inst) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', color: 'white' }}>
        <h2>Institución no encontrada</h2>
        <Link to="/" style={{ color: 'var(--vnz-yellow)' }}>Volver al portal</Link>
      </div>
    );
  }

  const ministerio = vicepresidencias
    .flatMap(v => v.ministerios)
    .find(m => m.id === inst.ministryId);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-color)', 
      color: 'var(--text-primary)', 
      paddingTop: '40px',
      background: 'var(--bg-gradient)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        {/* Navegación y Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', transition: 'color 0.3s', textDecoration: 'none' }}>
            <ArrowLeft size={18} />
            <span>Portal</span>
          </Link>
          <span style={{ color: 'var(--glass-border)' }}>/</span>
          <span style={{ color: 'var(--vnz-yellow)', fontWeight: 500 }}>{inst.name}</span>
        </div>

        <div className="glass-card animate-fade" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
          {/* Hero de la Institución */}
          <div style={{ 
            padding: '60px', 
            background: 'var(--nav-hover)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ 
                    background: 'rgba(37, 99, 235, 0.1)', 
                    color: 'var(--vnz-blue)',
                    padding: '6px 16px', 
                    borderRadius: '50px', 
                    fontSize: '0.7rem', 
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    border: '1px solid rgba(37, 99, 235, 0.2)'
                  }}>
                    {inst.type}
                  </span>
                  <span style={{ color: 'var(--glass-border)' }}>•</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>ID: {inst.id.toUpperCase()}</span>
                </div>
                
                <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '15px', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                  {inst.name}
                </h1>
                
                {ministerio && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--vnz-yellow)', fontSize: '1.1rem' }}>
                      <Building2 size={20} />
                      <span>Adscrito al {ministerio.name}</span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '30px' }}>
                      Bajo la rectoría de: <strong style={{ color: 'var(--text-primary)' }}>{ministerio.titular}</strong>
                    </div>
                    {ministerio.articulosBase && (
                      <div style={{ marginLeft: '30px', marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Scale size={14} color="var(--text-secondary)" />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Fundamento Legal:</span>
                        {ministerio.articulosBase.map(art => (
                          <Link 
                            key={art} 
                            to={`/constitucion?art=${art}`}
                            style={{ fontSize: '0.75rem', color: 'var(--vnz-yellow)', textDecoration: 'none', borderBottom: '1px dashed' }}
                          >
                            Art. {art}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div style={{ 
                width: '160px', 
                height: '160px', 
                background: 'var(--bg-color)', 
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--card-shadow)'
              }}>
                <ShieldCheck size={80} color="var(--vnz-yellow)" />
              </div>
            </div>
          </div>

          {/* Contenido Detallado */}
          <div style={{ padding: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div>
              <section style={{ marginBottom: '50px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }}>
                  <Info color="var(--vnz-blue)" /> Misión y Objetivos
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 400 }}>
                  {inst.longDesc || inst.desc}
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }}>
                  <CheckCircle2 color="var(--vnz-blue)" /> Atribuciones Principales
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {[
                    'Gestión Administrativa Nacional',
                    'Cumplimiento de la CRBV',
                    'Servicio al Ciudadano',
                    'Transparencia Institucional'
                  ].map((attr, i) => (
                    <div key={i} style={{ padding: '20px', background: 'var(--nav-hover)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                      <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>{attr}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar de Datos Rápidos */}
            <aside>
              <div style={{ 
                padding: '30px', 
                background: 'var(--nav-hover)', 
                borderRadius: '20px', 
                border: '1px solid var(--glass-border)',
                position: 'sticky',
                top: '100px'
              }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '25px', letterSpacing: '1px' }}>
                  Ficha Técnica
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Sede Principal</span>
                    <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Caracas, Venezuela</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Alcance</span>
                    <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Territorio Nacional</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Carácter</span>
                    <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Público / Estatal</span>
                  </div>
                  {inst.gaceta && (
                    <div className="animate-fade">
                      <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Gaceta de Creación</span>
                      <span style={{ fontWeight: 600, color: 'var(--vnz-yellow)' }}>{inst.gaceta}</span>
                    </div>
                  )}
                </div>

                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <button style={{
                    background: 'var(--vnz-blue)',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '12px',
                    color: 'white',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    width: '100%'
                  }}>
                    <Globe size={18} /> Sitio Web Oficial
                  </button>
                  <button 
                    disabled={!inst.gaceta}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--glass-border)',
                      padding: '14px',
                      borderRadius: '12px',
                      color: inst.gaceta ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      cursor: inst.gaceta ? 'pointer' : 'not-allowed',
                      width: '100%',
                      opacity: inst.gaceta ? 1 : 0.5
                    }}
                  >
                    <FileText size={18} /> {inst.gaceta ? 'Ver Gaceta Oficial' : 'Gaceta no disponible'}
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Instituciones Relacionadas */}
        <div style={{ marginTop: '80px', paddingBottom: '100px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <Building2 size={20} color="var(--vnz-yellow)" />
            Otros entes adscritos a este Ministerio
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '20px' 
          }}>
            {instituciones
              .filter(i => i.ministryId === inst.ministryId && i.id !== inst.id)
              .slice(0, 3)
              .map(related => (
                <Link 
                  key={related.id} 
                  to={`/institucion/${related.id}`}
                  className="glass-card"
                  style={{ 
                    padding: '20px', 
                    textDecoration: 'none', 
                    color: 'var(--text-primary)', 
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span style={{ fontSize: '0.6rem', color: 'var(--vnz-blue)', fontWeight: 800 }}>{related.type}</span>
                  <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--vnz-yellow)' }}>{related.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                    {related.desc}
                  </p>
                </Link>
              ))}
          </div>
        </div>

        {/* Footer de la página */}
        <div style={{ marginTop: '20px', paddingBottom: '60px', textAlign: 'center', opacity: 0.5 }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Información basada en el organigrama oficial del Estado Venezolano.</p>
        </div>
      </div>
    </div>
  );
};

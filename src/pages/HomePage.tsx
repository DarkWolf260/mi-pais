import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { PoderesPublicos } from '../components/PoderesPublicos';
import { Ministerios } from '../components/Ministerios';
import { Instituciones } from '../components/Instituciones';
import { Building2, Search, Info, Landmark, Layout, Gavel } from 'lucide-react';
import { vicepresidencias } from '../data/ministerios';

export const HomePage: React.FC = () => {
  const [selectedMinistryId, setSelectedMinistryId] = useState<string | null>(null);
  const [instSearch, setInstSearch] = useState('');

  const selectedMinistry = vicepresidencias
    .flatMap(vp => vp.ministerios)
    .find(m => m.id === selectedMinistryId);

  return (
    <main>
      <Hero />

      {/* Reflexión Histórica y Nacional */}
      <section style={{ 
        padding: '100px 20px', 
        background: 'var(--bg-color)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoración de fondo sutil */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          right: '-5%', 
          width: '400px', 
          height: '400px', 
          background: 'rgba(245, 158, 11, 0.03)', 
          filter: 'blur(100px)', 
          borderRadius: '50%' 
        }}></div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--vnz-yellow)' }}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--vnz-yellow)' }}>Reflexión sobre el Destino Nacional</span>
            </div>

            <p style={{ 
              fontSize: '1.4rem', 
              lineHeight: 1.6, 
              color: 'var(--text-primary)', 
              fontWeight: 500,
              fontFamily: 'Outfit, sans-serif'
            }}>
              Venezuela pasó de ser la promesa del continente, un faro de modernidad y arquitectura de vanguardia, a convertirse en un caso de estudio sobre el desmantelamiento institucional. El fracaso del país no es solo una cifra económica; es la ruptura de un proyecto que alguna vez priorizó el orden, la infraestructura y la excelencia técnica sobre la improvisación.
            </p>

            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8, 
              color: 'var(--text-secondary)',
              textAlign: 'justify'
            }}>
              La identidad venezolana, que en su momento estuvo ligada al progreso y a la construcción de obras que desafiaban el tiempo, se vio diluida en un ciclo de ineficiencia. Perdimos el rumbo cuando la política desplazó a la planificación y el mérito fue sustituido por la lealtad. Hoy, el país se enfrenta al vacío que dejó la ausencia de una visión clara, donde la cultura del esfuerzo fue reemplazada por la supervivencia, y la disciplina que levantó ciudades se perdió entre la retórica y el abandono de nuestras instituciones.
            </p>

            <blockquote style={{ 
              marginTop: '40px',
              padding: '40px',
              background: 'var(--nav-hover)',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '40px', 
                fontSize: '4rem', 
                color: 'var(--vnz-yellow)', 
                opacity: 0.3,
                fontFamily: 'serif'
              }}>"</span>
              <p style={{ 
                fontSize: '1.25rem', 
                lineHeight: 1.6, 
                color: 'var(--text-primary)', 
                fontStyle: 'italic',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                No es la política la que hace la grandeza de los pueblos, sino el trabajo y el orden. Mientras no haya un ideal nacional que nos una a todos en el esfuerzo común de crear una patria grande, seguiremos siendo juguetes de las circunstancias.
              </p>
              <footer style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                color: 'var(--vnz-yellow)',
                textAlign: 'right',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                — Marcos Evangelista Pérez Jiménez
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Fundamentos del Estado */}
      <section style={{ paddingTop: '80px', background: 'var(--bg-gradient)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px' }}>Fundamentos del Estado</h2>
          <p style={{ color: 'var(--text-secondary)' }}>La base ética y estructural que rige a la República</p>
        </div>

        {/* Principios y Valores del Estado */}
        <div style={{ padding: '40px 20px', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'var(--nav-hover)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{ padding: '8px', background: 'rgba(245,158,11,0.1)', borderRadius: '8px' }}><Info color="var(--vnz-yellow)" size={20} /></div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Valores Superiores</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Vida', 'Libertad', 'Justicia', 'Igualdad', 'Solidaridad', 'Democracia', 'Ética', 'Pluralismo'].map(v => (
                  <span key={v} style={{ padding: '6px 14px', background: 'var(--glass)', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>{v}</span>
                ))}
              </div>
            </div>
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{ padding: '8px', background: 'rgba(37,99,235,0.1)', borderRadius: '8px' }}><Landmark color="var(--vnz-blue)" size={20} /></div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Principios Administrativos</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['Honestidad', 'Participación', 'Celeridad', 'Eficacia', 'Eficiencia', 'Transparencia', 'Rendición de cuentas', 'Responsabilidad'].map(p => (
                  <div key={p} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '4px', height: '4px', background: 'var(--vnz-blue)', borderRadius: '50%' }}></div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <PoderesPublicos />

        {/* Sistema de Pesos y Contrapesos */}
        <section style={{ marginTop: '100px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '15px' }}>Pesos y Contrapesos</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Ningún poder es absoluto. La Constitución establece mecanismos de control mutuo para garantizar el equilibrio democrático.
            </p>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', justifyContent: 'center' }}>
            {/* Control A */}
            <div className="glass-card" style={{ flex: '1 1 400px', padding: '40px', borderLeft: '4px solid var(--vnz-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Landmark color="var(--vnz-blue)" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Legislativo → Judicial</h3>
              </div>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', paddingLeft: '20px', lineHeight: 1.8 }}>
                <li>Designa y remueve Magistrados del TSJ (Art. 264).</li>
                <li>Dicta las leyes que regulan el sistema judicial.</li>
                <li>Autoriza el presupuesto del Poder Judicial.</li>
              </ul>
            </div>

            <div style={{ fontSize: '2rem', opacity: 0.2 }}>↔️</div>

            {/* Control B */}
            <div className="glass-card" style={{ flex: '1 1 400px', padding: '40px', borderLeft: '4px solid #e74c3c' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Gavel color="#e74c3c" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Judicial → Legislativo</h3>
              </div>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', paddingLeft: '20px', lineHeight: 1.8 }}>
                <li>La Sala Constitucional anula leyes inconstitucionales (Art. 336).</li>
                <li>Determina méritos para enjuiciar diputados.</li>
                <li>Resuelve conflictos de competencia entre poderes.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      
      {/* Sección Operativa */}
      <section id="ejecutivo" style={{ padding: '100px 20px', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '1px', 
          height: '60px', 
          background: 'linear-gradient(to bottom, var(--glass-border), transparent)' 
        }}></div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(245,158,11,0.1)', color: 'var(--vnz-yellow)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '1px' }}>
              Nivel Operativo
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '15px' }}>Gestión del Poder Ejecutivo</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 30px auto', lineHeight: 1.6 }}>
              Consulta el gabinete ministerial vigente y los entes descentralizados encargados de la ejecución de las políticas públicas.
            </p>
            
            {/* Contexto de Vicepresidencias */}
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto 40px auto', 
              display: 'flex', 
              gap: '15px', 
              alignItems: 'center', 
              padding: '20px', 
              background: 'var(--glass)', 
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              textAlign: 'left'
            }}>
              <Layout color="var(--vnz-yellow)" size={24} style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--vnz-yellow)' }}>¿Sabías que?</strong> Los ministerios se agrupan en <strong style={{ color: 'var(--vnz-yellow)' }}>Vicepresidencias Sectoriales</strong>. Estas son instancias de coordinación superior que aseguran que varios ministerios con objetivos afines (como Economía o Seguridad) trabajen de forma unificada bajo una misma dirección estratégica.
              </p>
            </div>

            <Link to="/estructura-ejecutiva" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--vnz-yellow)', 
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '8px 20px',
              background: 'rgba(245,158,11,0.05)',
              borderRadius: '50px',
              border: '1px solid rgba(245,158,11,0.2)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(245,158,11,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(245,158,11,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <Info size={16} /> Saber más sobre la Estructura Ministerial
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: selectedMinistryId ? '400px 1fr' : '1fr',
            gap: '40px',
            transition: 'all 0.5s ease'
          }}>
            {/* Panel de Ministerios */}
            <div style={{ 
              maxHeight: selectedMinistryId ? '800px' : 'none', 
              overflowY: selectedMinistryId ? 'auto' : 'visible',
              paddingRight: selectedMinistryId ? '15px' : '0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
                <Building2 color="var(--vnz-yellow)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Ministerios</h3>
              </div>
              <Ministerios 
                selectedId={selectedMinistryId} 
                onSelect={setSelectedMinistryId} 
              />
            </div>

            {/* Panel de Instituciones (Detalle) */}
            {selectedMinistryId && (
              <div className="animate-fade" style={{ 
                borderLeft: '1px solid var(--glass-border)', 
                paddingLeft: '40px'
              }}>
                {/* Sumario del Ministerio */}
                <div className="glass-card" style={{ 
                  padding: '25px', 
                  marginBottom: '30px',
                  display: 'flex',
                  gap: '15px'
                }}>
                  <Info size={24} color="var(--vnz-yellow)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--vnz-yellow)' }}>{selectedMinistry?.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Este ministerio es el encargado de la gestión de políticas públicas en materia de {selectedMinistry?.area.toLowerCase()}. 
                      A continuación se listan los entes que ejecutan técnicamente estas políticas.
                    </p>
                    
                    {selectedMinistry?.articulosBase && (
                      <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Bases Legales (CRBV):</span>
                        {selectedMinistry.articulosBase.map(art => (
                          <Link 
                            key={art} 
                            to={`/constitucion?art=${art}`}
                            style={{ 
                              fontSize: '0.75rem', 
                              color: 'var(--vnz-yellow)', 
                              background: 'rgba(245,158,11,0.1)', 
                              padding: '2px 8px', 
                              borderRadius: '4px',
                              textDecoration: 'none',
                              border: '1px solid rgba(245,158,11,0.2)'
                            }}
                          >
                            Art. {art}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Buscador de Instituciones */}
                <div style={{ 
                  position: 'relative',
                  marginBottom: '25px'
                }}>
                  <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="text" 
                    placeholder="Buscar ente o institución..." 
                    value={instSearch}
                    onChange={(e) => setInstSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 20px 12px 45px',
                      background: 'var(--nav-hover)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <Instituciones 
                  highlightId={selectedMinistryId} 
                  searchTerm={instSearch}
                />
              </div>
            )}
          </div>

          {!selectedMinistryId && (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '40px', 
              padding: '40px', 
              background: 'rgba(245,158,11,0.05)', 
              borderRadius: '20px',
              border: '1px dashed var(--vnz-yellow)'
            }}>
              <p style={{ color: 'var(--vnz-yellow)', fontWeight: 600 }}>
                💡 Haz clic en un ministerio arriba para ver sus instituciones dependientes.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

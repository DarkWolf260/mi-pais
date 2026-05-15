import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Shield, Landmark, Layout } from 'lucide-react';

export const ExecutiveStructurePage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-color)', 
      color: 'var(--text-primary)', 
      paddingTop: '40px',
      background: 'var(--bg-gradient)'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 100px 20px' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '40px', textDecoration: 'none' }}>
          <ArrowLeft size={20} />
          <span>Volver al Portal</span>
        </Link>

        <header style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(90deg, var(--text-primary), var(--text-secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Estructura del Poder Ejecutivo
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Conoce cómo se organiza la administración pública nacional y el funcionamiento de los Ministerios del Poder Popular.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          {/* Definición */}
          <section className="glass-card animate-fade" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '12px' }}>
                <Landmark color="var(--vnz-blue)" size={32} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>¿Qué son los Ministerios?</h2>
                <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  Son los órganos administrativos de primer nivel que integran el poder ejecutivo. Su misión es la formulación, adopción, seguimiento y evaluación de las políticas, estrategias, programas y proyectos en las materias de su competencia.
                </p>
                <div style={{ marginTop: '20px', padding: '15px', background: 'var(--nav-hover)', borderRadius: '10px', fontSize: '0.9rem', borderLeft: '4px solid var(--vnz-blue)', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Nota Histórica:</strong> Tradicionalmente se denominaban por su área de competencia. Desde el segundo gobierno de Hugo Chávez, pasaron a denominarse <strong>"Ministerio del Poder Popular"</strong>.
                </div>
              </div>
            </div>
          </section>

          {/* Potestad Presidencial */}
          <section>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Shield color="var(--vnz-yellow)" /> Potestad del Presidente
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--vnz-yellow)' }}>Organización Técnica</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  El Presidente tiene la potestad de determinar, mediante decreto, el número, denominación y materias de competencia de los ministerios según las necesidades del país.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--vnz-yellow)' }}>Nombramiento Libre</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  Los ministros son cargos de libre nombramiento y remoción por parte del Ejecutivo Nacional.
                </p>
              </div>
            </div>
          </section>

          {/* Los Ministros */}
          <section className="glass-card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Users color="var(--vnz-blue)" /> Los Ministros
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ minWidth: '4px', background: 'var(--vnz-yellow)', borderRadius: '2px' }}></div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Requisitos (Art. 244 CRBV):</strong> Poseer nacionalidad venezolana y ser mayor de 25 años.
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ minWidth: '4px', background: 'var(--vnz-red)', borderRadius: '2px' }}></div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Control Parlamentario:</strong> La Asamblea Nacional puede aplicar una <strong>moción de censura</strong>. Si es aprobada por 3/5 partes, el ministro es destituido.
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ minWidth: '4px', background: 'var(--vnz-blue)', borderRadius: '2px' }}></div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Rendición de Cuentas:</strong> Deben presentar ante la AN una "Memoria y Cuenta" dentro de los primeros 60 días de cada año.
                </div>
              </div>
            </div>
          </section>

          {/* Consejo de Ministros */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <Layout color="var(--vnz-yellow)" />
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Consejo de Ministros</h2>
            </div>
            <p style={{ lineHeight: 1.8, marginBottom: '30px', color: 'var(--text-secondary)' }}>
              Es el órgano colegiado de dirección política y estratégica. Reúne al Presidente, Vicepresidente Ejecutivo y los Ministros para tomar decisiones de Estado.
            </p>
            
            {/* Explicación de Vicepresidencias Sectoriales */}
            <div className="glass-card" style={{ padding: '40px', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
              <h3 style={{ color: 'var(--vnz-yellow)', marginBottom: '20px', fontSize: '1.3rem' }}>¿Qué son las Vicepresidencias Sectoriales?</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Son instancias de **coordinación superior** creadas para agrupar a los ministerios según áreas temáticas estratégicas. Su objetivo es evitar la fragmentación de la gestión pública y asegurar que ministerios con objetivos afines trabajen de forma sincronizada.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
                <div style={{ background: 'var(--nav-hover)', padding: '20px', borderRadius: '12px' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '10px' }}>El Rol del Vicepresidente Sectorial</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Suele ser un Ministro que, además de su cartera, asume la dirección de un sector (ej. Economía, Seguridad). Actúa como enlace directo entre los ministerios de su área y la Vicepresidencia Ejecutiva.
                  </p>
                </div>
                <div style={{ background: 'var(--nav-hover)', padding: '20px', borderRadius: '12px' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Beneficios de la Estructura</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Permite la planificación de **proyectos transversales** que involucran a varios entes, optimizando el uso de recursos y unificando la línea de mando sectorial.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--vnz-yellow)', borderLeft: '3px solid var(--vnz-yellow)' }}>
                <strong>Ejemplo:</strong> La Vicepresidencia de Economía coordina simultáneamente a los ministerios de Petróleo, Finanzas, Comercio, Agricultura y Pesca.
              </div>
            </div>
          </section>

          {/* Organización Interna */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Niveles de Organización Interna</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Nivel de Apoyo */}
              <div style={{ padding: '25px', background: 'var(--nav-hover)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ marginBottom: '10px', color: 'var(--vnz-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  1. Nivel de Apoyo
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Conformado por las unidades administrativas que ejercen atribuciones transversales para el funcionamiento operativo del ministerio. Incluye oficinas de:
                </p>
                <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '10px', columns: 2 }}>
                  <li>Recursos Humanos</li>
                  <li>Gestión Administrativa</li>
                  <li>Consultoría Jurídica</li>
                  <li>Planificación y Presupuesto</li>
                  <li>Tecnologías de Información</li>
                  <li>Comunicación y RREE</li>
                </ul>
              </div>

              {/* Nivel Sustantivo */}
              <div style={{ padding: '25px', background: 'var(--nav-hover)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ marginBottom: '10px', color: 'var(--vnz-yellow)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  2. Nivel Sustantivo
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Es el núcleo técnico del ministerio. Aquí se ejecutan las competencias específicas asignadas por decreto. Su estructura jerárquica es:
                </p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                  {['Despachos de Viceministros', 'Direcciones Generales', 'Direcciones de Línea', 'Divisiones'].map((step, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--vnz-yellow)', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                      {i + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nivel de Desconcentración Territorial */}
              <div style={{ padding: '25px', background: 'var(--nav-hover)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ marginBottom: '10px', color: 'var(--vnz-red)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  3. Nivel de Desconcentración Territorial
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Comprende las unidades que ejercen la representación del ministerio en las distintas regiones del país. Permite la ejecución de políticas a nivel:
                </p>
                <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '10px', display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
                  <li>📍 Regional</li>
                  <li>📍 Estadal</li>
                  <li>📍 Municipal</li>
                  <li>📍 Comunal</li>
                </ul>
              </div>

            </div>
          </section>

        </div>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Fuente: Ley Orgánica de la Administración Pública (LOAP) y CRBV.
          </p>
        </footer>
      </div>
    </div>
  );
};

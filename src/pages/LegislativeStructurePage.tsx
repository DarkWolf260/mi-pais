import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, FileText, Gavel, Layers } from 'lucide-react';

export const LegislativeStructurePage: React.FC = () => {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(90deg, var(--text-primary), #3498db)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Poder Legislativo
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Conoce la Asamblea Nacional, su función legislativa y la jerarquía de las leyes en Venezuela.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          {/* Función Legislativa */}
          <section className="glass-card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Gavel color="#3498db" /> ¿Qué hace la Asamblea Nacional?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Es el órgano unicameral que ejerce el Poder Legislativo en Venezuela. Sus funciones principales incluyen legislar sobre materias de competencia nacional, ejercer control sobre el Gobierno y la Administración Pública Nacional, y amnistiar.
            </p>
          </section>

          {/* Pirámide de Kelsen */}
          <section>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
              <Layers color="#3498db" /> Pirámide de Kelsen (Jerarquía Jurídica)
            </h2>
            
            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Nivel 1: Constitucional */}
              <div style={{ 
                background: 'rgba(245, 158, 11, 0.1)', 
                border: '2px solid var(--vnz-yellow)', 
                padding: '30px', 
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                textAlign: 'center',
                paddingTop: '60px',
                marginBottom: '-20px'
              }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--vnz-yellow)', margin: 0 }}>NIVEL FUNDAMENTAL</h3>
                <p style={{ fontSize: '0.8rem', margin: '5px 0 0 0', color: 'var(--text-secondary)' }}>Constitución (CRBV)</p>
              </div>

              {/* Nivel 2: Legal */}
              <div style={{ 
                background: 'rgba(37, 99, 235, 0.1)', 
                border: '1px solid #3498db', 
                padding: '20px', 
                textAlign: 'center',
                width: '80%',
                margin: '0 auto'
              }}>
                <h3 style={{ fontSize: '1rem', color: '#3498db', margin: 0 }}>NIVEL LEGAL</h3>
                <p style={{ fontSize: '0.8rem', margin: '5px 0 0 0', color: 'var(--text-secondary)' }}>
                  Leyes Orgánicas, Leyes Ordinarias, Decretos Ley
                </p>
              </div>

              {/* Nivel 3: Sub-legal */}
              <div style={{ 
                background: 'var(--nav-hover)', 
                border: '1px solid var(--glass-border)', 
                padding: '20px', 
                textAlign: 'center',
                width: '100%'
              }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: 0 }}>NIVEL SUB-LEGAL</h3>
                <p style={{ fontSize: '0.8rem', margin: '5px 0 0 0', color: 'var(--text-secondary)' }}>
                  Reglamentos, Resoluciones, Providencias, Ordenanzas
                </p>
              </div>

            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(37, 99, 235, 0.05)', borderRadius: '15px', fontSize: '0.9rem', borderLeft: '4px solid #3498db', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Principio de Supremacía Constitucional:</strong> Según el Art. 7 de la CRBV, la Constitución es la norma suprema y el fundamento de todo el ordenamiento jurídico.
            </div>
          </section>

          {/* Tipos de Leyes */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Tipos de Instrumentos Legales</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Book size={20} color="var(--vnz-yellow)" />
                  <h4 style={{ margin: 0 }}>Leyes Orgánicas</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Son aquellas que se dictan para organizar los poderes públicos o para desarrollar los derechos constitucionales (Art. 203). Requieren mayoría de 2/3.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <FileText size={20} color="#3498db" />
                  <h4 style={{ margin: 0 }}>Leyes Ordinarias</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Leyes aprobadas por la Asamblea Nacional sobre materias generales que no requieren el rango de orgánica.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* El Camino a la Ley */}
        <section style={{ marginTop: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <div style={{ width: '4px', height: '32px', background: 'var(--vnz-yellow)', borderRadius: '4px' }}></div>
            <h2 style={{ fontSize: '1.8rem', margin: 0 }}>El Camino a la Ley</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Iniciativa', desc: 'Presentación del proyecto por Diputados, Ejecutivo, TSJ o el 0.1% del registro electoral.', icon: '💡' },
              { step: '02', title: 'Discusión', desc: 'Debate en la AN: 1ra discusión (objetivos) y 2da discusión (artículo por artículo).', icon: '🗣️' },
              { step: '03', title: 'Consulta', desc: 'Participación ciudadana y de sectores interesados para perfeccionar la propuesta.', icon: '👥' },
              { step: '04', title: 'Sanción', desc: 'Aprobación definitiva por la AN y envío al Ejecutivo para su promulgación en Gaceta.', icon: '📜' }
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ 
                padding: '30px', 
                position: 'relative', 
                overflow: 'hidden',
                borderTop: i === 0 ? '4px solid var(--vnz-yellow)' : '1px solid var(--glass-border)'
              }}>
                <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '3rem', fontWeight: 900, opacity: 0.05, color: 'var(--vnz-yellow)' }}>{item.step}</div>
                <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Fuente: Constitución de la República Bolivariana de Venezuela (Arts. 186 - 224).
          </p>
        </footer>
      </div>
    </div>
  );
};

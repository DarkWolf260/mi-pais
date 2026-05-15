import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, ShieldCheck, Landmark, Search } from 'lucide-react';

export const JudicialStructurePage: React.FC = () => {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(90deg, var(--text-primary), #e74c3c)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Poder Judicial
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            El guardián de la Constitución y el encargado de administrar justicia en nombre de la República.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          {/* El TSJ */}
          <section className="glass-card" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Landmark color="#e74c3c" /> Tribunal Supremo de Justicia (TSJ)
            </h2>
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Es el máximo órgano del Poder Judicial. Su función es garantizar la supremacía y efectividad de las normas y principios constitucionales. Se divide en diversas salas para materias específicas.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginTop: '20px' }}>
              {['Sala Constitucional', 'Sala Político-Adm.', 'Sala Electoral', 'Sala de Casación Civil', 'Sala de Casación Penal', 'Sala de Casación Social', 'Sala Plena'].map((sala, i) => (
                <div key={i} style={{ padding: '10px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', fontSize: '0.8rem', textAlign: 'center', border: '1px solid rgba(231, 76, 60, 0.2)', color: 'var(--text-secondary)' }}>
                  {sala}
                </div>
              ))}
            </div>
          </section>

          {/* Jerarquía de Tribunales */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Jerarquía de Tribunales</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Cortes de Apelaciones', desc: 'Tribunales superiores que revisan las sentencias de los juzgados de primera instancia.' },
                { title: 'Juzgados de Instancia', desc: 'Tribunales locales (Civiles, Penales, de Menores, etc.) donde se inician los procesos.' },
                { title: 'Juzgados de Paz', desc: 'Resuelven conflictos vecinales mediante la conciliación y equidad en las comunidades.' }
              ].map((nivel, i) => (
                <div key={i} className="glass-card" style={{ padding: '25px', borderLeft: '4px solid #e74c3c' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>{nivel.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{nivel.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Control Constitucional y Kelsen */}
          <section>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <ShieldCheck color="#e74c3c" /> El Guardián de la Pirámide
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '30px', color: 'var(--text-secondary)' }}>
              Aunque el Poder Legislativo crea las leyes, el <strong>Poder Judicial</strong> es quien garantiza que la <strong>Pirámide de Kelsen</strong> se respete. Si una ley contradice a la Constitución, el TSJ puede declararla nula.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Search size={20} color="#e74c3c" />
                  <h4 style={{ margin: 0 }}>Control Difuso</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Cualquier juez puede decidir no aplicar una ley si considera que es inconstitucional en un caso concreto.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Scale size={20} color="#e74c3c" />
                  <h4 style={{ margin: 0 }}>Control Concentrado</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Solo la Sala Constitucional del TSJ puede anular una ley con efectos generales para todo el país.
                </p>
              </div>
            </div>
          </section>

          {/* Estructura del Sistema */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>El Sistema de Justicia Integral</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '30px', background: 'var(--nav-hover)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Órganos de Apoyo</h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '2' }}>
                  <li>Ministerio Público (Fiscalía)</li>
                  <li>Defensoría Pública Nacional</li>
                  <li>Órganos de investigación (CICPC)</li>
                  <li>Sistema Penitenciario</li>
                </ul>
              </div>
              <div style={{ padding: '30px', background: 'var(--nav-hover)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Participación</h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '2' }}>
                  <li>Abogados autorizados</li>
                  <li>Consejos Comunales en justicia de paz</li>
                  <li>Defensores de Derechos Humanos</li>
                  <li>Ciudadanía organizada</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Fuente: Constitución de la República Bolivariana de Venezuela (Arts. 253 - 272).
          </p>
        </footer>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Info } from 'lucide-react';

export const CitizenStructurePage: React.FC = () => {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(90deg, var(--text-primary), #f39c12)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Poder Ciudadano
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            El brazo moral del Estado, encargado de prevenir, investigar y sancionar hechos que atenten contra la ética pública y la legalidad.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          {/* Consejo Moral Republicano */}
          <section className="glass-card animate-fade" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck color="#f39c12" /> Consejo Moral Republicano
            </h2>
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Es el órgano rector del Poder Ciudadano. Se compone de tres figuras fundamentales que colaboran de forma autónoma e independiente para velar por la moral administrativa.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { 
                  title: 'Defensoría del Pueblo', 
                  desc: 'Encargada de la promoción, vigilancia y defensa de los derechos y garantías constitucionales.',
                  details: 'Tiene la potestad de interponer amparos, acciones de inconstitucionalidad y velar por los derechos de los privados de libertad.'
                },
                { 
                  title: 'Ministerio Público (Fiscalía)', 
                  desc: 'Garantiza el respeto de los derechos y garantías constitucionales en los procesos judiciales.',
                  details: 'Ejerce la acción penal en nombre del Estado y dirige la investigación de los hechos punibles.'
                },
                { 
                  title: 'Contraloría General', 
                  desc: 'Vigilancia y fiscalización de los ingresos, gastos y bienes públicos.',
                  details: 'Inspecciona y fiscaliza los órganos y entes del sector público para asegurar la transparencia en el uso del dinero de todos los venezolanos.'
                }
              ].map((ente, i) => (
                <div key={i} className="glass-card" style={{ padding: '25px', borderLeft: '4px solid #f39c12' }}>
                  <h4 style={{ color: '#f39c12', marginBottom: '10px', fontSize: '1.1rem' }}>{ente.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: 600 }}>{ente.desc}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{ente.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Funciones Clave */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Competencias Constitucionales</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                'Investigar hechos que atenten contra la ética pública.',
                'Velar por la legalidad en el uso del patrimonio público.',
                'Preseleccionar a los candidatos a magistrados del TSJ.',
                'Impulsar la rendición de cuentas de los funcionarios.',
                'Proteger los derechos e intereses de la colectividad.',
                'Promover la educación cívica y los valores democráticos.'
              ].map((func, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', background: 'var(--nav-hover)', padding: '15px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ minWidth: '24px', height: '24px', background: '#f39c12', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900, color: 'white' }}>{i + 1}</div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.4 }}>{func}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dato Interesante */}
          <div style={{ padding: '25px', background: 'rgba(243, 156, 18, 0.05)', borderRadius: '15px', border: '1px solid rgba(243, 156, 18, 0.2)', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Info color="#f39c12" size={32} style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#f39c12' }}>Autonomía Funcional:</strong> Los órganos del Poder Ciudadano gozan de autonomía funcional, financiera y administrativa. El Presidente del Consejo Moral Republicano es rotativo cada año (Art. 273).
            </p>
          </div>

        </div>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Fuente: Constitución de la República Bolivariana de Venezuela (Arts. 273 - 291).
          </p>
        </footer>
      </div>
    </div>
  );
};

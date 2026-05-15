import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Vote, UserCheck, ClipboardList, Info, Landmark } from 'lucide-react';

export const ElectoralStructurePage: React.FC = () => {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(90deg, var(--text-primary), #2980b9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Poder Electoral
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            El ente encargado de reglamentar y gestionar la voluntad popular a través del sufragio y el registro civil.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          
          {/* CNE */}
          <section className="glass-card animate-fade" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Landmark color="#2980b9" /> Consejo Nacional Electoral (CNE)
            </h2>
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Es el órgano rector del Poder Electoral. Su objetivo es garantizar la transparencia, eficiencia e imparcialidad en los procesos de elección popular, referendos y el registro civil.
            </p>
            
            <h4 style={{ fontSize: '1.1rem', color: '#2980b9', marginBottom: '20px' }}>Órganos Subordinados Estratégicos:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { 
                  title: 'Junta Electoral Nacional', 
                  icon: <ClipboardList size={20} />,
                  desc: 'Encargada de la dirección, supervisión y control de todos los actos relativos al desarrollo de los procesos electorales.' 
                },
                { 
                  title: 'Comisión de Registro Civil y Electoral', 
                  icon: <UserCheck size={20} />,
                  desc: 'Centraliza la información de los nacimientos, matrimonios y defunciones, así como el padrón de votantes.' 
                },
                { 
                  title: 'Comisión de Participación Política y Financiamiento', 
                  icon: <Vote size={20} />,
                  desc: 'Controla los fondos de las organizaciones políticas y promueve la participación ciudadana en los procesos.' 
                }
              ].map((org, i) => (
                <div key={i} className="glass-card" style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '10px', background: 'rgba(41, 128, 185, 0.1)', borderRadius: '10px', color: '#2980b9' }}>
                    {org.icon}
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: 'var(--text-primary)' }}>{org.title}</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{org.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Innovaciones */}
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Funciones e Instituciones Electorales</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '25px' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem' }}>🔄</span> Referéndum Revocatorio
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Mecanismo único que permite a los electores remover de su cargo a cualquier funcionario de elección popular tras cumplir la mitad de su periodo.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '25px' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem' }}>🗳️</span> Automatización Integral
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Venezuela cuenta con un sistema de votación 100% automatizado, desde la autenticación biométrica hasta el escrutinio y transmisión.
                </p>
              </div>
            </div>
          </section>

          {/* Principios */}
          <div style={{ padding: '25px', background: 'rgba(41, 128, 185, 0.05)', borderRadius: '15px', border: '1px solid rgba(41, 128, 185, 0.2)', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Info color="#2980b9" size={32} style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#2980b9' }}>Representación Proporcional:</strong> El sistema electoral busca asegurar que todas las corrientes políticas tengan una representación justa acorde a su peso electoral (Art. 293).
            </p>
          </div>

        </div>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Fuente: Constitución de la República Bolivariana de Venezuela (Arts. 292 - 298).
          </p>
        </footer>
      </div>
    </div>
  );
};

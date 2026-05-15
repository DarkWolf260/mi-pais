import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import { Quiz } from '../components/Quiz';

export const QuizPage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-color)', 
      color: 'var(--text-primary)', 
      paddingTop: '40px',
      background: 'var(--bg-gradient)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 100px 20px' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '40px', textDecoration: 'none' }}>
          <ArrowLeft size={20} />
          <span>Volver al Portal</span>
        </Link>

        <header style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '12px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', marginBottom: '20px' }}>
            <Award size={40} color="var(--vnz-yellow)" />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(90deg, var(--text-primary), var(--vnz-yellow))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Desafío Cívico
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Pon a prueba tus conocimientos sobre la estructura del Estado Venezolano y completa tu Learning Journey.
          </p>
        </header>

        <Quiz />

        <div style={{ marginTop: '60px', padding: '30px', background: 'var(--nav-hover)', borderRadius: '20px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>¿Necesitas repasar?</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Puedes volver a consultar las estructuras de los Poderes Públicos antes de intentar el quiz.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <Link to="/estructura-ejecutiva" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--glass-border)' }}>Ejecutivo</Link>
            <Link to="/estructura-legislativa" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--glass-border)' }}>Legislativo</Link>
            <Link to="/estructura-judicial" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', border: '1px solid var(--glass-border)' }}>Judicial</Link>
          </div>
        </div>

        <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Este quiz está basado íntegramente en la Constitución de la República Bolivariana de Venezuela.
          </p>
        </footer>
      </div>
    </div>
  );
};

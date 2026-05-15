import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7)), url('/hero-bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop: '-60px'
    }}>
      <div className="animate-fade" style={{ maxWidth: '800px' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          marginBottom: '1rem',
          lineHeight: 1.1
        }}>
          Estructura del Estado <br/>
          <span style={{ 
            background: 'linear-gradient(90deg, #ffcc00, #0044cc, #ee1111)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Venezolano</span>
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#a0a0a0', 
          marginBottom: '2rem' 
        }}>
          Conoce los poderes, ministerios e instituciones que conforman la <br/>
          República Bolivariana de Venezuela.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#poderes" style={{
            padding: '12px 32px',
            borderRadius: '50px',
            background: '#ffffff',
            color: '#050505',
            fontWeight: 600,
            fontSize: '1rem'
          }}>Empezar a explorar</a>
          <Link to="/constitucion" style={{
            padding: '12px 32px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none'
          }}>Ver Constitución</Link>
        </div>
      </div>
    </section>
  );
};

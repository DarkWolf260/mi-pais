import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Gavel, Scale, ShieldCheck, Vote, Book, Mail, ExternalLink, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '80px 40px 40px 40px',
      color: '#d0d0d0'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          {/* Logo & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #0044cc, #ee1111)', borderRadius: '8px' }}></div>
              <span style={{ fontSize: '1rem', fontWeight: 900, color: 'white', letterSpacing: '1px' }}>VENEZUELA<span style={{ color: '#ffcc00' }}>PORTAL</span></span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>
              Plataforma informativa independiente para el estudio y comprensión de la estructura del Estado venezolano, sus leyes y sus instituciones.
            </p>
          </div>

          {/* Poderes Públicos */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 700 }}>Poderes Públicos</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Ejecutivo', link: '/estructura-ejecutiva', icon: <Landmark size={14} /> },
                { name: 'Legislativo', link: '/estructura-legislativa', icon: <Gavel size={14} /> },
                { name: 'Judicial', link: '/estructura-judicial', icon: <Scale size={14} /> },
                { name: 'Ciudadano', link: '/estructura-ciudadana', icon: <ShieldCheck size={14} /> },
                { name: 'Electoral', link: '/estructura-electoral', icon: <Vote size={14} /> }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.link} style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos Legales */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 700 }}>Recursos Legales</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link to="/constitucion" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Book size={14} /> Constitución (CRBV)
                </Link>
              </li>
              <li>
                <Link to="/biblioteca-gacetas" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BookOpen size={14} /> Biblioteca de Gacetas
                </Link>
              </li>
              <li>
                <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ExternalLink size={14} /> Leyes Orgánicas
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 700 }}>Soporte</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="mailto:info@venezuelaportal.gob.ve" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={14} /> Reportar Error
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ fontSize: '0.8rem', color: '#555' }}>
            © 2026 VenezuelaPortal. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacidad', 'Términos', 'Cookies'].map(t => (
              <a key={t} href="#" style={{ fontSize: '0.8rem', color: '#555', textDecoration: 'none' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

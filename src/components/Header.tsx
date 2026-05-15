import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Landmark, Gavel, Scale, ShieldCheck, Vote } from 'lucide-react';
import { GlobalSearch } from './GlobalSearch';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: 'var(--header-bg)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--glass-border)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
      transition: 'background 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, var(--vnz-blue), var(--vnz-red))', borderRadius: '10px' }}></div>
          <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '1px' }}>VENEZUELA<span style={{ color: 'var(--vnz-yellow)' }}>PORTAL</span></span>
        </Link>

        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', alignItems: 'center', margin: 0, padding: 0 }}>
            {/* Poderes con Dropdown */}
            <li 
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
              style={{ position: 'relative' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', padding: '10px 0' }}>
                Poderes Públicos <ChevronDown size={14} />
              </div>
              
              {isMenuOpen && (
                <div className="glass-card animate-fade" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-50px',
                  width: '280px',
                  padding: '15px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  {[
                    { name: 'Ejecutivo', icon: <Landmark size={16} />, link: '/estructura-ejecutiva', color: 'var(--vnz-yellow)' },
                    { name: 'Legislativo', icon: <Gavel size={16} />, link: '/estructura-legislativa', color: '#3498db' },
                    { name: 'Judicial', icon: <Scale size={16} />, link: '/estructura-judicial', color: '#e74c3c' },
                    { name: 'Ciudadano', icon: <ShieldCheck size={16} />, link: '/estructura-ciudadana', color: '#f39c12' },
                    { name: 'Electoral', icon: <Vote size={16} />, link: '/estructura-electoral', color: '#2980b9' }
                  ].map(p => (
                    <Link key={p.name} to={p.link} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      textDecoration: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      borderRadius: '8px',
                      transition: 'all 0.2s'
                    }} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--nav-hover)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}>
                      <span style={{ opacity: 0.8 }}>{p.icon}</span>
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li><a href="/#ministerios" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>Ministerios</a></li>
            <li>
              <button 
                onClick={() => setIsSearchOpen(true)}
                style={{ 
                  background: 'var(--nav-hover)', 
                  border: 'none', 
                  color: 'var(--text-secondary)', 
                  padding: '8px', 
                  borderRadius: '10px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Search size={18} />
              </button>
            </li>
            <li><Link to="/biblioteca-gacetas" style={{ 
              fontSize: '0.8rem', 
              color: 'var(--vnz-blue)', 
              border: '1px solid var(--vnz-blue)', 
              padding: '6px 16px', 
              borderRadius: '20px',
              textDecoration: 'none',
              fontWeight: 600,
              background: 'rgba(37, 99, 235, 0.05)'
            }}>Gacetas</Link></li>
            <li><Link to="/constitucion" style={{ 
              fontSize: '0.8rem', 
              color: 'var(--vnz-yellow)', 
              border: '1px solid var(--vnz-yellow)', 
              padding: '6px 16px', 
              borderRadius: '20px',
              textDecoration: 'none',
              fontWeight: 600
            }}>Constitución</Link></li>
          </ul>
        </nav>
      </div>

      {isSearchOpen && <GlobalSearch onClose={() => setIsSearchOpen(false)} />}
    </header>
  );
};

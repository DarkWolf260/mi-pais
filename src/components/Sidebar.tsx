import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Gavel, Landmark, Layout, Settings, HelpCircle, Download, Sun, Moon, Award } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  
  const menuItems = [
    { name: 'Introducción', icon: <BookOpen size={20} />, path: '/' },
    { name: 'Poderes Públicos', icon: <Landmark size={20} />, path: '/#poderes' },
    { name: 'Gabinete Ejecutivo', icon: <Layout size={20} />, path: '/estructura-ejecutiva' },
    { name: 'Marco Legal', icon: <Gavel size={20} />, path: '/constitucion' },
    { name: 'Gacetas Oficiales', icon: <BookOpen size={20} />, path: '/biblioteca-gacetas' },
    { name: 'Desafío Cívico', icon: <Award size={20} />, path: '/desafio-civico' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Lógica de progreso simple: 20% por cada poder explorado + 20% por el quiz
  const getProgress = () => {
    const visited = JSON.parse(localStorage.getItem('visited_pages') || '[]');
    if (!visited.includes(location.pathname) && location.pathname !== '/') {
      visited.push(location.pathname);
      localStorage.setItem('visited_pages', JSON.stringify(visited));
    }
    
    const relevantPaths = [
      '/estructura-ejecutiva',
      '/estructura-legislativa',
      '/estructura-judicial',
      '/estructura-ciudadana',
      '/estructura-electoral',
      '/desafio-civico'
    ];
    
    const count = relevantPaths.filter(p => visited.includes(p)).length;
    return Math.min(Math.round((count / relevantPaths.length) * 100), 100);
  };

  const progress = getProgress();

  return (
    <aside style={{
      width: '280px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'var(--sidebar-bg)',
      backdropFilter: 'blur(30px)',
      borderRight: '1px solid var(--glass-border)',
      padding: '100px 20px 40px 20px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 900,
      transition: 'all 0.3s'
    }}>
      {/* Learning Journey Progress */}
      <div style={{ marginBottom: '40px', padding: '15px', background: 'var(--nav-hover)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{ padding: '6px', background: 'rgba(245,158,11,0.1)', borderRadius: '8px' }}>
            <BookOpen size={16} color="var(--vnz-yellow)" />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Progreso Cívico</span>
        </div>
        <div style={{ height: '6px', width: '100%', background: 'rgba(0,0,0,0.05)', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--vnz-blue)', boxShadow: `0 0 10px ${progress > 0 ? 'var(--vnz-blue)' : 'transparent'}`, transition: 'width 0.5s ease-out' }}></div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Explorando Poderes: {progress}%</p>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 15px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              color: isActive(item.path) ? 'var(--text-primary)' : 'var(--text-secondary)',
              background: isActive(item.path) ? 'rgba(245,158,11,0.1)' : 'transparent',
              border: isActive(item.path) ? '1px solid rgba(245,158,11,0.2)' : '1px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ color: isActive(item.path) ? 'var(--vnz-yellow)' : 'inherit' }}>{item.icon}</span>
            <span style={{ fontWeight: isActive(item.path) ? 600 : 400 }}>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 15px',
            borderRadius: '12px',
            background: 'var(--nav-hover)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        </button>

        <button style={{
          width: '100%',
          padding: '12px',
          background: 'var(--vnz-blue)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <Download size={16} /> Descargar Guía
        </button>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Link to="/config" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', padding: '5px' }}>
            <Settings size={14} /> Ajustes
          </Link>
          <Link to="/help" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none', padding: '5px' }}>
            <HelpCircle size={14} /> Ayuda
          </Link>
        </div>
      </div>
    </aside>
  );
};

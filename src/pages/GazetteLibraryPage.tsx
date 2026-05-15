import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, Download, ExternalLink, Calendar, FileText } from 'lucide-react';
import { instituciones } from '../data/instituciones';

export const GazetteLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const gazettes = instituciones
    .filter(inst => inst.gaceta)
    .filter(inst => 
      inst.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      inst.gaceta?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-color)', 
      color: 'var(--text-primary)', 
      paddingTop: '40px',
      background: 'var(--bg-gradient)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 100px 20px' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '40px', textDecoration: 'none' }}>
          <ArrowLeft size={20} />
          <span>Volver al Portal</span>
        </Link>

        <header style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ padding: '12px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px' }}>
              <BookOpen color="var(--vnz-yellow)" size={32} />
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: 0, background: 'linear-gradient(90deg, var(--text-primary), var(--vnz-yellow))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Biblioteca de Gacetas
            </h1>
          </div>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Archivo digital de Gacetas Oficiales que sustentan la creación y reglamentación de las instituciones del Estado.
          </p>
        </header>

        {/* Buscador */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Buscar por número de gaceta o institución..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '20px 60px',
              background: 'var(--nav-hover)',
              border: '1px solid var(--glass-border)',
              borderRadius: '15px',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              outline: 'none',
              transition: 'all 0.3s'
            }}
          />
        </div>

        {/* Listado de Gacetas */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {gazettes.map((inst) => (
            <div key={inst.id} className="glass-card animate-fade" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '30px',
              border: '1px solid var(--glass-border)',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ padding: '10px', background: 'var(--bg-color)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                  <FileText size={24} color="var(--text-secondary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '5px', color: 'var(--text-primary)' }}>{inst.name}</h3>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--vnz-yellow)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={14} /> {inst.gaceta}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Documento de Creación</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ 
                  padding: '10px 20px', 
                  background: 'rgba(245, 158, 11, 0.1)', 
                  border: '1px solid rgba(245, 158, 11, 0.2)', 
                  borderRadius: '10px', 
                  color: 'var(--vnz-yellow)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}>
                  <Download size={16} /> Descargar
                </button>
                <Link to={`/institucion/${inst.id}`} style={{ 
                  padding: '10px', 
                  background: 'var(--nav-hover)', 
                  border: '1px solid var(--glass-border)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ExternalLink size={18} color="var(--text-secondary)" />
                </Link>
              </div>
            </div>
          ))}
          {gazettes.length === 0 && (
            <div style={{ textAlign: 'center', padding: '100px', color: 'var(--text-secondary)' }}>
              <Search size={48} style={{ marginBottom: '20px', opacity: 0.2 }} />
              <p>No se encontraron gacetas que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

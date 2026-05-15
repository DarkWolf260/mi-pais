import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { instituciones } from '../data/instituciones';

interface InstitucionesProps {
  highlightId: string | null;
  searchTerm?: string;
}

export const Instituciones: React.FC<InstitucionesProps> = ({ highlightId, searchTerm = '' }) => {
  const filtered = highlightId 
    ? instituciones.filter(i => 
        i.ministryId === highlightId && 
        (i.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         i.desc.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  if (highlightId && filtered.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', opacity: 0.5 }}>
        <p>No se encontraron instituciones vinculadas a este ministerio.</p>
      </div>
    );
  }

  if (!highlightId) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', background: 'rgba(255,255,255,0.01)', borderRadius: '20px', border: '1px dashed rgba(255,255,255,0.1)' }}>
        <h3 style={{ marginBottom: '10px' }}>Selecciona un Ministerio</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Haz clic en un ministerio a la izquierda para explorar sus entes adscritos.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ color: 'var(--vnz-yellow)' }}>Entes Adscritos ({filtered.length})</h3>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {filtered.map((inst, i) => (
          <Link 
            key={i} 
            to={`/institucion/${inst.id}`}
            className="glass-card animate-fade" 
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              padding: '25px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.03)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              color: 'white'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'var(--text-secondary)',
              opacity: 0.5
            }}>
              <ExternalLink size={14} />
            </div>
            
            <span style={{ 
              fontSize: '0.65rem', 
              color: 'var(--vnz-blue)', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              marginBottom: '10px'
            }}>
              {inst.type}
            </span>
            
            <h4 style={{ 
              fontSize: '1rem', 
              marginBottom: '10px',
              color: 'var(--vnz-yellow)'
            }}>{inst.name}</h4>
            
            <p style={{ color: '#a0a0a0', fontSize: '0.85rem', lineHeight: 1.4, flex: 1 }}>
              {inst.desc}
            </p>

            <div style={{ 
              marginTop: '15px', 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontWeight: 600
            }}>
              Ver detalles <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Book, Building, ArrowRight } from 'lucide-react';
import { instituciones } from '../data/instituciones';
import constitutionData from '../data/constitution_raw.json';

export const GlobalSearch: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (query.length < 2) return { institutions: [], articles: [] };
    
    const term = query.toLowerCase();
    
    const matchedInst = instituciones.filter(i => 
      i.name.toLowerCase().includes(term) || 
      i.desc.toLowerCase().includes(term)
    ).slice(0, 5);

    const matchedArt = constitutionData.articles.filter(a => 
      a.text.toLowerCase().includes(term) || 
      a.didactic.toLowerCase().includes(term) ||
      a.num.toString() === term
    ).slice(0, 5);

    return { institutions: matchedInst, articles: matchedArt };
  }, [query]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '100px'
    }} onClick={onClose}>
      <div style={{
        width: '100%',
        maxWidth: '700px',
        padding: '20px'
      }} onClick={e => e.stopPropagation()}>
        
        {/* Input de Búsqueda */}
        <div style={{ 
          position: 'relative', 
          marginBottom: '30px'
        }}>
          <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--vnz-yellow)' }} />
          <input 
            autoFocus
            type="text" 
            placeholder="Busca artículos, instituciones, ministerios..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '20px 60px',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid var(--vnz-yellow)',
              borderRadius: '20px',
              color: 'white',
              fontSize: '1.2rem',
              outline: 'none',
              boxShadow: '0 0 30px rgba(255,204,0,0.2)'
            }}
          />
          <button onClick={onClose} style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#666',
            cursor: 'pointer'
          }}>
            <X size={24} />
          </button>
        </div>

        {/* Resultados */}
        {query.length >= 2 && (
          <div className="glass-card animate-fade" style={{ 
            maxHeight: '60vh', 
            overflowY: 'auto', 
            padding: '20px',
            border: '1px solid var(--glass-border)'
          }}>
            {results.institutions.length === 0 && results.articles.length === 0 && (
              <p style={{ textAlign: 'center', padding: '40px', color: '#666' }}>No se encontraron resultados para "{query}"</p>
            )}

            {results.institutions.length > 0 && (
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building size={14} /> Instituciones y Entes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {results.institutions.map(inst => (
                    <div 
                      key={inst.id} 
                      onClick={() => { navigate(`/institucion/${inst.id}`); onClose(); }}
                      style={{ 
                        padding: '15px', 
                        background: 'rgba(255,255,255,0.03)', 
                        borderRadius: '12px', 
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600 }}>{inst.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>{inst.type}</div>
                      </div>
                      <ArrowRight size={16} color="var(--vnz-yellow)" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.articles.length > 0 && (
              <div>
                <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Book size={14} /> Constitución (Artículos)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {results.articles.map(art => (
                    <div 
                      key={art.num} 
                      onClick={() => { navigate(`/constitucion?art=${art.num}`); onClose(); }}
                      style={{ 
                        padding: '15px', 
                        background: 'rgba(255,255,255,0.03)', 
                        borderRadius: '12px', 
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--vnz-yellow)' }}>Artículo {art.num}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '500px' }}>
                          {art.text}
                        </div>
                      </div>
                      <ArrowRight size={16} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

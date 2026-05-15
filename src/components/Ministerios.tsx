import React from 'react';
import { vicepresidencias } from '../data/ministerios';

interface MinisteriosProps {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export const Ministerios: React.FC<MinisteriosProps> = ({ selectedId, onSelect }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {vicepresidencias.map((vp, vpi) => (
        <div key={vpi}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px', 
            marginBottom: '20px',
            borderLeft: `4px solid ${vp.color}`,
            paddingLeft: '15px'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0, opacity: 0.9 }}>{vp.name}</h3>
              {vp.titular && (
                <span style={{ fontSize: '0.75rem', color: vp.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {vp.titular}
                </span>
              )}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {vp.ministerios.map((m, i) => {
              const isSelected = selectedId === m.id;
              return (
                <div key={i} style={{
                  padding: '15px',
                  background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? `1px solid ${vp.color}` : '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: isSelected ? `0 0 15px ${vp.color}20` : 'none',
                  transform: isSelected ? 'scale(1.02)' : 'none'
                }}
                onClick={() => onSelect(isSelected ? null : m.id)}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = vp.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: '1.2' }}>{m.name}</span>
                  <span style={{ fontSize: '0.7rem', color: isSelected ? vp.color : '#888', fontWeight: 500 }}>
                    Titular: {m.titular}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

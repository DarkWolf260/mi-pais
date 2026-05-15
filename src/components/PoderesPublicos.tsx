import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const poderes = [
  {
    title: "Poder Ejecutivo",
    desc: "Encabezado por el Presidente, quien funciona como Jefe de Estado y Jefe de Gobierno por un periodo de 6 años (Art. 225).",
    icon: "🏛️",
    color: "#f1c40f",
    link: "/estructura-ejecutiva"
  },
  {
    title: "Poder Legislativo",
    desc: "Parlamento unicameral (Asamblea Nacional) compuesto por 277 diputados. Ejerce la función legislativa y el control político sobre el Gobierno (Art. 186).",
    icon: "⚖️",
    color: "#3498db",
    link: "/estructura-legislativa"
  },
  {
    title: "Poder Judicial",
    desc: "Potestad de administrar justicia que emana de los ciudadanos. El Tribunal Supremo de Justicia es su órgano rector (Art. 253).",
    icon: "📜",
    color: "#e74c3c",
    link: "/estructura-judicial"
  },
  {
    title: "Poder Ciudadano",
    desc: "Se ejerce por el Consejo Moral Republicano para velar por la ética pública y la moral administrativa (Art. 273).",
    icon: "🛡️",
    color: "#f39c12",
    link: "/estructura-ciudadana"
  },
  {
    title: "Poder Electoral",
    desc: "Ejercido por el Consejo Nacional Electoral (CNE), encargado de organizar y supervisar los procesos electorales (Art. 292).",
    icon: "🗳️",
    color: "#2980b9",
    link: "/estructura-electoral"
  }
];

export const PoderesPublicos: React.FC = () => {
  return (
    <section id="poderes" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 className="section-title">Poderes Públicos Nacionales</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {poderes.map((p, i) => (
            <Link 
              key={i} 
              to={p.link}
              className="glass-card" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
              <h3 style={{ marginBottom: '1rem', color: p.color }}>{p.title}</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
              
              <div style={{ 
                marginTop: '20px', 
                fontSize: '0.8rem', 
                color: p.color, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px',
                fontWeight: 600,
                opacity: 0.8
              }}>
                Ver marco legal <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

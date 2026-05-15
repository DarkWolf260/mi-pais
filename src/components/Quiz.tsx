import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCcw, Award } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "¿Cuál de estos NO es uno de los 5 Poderes Públicos de Venezuela?",
    options: ["Poder Ciudadano", "Poder Militar", "Poder Electoral", "Poder Legislativo"],
    correct: 1,
    explanation: "Los 5 poderes son: Ejecutivo, Legislativo, Judicial, Ciudadano y Electoral. El poder militar está subordinado al Ejecutivo."
  },
  {
    id: 2,
    text: "¿Qué órgano preside el Consejo Moral Republicano?",
    options: ["El TSJ", "La Asamblea Nacional", "Es rotativo entre los 3 entes del Poder Ciudadano", "El Presidente de la República"],
    correct: 2,
    explanation: "La presidencia del Consejo Moral Republicano rota anualmente entre el Defensor del Pueblo, el Fiscal General y el Contralor General."
  },
  {
    id: 3,
    text: "¿Qué sala del TSJ tiene la potestad de anular leyes inconstitucionales con efectos generales?",
    options: ["Sala Plena", "Sala Constitucional", "Sala de Casación Civil", "Sala Electoral"],
    correct: 1,
    explanation: "La Sala Constitucional es la máxima intérprete de la Constitución y puede anular leyes mediante el control concentrado."
  },
  {
    id: 4,
    text: "¿A qué edad mínima se puede ser Diputado a la Asamblea Nacional?",
    options: ["18 años", "21 años", "25 años", "30 años"],
    correct: 1,
    explanation: "Según el Art. 188 de la CRBV, para ser diputado se requiere ser venezolano por nacimiento o naturalización y tener al menos 21 años."
  },
  {
    id: 5,
    text: "¿Qué mecanismo permite remover a un funcionario de elección popular a mitad de su mandato?",
    options: ["Moción de Censura", "Referéndum Revocatorio", "Juicio de Responsabilidad", "Interpelación"],
    correct: 1,
    explanation: "El Referéndum Revocatorio (Art. 72) es el mecanismo para revocar el mandato de cualquier cargo de elección popular."
  }
];

export const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentStep].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="glass-card animate-fade" style={{ padding: '40px', textAlign: 'center' }}>
        <Award size={64} color="var(--vnz-yellow)" style={{ marginBottom: '20px' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>¡Desafío Completado!</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          Has obtenido {score} de {questions.length} puntos.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button 
            onClick={resetQuiz}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '12px 25px', 
              background: 'var(--vnz-blue)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '10px', 
              fontWeight: 600, 
              cursor: 'pointer' 
            }}
          >
            <RefreshCcw size={18} /> Reintentar
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentStep];

  return (
    <div className="glass-card animate-fade" style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
          Pregunta {currentStep + 1} de {questions.length}
        </span>
        <div style={{ height: '4px', width: '100px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: `${((currentStep + 1) / questions.length) * 100}%`, height: '100%', background: 'var(--vnz-blue)' }}></div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.4rem', marginBottom: '25px', lineHeight: 1.4 }}>{q.text}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {q.options.map((option, i) => {
          let background = 'var(--nav-hover)';
          let border = '1px solid var(--glass-border)';
          let color = 'var(--text-primary)';

          if (isAnswered) {
            if (i === q.correct) {
              background = 'rgba(34, 197, 94, 0.1)';
              border = '1px solid #22c55e';
            } else if (i === selectedOption) {
              background = 'rgba(239, 68, 68, 0.1)';
              border = '1px solid #ef4444';
            }
          } else if (selectedOption === i) {
            border = '1px solid var(--vnz-blue)';
          }

          return (
            <button
              key={i}
              onClick={() => handleOptionSelect(i)}
              disabled={isAnswered}
              style={{
                padding: '15px 20px',
                textAlign: 'left',
                background,
                border,
                borderRadius: '12px',
                cursor: isAnswered ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s',
                color
              }}
            >
              <span>{option}</span>
              {isAnswered && i === q.correct && <CheckCircle2 size={18} color="#22c55e" />}
              {isAnswered && i === selectedOption && i !== q.correct && <XCircle size={18} color="#ef4444" />}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="animate-fade" style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--vnz-yellow)' }}>Explicación:</strong> {q.explanation}
          </p>
          <button 
            onClick={handleNext}
            style={{ 
              marginTop: '20px', 
              width: '100%', 
              padding: '12px', 
              background: 'var(--text-primary)', 
              color: 'var(--bg-color)', 
              border: 'none', 
              borderRadius: '10px', 
              fontWeight: 700, 
              cursor: 'pointer' 
            }}
          >
            {currentStep === questions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
          </button>
        </div>
      )}
    </div>
  );
};

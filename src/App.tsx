import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

import { HomePage } from './pages/HomePage';
import { ConstitutionPage } from './pages/ConstitutionPage';
import { InstitutionPage } from './pages/InstitutionPage';
import { ExecutiveStructurePage } from './pages/ExecutiveStructurePage';
import { LegislativeStructurePage } from './pages/LegislativeStructurePage';
import { JudicialStructurePage } from './pages/JudicialStructurePage';
import { CitizenStructurePage } from './pages/CitizenStructurePage';
import { ElectoralStructurePage } from './pages/ElectoralStructurePage';
import { GazetteLibraryPage } from './pages/GazetteLibraryPage';
import { QuizPage } from './pages/QuizPage';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, paddingLeft: '280px', paddingTop: '70px' }}>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/constitucion" element={<ConstitutionPage />} />
          <Route path="/institucion/:id" element={<InstitutionPage />} />
          <Route path="/estructura-ejecutiva" element={<ExecutiveStructurePage />} />
          <Route path="/estructura-legislativa" element={<LegislativeStructurePage />} />
          <Route path="/estructura-judicial" element={<JudicialStructurePage />} />
          <Route path="/estructura-ciudadana" element={<CitizenStructurePage />} />
          <Route path="/estructura-electoral" element={<ElectoralStructurePage />} />
          <Route path="/biblioteca-gacetas" element={<GazetteLibraryPage />} />
          <Route path="/desafio-civico" element={<QuizPage />} />
        </Routes>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

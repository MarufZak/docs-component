import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ButtonDocs from './components/ButtonDocs';
import DialogDocs from './components/DialogDocs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/button" element={<ButtonDocs />} />
        <Route path="/dialog" element={<DialogDocs />} />
      </Route>
    </Routes>
  );
}

export default App;

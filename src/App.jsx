import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ButtonDocs from './components/ButtonDocs/ButtonDocs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/button" element={<ButtonDocs />} />
      </Route>
    </Routes>
  );
}

export default App;

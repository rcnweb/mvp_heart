import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ResultadoModal from './components/modal/ResultadoModal';
import { exemploComDoenca } from './examples/exemploComDoença';
import { exemploSemDoenca } from './examples/exemploSemDoença';
import { labels } from './constants/labels';
import { tooltips } from './constants/tooltips';
import { options } from './constants/options';


function App() {
  const [formData, setFormData] = useState(exemploSemDoenca);
  const [result, setResult] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openHelpItems, setOpenHelpItems] = useState({});

  const toggleExemplo = () => {
    if (formData === exemploSemDoenca) {
      setFormData(exemploComDoenca);
    } else {
      setFormData(exemploSemDoenca);
    }
    setResult(null); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = ['Age', 'RestingBP', 'Cholesterol', 'MaxHR', 'Oldpeak'].includes(name)
    ? parseFloat(value)
    : name === 'FastingBS'
      ? parseInt(value)
      : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      if (response.status === 200 && response.data) {
        setResult(response.data);
      } else {
        alert('Resposta inesperada da API.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com a API: ' + error.message);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleHelpItem = (key) => {
    setOpenHelpItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="App">

      <button className='exemplo-botao' onClick={toggleExemplo}>
        {formData === exemploSemDoenca ? 'Com Doença' : 'Sem Doença'}
      </button>

      {!sidebarOpen && (
        <button className="ajuda-botao" onClick={toggleSidebar}>❔ Ajuda</button>
      )}

       <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        openHelpItems={openHelpItems}
        toggleHelpItem={toggleHelpItem}
      />

      <h1>Predição de Doença Cardíaca</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-group">
            <label title={tooltips[key]}>{labels[key]}</label>
           {key === 'FastingBS' ? (
            <select name={key} value={value} onChange={handleChange} title={tooltips[key]}>
              <option value="">Selecione...</option>
              <option value={0}>Não (0)</option>
              <option value={1}>Sim (1)</option>
            </select>
          ) : options[key] ? (
            <select name={key} value={value} onChange={handleChange} title={tooltips[key]}>
              <option value="">Selecione...</option>
              {options[key].map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="number"
              step="any"
              name={key}
              value={value}
              onChange={handleChange}
              title={tooltips[key]}
            />
          )}
          </div>
        ))}
        <button type="submit">Prever</button>
      </form>
      
      <ResultadoModal result={result} onClose={() => setResult(null)} />
    </div>
  );
}

export default App;

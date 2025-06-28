import './ResultadoModal.css';

const ResultadoModal = ({ result, onClose }) => {
  if (!result) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Resultado da Predição</h2>
        <p><strong>Predição:</strong> {result.prediction === 1 ? 'Com Doença' : 'Sem Doença'}</p>
        <p><strong>Probabilidade:</strong> {(result.probability * 100).toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default ResultadoModal;

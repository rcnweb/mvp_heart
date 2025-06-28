import './Sidebar.css';
import { labels } from '../../constants/labels';
import { tooltips } from '../../constants/tooltips';
import { options } from '../../constants/options';

const Sidebar = ({ 
  sidebarOpen, 
  toggleSidebar,
  openHelpItems, 
  toggleHelpItem 
}) => {
  return (
    <div className={`sidebar ${sidebarOpen ? 'aberta' : ''}`}>
      <h2>Ajuda - FAQ</h2>
      {Object.keys(labels).map((key) => (
        <div key={key} style={{ marginBottom: '12px' }}>
          {options[key] ? (
            <>
              <button
                type="button"
                onClick={() => toggleHelpItem(key)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem',
                  color: '#000'
                }}
              >
                {labels[key]}
                <span>{openHelpItems[key] ? '▲' : '▼'}</span>
              </button>
              {openHelpItems[key] && (
                <div style={{ padding: '10px', backgroundColor: '#fff', border: '1px solid #ddd', borderTop: 'none', borderRadius: '0 0 4px 4px', fontSize: '0.9rem' }}>
                  {options[key].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      style={{
                        display: 'block',
                        width: '100%',
                        margin: '5px 0',
                        padding: '6px 10px',
                        border: '1px solid #bbb',
                        borderRadius: '4px',
                        backgroundColor: '#e7e7e7',
                        cursor: 'default',
                        textAlign: 'left',
                        color: '#333',
                      }}
                      disabled
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <button
              type="button"
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px',
                marginBottom: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
                cursor: 'default',
                fontWeight: 'bold',
                color: '#333'
              }}
              disabled
              title={tooltips[key]}
            >
              <span style={{ color: '#333', fontSize: '0.9rem' }}>{labels[key]}</span>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>{tooltips[key]}</span>
            </button>
          )}
        </div>
      ))}
      <button onClick={toggleSidebar} style={{marginBottom: '4rem', marginTop: '20px', padding: '10px 15px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Fechar
      </button>
    </div>
  );
};

export default Sidebar;

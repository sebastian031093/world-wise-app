import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>MAP</h1>
      <h2>
        {lat}, {lng}
      </h2>

      <button onClick={() => setSearchParams({ lat: 23, lng: 344 })}>
        Change the MAP{' '}
      </button>
    </div>
  );
}

export default Map;

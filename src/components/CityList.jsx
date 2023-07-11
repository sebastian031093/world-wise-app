import styles from './CityList.module.css';

import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';

function CityList({ cities, isLoading }) {
  /* console.log(cities); */
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) return <Message message="Please add your first city" />;

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

import styles from './CountryList.module.css';

import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) return <Message message="Please add your first city" />;
  // console.log(cities);
  const countries = cities.reduce((arr, city) => {
    // console.log(arr, city);
    if (!arr.map(el => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;

import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';
function HomePages() {
  return (
    <div>
      <PageNav></PageNav>
      <h1 >WordWise</h1>
      <Link to="/app">Go to the app </Link>
    </div>
  );
}

export default HomePages;

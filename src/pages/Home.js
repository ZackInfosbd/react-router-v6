import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="section">
      <h2>Home Page</h2>
      <Link to="/about" className="btn">
        About
      </Link>
    </section>
  );
};
export default Home;

/**
 * if you want to navigate your project internally ,you would use LINK component, to='/about'
 * if you want to navigate externally you d rather use <a href="www.google.com">Google</a>
 */

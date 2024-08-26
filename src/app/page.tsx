import Layout from "./components/Layout";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import FilterComponent from "./components/FilterComponent";

const Home = ()=> {

  return (
    <Layout>
      <Banner />
      <FilterComponent />
      <MovieList />
    </Layout>
  );
}

export default Home;
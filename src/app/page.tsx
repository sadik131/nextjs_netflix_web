import Layout from "./components/Layout";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";

const Home = ()=> {

  return (
    <Layout>
      <Banner />
      <MovieList />
    </Layout>
  );
}

export default Home;
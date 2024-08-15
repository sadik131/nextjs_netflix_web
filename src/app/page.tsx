import Layout from "./components/Layout";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";

export default function Home() {

  return (
    <Layout>
      <Banner />
      <MovieList />
    </Layout>
  );
}

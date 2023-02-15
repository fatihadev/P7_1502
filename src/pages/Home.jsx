import Header from '../components/Header';
import Footer from '../components/Footer';
import Bannerhome from '../components/Bannerhome';

import ProductList from '../products/products.json'
import Cards from '../components/Cards'

function Home() {
  console.log(ProductList)
   
  return (
    <>
      <Header />
      <Bannerhome />

      <Cards />

      <Footer />
    </>
  );
}

export default Home;


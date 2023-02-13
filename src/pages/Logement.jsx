import React from 'react'
import { useParams} from 'react-router-dom'
import Header from '../components/Header'
import Tags from '../components/Tags'
import productsList from '../products/products.json'
import Footer from '../components/Footer'
import Caroussel from '../components/Caroussel/Caroussel'
import Collapses from '../components/Collapses'
import Host from '../components/Host'
import NotFound from '../pages/NotFound'
import Rate from '../components/Rate'

const Logement = () => {
  
  const { id } = useParams();
  console.log(id);  
   const product = productsList.find((p) =>  {return (":" + p.id) === (id);
  });
  if (!product) return <NotFound />;

  console.log(product);


  return (
    <div>
      <Header />
          <Caroussel product={product} />
          <div className='rate'>
            <Rate product={product} />
          </div>
          <Tags product={product} />
          <Host  product={product} />
          <Collapses product={product} />
      <Footer />
    </div>
  )
}

export default Logement
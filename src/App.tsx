import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';



import axios from 'axios'
import SideBar from './components/SideBar/Sidebar';


type Products = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number
};

type GetProductsResponse = {
  products: Products[];
  count: number;
};

function App() {

  const [products, setProducts] = useState<Products[]>([])

  async function getProducts() {
    try {

      const { data } = await axios.get<GetProductsResponse>(
        'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      setProducts(data.products)

  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  useEffect(() => {
    getProducts()
  },[products])
  return (
    <div>
      <SideBar />
      <Header />
      <Produtos products={products}/>
    </div>
  );
}

export default App;

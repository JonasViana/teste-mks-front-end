import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';

import axios from 'axios'

type Products = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number
  };
  
  type GetProductsResponse = {
    data: Products[];
  };
  
  async function getProducts() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetProductsResponse>(
        'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
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

  getProducts();

function App() {
  return (
    <div>
      <Header />
      <Produtos   />
    </div>
  );
}

export default App;

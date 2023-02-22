import { useEffect, useState} from 'react'
import axios from 'axios'

import NavBar from '../component/navbar'
import List from '../component/listProduct'

import './css/listDetail.css'
import './css/helper.css'

function Product(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3030/product')
        .then(res => {
        //   console.log(res.data.products)
          setProducts(res.data.products)
        })
        .catch(err => console.log(err))
    },[])

    const arr = products.map(((data, index) =>{ 
        return (
          <div className="p-1">
              <List
                  product = {data}
              />
          </div>
        )
      }))

    // console.log(products)
    return(
        <div className=''>
            <NavBar />
            <div class="container mt-5 mb-5 p-1">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        {arr}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
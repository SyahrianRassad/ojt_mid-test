import { useState, React } from "react";
import { Link } from "react-router-dom";

import '../pages/css/listDetail.css'

export default function List(props){
    const [product] = useState(props.product)
    // console.log(product)
    return(
        <div class="row p-5 bg-white border rounded">
            <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={product.thumbnail} /></div>
            <div class="col-md-6 mt-1">
                <h5>{product.title}</h5>
                <div class="d-flex flex-row">
                    <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>{product.category}</span>
                </div><br/>
                <p class="text-justify para mb-0">{product.description}</p>
            </div>
            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-row align-items-center">
                    <h4 class="mr-1">${product.price}</h4>
                </div>
                <div class="d-flex flex-column mt-5">
                    <Link 
                        class="btn btn-primary btn-sm" 
                        type="button"
                        state= {{product: product}}
                        to="/detail"
                        > Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
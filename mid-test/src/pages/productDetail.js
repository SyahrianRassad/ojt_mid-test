import { Link, useLocation } from "react-router-dom";

import './css/details.css'
import Navbar from '../component/navbar'

function DetailProduct(){
    const data = useLocation()
    const product = data.state.product
    const newPrice = product.price - (product.price * product.discountPercentage / 100)
    return(
        <div>
            <Navbar/>
            <div class="container my-5 p-5">
                <Link className="btn btn-danger" to="/product">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                </Link>
                <div class="row">
                    <div class="col-md-5">
                        <div class="main-img">
                            <img class="img-fluid" src={product.thumbnail} alt="ProductS" />
                            <div class="row my-3 previews">
                                <div class="col-md-3">
                                    <img class="w-100" src={product.images[0]} alt="Sale" />
                                </div>
                                <div class="col-md-3">
                                    <img class="w-100" src={product.images[1]} alt="Sale"/>
                                </div>
                                <div class="col-md-3">
                                    <img class="w-100" src={product.images[2]} alt="Sale"/>
                                </div>
                                <div class="col-md-3">
                                    <img class="w-100" src={product.images[3]} alt="Sale"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="main-description px-2">
                            <div class="category text-bold">
                                CATEGORY: {product.category}
                            </div>
                            <p class="old-price mb-1">BRAND: {product.brand}</p>
                            <div class="product-title text-bold my-3">
                                {product.title}
                            </div>


                            <div class="price-area my-4">
                                <p class="old-price mb-1"><del>${product.price}</del>
                                    <span class="old-price-discount text-danger">({product.discountPercentage}% off)</span></p>
                                <p class="new-price text-bold mb-1">${newPrice}</p>
                                <p class="text-secondary mb-1">Stock : {product.stock}</p>

                            </div>


                            {/* <div class="buttons d-flex my-5">
                                <div class="block">
                                    <a href="#" class="shadow btn custom-btn ">Wishlist</a>
                                </div>
                                <div class="block">
                                    <button class="shadow btn custom-btn">Add to cart</button>
                                </div>

                                <div class="block quantity">
                                    <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity" />
                                </div>
                            </div> */}




                        </div>

                        <div class="product-details my-4">
                            <p class="details-title text-color mb-1">Product Details</p>
                            <p class="description">{product.description}</p>
                        </div>
                        {/* <div class="product-details my-4">
                            <p class="details-title text-color mb-2">Material & Care</p>
                            <ul>
                                <li>Cotton</li>
                                <li>Machine-wash</li>
                            </ul>
                        </div>
                        <div class="product-details my-4">
                            <p class="details-title text-color mb-2">Sold by</p>
                            <ul>
                                <li>Cotton</li>
                                <li>Machine-wash</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
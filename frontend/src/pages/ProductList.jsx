import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";
import "../css/ProductList.css";


function ProductList() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        axios
            .get("http://localhost:5000/api/products")

            .then((response) => {

                setProducts(response.data);

                setLoading(false);

            })

            .catch((error) => {

                console.log(error);

                setLoading(false);

            });


    }, []);



    if (loading) {

        return <h2>Loading products...</h2>;

    }


    return (

        <main className="product-page">

            <h1>
                All Products
            </h1>


            <div className="product-container">

                {products.map((product) => (

                    <ProductCard

                        key={product.id}

                        product={product}

                    />

                ))}

            </div>


        </main>

    );

}


export default ProductList;
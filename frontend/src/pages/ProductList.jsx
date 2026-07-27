import { useEffect, useState } from "react";
import API from "../api";

import ProductCard from "../components/ProductCard";
import "../css/ProductList.css";


function ProductList() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        API
            .get("/products")

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
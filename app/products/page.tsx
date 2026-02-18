"use client";

import { useEffect, useState } from "react";

interface Product {

  id: number;

  name: string;

}

export default function Products() {

  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState<string>("");


  useEffect(() => {

    loadProducts();

  }, []);



  async function loadProducts(): Promise<void> {

    const res = await fetch("/api/products");

    const data: Product[] = await res.json();

    setProducts(data);

  }



  async function createProduct(): Promise<void> {

    await fetch("/api/products", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({ name })

    });

    loadProducts();

  }



  async function deleteProduct(id: number): Promise<void> {

    await fetch(`/api/products/${id}`, {

      method: "DELETE"

    });

    loadProducts();

  }



  return (

    <div>

      <h1>Products</h1>


      <input

        value={name}

        onChange={(e) => setName(e.target.value)}

      />


      <button onClick={createProduct}>

        Add

      </button>



      {products.map(product => (

        <div key={product.id}>

          {product.name}

          <button

            onClick={() => deleteProduct(product.id)}

          >

            Delete

          </button>

        </div>

      ))}


    </div>

  );

}

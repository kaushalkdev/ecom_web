"use client"
import ProductList from "./components/ProductList"
import { useState, useEffect } from 'react'





export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/products', {
      mode: 'no-cors'
    })
      .then((res) => {
        console.log(res);

      })
      .then((data) => {
        console.log(data);
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <ProductList />
    </div>
  );
}
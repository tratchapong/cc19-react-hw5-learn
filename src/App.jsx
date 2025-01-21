import { useEffect, useState } from "react"
import PageNavigate from "./components/PageNavigate"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal]  = useState(0)

  const fetchProducts = async () => {
    const resp = await axios.get(
      `https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=20`
    )
    console.log(resp.data)
    setTotal(resp.data.total)
    setProducts(resp.data.products)
  }

  useEffect( ()=>{
    fetchProducts()
  }, [searchText] )

  return (
    <div className="bg-slate-400 max-w-screen-sm m-5 p-3">
      <h1 className="text-3xl text-pink-500 hover:underline">
        Product Search
      </h1>
      <div className="flex gap-4">
        <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        <PageNavigate 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={total}
        />
      </div>
      <ProductList products={products}/>

    </div>
  )
}

export default App

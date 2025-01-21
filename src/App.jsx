import PageNavigate from "./components/PageNavigate"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <div className="bg-slate-400 max-w-screen-sm m-5 p-3">
      <h1 className="text-3xl text-pink-500 hover:underline">
        Product Search
      </h1>
      <div className="flex gap-4">
        <SearchBar />
        <PageNavigate />
      </div>
      <ProductList />

    </div>
  )
}

export default App

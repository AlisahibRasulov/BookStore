import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { useAxiosBooks } from "../hooks/useAxiosBooks";
import { Input, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";

const { Search } = Input;

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchItem, setSearchItem] = useState(""); 
  const { books, loading, error } = useAxiosBooks(searchItem); 

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();
    setSearchItem(trimmedValue);

    
    if (trimmedValue === "") {
      toast.info("Lütfen geçerli bir arama terimi girin.", {
        position: "top-right",
        autoClose: 3000,
      });
      return; 
    }
  };


  useEffect(() => {
    if (searchItem) {
      if (books.length === 0) {
        toast.error("Hiçbir sonuç bulunamadı.", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.success(`Kitaplar bulundu: ${books.length}`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  }, [books]); 

  return (
    <div className="home flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="mt-2 py-5">
        <Search
          placeholder="Search Books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSearch={handleSearch}
          enterButton={
            <Button
              type="primary"
              style={{ backgroundColor: "#083344", borderColor: "#083344" }}
            >
              Search
            </Button>
          }
          allowClear
        />
      </div>

      {loading && <p className="text-cyan-950 text-2xl font-bold">Loading...</p>}

      {error && <p>{error}</p>}

      <BookList books={books} />
    </div>
  );
};

export default Home;

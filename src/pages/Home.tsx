import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { useAxiosBooks } from "../hooks/useAxiosBooks";
import { Input, Button } from "antd";
import { toast } from "react-toastify";

const { Search } = Input;

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const { books, loading, error } = useAxiosBooks(searchItem);

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();
    setSearchItem(trimmedValue);

    if (trimmedValue === "") {
      toast.info("Please enter a valid search term.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  };

  useEffect(() => {
    if (searchItem) {
      if (books.length === 0) {
        toast.error("No results found.", {
          position: "top-right",
          autoClose: 1000,
        });
      } else {
        toast.success(`Books found: ${books.length}`, {
          position: "top-right",
          autoClose: 1000,
        });
      }
    }
  }, [books]);

  return (
    <div className="home flex flex-col justify-center items-center">
      <div className="py-5 sticky top-16 z-50">
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

      {loading && (
        <p className="text-cyan-950 text-2xl font-bold">Loading...</p>
      )}

      {error && <p>{error}</p>}

      <BookList books={books} />
    </div>
  );
};

export default Home;

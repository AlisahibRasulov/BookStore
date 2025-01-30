import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { useAxiosBooks } from "../hooks/useAxiosBooks";
import { Input, Button, Pagination } from "antd";
import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";

const { Search } = Input;

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5;

  const { books, loading, error } = useAxiosBooks(searchItem);

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();
    setSearchItem(trimmedValue);
    setCurrentPage(1);

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


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = searchItem ? books.slice(startIndex, endIndex) : books;
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
        <p className="text-cyan-950 text-2xl font-bold">
          <ScaleLoader />
        </p>
      )}

      {error && <p>{error}</p>}

      <BookList books={paginatedBooks} />

      {searchItem && books.length > itemsPerPage && (
  <Pagination
    current={currentPage}
    total={books.length}
    pageSize={itemsPerPage}
    onChange={(page) => setCurrentPage(page)}
    className="mt-4"
  />
)}
    </div>
  );
};

export default Home;

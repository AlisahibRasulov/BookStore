import { Link, useNavigate } from "react-router-dom";
import { useFavoriteBooks } from "../hooks/useFavoriteBooks";
import { HeartOutlined, HomeOutlined } from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const { bookFavs } = useFavoriteBooks();

  return (
    <div className="h-[80px] p-[20px] flex justify-between items-center sticky top-0 z-50 bg-cyan-950 opacity-100">
      <Link to="/" className="text-amber-400 text-2xl font-bold">
        Book<span className="text-white">Store</span>
      </Link>
      <ul className="flex gap-8 items-center">
        <li className="text-white font-semibold text-lg">
          <HomeOutlined
            className="text-2xl cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => navigate("/")}
          />
        </li>
        <li className="text-white font-semibold relative flex items-center">
          <span
            className={
              bookFavs.length
                ? "absolute -right-1 -top-1 text-[10px] bg-red-500 text-white rounded-full px-1 py-0"
                : "hidden"
            }
          >
            {bookFavs.length}
          </span>
          <HeartOutlined
            className="text-2xl cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => navigate("/bookfavs")}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

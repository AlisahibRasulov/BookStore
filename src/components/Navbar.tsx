import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-cyan-950 p-[20px] flex justify-center">
        <Link to={"/"} className="text-amber-400 text-2xl font-bold">Book<span className="text-white">Store</span></Link>
      <ul className="flex w-full justify-center gap-4">
        <li className="text-white font-semibold">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-white font-semibold">
          <NavLink to={"/bookfavs"}>Bookmarks</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

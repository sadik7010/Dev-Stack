import logo from "./assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className="my-4 sticky top-0 z-50 bg-base-100">
      <div className="flex  justify-between items-center container mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="">
          <ul className="flex  gap-4 text-base-content/60 ">
            
            <a href="" > <span className="text-[#DB2777]">Home</span></a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="cursor-pointer text-base-content/60 ">Sign In</button>
          <button className="btn bg-[#D91B7E] text-white border-none rounded-3xl ">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

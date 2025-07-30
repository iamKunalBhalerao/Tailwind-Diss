import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navLinks = [
    { title: "Features", href: "/features" },
    { title: "Guide", href: "/guide" },
    { title: "Price", href: "/price" },
    { title: "Log In", href: "/log" },
  ];

  return (
    <>
      <div className="flex items-center justify-between font-sans">
        <img src="public\assets\logo.svg" alt="logo" width={70} height={70} />
        <div className="flex items-center gap-8">
          {navLinks.map((tab) => (
            <Link
              to={tab.href}
              className="text-sm text-neutral-800 font-medium hover:text-slate-700 transition-all duration-300 ease-in-out"
            >
              {tab.title}
            </Link>
          ))}
          <Button lable={"Start free trial"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

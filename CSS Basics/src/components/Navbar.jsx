import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Founders",
      href: "#",
    },
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Log In",
      href: "#",
    },
  ];

  return (
    <>
      <div className="navbar-root">
        <div className="logo">Fintech</div>
        <div className="links">
          {links.map((tab) => (
            <a key={links.title} href={tab.href} className="link-item">
              {tab.title}
            </a>
          ))}
          <button className="nav-button">Start free trial</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

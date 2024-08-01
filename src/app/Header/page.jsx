import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleItemClick = (text) => {
    if (activeItem !== text)
    setActiveItem(text);
  };


  const menuItems = [
    { text: 'About Us Template', href: '/About' },
    { text: 'Blogs', href: '/Blog' },
    { text: 'Logo Gallery', href: '/Logo' },
    
  ];

  return (
    <header className="header">
      <div className="nav">
        {menuItems.map((item) => (
          <Link key={item.text} href={item.href}>
            <Button
              style={{ color: "black" }}
              className={activeItem === item.text ? 'active' : ''}
              onClick={() => handleItemClick(item.text)}
            >
                  {item.text}
            </Button>
          </Link>
        ))}
      </div>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleMenu}
        className="menu-icon"
      >
        <MenuIcon />
      </IconButton>
      {menuOpen && (
        <div className="menu-items">
          {menuItems.map((item) => (
            <Link key={item.text} href={item.href}>
            <Button
                style={{ color: "black" }}
                className={activeItem === item.text ? 'active' : ''}
                onClick={() => handleItemClick(item.text)}
              >
                  {item.text}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

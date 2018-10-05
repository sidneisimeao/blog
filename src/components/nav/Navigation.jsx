import React from 'react';
import { Link } from 'react-static';

const Navigation = () => (
    <aside className="menu">
        <p className="menu-label">
          <Link to="/">Home</Link>
        </p>
        <p className="menu-label">
           <Link to="/about">Sobre</Link>
        </p>
        <p className="menu-label">
           <Link to="/blog">Blog</Link>
        </p>       
    </aside>
);

export default Navigation;
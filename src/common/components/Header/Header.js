import './Header.css';
import React from 'react';
import Searchbar from '../Searchbar/Searchbar'

export default function Header() {
  return <header className="nav-header">
            <div className="nav-bounds">
                <a href="/" tabIndex="2" className="nav-logo"></a>
                <Searchbar />
            </div>
        </header>;
}
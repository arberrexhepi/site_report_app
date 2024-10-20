import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/input">Input Page</Link>
        </li>
        <li>
          <Link to="/report">Report Page</Link>
        </li>
      </ul>
    </nav>
  );}

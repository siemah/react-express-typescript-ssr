import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <h2>Welcome to Reactypress (React SSR) boilerplate</h2>
      <Link to="/blog">Blog</Link>
    </div>
  );
}

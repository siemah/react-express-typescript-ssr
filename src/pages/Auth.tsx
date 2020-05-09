import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      About page
      <Link to={'/'}>Go back to home</Link>
    </div>
  );
}

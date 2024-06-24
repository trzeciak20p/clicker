import React from 'react';

export default function Footer({author}) {
  return (
  <footer class="bg-light mt-5 rounded shadow">
    <h2 class="py-3 text-center text-primary fs-3">&copy; {author}</h2>
  </footer>
  );
}

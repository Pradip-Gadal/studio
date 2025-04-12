import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t py-4 text-center w-full">
      <div className="container">
        <p>&copy; {currentYear} MSC.Physics. All rights reserved.</p>
      </div>
    </footer>
  );
}

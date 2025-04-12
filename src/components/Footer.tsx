import React from "react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t py-4 text-center">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} CourseNotes. All rights reserved.</p>
      </div>
    </footer>
  );
}


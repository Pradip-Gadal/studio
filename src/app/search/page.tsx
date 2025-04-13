'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q');

  // Mock data for semesters and subjects, replace with your actual data source
  const semesters = [
    {
      id: 1,
      name: 'Semester 1',
      subjects: ['Book1', 'Book2', 'Book3', 'Book4', 'ExperimentA', 'ExperimentB'],
    },
    {
      id: 2,
      name: 'Semester 2',
      subjects: ['Book5', 'Book6', 'Book7', 'Book8', 'ExperimentC', 'ExperimentD'],
    },
    {
      id: 3,
      name: 'Semester 3',
      subjects: ['Book9', 'Book10', 'Book11', 'Book12', 'ExperimentE', 'ExperimentF'],
    },
    {
      id: 4,
      name: 'Semester 4',
      subjects: ['Book13', 'Book14', 'Book15', 'Book16', 'ExperimentG', 'ExperimentH'],
    },
  ];

  const searchResults = React.useMemo(() => {
    if (!searchTerm) return [];

    const results: string[] = [];
    semesters.forEach(semester => {
      semester.subjects.forEach(subject => {
        if (subject.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push(subject);
        }
      });
    });
    return results;
  }, [searchTerm, semesters]);

  return (
    <div className="container py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Results</h1>
      {searchTerm ? (
        <>
          <h2 className="text-2xl font-semibold mb-3">
            Results for: {searchTerm}
          </h2>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map(result => (
                <li key={result} className="text-lg">
                  <Link href={`/semester/${result}`}>{result}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </>
      ) : (
        <p>Please enter a search term.</p>
      )}
    </div>
  );
};

export default SearchPage;

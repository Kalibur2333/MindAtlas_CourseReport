import React, { useState, useEffect } from 'react';

function EnrollmentList() {
  const [enrollments, setEnrollments] = useState([]); // Store all enrollments
  const [searchTerm, setSearchTerm] = useState(''); // Store the search term
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' }); // Store sorting configuration
  const [currentPage, setCurrentPage] = useState(1);  // Current page state
  const enrollmentsPerPage = 8;  // Items per page

  useEffect(() => {
    fetch('http://localhost/course_report/get_enrollments.php')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);  // Log data for debugging
        setEnrollments(data);
      })
      .catch(error => console.error('Error fetching enrollments:', error));
  }, []);

  // Filter enrollments based on the search term
  const filteredEnrollments = enrollments.filter((enrollment) => {
    return (
      enrollment.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||  // Use correct field name
      enrollment.completion_status.toLowerCase().includes(searchTerm.toLowerCase())  // Use correct field name
    );
  });

  // Sort the filtered enrollments
  const sortedEnrollments = [...filteredEnrollments].sort((a, b) => {
    if (sortConfig.key) {
      let aValue = a[sortConfig.key].toLowerCase();
      let bValue = b[sortConfig.key].toLowerCase();

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Get the current enrollments for the current page
  const indexOfLastEnrollment = currentPage * enrollmentsPerPage;
  const indexOfFirstEnrollment = indexOfLastEnrollment - enrollmentsPerPage;
  const currentEnrollments = enrollments.slice(indexOfFirstEnrollment, indexOfLastEnrollment);

  // Calculate the total number of pages
  const totalPages = Math.ceil(enrollments.length / enrollmentsPerPage);

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to go to a specific page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="container mx-auto p-6 shadow-lg bg-white min-h-[800px]">
        <div className="flex items-center justify-center my-8">
            <div className="border-t-4 border-customGreen w-10 mx-4"></div>  {/* Left line */}
            <h1 className="pb-1 text-4xl font-bold text-gray-800">Course Enrolment Report</h1>  {/* Title */}
            <div className="border-t-4 border-customGreen w-10 mx-4"></div>  {/* Right line */}
        </div>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, course, or status..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-customGreen text-white">
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('first_name')}>
                  First Name
                  <span className="ml-2">{sortConfig.key === 'first_name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('last_name')}>
                  Last Name
                  <span className="ml-2">{sortConfig.key === 'last_name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('course_name')}>  {/* Use correct field name */}
                  Course
                  <span className="ml-2">{sortConfig.key === 'course_name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('completion_status')}>  {/* Use correct field name */}
                  Status
                  <span className="ml-2">{sortConfig.key === 'completion_status' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedEnrollments.map((enrollment, index) => (
                <tr key={index} className="text-gray-700 hover:bg-gray-100">
                  <td className="p-3 border border-gray-300 bg-gray-200">{enrollment.first_name}</td>
                  <td className="p-3 border border-gray-300">{enrollment.last_name}</td>
                  <td className="p-3 border border-gray-300 bg-gray-200">{enrollment.course_name}</td>  {/* Use correct field name */}
                  <td className={`${
                    enrollment.completion_status === 'completed'
                    ? 'text-green-600 p-3'
                    : enrollment.completion_status === 'in progress'
                    ? 'text-yellow-600 p-3'
                    : 'text-red-600 p-3'
                    }`}>{enrollment.completion_status}</td>  {/* Use correct field name */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          <button
            onClick={prevPage}
            className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-customGreen text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            className={`px-4 py-2 bg-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default EnrollmentList;

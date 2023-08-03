import React from 'react';

const DynamicTable = ({ data }) => {
  const numRows = Math.ceil(data.length / 3); // Calculate the number of rows needed

  // Create an array of row indexes
  const rowIndices = Array.from({ length: numRows }, (_, index) => index);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {rowIndices.map((rowIndex) => (
          <tr key={rowIndex}>
            {data.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;

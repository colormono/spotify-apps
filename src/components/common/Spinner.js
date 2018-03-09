import React from 'react';
import MDSpinner from 'react-md-spinner';

const Spinner = (props) => {
  const { size, singleColor } = props;

  return (
    <div className="spinner">
      <MDSpinner
        size={size}
        singleColor={singleColor}
      />
    </div>
  );
}

export { Spinner };

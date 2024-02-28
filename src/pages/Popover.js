import React, { useState } from 'react';

function Popover({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onMouseEnter={togglePopover} onMouseLeave={togglePopover}>
        {children}
      </div>
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Popover;

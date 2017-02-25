
// Presentation Link Component
// The 'FilterLink' container connects this component to Redux store
// The 'if' conditional checks whether or not the prop 'active' is T/F
// Then either renders it as plain text or as a <a> link
// NOTE: 'children' is a default prop that refers to whatever is nested within (aka this.props.children)

import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}  
    </a>

  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
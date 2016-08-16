import React, { PropTypes } from 'react';

const Sector = props => {
  const { code, ...rest } = props;

  return (
    <div {...rest}>
      {props.children}
    </div>
  );
};
Sector.displayName = 'Sector';
Sector.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Sector;
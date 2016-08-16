import React, { PropTypes } from 'react';

const Sector = props => {
  const {
    code,
    tagName,
    ...rest
  } = props;

  return (
    <props.tagName {...rest}>
      {props.children}
    </props.tagName>
  );
};
Sector.displayName = 'Sector';
Sector.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
Sector.defaultProps = {
  tagName: 'div'
};

export default Sector;
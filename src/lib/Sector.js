import React, { PropTypes } from 'react';

const Sector = props => {
  const {
    code, // eslint-disable-line no-unused-vars
    tagName, // eslint-disable-line no-unused-vars
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
  tagName: PropTypes.string,
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
Sector.defaultProps = {
  tagName: 'div'
};

export default Sector;
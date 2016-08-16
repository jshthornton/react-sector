import React, { PropTypes } from 'react';
import _ from 'lodash';

const findSectorToRender = (sectors, code) => {
  return _.find(sectors, sector => sector.props.code === code);
};

const SectorManager = props => {
  const sector = findSectorToRender(props.sectors, props.code);

  return sector;
};
SectorManager.displayName = 'SectorManager';
SectorManager.propTypes = {
  code: PropTypes.string.isRequired,
  sectors: PropTypes.node.isRequired
};

export default SectorManager;
import React, { PropTypes } from 'react';
import _ from 'lodash';

const findSectorToRender = (sectors, id) => {
  return _.find(sectors, sector => sector.props.id === id);
};

const SectorManager = props => {
  const sector = findSectorToRender(props.sectors, props.id);

  return sector;
};
SectorManager.displayName = 'SectorManager';
SectorManager.propTypes = {
  sectors: PropTypes.node.isRequired
};

export default SectorManager;
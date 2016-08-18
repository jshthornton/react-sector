import { PropTypes } from 'react';
import { Children } from 'react';

const findSectorToRender = (sectors, code) => {
  let foundSector;

  Children.forEach(sectors, sector => {
    if(sector.props.code === code) {
      foundSector = sector;
    }
  });

  return foundSector;
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
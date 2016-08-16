import SectorManager from '../SectorManager';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('<SectorManager/>', function() {
  it('exports a default component', function() {
    expect(SectorManager).to.be.a('function');
  });

  it('renders the sector at with matching id', function() {
    const sector = (
      <div id="test"/>
    );

    const wrapper = shallow(
      <SectorManager id="test" sectors={[sector]}/>
    );

    expect(wrapper.contains(sector)).to.equal(true);
  });
});
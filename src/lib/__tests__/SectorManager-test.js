import SectorManager from '../SectorManager';
import Sector from '../Sector';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('<SectorManager/>', function() {
  it('exports a default component', function() {
    expect(SectorManager).to.be.a('function');
  });

  it('renders the sector at with matching code (element)', function() {
    const sector = (
      <Sector code="test">
        <div id="foo"/>
      </Sector>
    );

    const wrapper = shallow(
      <SectorManager code="test" sectors={[sector]}/>
    );

    expect(wrapper.contains(<div id="foo"/>)).to.equal(true);
  });

  it('renders the sector at with matching code (text)', function() {
    const sector = (
      <Sector code="test">
        foo
      </Sector>
    );

    const wrapper = shallow(
      <SectorManager code="test" sectors={[sector]}/>
    );

    expect(wrapper.childAt(0).text()).to.equal('foo');
  });
});
import Sector from '../Sector';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('<Sector/>', function() {
  it('exports a default component', function() {
    expect(Sector).to.be.a('function');
  });

  it('does not apply the `code` prop', function() {
    const wrapper = shallow(
      <Sector code="test">
        <div id="foo"/>
      </Sector>
    );

    expect(wrapper.prop('code')).to.equal(void 0);
  });

  it('does not apply the `tagName` prop', function() {
    const wrapper = shallow(
      <Sector code="test">
        <div id="foo"/>
      </Sector>
    );

    expect(wrapper.prop('tagName')).to.equal(void 0);
  });

  it('can alter the tagName via `tagName` prop', function() {
    const wrapper = shallow(
      <Sector tagName="span" code="test">
        <div id="foo"/>
      </Sector>
    );

    expect(wrapper.is('span')).to.equal(true);
  });
});
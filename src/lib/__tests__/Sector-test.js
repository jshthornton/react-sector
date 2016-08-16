import Component from '../Sector';
import { expect } from 'chai';

describe('<Sector/>', function() {
  it('exports a default component', function() {
    expect(Component).to.be.a('function');
  });
});
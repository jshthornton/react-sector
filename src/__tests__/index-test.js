import * as modules from '../index';
import { expect } from 'chai';

describe('index', function() {
  it('export Sector and SectorManager', function() {
    expect(modules.Sector).to.not.be.undefined;
    expect(modules.SectorManager).to.not.be.undefined;
  });
});
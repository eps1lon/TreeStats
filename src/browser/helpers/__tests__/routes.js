import { expect } from 'chai';

import { pathnameToAppParams } from '../routes';

describe('routes', () => {
  describe('TreeStatsApp', () => {
    it('should at least have empty params', () => {
      expect(pathnameToAppParams(''))
        .to.be.empty;

      expect(pathnameToAppParams('/asd'))
        .to.be.empty;
    });

    it('should match :league', () => {
      expect(pathnameToAppParams('/league/Hardcore'))
        .to.have.property('league', 'Hardcore');

      expect(pathnameToAppParams('/league/SSF Legacy'))
        .to.have.property('league', 'SSF Legacy');
    });
  });
});

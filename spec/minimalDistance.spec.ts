import { minDistance } from '../app';
import { expect } from 'chai';
import 'mocha';

describe('[minDistance] List of numbers', () => {

  describe('with positive numbers only', () => {
    it('should return minimal distance', () => {
      const inputs = [8, 5, 10]
      const result = minDistance(inputs);
      expect(result).to.equal(2);
    });
  });

  describe('with positive and negative numbers', () => {
    it('should return minimal distance', () => {
      const inputs = [5, 4, -9, 6, -10, -1, 8]
      const result = minDistance(inputs);
      expect(result).to.equal(1);
    });
  });

  describe('with another positive and negative numbers', () => {
    it('should return minimal distance', () => {
      const inputs = [8, 2, 3, -2]
      const result = minDistance(inputs);
      expect(result).to.equal(1);
    });
  });

  describe('with empty list of numbers', () => {
    it('should return minimal distance', () => {
      const inputs = []
      const result = minDistance(inputs);
      expect(result).to.equal(NaN);
    });
  });

  describe('with undefined list of numbers', () => {
    it('should return minimal distance', () => {
      const result = minDistance();
      expect(result).to.equal(NaN);
    });
  });

  describe('with same numbers', () => {
    it('should return 0', () => {
      const inputs = [8, 8, 8, 8]
      const result = minDistance(inputs);
      expect(result).to.equal(0);
    });
  });

  describe('with 2 same numbers', () => {
    it('should return 0', () => {
      const inputs = [8, 3, 4, 8]
      const result = minDistance(inputs);
      expect(result).to.equal(1);
    });
  });
});
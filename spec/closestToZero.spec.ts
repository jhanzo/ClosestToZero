import { closestToZero } from '../app';
import { expect } from 'chai';
import 'mocha';

describe('List of numbers', () => {

  describe('with positive numbers only', () => {
    it('should return closest value to zero', () => {
      const inputs = [8, 5, 10]
      const result = closestToZero(inputs);
      expect(result).to.equal(5);
    });
  });

  describe('with positive and negative numbers', () => {
    it('should return closest value to zero', () => {
      const inputs = [5, 4, -9, 6, -10, -1, 8]
      const result = closestToZero(inputs);
      expect(result).to.equal(-1);
    });
  });

  describe('with another positive and negative numbers', () => {
    it('should return closest value to zero', () => {
      const inputs = [8, 2, 3, -2]
      const result = closestToZero(inputs);
      expect(result).to.equal(2);
    });
  });

  describe('with empty list of numbers', () => {
    it('should return zero', () => {
      const inputs = []
      const result = closestToZero(inputs);
      expect(result).to.equal(0);
    });
  });

  describe('with undefined list of numbers', () => {
    it('should return zero', () => {
      const result = closestToZero();
      expect(result).to.equal(0);
    });
  });
});
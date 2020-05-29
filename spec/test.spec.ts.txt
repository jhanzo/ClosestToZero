import { minDistance } from '../app';
import { expect } from 'chai';
import 'mocha';

describe('List of numbers', () => {

  describe('with positive numbers only', () => {
    it('should return absolute value of the smallest gap between two numbers', () => {
      const inputs = [8, 5, 10, 19, 1]
      const result = minDistance(inputs);
      expect(result).to.equal(2);
    });
  });

  describe('with positive and negative numbers', () => {
    it('should return absolute value of smallest gap between two numbers', () => {
      const inputs = [8, 2, -1, 17, 12]
      const result = minDistance(inputs);
      expect(result).to.equal(3);
    });
  });

  describe('with negative numbers only', () => {
    it('should return absolute value of smallest gap between two numbers', () => {
      const inputs = [-5, -7, -10, -2]
      const result = minDistance(inputs);
      expect(result).to.equal(2);
    });
  });

  describe('with empty list of numbers', () => {
    it('should return zero', () => {
      const inputs = []
      const result = minDistance(inputs);
      expect(result).to.equal(0);
    });
  });

  describe('with undefined list of numbers', () => {
    it('should return zero', () => {
      const result = minDistance();
      expect(result).to.equal(0);
    });
  });
});
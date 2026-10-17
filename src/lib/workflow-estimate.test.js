import { test, expect } from 'bun:test';
import { estimateWorkflow, formatEstimateMoney } from './workflow-estimate';

test('annual workload uses 52 weeks, not measured client savings', () => {
  expect(estimateWorkflow(12, 8, 50).annualHours).toBe(4992);
  expect(estimateWorkflow(12, 8, 50).annualCost).toBe(249600);
});

test('capacity estimate uses the disclosed hypothetical 65% share', () => {
  expect(estimateWorkflow(12, 8, 50).capacityValue).toBe(162240);
});

test('role equivalent uses the disclosed 1800 working hours', () => {
  expect(estimateWorkflow(12, 8, 50).roleEquivalent).toBeCloseTo(1.8026666667);
});

test('small costs are not rounded to zero thousands', () => {
  expect(formatEstimateMoney(1040)).toBe('$1,040');
});
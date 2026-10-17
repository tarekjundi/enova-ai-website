export const ESTIMATE_ASSUMPTIONS = {
  weeksPerYear: 52,
  hoursPerRole: 1800,
  automationShare: 0.65,
} as const;

export function estimateWorkflow(team: number, weeklyHours: number, hourlyCost: number) {
  const annualHours = team * weeklyHours * ESTIMATE_ASSUMPTIONS.weeksPerYear;
  const annualCost = annualHours * hourlyCost;
  const capacityValue = annualCost * ESTIMATE_ASSUMPTIONS.automationShare;
  const roleEquivalent = annualHours * ESTIMATE_ASSUMPTIONS.automationShare / ESTIMATE_ASSUMPTIONS.hoursPerRole;
  return { annualHours, annualCost, capacityValue, roleEquivalent };
}

export function formatEstimateMoney(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(value);
}
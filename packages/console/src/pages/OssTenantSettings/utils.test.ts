import { shouldShowOssTenantMembersTab } from './utils';

describe('shouldShowOssTenantMembersTab', () => {
  it('returns false for OSS', () => {
    expect(shouldShowOssTenantMembersTab({ isCloud: false })).toBe(false);
  });

  it('returns false for cloud', () => {
    expect(shouldShowOssTenantMembersTab({ isCloud: true })).toBe(false);
  });
});

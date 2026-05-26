type OssTenantMembersAvailabilityOptions = {
  readonly isCloud: boolean;
};

export const shouldShowOssTenantMembersTab = (options: OssTenantMembersAvailabilityOptions) => {
  void options;

  return false;
};

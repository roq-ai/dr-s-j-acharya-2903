interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Doctor'],
  customerRoles: ['Patient'],
  tenantRoles: ['Doctor'],
  tenantName: 'Hospital',
  applicationName: 'Dr S J Acharya',
  addOns: ['chat', 'notifications', 'file'],
};

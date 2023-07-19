const mapping: Record<string, string> = {
  appointments: 'appointment',
  hospitals: 'hospital',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

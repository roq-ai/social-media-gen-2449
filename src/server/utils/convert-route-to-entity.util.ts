const mapping: Record<string, string> = {
  campaigns: 'campaign',
  organizations: 'organization',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

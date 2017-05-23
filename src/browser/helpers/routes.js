export const pathnameToAppParams = (pathname) => {
  const params = {};
  const match = pathname.match(/\/(league\/([^\/]+))?/);

  if (match) {
    if (match[2]) {
      params.league = decodeURI(match[2]);
    }
  }

  return params;
};

// are the only helpers rly only jsx expressions for components?
export const appPath = (league) => {
  let url = '/';

  if (league) {
    url += `league/${league.name}`;
  }

  return url;
};

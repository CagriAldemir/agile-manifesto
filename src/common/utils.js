import { companyName } from './consts';
import routing from './routing';

export const getCurrentPageNameKeyByPath = (currentPath) => {
  if (currentPath === '/') {
    return companyName;
  }

  const currentRoute = routing.find(
    (routingItem) => routingItem.path === currentPath
  );
  return currentRoute?.nameKey || companyName;
};

export const changeTheme = (themeName) => {
  document.documentElement.classList.add('color-theme-in-transition');
  document.documentElement.setAttribute('data-theme', themeName);
  setTimeout(function () {
    document.documentElement.classList.remove('color-theme-in-transition');
  }, 750);
};

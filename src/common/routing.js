import ContactUs from '../pages/contact-us';
import HomePage from '../pages/home-page';
import NotFound from '../pages/not-found';

const routing = [
  {
    nameKey: 'homePage',
    path: '/',
    Component: HomePage,
    showOnMenu: true,
  },
  {
    nameKey: 'contactUs',
    path: '/contact-us',
    Component: ContactUs,
    showOnMenu: true,
  },
  {
    nameKey: 'notFound',
    path: '/404',
    Component: NotFound,
    showOnMenu: false,
  },
];

export default routing;

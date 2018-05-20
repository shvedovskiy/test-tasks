import Loadable from 'react-loadable';

import Loading from '~/components/loading';


const Home = Loadable({
  loader: () => import('~/components/home'),
  loading: Loading,
  delay: 350,
  timeout: 7000
});
const News = Loadable({
  loader: () => import('~/components/news'),
  loading: Loading,
  delay: 350,
  timeout: 7000
});
const Gists = Loadable({
  loader: () => import('~/components/gists'),
  loading: Loading,
  delay: 350,
  timeout: 7000
});
const Counter = Loadable({
  loader: () => import('~/components/counter'),
  loading: Loading,
  delay: 350,
  timeout: 7000
});

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/g/',
    component: Gists
  },
  {
    path: '/counter',
    component: Counter
  }
];

export default routes;

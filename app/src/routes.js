import GetCommitById from "./components/GetCommitById";
import HomePage from "./components/HomePage";

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/app',
    element: <HomePage />
  },
  {
    path:'/repositories/:owner/:repo/commit/:oid',
    exact: true,
    element: <GetCommitById />,
  },
];

export default routes;
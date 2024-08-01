import DashboardLayout from "../layouts/DashboardLayout";
import CardSection from "../screens/cardSection";

export const routes = {
    dashboard: '/',
    home: '/home',
    error: '*',
  };
const PrivateRoutes=[ 
    {
        path: routes.dashboard,
        element: <DashboardLayout />,
      },
      {
        path: routes.home,
        element: <CardSection/>,
      },
]
export default PrivateRoutes
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Agents from "./pages/Agents";
import Properties from "./pages/Properties";
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import RequestPage from './pages/instructions/RequestPending';
import Requests from './pages/Requests';
import AddAgent from './pages/AddAgent';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Home Screen as the landing page, outside DefaultLayout */}
      <Route
        index
        element={
          <>
            <PageTitle title="Home | Mass Reporting App" />
            <Home />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <PageTitle title="Login | Mass Reporting App" />
            <LoginPage/>
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <PageTitle title="Signup | Mass Reporting App" />
            <SignUp/>
          </>
        }
      />
      <Route
        path="/requestpending"
        element={
          <>
            <PageTitle title="Request Pending | Mass Reporting App" />
            <RequestPage/>
          </>
        }
      />

      {/* Other pages inside DefaultLayout */}
      <Route
        path="/*"
        element={
          <DefaultLayout>
            <Routes>
              <Route
                path="dashboard"
                element={
                  <>
                    <PageTitle title="Dashboard | Mass Reporting App" />
                    <ECommerce />
                  </>
                }
              />
              <Route
                path="calendar"
                element={
                  <>
                    <PageTitle title="Calendar | Plan Your Tasks" />
                    <Calendar />
                  </>
                }
              />
              <Route
                path="profile"
                element={
                  <>
                    <PageTitle title="Profile | Manage Your Account" />
                    <Profile />
                  </>
                }
              />
              <Route
                path="agent"
                element={
                  <>
                    <PageTitle title="Agents | Collaborate with Experts" />
                    <Agents />
                  </>
                }
              />
              <Route
                path="properties"
                element={
                  <>
                    <PageTitle title="Properties | View and Manage Land" />
                    <Properties />
                  </>
                }
              />
              <Route
                path="requests"
                element={
                  <>
                    <PageTitle title="Requests | View and Manage Land" />
                    <Requests />
                  </>
                }
              />
              <Route
                path="addagent"
                element={
                  <>
                    <PageTitle title="Add Agent| View and Manage Land" />
                    <AddAgent />
                  </>
                }
              />
              <Route
                path="forms/form-elements"
                element={
                  <>
                    <PageTitle title="Form Elements | Create and Edit" />
                    <FormElements />
                  </>
                }
              />
              <Route
                path="forms/form-layout"
                element={
                  <>
                    <PageTitle title="Form Layout | Customize Forms" />
                    <FormLayout />
                  </>
                }
              />
              <Route
                path="tables"
                element={
                  <>
                    <PageTitle title="Tables | View and Analyze Data" />
                    <Tables />
                  </>
                }
              />
              <Route
                path="settings"
                element={
                  <>
                    <PageTitle title="Settings | Configure Your Preferences" />
                    <Settings />
                  </>
                }
              />
              <Route
                path="chart"
                element={
                  <>
                    <PageTitle title="Basic Chart | Visualize Data" />
                    <Chart />
                  </>
                }
              />
              <Route
                path="ui/alerts"
                element={
                  <>
                    <PageTitle title="Alerts | Notifications and Warnings" />
                    <Alerts />
                  </>
                }
              />
              <Route
                path="ui/buttons"
                element={
                  <>
                    <PageTitle title="Buttons | Interactive Elements" />
                    <Buttons />
                  </>
                }
              />
            </Routes>
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SigninForm from '@/_auth/forms/SigninForm';
import Admin from '@/components/shared/b';
import Machine_Dashboard from '@/_root/pages/Machine_Dashboard';
import Machine_Dashboard_Subdivision from '@/_root/pages/Machine_Dashboard_Subdivision';
import DashboardTotalAll from '@/_root/pages/Machine_DashboardTotalAll';
import DashboardTotal from '@/_root/pages/Machine_DashboardTotal';
import DashboardDefect from '@/_root/pages/Machine_DashboardDefect';
import DashboardOverdue from '@/_root/pages/Machine_DashboardOverdue';
import DashboardAlert from '@/_root/pages/Man_DashboardAlert';
import DashboardBoot from '@/_root/pages/Man_DashboardBoot';
import DashboardRa from '@/_root/pages/Man_DashboardRa';
import MachineAuth from '@/_root/pages/Machine';
import MachineNew from '@/_root/pages/MachineNew';
import Visitor from '@/_auth/forms/Visitor';
// import ManDashboard from '@/components/dashboard/ManDashboard';
import Man from './_auth/forms/Man';
import ManMain from '@/components/shared/ManMain';
import AlertForm from '@/components/shared/ManAlertForm';

// change this for header
import ManForm from '@/_auth/forms/ManForm';
import RaForm from '@/components/shared/ManRaForm';
import Test from '@/components/dashboard/TestCopy';
import './globals.css';

const App = () => {
  return (
    <main className="flex">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/b" element={<Admin />} />
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/Induction/:site" element={<Visitor />} />
          <Route path="/Induction/:bu/:site" element={<Visitor />} />
          //For SCCLK and others
          {/* <Route path="/:machine/:id" element={<Machine />} />
          <Route path="/Machine/:bu/:machine/:id" element={<MachineNew />} /> */}
          {/* <Route path="/ManDashboard" element={<ManDashboard />} /> */}
          <Route path="/Man/:man/:id" element={<Man />} />
          {/* Make this inactive */}
          <Route path="/Man/:bu/:man/:id" element={<Man />} />
          <Route path="/AlertForm/:alertNo" element={<AlertForm />} />
          <Route path="Man/:bu/AlertForm/:alertNo" element={<AlertForm />} />
          <Route path="/ManForm/:bu/:man/:id" element={<ManForm />} />
          <Route path="/Man/:bu/RaForm/:area" element={<RaForm />} />
          //Main page
          <Route path="/Man" element={<ManMain />} />
          <Route path="/Test" element={<Test />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* show all countries graph */}
          <Route path="/DashboardTotalAll" element={<DashboardTotalAll />} />
          <Route
            path="/Dashboard_Subdivision/:bu/:period"
            element={<Machine_Dashboard_Subdivision />}
          />
          <Route
            path="/Dashboard/:bu/:period"
            element={<Machine_Dashboard />}
          />
          <Route path="/DashboardAlert/:bu" element={<DashboardAlert />} />
          <Route path="/DashboardBoot/:bu" element={<DashboardBoot />} />
          <Route path="/DashboardRa/:bu" element={<DashboardRa />} />
          <Route path="/DashboardTotal/:bu" element={<DashboardTotal />} />
          <Route path="/DashboardDefect/:bu" element={<DashboardDefect />} />
          <Route path="/DashboardOverdue/:bu" element={<DashboardOverdue />} />
          <Route path="/:machine/:id" element={<MachineAuth />} />
          <Route path="/Machine/:bu/:machine/:id" element={<MachineNew />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

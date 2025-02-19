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
import DashboardTotalByOwner from '@/_root/pages/Machine_DashboardTotalByOwner';
// import DashboardAlert from '@/_root/pages/Man_DashboardAlert';
import Man_Dashboard from '@/_root/pages/Man_Dashboard';
import DashboardActivity from '@/_root/pages/Man_DashboardActivity';
import DashboardActivityEmail from '@/_root/pages/Man_DashboardActivityEmail';
import DashboardActivityMan from '@/_root/pages/Man_DashboardActivityMan';
import MachineAuth from '@/_root/pages/Machine';
import MachineNew from '@/_root/pages/MachineNew';
import Visitor from '@/_auth/forms/Visitor';
// import ManDashboard from '@/components/dashboard/ManDashboard';
import Man from './_auth/forms/Man';
import ManMain from '@/components/shared/ManMain';
import AlertForm from '@/components/shared/ManAlertForm';
import MeetingForm from '@/components/shared/ManMeetingForm';
import PraForm from '@/components/shared/ManPraForm';
import ToolboxForm from '@/components/shared/ManToolboxForm';

// change this for header
import ManForm from '@/_auth/forms/ManForm';
// import RaForm from '@/components/shared/ManRaForm';
import ManRestaurant from '@/components/dashboard/ManRestaurant';
import Test from '@/components/dashboard/TestCopy';
import MachineOwner from '@/components/dashboard/MachineOwner';
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
          {/* For alert */}
          <Route
            path="ManForm/:bu/AlertForm/:alertNo"
            element={<AlertForm />}
          />
          <Route
            path="ManForm/:bu/MeetingForm/:meetingNo"
            element={<MeetingForm />}
          />
          <Route path="ManForm/:bu/ToolboxForm" element={<ToolboxForm />} />
          <Route path="ManForm/:bu/PraForm" element={<PraForm />} />
          {/* For Ra and Boot */}
          <Route path="/ManForm/:bu/:man/:id" element={<ManForm />} />
          //By Owner
          <Route path="/MachineOwner/:bu/:owner" element={<MachineOwner />} />
          //Main page
          <Route
            path="/ManRestaurant/:restaurant"
            element={<ManRestaurant />}
          />
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
          <Route path="/DashboardMan/:bu" element={<Man_Dashboard />} />
          {/* <Route path="/DashboardAlert/:bu" element={<DashboardAlert />} /> */}
          <Route
            path="/DashboardActivity/:bu"
            element={<DashboardActivity />}
          />
          <Route
            path="/DashboardActivityEmail/:bu"
            element={<DashboardActivityEmail />}
          />
          <Route
            path="/DashboardActivityMan/:bu"
            element={<DashboardActivityMan />}
          />
          <Route path="/DashboardTotal/:bu" element={<DashboardTotal />} />
          <Route path="/DashboardDefect/:bu" element={<DashboardDefect />} />
          <Route
            path="/DashboardTotalByOwner/:bu"
            element={<DashboardTotalByOwner />}
          />
          <Route path="/:machine/:id" element={<MachineAuth />} />
          <Route path="/Machine/:bu/:machine/:id" element={<MachineNew />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

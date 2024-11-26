import { Routes, Route } from 'react-router-dom';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SigninForm from '@/_auth/forms/SigninForm';
import Admin from '@/components/shared/b';
import Machine_Dashboard from '@/_root/pages/Machine_Dashboard';
import Machine_Dashboard_Subdivision from '@/_root/pages/Machine_Dashboard_Subdivision';
import DashboardTotal from '@/_root/pages/Machine_DashboardTotal';
import DashboardAlert from '@/_root/pages/Man_DashboardAlert';
import MachineAuth from '@/_root/pages/Machine';
import MachineNew from '@/_root/pages/MachineNew';
import Visitor from '@/_auth/forms/Visitor';
import Method from '@/components/dashboard/Method';
import MachineDaily from '@/components/dashboard/MachineDaily';
import MachineMonthly from '@/components/dashboard/MachineMonthly';
import MachineDefectOpen from '@/components/dashboard/MachineDefectOpen';
import MachineDefectOpenPerson from '@/components/dashboard/MachineDefectOpenPerson';
import MachineDefectClose from '@/components/dashboard/MachineDefectClose';
// import Machine from './_auth/forms/Machine';
// import MachineNew from './_auth/forms/MachineNew';
import ManDashboard from '@/components/dashboard/ManDashboard';
import Man from './_auth/forms/Man';
import ManMain from '@/components/shared/ManMain';
import AlertForm from '@/components/shared/ManAlertForm';
import EquipmentQuarterly from '@/components/dashboard/EquipmentQuarterly';
import EquipmentMain from '@/components/shared/EquipmentMain';
import EquipmentTag from './_auth/forms/Equipment';
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
          //For SCCLK and others
          {/* <Route path="/:machine/:id" element={<Machine />} />
          <Route path="/Machine/:bu/:machine/:id" element={<MachineNew />} /> */}
          <Route path="/Method" element={<Method />} />
          <Route path="/MachineDaily" element={<MachineDaily />} />
          <Route path="/MachineMonthly" element={<MachineMonthly />} />
          <Route path="/EquipmentQuarterly" element={<EquipmentQuarterly />} />
          <Route path="/MachineDefectOpen" element={<MachineDefectOpen />} />
          <Route
            path="/MachineDefectOpenPerson"
            element={<MachineDefectOpenPerson />}
          />
          <Route path="/MachineDefectClose" element={<MachineDefectClose />} />
          {/* <Route path="/MachineOverdue" element={<MachineOverdue />} /> */}
          <Route path="/ManDashboard" element={<ManDashboard />} />
          <Route path="/Man/:man/:id" element={<Man />} />
          <Route path="/Man/:bu/:man/:id" element={<Man />} />
          <Route path="/AlertForm/:alertNo" element={<AlertForm />} />
          //Main page
          <Route path="/Man" element={<ManMain />} />
          <Route path="/EquipmentMain" element={<EquipmentMain />} />
          <Route path="/Machine/Equipment/:tag" element={<EquipmentTag />} />
          <Route path="/Test" element={<Test />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/Dashboard_Subdivision/:bu/:period"
            element={<Machine_Dashboard_Subdivision />}
          />
          <Route
            path="/Dashboard/:bu/:period"
            element={<Machine_Dashboard />}
          />
          <Route path="/DashboardAlert/:bu" element={<DashboardAlert />} />
          <Route path="/DashboardTotal/:bu" element={<DashboardTotal />} />
          <Route path="/:machine/:id" element={<MachineAuth />} />
          <Route path="/Machine/:bu/:machine/:id" element={<MachineNew />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

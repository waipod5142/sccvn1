import { Data as Toolbox, Item as ToolboxItem } from '@/lib/typeToolbox';
import { Data as Alert, Item as AlertItem } from '@/lib/typeAlert';
import { Data as Boot, Item as BootItem } from '@/lib/typeAlert';
import { Data as Ra, Item as RaItem } from '@/lib/typeAlert';
import { Data as Pra, Item as PraItem } from '@/lib/typePra';

export type Man = Toolbox | Pra | Alert | Boot | Ra;
export type ManItem = ToolboxItem | PraItem | AlertItem | BootItem | RaItem;

export type DetailTypes = 'Toolbox' | 'Alert' | 'Pra' | 'Induction';

export const isValidDetailType = (id: string): id is DetailTypes => {
  return ['Toolbox', 'Alert', 'Pra'].includes(id);
};

export interface ManProps {
  dataTr: Man[];
  item: string;
}

export const manItemLabels: { [key: string]: string } = {
  vnPra: 'Đánh giá rủi ro cá nhân / Personal Risk Assessment',
  vnAlert: 'Cảnh báo an toàn / Safety Alert',
  vnBoot: 'Danh sách kiểm tra hạng mục An toàn / BOOT ON THE GROUND CHECK LIST',
  vnRa: 'Danh sách kiểm tra đánh giá / Risk Assessmen Checklist',
  vnToolbox: 'Thảo luận an toàn / Toolbox Talk',
  vnPto: 'Quan sát công việc theo kế hoạch / Planned Task Observation',
};

export const manActivities = [
  { id: 'Alert' },
  { id: 'Boot' },
  { id: 'Ra' },
  { id: 'Toolbox' },
  { id: 'Pra' },
];

// Constances
// export const owners = [
//   'All owners',
//   'BMJC',
//   'Contractor',
//   'ECO',
//   'Hoàng Thạnh',
//   'INSEE',
//   'Quoc Vinh',
//   'Thai Duong',
//   'Thanh Hà',
//   'Thống Nhất',
//   'Van An',
//   'Viet Long',
// ];

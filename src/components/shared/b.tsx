import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-center text-2xl font-bold my-4">For B</h2>
      <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2 text-center">
              Resources
            </th>
            <th className="border border-gray-300 p-2 text-center">
              Table/Collection
            </th>
            <th className="border border-gray-300 p-2 text-center">Method</th>
            <th className="border border-gray-300 p-2 text-center">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={136}>
              All Countries
            </td>
            <td className="bg-rose-200 border border-gray-300 p-2" rowSpan={5}>
              Master data
            </td>
            <td className="border border-gray-300 p-2">many_delete</td>
            <td className="border border-gray-300 p-2">lifting_many_delete</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">sheet_post</td>
            <td className="border border-gray-300 p-2">lifting_sheet_post</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={8}>
              Dashboard by Plant
            </td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">vehicle_dash</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">extinguisher_dash</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">equipment_dash</td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2 text-rose-500">
              by Plant
            </td>
            <td className="border border-gray-300 p-2 text-rose-500">
              foamTr_all
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">
              toolbox (3 below same as above)
            </td>
            <td className="border border-gray-300 p-2">man_dash</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">pra</td>
            <td className="border border-gray-300 p-2">man_all</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">alert</td>
            <td className="border border-gray-300 p-2">cableTr_all</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">alert Graph</td>
            <td className="border border-gray-300 p-2">harnessTr_all</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              daily-owner <br /> monthly-area <br /> quarterly-department
            </td>
            <td className="border border-gray-300 p-2 text-rose-500">
              by Subdivision
            </td>
            <td className="border border-gray-300 p-2 text-rose-500">
              foamTr_get
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Query asset by BU</td>
            <td className="border border-gray-300 p-2">cableTr_one</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">
              New query for Total by bu
            </td>
            <td className="border border-gray-300 p-2 text-rose-500">
              cctvTr_all
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">cctvTr_one</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2">cctvTr_get</td>
          </tr>

          <tr className="border border-gray-300">
            <td className="bg-rose-200 border border-gray-300 p-2" rowSpan={8}>
              All transaction to view Map and Graph
            </td>
            <td className="border border-gray-300 p-2 text-blue-500">
              daily/monthly/quaterly
            </td>
            <td className="border border-gray-300 p-2 text-blue-500">
              vehicle_all
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">
              toolbox (3 below same as above)
            </td>
            <td className="border border-gray-300 p-2">extinguisher_all</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">pra</td>
            <td className="border border-gray-300 p-2">equipment_all</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">alert</td>
            <td className="border border-gray-300 p-2">alertTr_get</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              CRUD - Single form
            </td>
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">GET</td>
            <td className="border border-gray-300 p-2 text-blue-500">
              vehicleTr_one
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">POST</td>
            <td className="border border-gray-300 p-2 text-blue-500">
              rescueTr_post
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">DELETE</td>
            <td className="border border-gray-300 p-2 text-blue-500">
              rescueTr_delete
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              Total Machinery
            </td>
            <td className="border border-gray-300 p-2">
              get (change when add new BU only)
            </td>
            <td className="border border-gray-300 p-2">alertTr_one</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Defect summary</td>
            <td className="border border-gray-300 p-2 text-rose-500">
              foamTr_one
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">Overdue summary</td>
            <td className="border border-gray-300 p-2 text-rose-500">
              foamTr_alert
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="bg-rose-200 border border-gray-300 p-2" rowSpan={3}>
              vehicle
            </td>
            <td className="border border-gray-300 p-2">post</td>
            <td className="border border-gray-300 p-2">
              https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicle_sheet_post
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">delete</td>
            <td className="border border-gray-300 p-2">
              https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicle_many_delete
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicle_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicle_get
              </a>
            </td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={6}>
              forkliftTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_one?id=2440-I11-4M4"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_one?id=2440-I11-4M4
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get alert</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_alert"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/forkliftTr_alert
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              mobileTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/mobileTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/mobileTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/mobileTr_one?id=JTF21867"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/mobileTr_one?id=JTF21867
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/mobileTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/mobileTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              vehicleTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicleTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicleTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicleTr_one?id=T01"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicleTr_one?id=T01
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicleTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicleTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="bg-rose-200 border border-gray-300 p-2" rowSpan={3}>
              equipment
            </td>
            <td className="border border-gray-300 p-2">post</td>
            <td className="border border-gray-300 p-2">
              https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/equipment_sheet_post
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">delete</td>
            <td className="border border-gray-300 p-2">
              https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/equipment_many_delete
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/equipment_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/equipment_get
              </a>
            </td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              harnessTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/harnessTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/harnessTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/harnessTr_one?id=MM-DAT-82989-051"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/harnessTr_one?id=MM-DAT-82989-051
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/harnessTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/harnessTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              portableTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/portableTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/portableTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/portableTr_one?id=MM-MOD-LADDER-W1"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/portableTr_one?id=MM-MOD-LADDER-W1
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/portableTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/portableTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              lifelineTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifelineTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifelineTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifelineTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifelineTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifelineTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifelineTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              liferingTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liferingTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liferingTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liferingTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liferingTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liferingTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liferingTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              lifevestTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifevestTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifevestTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifevestTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifevestTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifevestTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lifevestTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              weldingTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/weldingTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/weldingTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/weldingTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/weldingTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/weldingTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/weldingTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              cableTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicle_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/vehicle_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cableTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cableTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cableTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cableTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              fanTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/fanTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/fanTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/fanTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/fanTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/fanTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/fanTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              lightTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lightTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lightTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lightTr_one?id=426974-023"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lightTr_one?id=426974-023
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lightTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/lightTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              cctvTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_one?id=HONC-CCTV-CCTV-SE-01"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_one?id=HONC-CCTV-CCTV-SE-01
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="bg-rose-200 border border-gray-300 p-2" rowSpan={3}>
              man
            </td>
            <td className="border border-gray-300 p-2">post</td>
            <td className="border border-gray-300 p-2">
              https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/man_sheet_post
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">delete</td>
            <td className="border border-gray-300 p-2">
              https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/man_many_delete
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/man_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/man_get
              </a>
            </td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              alertTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/alertTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/alertTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/alertTr_one?id=20002562"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/alertTr_one?id=20002562
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_one"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/cctvTr_one
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              toolboxTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_one?id=20002562"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_one?id=20002562
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              PRA (Personal Risk Assessment)
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/praTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/praTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/praTr_one?id=20002562"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/praTr_one?id=20002562
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/praTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/praTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>

          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              visitorTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/visitorTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/visitorTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/visitorTr_one?id=20002562"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/visitorTr_one?id=20002562
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/visitorTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/visitorTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2" rowSpan={5}>
              photoTr
            </td>
            <td className="border border-gray-300 p-2">get</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/photoTr_get"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/photoTr_get
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get one</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/photoTr_one?id=20002562"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/photoTr_one?id=20002562
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">get all</td>
            <td className="border border-gray-300 p-2">
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/photoTr_all"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/photoTr_all
              </a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2">
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              ></a>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 p-2">backup</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;

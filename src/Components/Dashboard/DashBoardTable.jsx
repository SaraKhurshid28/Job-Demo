import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "PAGE NAME",
    dataIndex: "pageName",
    key: "pageName",
  },
  {
    title: "VISITORS",
    dataIndex: "visitors",
    key: "visitors",
  },
  {
    title: "UNIQUE USERS",
    dataIndex: "uniUser",
    key: "uniUser",
  },
  {
    title: "BOUNCE RATE",
    dataIndex: "bRate",
    key: "bRate",
  },
];
const data = [
  {
    key: "1",
    pageName: "/argon/",
    visitors: "4,569",
    uniUser: 340,
    bRate: "46.43%",
  },
  {
    key: "2",
    pageName: "/argon/index.html",
    visitors: "4,756",
    uniUser: 456,
    bRate: "45%",
  },
  {
    key: "3",
    pageName: "/argon/charts.html",
    visitors: "2000",
    uniUser: 148,
    bRate: "28%",
  },
  {
    key: "4",
    pageName: "/argon/tables.html",
    visitors: "2,050",
    uniUser: 147,
    bRate: "50.87%",
  },
  {
    key: "5",
    pageName: "/argon/tables.html",
    visitors: "1795",
    uniUser: 179,
    bRate: "45.58%",
  },
];

const DashboardTable = () => {
  return (
    <div style={{ height: "300px", overflow: "scroll" }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ width: "100%" }}
      />
    </div>
  );
};
export default DashboardTable;

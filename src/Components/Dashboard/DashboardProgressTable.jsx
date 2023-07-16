import React from "react";
import { Table } from "antd";
import { Progress } from "antd";
const columns = [
  {
    title: "REFERRAL",
    dataIndex: "ref",
    key: "ref",
  },
  {
    title: "VISITORS",
    dataIndex: "visitors",
    key: "visitors",
  },
  {
    dataIndex: "progress",
    key: "progress",
  },
];
const data = [
  {
    key: "1",
    ref: "Facebook",
    visitors: "4,569",
    progress: <Progress percent={50} size={"small"} showInfo={false} />,
  },
  {
    key: "2",
    ref: "Facebook",
    visitors: "4,756",
    progress: <Progress percent={80} size={"small"} />,
  },
  {
    key: "3",
    ref: "Google",
    visitors: "2000",
    progress: <Progress percent={45} size={"small"} />,
  },
  {
    key: "4",
    ref: "Twittwe",
    visitors: "2,050",
    progress: <Progress percent={70} size={"small"} />,
  },
  {
    key: "5",
    ref: "instragram",
    visitors: "1795",
    progress: <Progress percent={20} size={"small"} />,
  },
];

const DashboardProgressTable = () => {
  return (
    <>
      <div style={{ height: "300px", overflow: "scroll" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default DashboardProgressTable;

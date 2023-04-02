import { Dropdown } from "flowbite-react";

export function SendNotification() {
  return (
    <Dropdown label='Send Notification' style={{ color: "#FFFFFF", backgroundColor: "#19A69C" }}>
      <Dropdown.Item>Thư mời hội đồng</Dropdown.Item>
      <Dropdown.Item>Chốt lịch duyệt proposal</Dropdown.Item>
      <Dropdown.Item>Thư mời buổi báo cáo</Dropdown.Item>
      <Dropdown.Item>Thư mời chia sẻ kiến thức</Dropdown.Item>
      <Dropdown.Item>Thông báo đổi lịch</Dropdown.Item>
      <Dropdown.Item>Thông báo đổi địa điểm</Dropdown.Item>
      <Dropdown.Item>Bổ sung tài liệu</Dropdown.Item>
      <Dropdown.Item>Create new templates</Dropdown.Item>
    </Dropdown>
  );
}

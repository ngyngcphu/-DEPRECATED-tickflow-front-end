import { Dropdown } from "flowbite-react";
import { Notification } from "./modals/Notification";

export function SendNotification() {
  return (
    <Dropdown label='Send Notification' style={{ color: "#FFFFFF", backgroundColor: "#19A69C" }}>
      {Notification.map((noti, index) => (
        <Dropdown.Item key={index}>{noti}</Dropdown.Item>
      ))}
    </Dropdown>
  );
}

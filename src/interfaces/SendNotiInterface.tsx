export interface SendNotiInterface {
  subject: string;
  sender: Array<string>;
  receiver: Array<string>;
  CC: Array<string>;
  BCC: Array<string>;
  timeSchedule: string;
  dateSchedule: string;
  link: string;
}

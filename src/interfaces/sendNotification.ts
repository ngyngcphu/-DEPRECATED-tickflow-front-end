import { Dispatch, SetStateAction } from 'react';

export interface SendNotification {
  show: boolean;
  temp: Array<string>;
  setTemp: Dispatch<SetStateAction<Array<string>>>;
}

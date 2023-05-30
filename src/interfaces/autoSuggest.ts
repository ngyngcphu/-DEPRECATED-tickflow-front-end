import { Dispatch, SetStateAction } from 'react';

export interface AutoSuggestNewProject {
  id: string;
  setProjectData: Dispatch<SetStateAction<ProjectAdd>>;
  temp: Array<string>;
  setTemp: Dispatch<SetStateAction<Array<string>>>;
}

export interface AutoSuggestSendNoti {
  id: string;
  setNotiData: Dispatch<SetStateAction<SendNoti>>;
  temp: Array<string>;
  setTemp: Dispatch<SetStateAction<Array<string>>>;
}

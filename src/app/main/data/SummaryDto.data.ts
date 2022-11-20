import { User } from "../model/user.model";

export interface SummaryData {
  uploadImage: string;
  formInfo: FormInfos;
  selectUser: User;
}

interface FormInfos {
  days?: number;
  date?: string;
  degree?: string;
  source?: string;
}

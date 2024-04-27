export interface IMail {
  id: string;
  sender: ISender;
  subject: string;
  message: string;
  date: Date;
}

export interface ISender {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  signature?: string | null;
}

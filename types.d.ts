import { ReactNode } from "react";

type IDropdown = {
  key: string;
  value: string;
};
type IDashboardProps = {
  buttonname: string;
  dropdown: IDropdown[];
  data: string;
  setData: any;
};
type IToken = {
  accessToken: string;
  serializedcookie: string;
};

type ErrorResp = {
  error: string;
};

interface IAuthContext extends IToken {
  setaccessToken: any;
  setrefreshToken: any;
}

interface IChildren {
  children: ReactNode;
}

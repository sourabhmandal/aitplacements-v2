export const BACKEND_ROUTES = {
  LOGIN: process.env.NEXT_PUBLIC_APP + "/api/loginapi",
  REFRESH: process.env.NEXT_PUBLIC_APP + "/api/refreshapi",
  REGISTER: process.env.NEXT_PUBLIC_APP + "/api/registerapi",
  LOGOUT: process.env.NEXT_PUBLIC_APP + "/api/logoutapi",
  VERIFY: process.env.NEXT_PUBLIC_APP + "/api/verifyapi",
  GET_USER: process.env.NEXT_PUBLIC_APP + "/api/user/getuser",
};

export const FRONTEND_ROUTES = {
  LOGIN: process.env.NEXT_PUBLIC_APP + "/login",
  DASHBOARD: process.env.NEXT_PUBLIC_APP + "/dashboard",
  REGISTER: process.env.NEXT_PUBLIC_APP + "/register",
  VERIFY: process.env.NEXT_PUBLIC_APP + "/verify",
};

export const PUBLIC_API = [
  BACKEND_ROUTES.LOGIN,
  BACKEND_ROUTES.REGISTER,
  BACKEND_ROUTES.VERIFY,
];
export const PUBLIC_PAGES = [
  FRONTEND_ROUTES.LOGIN,
  FRONTEND_ROUTES.REGISTER,
  FRONTEND_ROUTES.VERIFY,
];

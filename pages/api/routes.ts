export const BACKEND_ROUTES = {
  LOGIN: process.env.NEXT_PUBLIC_APP + "/api/loginapi",
  REFRESH: process.env.NEXT_PUBLIC_APP + "/api/refreshapi",
  REGISTER: process.env.NEXT_PUBLIC_APP + "/api/registerapi",
};

export const FRONTEND_ROUTES = {
  LOGIN: process.env.NEXT_PUBLIC_APP + "/login",
  DASHBOARD: process.env.NEXT_PUBLIC_APP + "/dashboard",
  REGISTER: process.env.NEXT_PUBLIC_APP + "/register",
};

export const PUBLIC_API = [BACKEND_ROUTES.LOGIN, BACKEND_ROUTES.REGISTER];
export const PUBLIC_PAGES = [FRONTEND_ROUTES.LOGIN, FRONTEND_ROUTES.REGISTER];

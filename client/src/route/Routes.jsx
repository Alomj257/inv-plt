/* eslint-disable react-refresh/only-export-components */
import AdminLayout from "../pages/admin/adminLayout";
import Dashboard from "../pages/admin/dashboard";
import CreateMamber from "../pages/admin/members/createMamber";
import Companies from "../pages/admin/companies";
import NewCompany from "../pages/admin/companies/newCompany";
import CustomerLayout from "../pages/customer/customerLayout";
import Portfolio from "../pages/customer/portfolio";
import AboutDeal from "../pages/customer/portfolio/aboutDeal";
import Login from "../common/login";
import Register from "../common/register";
import Profile from "../common/profile";

export const routes = [
  { path: "/login",
    element: <Login role="admin" />,
    needsAuth: false,
  },
  { path: "/",
    element: <Register role="admin" />,
    needsAuth: false,
  },
  {
    path: "/admin",
    element: <AdminLayout role="admin" />,
    needsAuth: true,
    children:[
      {
        path: "member",
        element: <Dashboard role="admin" />,
        needsAuth: true,
      },
      {
        path: "member/personal-add",
        element: <CreateMamber role="admin" />,
        needsAuth: true,
      },
      {
        path: "member/personal-details",
        element: <CreateMamber role="admin" />,
        needsAuth: true,
      },
      {
        path: "companies",
        element: <Companies role="admin" />,
        needsAuth: true,
      },
      {
        path: "companies/new-company",
        element: <NewCompany role="admin" />,
        needsAuth: true,
      },
      {
        path:"member/personal-details/about",
        element:<AboutDeal/>,
        needsAuth:true,
       },
      {
        path:"profile",
        element:<Profile/>,
        needsAuth:true,
       }
    ]
  },
  {
    path:"/customer",
    element:<CustomerLayout/>,
    needsAuth:true,
    children:[
     {
      path:"overview",
      element:<Portfolio/>,
      needsAuth:true,
     },
     {
      path:"overview/about",
      element:<AboutDeal/>,
      needsAuth:true,
     },
     {
      path:"profile",
      element:<Profile/>,
      needsAuth:true,
     }
    ]
  }
];

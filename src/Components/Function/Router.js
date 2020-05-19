import React from "react";
import Index from "../View/Index";
import IGDownloader from "../View/IGDownloader";
import { Redirect } from "react-router-dom";
const routes = [
  {
    exact: true,
    path: "/",
    component: Index,
  },
  {
    exact: true,
    path: "/ig-dl",
    component: IGDownloader,
  },
  //   {
  //     path: "/m",
  //     component: Dashboard,
  //     breadcrumbName: "1",
  //     routes: [
  //       {
  //         path: "/m/dashboard",
  //         component: Home,
  //         breadcrumbName: "Dashboard",
  //       },
  //   {
  //     path: "/m/boards",
  //     component: Boards,
  //     breadcrumbName: "Team Boards",
  //     routes: [
  //       {
  //         path: "/m/boards/all",
  //         component: TeamBoards,
  //         breadcrumbName: "All",
  //         exact: true,
  //       },
  //       {
  //         path: "/m/boards/:board_id",
  //         component: ViewBoard,
  //         breadcrumbName: null,
  //       },
  //       {
  //         path: "*",
  //         render: () => <Redirect to={"/m/boards/all"} />,
  //       },
  //     ],
  //   },

  //       {
  //         path: "*",
  //         render: () => <Redirect to={"/m/dashboard"} />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/m",
  //     render: () => <Redirect to={"/m/dashboard"} />,
  //   },
  {
    path: "*",
    render: () => <Redirect to={"/"} />,
  },

  //   {
  //     path: "/electronics",
  //     component: <div>123</div>,
  //     breadcrumbName: "Electronics",
  //     routes: [
  //       {
  //         path: "/electronics/mobile",
  //         component: <div>123</div>,
  //         breadcrumbName: "Mobile Phone"
  //       },
  //       {
  //         path: "/electronics/desktop",
  //         component: <div>123</div>,
  //         breadcrumbName: "Desktop PC"
  //       },
  //       {
  //         path: "/electronics/laptop",
  //         component: <div>123</div>,
  //         breadcrumbName: "Laptop"
  //       }
  //     ]
  //   }
];

export default routes;

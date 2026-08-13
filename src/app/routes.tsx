import { AppRoute } from "@/app/routesTypes";
import { MainLayout } from "@/components/layout";
import { AboutAppPage, AboutDeveloper, ErrorPage, HomePage, MeetingsPage, TeachersPage } from "@/pages";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

export const routes: AppRoute[] = [
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'home',
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
        handle: {
          isInMenu: true,
          title: 'Home',
          menuId: 'home',
          breadcrumbs: true,
        }
      },
      {
        path: 'teachers',
        id: 'teachers',
        element: (
          <Suspense>
            <TeachersPage />
          </Suspense>
        ),
        handle: {
          isInMenu: true,
          title: 'Teachers',
          menuId: 'teachers',
          breadcrumbs: true,
        }
      },
      {
        path: 'meetings',
        id: 'meetings',
        element: (
          <Suspense>
            <MeetingsPage />
          </Suspense>
        ),
        handle: {
          isInMenu: true,
          title: 'Meetings',
          menuId: 'meetings',
          breadcrumbs: true,
        }
      },
      {
        path: 'about-app',
        id: 'about-app',
        element: (
          <Suspense>
            <AboutAppPage />
          </Suspense>
        ),
        handle: {
          isInMenu: true,
          title: 'About-app',
          menuId: 'about-app',
          breadcrumbs: true,
        }
      },
      {
        path: 'about-developer',
        id: 'about-developer',
        element: (
          <Suspense>
            <AboutDeveloper />
          </Suspense>
        ),
        handle: {
          isInMenu: true,
          title: 'About-developer',
          menuId: 'about-developer',
          breadcrumbs: true,
        }
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router
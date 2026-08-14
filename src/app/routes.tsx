import { AppRoute } from "@/app/routesTypes";
import { MainLayout } from "@/components/layout";
import {
  LazyHomePage,
  LazyMeetingsPage,
  LazyAboutApp,
  LazyAboutDeveloper,
  LazyPage404,
  LazyErrorPage,
  LazyTeachersPage
} from "@/app/lazy-pages";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

export const routes: AppRoute[] = [
  {
    path: '/',
    Component: MainLayout,
    errorElement: <LazyErrorPage />,
    children: [
      {
        index: true,
        id: 'home',
        element: (
          <Suspense>
            <LazyHomePage />
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
            <LazyTeachersPage />
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
            <LazyMeetingsPage />
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
            <LazyAboutApp />
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
            <LazyAboutDeveloper />
          </Suspense>
        ),
        handle: {
          isInMenu: true,
          title: 'About-developer',
          menuId: 'about-developer',
          breadcrumbs: true,
        }
      },
      {
        path: '*',
        id: 'page-404',
        element: (
          <Suspense>
            <LazyPage404 />
          </Suspense>
        ),
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router
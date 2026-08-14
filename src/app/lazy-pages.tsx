import { lazy } from "react";

export const LazyHomePage = lazy(() => import('@/pages/home/HomePage'));
export const LazyMeetingsPage = lazy(() => import('@/pages/meetings/MeetingsPage'));
export const LazyTeachersPage = lazy(() => import('@/pages/teachers/TeachersPage'));
export const LazyAboutApp = lazy(() => import('@/pages/about-app/AboutAppPage'));
export const LazyAboutDeveloper = lazy(() => import('@/pages/about-developer/AboutDeveloper'));
export const LazyPage404 = lazy(() => import('@/pages/page404/Page404'));
export const LazyErrorPage = lazy(() => import('@/pages/errorPage/ErrorPage'));
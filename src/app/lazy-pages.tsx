import { lazy } from "react";

const LazyHomePage = lazy(() => import('@/pages/home/HomePage'));
const LazyMeetingsPage = lazy(() => import('@/pages/meetings/MeetingsPage'));
const LazyAboutApp = lazy(() => import('@/pages/about-app/AboutAppPage'));
const LazyAboutDeveloper = lazy(() => import('@/pages/about-developer/AboutDeveloper'));
const LazyPage404 = lazy(() => import('@/pages/page404/Page404'));
const LazyErrorPage = lazy(() => import('@/pages/errorPage/ErrorPage'));
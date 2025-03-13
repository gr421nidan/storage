import {lazy} from "react";
import {LoadComponent} from "@/shared/components/lazy-load";

export const LazyMainPage = LoadComponent(lazy(async () => import("@/pages/main")))
export const LazySignInPage = LoadComponent(lazy(async () => import("@/pages/auth/sign-in")))
export const LazySignUpPage = LoadComponent(lazy(async () => import("@/pages/auth/sign-up")))
export const LazyResetPage = LoadComponent(lazy(async () => import("@/pages/auth/reset-page")))
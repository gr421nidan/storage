import {lazy} from "react";
import {LoadComponent} from "@/shared/components/lazy-load";

export const LazyMainPage = LoadComponent(lazy(async () => import("@/pages/main")))
export const LazySignInPage = LoadComponent(lazy(async () => import("@/pages/auth/sign-in")))
export const LazySignUpPage = LoadComponent(lazy(async () => import("@/pages/auth/sign-up")))
export const LazyResetPage = LoadComponent(lazy(async () => import("@/pages/auth/reset-page")))
export const LazyStorageUsersPage =LoadComponent(lazy(async () => import("@/pages/admin/storage-users")))
export const LazyUserLogsPage =LoadComponent(lazy(async () => import("@/pages/admin/user-logs")))
export const LazyUserProfilePage =LoadComponent(lazy(async () => import("@/pages/user/profile")))
export const LazyStorageTrashPage =LoadComponent(lazy(async () => import("@/pages/user/storage-trash")))
export const LazyAvailableStoragePage =LoadComponent(lazy(async () => import("@/pages/user/available-storage")))
export const LazyAvailableStoragesPage =LoadComponent(lazy(async () => import("@/pages/user/available-storages")))
export const LazyStorageSettingsPage =LoadComponent(lazy(async () => import("@/pages/admin/storage-settings")))
export const LazyConnectingStoragePage =LoadComponent(lazy(async () => import("@/pages/user/connecting-storage")))

export const LazyForbiddenPage =LoadComponent(lazy(async () => import("@/pages/error/forbidden")))
export const LazyNotFoundPage =LoadComponent(lazy(async () => import("@/pages/error/not-found")))
export const LazyUserAccessViewPage =LoadComponent(lazy(async () => import("@/pages/access")))

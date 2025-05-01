import {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import router from "@/app/router";
import ErrorBoundaryProvider from "@/app/provider/error-boundary";
import {ThemeProvider} from "@/app/provider/theme";
import {SnackbarProvider} from "notistack";
import CustomSnackbar from "@/shared/components/snackbar";
import {CurrentStorageProvider} from "@/app/provider/current-storage";

const client = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: false,
            networkMode: "always",
        },
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            networkMode: "always",
        },
    },
});

const App = (): ReactNode => {

    return (
        <ThemeProvider>
            <ErrorBoundaryProvider>
                <QueryClientProvider client={client}>
                        <SnackbarProvider
                            Components={{
                                successSnackbar: CustomSnackbar,
                                errorSnackbar: CustomSnackbar
                            }}>
                            <ReactQueryDevtools initialIsOpen={false}/>
                            <CurrentStorageProvider>
                                <RouterProvider router={router} />
                            </CurrentStorageProvider>
                        </SnackbarProvider>
                </QueryClientProvider>
            </ErrorBoundaryProvider>
        </ThemeProvider>
    );
};

export default App;

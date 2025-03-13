import {PropsWithChildren, ReactNode} from "react";
import {ErrorBoundaryTemplate} from "@/shared/common/error-boundary";

interface IErrorBoundaryComponent {
    error: unknown
}

const ErrorBoundaryComponent = ({error}: IErrorBoundaryComponent): ReactNode => {
    return (
        <div>
            <p>An unhandled error occurred:</p>
            <blockquote>
                <code>
                    {error instanceof Error
                        ? error.message
                        : typeof error === 'string'
                            ? error
                            : JSON.stringify(error)}
                </code>
            </blockquote>
        </div>
    );
}

const ErrorBoundaryProvider = (props: PropsWithChildren): ReactNode => {
    return (
        <ErrorBoundaryTemplate fallback={ErrorBoundaryComponent} {...props}/>
    );
}
export default ErrorBoundaryProvider

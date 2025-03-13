import {
    Component,
    type ComponentType,
    type GetDerivedStateFromError,
    type PropsWithChildren,
    type ReactNode,
} from 'react';

export interface IErrorBoundaryProps extends PropsWithChildren {
    fallback?: ReactNode | ComponentType<{ error: unknown }>;
}

interface IErrorBoundaryState {
    error?: unknown;
}

export class ErrorBoundaryTemplate extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    state: IErrorBoundaryState = {}
    
    static getDerivedStateFromError: GetDerivedStateFromError<IErrorBoundaryProps, IErrorBoundaryState> = (error) => ({error});

    componentDidCatch(error: Error) {
        this.setState({error});
    }

    render() {
        const {
            state: {
                error,
            },
            props: {
                fallback: Fallback,
                children,
            },
        } = this;

        return 'error' in this.state
            ? typeof Fallback === 'function'
                ? <Fallback error={error}/>
                : Fallback
            : children;
    }
}

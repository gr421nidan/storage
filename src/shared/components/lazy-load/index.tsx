import {FC, memo, NamedExoticComponent, Suspense} from "react";

export const LoadComponent = <Props extends object, >(Component: FC<Props>): NamedExoticComponent<Props> => memo((props) => (
    <Suspense fallback={<div/>}>
        <Component {...props} />
    </Suspense>
))


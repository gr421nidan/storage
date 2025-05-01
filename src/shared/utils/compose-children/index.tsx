import {Children, ReactNode, isValidElement, createElement} from "react";

const ComposeChildren = ({children}: { children: ReactNode }) => {
    const array = Children.toArray(children);
    const last = array.pop();

    return (
        <>
            {array.reduceRight(
                (child, element) =>
                    isValidElement(element)
                        ? createElement(element.type, element.props, child)
                        : child,
                last
            )}
        </>
    );
};
export default ComposeChildren;
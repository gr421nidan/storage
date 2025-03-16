import { forwardRef } from "react";
import OtpInput from "react-otp-input";
import { cn } from "@/shared/utils/cn";
import { inputsStyles } from "../style.ts";

interface IOtpCodeInputProps {
    value: string;
    onChange: (value: string) => void;
    numInputs: number;
    className?: string;
    style?: React.CSSProperties;
    inputMode?: "numeric";
    isError?: boolean;
}

const OtpCodeInput = forwardRef<HTMLDivElement, IOtpCodeInputProps>(
    (
        {
            value,
            onChange,
            numInputs,
            className,
            inputMode = "numeric",
            isError,
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref}>
                <OtpInput
                    {...props}
                    value={value}
                    onChange={onChange}
                    numInputs={numInputs}
                    containerStyle={cn("flex gap-[27px]", className)}
                    renderInput={(inputProps) => (
                        <input
                            {...inputProps}
                            type="text"
                            inputMode={inputMode}
                            className={cn(inputsStyles({ variant: "otp", error: isError }))}
                        />
                    )}
                />
            </div>
        );
    }
);

export default OtpCodeInput;
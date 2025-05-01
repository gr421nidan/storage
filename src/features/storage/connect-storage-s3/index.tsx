import React, { useState } from "react";
import ConnectStorageStepOne from "@/features/storage/connect-storage-s3/step-one/ui";
import ConnectStorageStepTwo from "@/features/storage/connect-storage-s3/step-two/ui";
import ConnectStorageStepThree from "@/features/storage/connect-storage-s3/step-three/ui";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import styles from "./style";

const steps = [
    <ConnectStorageStepOne key="1" />,
    <ConnectStorageStepTwo key="2" />,
    <ConnectStorageStepThree key="3" />,
];

const ConnectStorageSteps: React.FC = () => {
    const [step, setStep] = useState(0);

    const isFirst = step === 0;
    const isLast = step === steps.length - 1;

    return (
        <div className={styles.container}>
            <div className={styles.content}>{steps[step]}</div>

            <div className={styles.navWrapper}>
                <div className={styles.navLeft}>
                    {!isFirst && (
                        <div className={styles.navButton}>
                            <ButtonIcon
                                icon="line-md:arrow-left"
                                className={styles.icon}
                                onClick={() => setStep(step - 1)}
                            />
                        </div>
                    )}
                </div>

                <div className={styles.paginationWrapper}>
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setStep(index)}
                            className={`${styles.paginationBase} ${index === step ? styles.paginationActive : styles.paginationInactive}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div className={styles.navRight}>
                    {!isLast && (
                        <div className={styles.navButton}>
                            <ButtonIcon
                                icon="line-md:arrow-right"
                                className={styles.icon}
                                onClick={() => setStep(step + 1)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConnectStorageSteps;

import React, {useState} from "react";
import ConnectStorageStepOne from "@/features/user/connect-storage/step-one/ui";
import ConnectStorageStepTwo from "@/features/user/connect-storage/step-two/ui";
import ConnectStorageStepThree from "@/features/user/connect-storage/step-three/ui";
import ButtonIcon from "@/shared/components/buttons/button-icon";

const steps = [<ConnectStorageStepOne key="1" />, <ConnectStorageStepTwo key="2" />, <ConnectStorageStepThree key="3" />];
const ConnectStorageSteps: React.FC = () => {
    const [step, setStep] = useState(0);
    return (
        <div className="h-[700px] w-[756px] shadow-purple-custom border-2 dark:border-purple border-purple-light rounded-[15px]" >
            <div>{steps[step]}</div>
            <div className="flex justify-between mt-6">
                <div className="bg-purple dark:bg-purple-lighter w-[74px] h-[74px] rounded-full flex items-center justify-center">
                    <ButtonIcon icon="line-md:arrow-left" className="text-white dark:text-black  w-[30px] h-[30px]" onClick={() => setStep(step - 1)} disabled={step === 0}/>
                </div>
                <div className="bg-purple dark:bg-purple-lighter w-[74px] h-[74px] rounded-full flex items-center justify-center">
                <ButtonIcon icon="line-md:arrow-right" className="text-white dark:text-black w-[30px] h-[30px]"  onClick={() => setStep(step + 1)} disabled={step === steps.length - 1}/>
                </div>
            </div>
        </div>
    );
};

export default ConnectStorageSteps;

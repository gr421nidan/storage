import {ReactNode} from "react";
import style from "@/features/storage/connect-storage-s3/style";

const steps = [
    <>Войдите в свою учетную запись.</>,
    <>
        После входа в личный кабинет найдите раздел, связанный с управлением ключами доступа.
        Обычно он находится в <br/>настройках учетной записи или в разделе безопасности.
    </>,
    <>
        В разделе управления ключами выберите опцию <strong>"Создать ключ
        доступа" </strong>или аналогичную.
    </>,
    <>Введите необходимую информацию.</>,
    <>Подтвердите создание ключа.</>,
    <>
        После создания вам будут предоставлены <strong>Access Key ID</strong> и <strong>Secret<br/> Access Key</strong>.
        Важно сохранить эти ключи в безопасном месте, так<br/>
        как Secret Access Key может быть показан только один раз и не<br/>
        будет доступен для просмотра позже.
    </>
];

const ConnectStorageStepTwo = (): ReactNode => {
    return (
        <div className={style.connectStepTwoWrapper}>
            <div className={style.connectSteps}>
                {steps.map((content, index) => (
                    <div key={index} className={style.connectStepRow}>
                        <span className={style.connectStepNumber}>
                            {index + 7}.
                        </span>
                        <p className={style.connectStepText}>
                            {content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConnectStorageStepTwo;

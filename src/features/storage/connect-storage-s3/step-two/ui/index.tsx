import React from "react";

const steps = [
    <>Войдите в свою учетную запись.</>,
    <>
        После входа в личный кабинет найдите раздел, связанный с управлением ключами доступа.
        Обычно он находится в  <br /> <em>настройках учетной записи</em> или в разделе безопасности.
    </>,
    <>
        В разделе управления ключами выберите опцию <strong>"Создать ключ
        доступа" </strong>или аналогичную.
    </>,
    <>Введите необходимую информацию.</>,
    <>Подтвердите создание ключа.</>,
    <>
        После создания вам будут предоставлены <strong>Access Key ID</strong> и <strong>Secret<br /> Access Key</strong>.
        Важно сохранить эти ключи в безопасном месте, так<br/>
        как Secret Access Key может быть показан только один раз и не<br/>
        будет доступен для просмотра позже.
    </>
];

const ConnectStorageStepTwo: React.FC = () => {
    return (
        <div className="px-[42px] pt-[42px]">
            <div className="flex flex-col gap-3">
                {steps.map((content, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="font-semibold text-xl text-right dark:text-white">
                            {index + 7}.
                        </span>
                        <p className="font-semibold text-xl dark:text-white leading-relaxed">
                            {content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConnectStorageStepTwo;

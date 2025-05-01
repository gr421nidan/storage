import React from "react";

const steps = [
    <>
        Зарегистрируйтесь на сайте{" "}
        <a
            href="https://auth.iam.sbercloud.ru/login"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple "
        >
            Cloud.ru
        </a>
        .
    </>,
    <>На главной странице нажмите на кнопку <strong>“Создать ресурс”</strong>.</>,
    <>В открывшемся окне выберите <strong>“Бакет объектного хранилища”</strong>.</>,
    <>
        Установите все необходимые параметры для бакета и выберите желаемый размер
        хранилища.
    </>,
    <>
        При перебросе на страницу всех бакетов откройте <br /> страницу <strong>“Object Storage API”</strong> в боковом меню.
    </>,
    <>
        Нам пригодится <strong>Endpoint</strong> и <strong>Регион</strong> — сохраните их себе.
    </>
];

const ConnectStorageStepOne: React.FC = () => {
    return (
        <div className="pt-[42px] flex flex-col gap-[40px] px-[22px] items-center">
            <h2 className="text-center text-2x leading-none">
                Подключение<br />S3 хранилища
            </h2>
            <p className="font-semibold dark:text-white-secondary text-dark-gray text-center leading-relaxed">
                В этом руководстве вы узнаете, как подключить облачное хранилище СберКлауд к <br />
                нашему сервису, чтобы увеличить доступное пространство для хранения ваших файлов.
            </p>
            <div className="flex flex-col gap-2 w-full">
                {steps.map((content, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="font-semibold text-xl text-right w-[28px] shrink-0 dark:text-white">
                            {index + 1}.
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

export default ConnectStorageStepOne;

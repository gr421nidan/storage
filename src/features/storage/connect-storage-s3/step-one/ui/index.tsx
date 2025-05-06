import {ReactNode} from "react";
import style from "@/features/storage/connect-storage-s3/style";

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
        При перебросе на страницу всех бакетов откройте <br/> страницу <strong>“Object Storage API”</strong> в боковом
        меню.
    </>,
    <>
        Нам пригодится <strong>Endpoint</strong> и <strong>Регион</strong> — сохраните их себе.
    </>
];

const ConnectStorageStepOne = (): ReactNode => {
    return (
        <div className={style.connectStepOneWrapper}>
            <h2 className="text-center text-2x leading-none">
                Подключение<br/>S3 хранилища
            </h2>
            <p className={style.connectDesc}>
                В этом руководстве вы узнаете, как подключить облачное хранилище СберКлауд к <br/>
                нашему сервису, чтобы увеличить доступное пространство для хранения ваших файлов.
            </p>
            <div className={style.connectItemWrapper}>
                {steps.map((content, index) => (
                    <div key={index} className={style.connectStepRow}>
                        <span className={style.connectStepNumber}>
                            {index + 1}.
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

export default ConnectStorageStepOne;

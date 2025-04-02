import { useDropzone } from "react-dropzone";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import {
    dropzoneStyle,
    buttonCancelStyle,
    highlightTextStyle,
    modalWrapperStyle,
    buttonStyle,
    fileWrapperStyle,
    fileGridStyle
} from "../style";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import useUploadFilePresenter from "@/entities/cases/storage/files/upload/presenter";

interface IFilesUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilesUploadModal: React.FC<IFilesUploadModalProps> = ({ isOpen, onClose }) => {
    const {
        onUploadFiles,
        selectedFiles,
        setValue,
        onSubmit
    } = useUploadFilePresenter();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            onUploadFiles([...selectedFiles, ...acceptedFiles]);
        },
        multiple: true,
    });

    if (!isOpen) return null;

    return (
        <Modal title="Загрузить файл" className="w-[655px]" onClose={onClose}>
            <div className={modalWrapperStyle}>
                <div {...getRootProps()} className={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <p className="text-center text-2xl">
                        {isDragActive ? (
                            <span className={highlightTextStyle}>Отпустите файлы для загрузки</span>
                        ) : (
                            <>
                                <span className={highlightTextStyle}>Нажмите</span> или перенесите<br /> файлы для загрузки
                            </>
                        )}
                    </p>
                </div>

                {selectedFiles.length > 0 && (
                    <div>
                        <p className="text-xl mb-2">Выбранные файлы:</p>
                        <div className={fileGridStyle}>
                            {selectedFiles.map((file, index) => (
                                <div key={index} className={fileWrapperStyle}>
                                    <span className="truncate" title={file.name}>{file.name}</span>
                                    <ButtonIcon
                                        icon="ic:round-close"
                                        onClick={() => setValue("file", selectedFiles.filter((_, i) => i !== index), { shouldValidate: true })}

                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-between">
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), buttonCancelStyle)} onClick={onClose}>
                        Отменить
                    </Button>
                    <Button className={buttonStyle} onClick={onSubmit} disabled={!selectedFiles.length}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default FilesUploadModal;

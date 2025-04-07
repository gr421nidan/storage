import {useDropzone} from "react-dropzone";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import styles from "../style";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import useUploadFilePresenter from "@/entities/cases/storage/files/upload/presenter";

interface IFilesUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentFolder?: string;
}

const FilesUploadModal: React.FC<IFilesUploadModalProps> = ({isOpen, onClose, currentFolder}) => {
    const {
        onUploadFiles,
        selectedFiles,
        setValue,
        onSubmit,
    } = useUploadFilePresenter(currentFolder);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop: (acceptedFiles) => {
            onUploadFiles([...selectedFiles, ...acceptedFiles]);
        },
        multiple: true,
    });
    const handleCancel = () => {
        setValue("file", []);
        onClose();
    };
    const handleRemoveFile = (index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setValue("file", newFiles);
    };
    if (!isOpen) return null;

    return (
        <Modal title="Загрузить файл" className="w-[655px]" onClose={onClose}>
            <div className={styles.modalWrapper}>
                <div {...getRootProps()} className={styles.dropzone}>
                    <input {...getInputProps()}/>
                    <p className="text-center text-2xl">
                        {isDragActive ? (
                            <span className={styles.highlightText}>Отпустите файлы для загрузки</span>
                        ) : (
                            <>
                                <span className={styles.highlightText}>Нажмите</span> или перенесите<br/> файлы для
                                загрузки
                            </>
                        )}
                    </p>
                </div>
                {selectedFiles.length > 0 && (
                    <div>
                        <p className="text-xl mb-2">Выбранные файлы:</p>
                        <div className={styles.fileGrid}>
                            {selectedFiles.map((file, index) => (
                                <div key={index} className={styles.fileWrapper}>
                                    <span className="truncate" title={file.name}>{file.name}</span>
                                    <ButtonIcon
                                        icon="ic:round-close"
                                        onClick={() => handleRemoveFile(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex justify-between">
                    <Button className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCancel)}
                            onClick={handleCancel}>
                        Отменить
                    </Button>
                    <Button className={styles.button} onClick={onSubmit} disabled={!selectedFiles.length}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default FilesUploadModal;

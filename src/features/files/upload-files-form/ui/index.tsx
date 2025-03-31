import React, { useCallback, useState } from "react";
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
    buttonStyle, fileWrapperStyle, fileGridStyle
} from "../style";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IUploadFilesProps {
    isOpen: boolean;
    onClose: () => void;
    onUpload: (files: File[]) => void;
}

const FilesUploadModal: React.FC<IUploadFilesProps> = ({ isOpen, onClose, onUpload }) => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });

    const handleSave = () => {
        if (files.length) {
            onUpload(files);
            onClose();
        }
    };
    const handleClose = () => {
        setFiles([]);
        onClose();
    };
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
                {files.length > 0 && (
                    <div>
                        <p className="text-xl mb-2">Выбранные файлы:</p>
                        <div className={fileGridStyle}>
                            {files.map((file, index) => (
                                <div
                                    key={index}
                                    className={fileWrapperStyle}>
                                    <span className="truncate" title={file.name}>{file.name}
                                    </span>
                                    <ButtonIcon
                                        icon="ic:round-close"
                                        onClick={() => setFiles(files.filter((_, i) => i !== index))}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-between">
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), buttonCancelStyle)} onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button className={buttonStyle} onClick={handleSave} disabled={!files.length}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default FilesUploadModal;

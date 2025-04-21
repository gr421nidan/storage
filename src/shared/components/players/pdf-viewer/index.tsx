import React from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IPdfViewerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const PdfViewer: React.FC<IPdfViewerProps> = ({ fileUrl, onClose, fileTitle }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-6 shadow-lg w-full max-w-5xl mx-auto h-fit relative">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate max-w-[80vw]">{fileTitle}</h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10"
                    />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <iframe
                    src={fileUrl}
                    width="100%"
                    height="800px"
                    title="PDF Viewer"
                    className="rounded-lg shadow-inner"
                />
            </div>
        </div>
    );
};

export default PdfViewer;

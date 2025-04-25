import React from "react";
import FilePlayerModal from "@/shared/components/players/modal-player";

interface IPdfViewerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const PdfViewer: React.FC<IPdfViewerProps> = ({ fileUrl, onClose, fileTitle }) => {
    return (
        <FilePlayerModal title={fileTitle} onClose={onClose}>
            <iframe
                src={fileUrl}
                width="100%"
                height="800px"
                title="PDF Viewer"
                className="rounded-lg shadow-inner"
            />
        </FilePlayerModal>
    );
};

export default PdfViewer;

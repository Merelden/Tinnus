"use client";

type PdfViewerProps = {
    pdfUrl: string;
};

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
    const normalizedUrl = pdfUrl.startsWith('/') ? pdfUrl : `/${pdfUrl}`;
    const cacheKey = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const src = `${normalizedUrl}${normalizedUrl.includes('?') ? '&' : '?'}v=${cacheKey}`;

    return (
        <div style={{ width: '90vw', maxWidth: 700, height: '80vh' }}>
            <iframe
                key={src}
                src={src}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PDF viewer"
            />
        </div>
    );
};

export default PdfViewer;

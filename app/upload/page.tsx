'use client'; // Menandakan bahwa ini adalah Client Component

import { SingleImageDropzone } from '@/components/SingleImageDropzone';
import DownloadButton from '@/components/DownloadButton';
import { getDownloadUrl } from '@edgestore/react/utils';

function DownloadLink({ url }: { url: string }) {
  const downloadUrl = getDownloadUrl(url, 'new-file-name.jpg');

  return (
    <a href={downloadUrl} download>
      Click to Download
    </a>
  );
}

const MyPage = () => {
  const fileUrl = 'https://edgestore.example.com/path/to/file.jpg'; // URL file yang diunggah ke EdgeStore

  return (
    <div>
      <h1>Upload Gambar</h1>
      {/* Komponen dropzone untuk mengunggah gambar */}
      <SingleImageDropzone width={300} height={200} />
      
      <h2>File Download Example</h2>
      {/* Komponen download button */}
      <DownloadButton url={fileUrl} />

      <h2>Download Link</h2>
      {/* Komponen download link untuk unduh file */}
      <DownloadLink url={fileUrl} />
    </div>
  );
};

export default MyPage;

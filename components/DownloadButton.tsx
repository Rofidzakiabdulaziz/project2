'use client'; // Menandakan bahwa ini adalah Client Component

import React from 'react';
import { getDownloadUrl } from '@/app/utils/fileUtils';

interface DownloadButtonProps {
  url: string; 
}

const DownloadButton = ({ url }: DownloadButtonProps) => {
  const handleDownload = () => {
    const downloadUrl = getDownloadUrl(url, 'custom-file-name.jpg');
    window.location.href = downloadUrl;
  };

  return <button onClick={handleDownload}>Download File</button>;
};

export default DownloadButton;

import { getDownloadUrl } from '@edgestore/react/utils';

function DownloadLink({ url }: { url: string }) {
  const downloadUrl = getDownloadUrl(url, 'new-file-name.jpg');

  return (
    <a href={downloadUrl} download>
      Click to Download
    </a>
  );
}

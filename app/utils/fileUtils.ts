import { getDownloadUrl as edgeGetDownloadUrl } from '@edgestore/react/utils';

/**
 * Fungsi untuk mendapatkan URL unduhan file dari EdgeStore dengan nama kustom.
 * @param url URL file yang diunduh dari EdgeStore.
 * @param customName Nama file yang akan digunakan saat diunduh.
 * @returns URL untuk mengunduh file.
 */
export  function getDownloadUrl(url: string, customName: string = ''): string {
  return edgeGetDownloadUrl(url, customName);
}

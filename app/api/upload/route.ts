import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import { useEdgeStore } from '@/app/lib/edgestore';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export async function POST(req: NextRequest) {
  return new Promise((resolve, reject) => {
    const reqIncoming = req as any;
    const resIncoming = {} as any;

    upload.single('file')(reqIncoming, resIncoming, async (err: any) => {
      if (err) {
        return reject(new NextResponse('Failed to upload file', { status: 400 }));
      }

      const file = reqIncoming.file;
      if (!file) {
        return reject(new NextResponse('No file uploaded', { status: 400 }));
      }

      const { edgestore } = useEdgeStore();

      try {
        const res = await edgestore.publicFiles.upload({
          file: file.buffer,
          onProgressChange: (progress) => {
            console.log('Upload Progress:', progress);
          },
        });

        return resolve(
          new NextResponse(JSON.stringify({ url: res.url }), { status: 200 })
        );
      } catch (error) {
        console.error('Error uploading file:', error);
        return reject(new NextResponse('Error uploading file', { status: 500 }));
      }
    });
  });
}

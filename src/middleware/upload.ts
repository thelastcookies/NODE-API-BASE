import koaBody from 'koa-body';
import path from 'node:path';
import * as fs from 'node:fs';

export const uploadMiddleware = koaBody({
  multipart: true,
  formidable: {
    keepExtensions: true,
    onFileBegin: async (name, file) => {
      const uploadDir = path.join(process.cwd(), 'uploads', name);

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      file.filepath = path.join(uploadDir, file.newFilename);
    },
  },
});

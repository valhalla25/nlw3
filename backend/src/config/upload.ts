import multer from 'multer';
import path from 'path';
//multer ==> biblioteca para gerenciar arquivos de imagems, tem módulos para jogar arquivos em CDN (AWS, GCP)
export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const filename = `${Date.now()}-${file.originalname}`;

            cb(null, filename);
        }
    })
};
import Router  from 'express';
import multer from 'multer';
import  subirDocumento from '../controllers/Documentos-controller/uploadDocumento-controller'

const documento = Router();
const upload = multer();

documento.post('/subir-pdf', upload.single('archivo'), subirDocumento);

export default documento;

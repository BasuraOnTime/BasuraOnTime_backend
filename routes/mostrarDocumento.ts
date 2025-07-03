import  Router  from 'express';
import  mostrarDocumentoPorParams from '../controllers/Documentos-controller/mostrarDocumento-controller';

const mostrarDoc = Router();
mostrarDoc.post('/ver', mostrarDocumentoPorParams); // esta es la que ya hicimos

 // esta es la que ya hicimos


export default mostrarDoc;

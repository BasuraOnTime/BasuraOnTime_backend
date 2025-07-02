import { Request, Response } from 'express';
import DocumentoRepository from '../../repositories/Documentos/DocumentosRepository'

export const mostrarDocumentoPorParams = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const { id } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({ mensaje: 'ID inválido' });
    }

    const documento = await DocumentoRepository.obtenerPorId(Number(id));

    if (!documento) {
      return res.status(404).json({ mensaje: 'Documento no encontrado' });
    }

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="' + documento.nombre_archivo + '"',
      'Content-Length': documento.archivo_pdf.length
    });

    res.send(documento.archivo_pdf);
  } catch (error) {
    console.error('Error al mostrar documento:', error);
    res.status(500).json({ mensaje: 'Error al mostrar el documento' });
  }
};

export default mostrarDocumentoPorParams
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dhp3oiw1p",
  api_key: 428178384197733,
  api_secret: "urHE8IEvFW_I6wDloUdUI6lMHKU",
});

export const uploadImage = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      folder: "Tecnology/Productos",
    });

    return result;
  } catch (error) {
    console.error("Error al subir la foto a Cloudinary:", error);
    throw error; // Opcional: relanzar el error para que se maneje en otro lugar si es necesario
  }
};

export const uploadImageComprobante = async (filepath) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "Tecnology/ComprobantesDePago",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};

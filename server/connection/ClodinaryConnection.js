import { v2 as cloudinary } from "cloudinary";

const ClodinaryConnection = async () => {
  try {
    
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET_KEY,
    });

    const result = await cloudinary.api.ping();
    console.log("Successfully connected to Cloudinary:", result);
  } catch (error) {
    console.error("Failed to connect to Cloudinary:", error.message);
  }
};

export { ClodinaryConnection };

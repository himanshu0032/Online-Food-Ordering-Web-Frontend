// UploadToCloudnary.js
const upload_preset = "food-app";
const cloud_name = "dgbbltbil";
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const UploadToCloudnary = async (file) => {
  if (file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    try {
      const res = await fetch(api_url, {
        method: "POST",
        body: data,
      });
      const fileData = await res.json();
      return fileData.url.toString(); // Return the image URL
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  } else {
    console.log("No file selected for upload");
  }
};

export default UploadToCloudnary;  // This must be a default export

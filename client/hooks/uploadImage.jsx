import axios from 'axios';

const uploadImage = async ({ image }) => {
            // Fetch configuration from environment variables
            const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
            const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
            const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

            try {
                        // Check if configuration is available
                        if (!cloudName || !apiKey || !uploadPreset) {
                                    throw new Error("Cloudinary configuration is incomplete.");
                        }

                        // Create a FormData object to hold the image and other data
                        const formData = new FormData();

                        // Append each file in the image array
                        image.forEach((file, index) => {
                                    // If you're uploading multiple images, use a unique key for each
                                    formData.append('file', file);
                                    formData.append('public_id', `image_${index}`); // Optional: Give each image a unique ID (can help with reference)
                        });

                        // Add required fields to FormData
                        formData.append('upload_preset', uploadPreset);
                        formData.append('api_key', apiKey);
                        formData.append('timestamp', Date.now() / 1000); // Ensure timestamp is set for security

                        // Log the URL for debugging purposes
                        const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
                        console.log('Uploading to Cloudinary:', uploadUrl);

                        // Send the POST request to Cloudinary's API to upload the image
                        const res = await axios.post(uploadUrl, formData, {
                                    headers: {
                                                'Content-Type': 'multipart/form-data',  // Ensure correct Content-Type
                                    },
                        });

                        // Check if Cloudinary responded with the expected data
                        if (res.data && res.data.public_id && res.data.secure_url) {
                                    const { public_id, secure_url } = res.data;
                                    return { public_id, secure_url };
                        } else {
                                    console.error('Cloudinary did not return expected data:', res.data);
                                    return null; // Return null if data is missing
                        }

            } catch (error) {
                        console.error('Error uploading image:', error.message);
                        return null;  // Return null in case of an error
            }
};

export default uploadImage;

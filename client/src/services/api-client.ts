import axios from 'axios';

export const checkHotelStatus = async (hotelId: number) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/CheckStatus/?hotelId=${hotelId}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const uploadFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/excel`,
            formData,
            {
                headers: {
                    'Content-Type': 'form-data',
                },
            }
        );
        return response.data.data;
    } catch (error) {
        console.error('File upload failed. Error:', error);
    }
};
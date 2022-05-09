import React, { useState } from 'react';
import { Text } from '../basics';
import { Toaster, ShowImage, ProgressBar, DragAndDropFile } from '../index';
import { Wrapper } from './style';
import { FileUploader } from 'react-drag-drop-files';
import toast from 'react-hot-toast';
import axios from 'axios';
import { fetchDeleteProduct } from '../../services/productServices';

const fileTypes = ['jpeg', 'jpg', 'png', 'JPEG', 'PNG'];
const accessToken = document.cookie.split('=')[1];
const baseURL = process.env.REACT_APP_API_BASE_URL;

const ImageUploadPanel = ({ setFile }) => {
    const [uploadedFile, setUploadedFile] = useState('');
    const [uploadedPercent, setUploadedPercent] = useState(0);

    const handleChange = async (file) => {
        if (file.size > 400 * 1024) {
            toast('Dosya boyutu 400 kilobyten fazla olamaz');
            return;
        }
        const tempData = { name: '' };
        const formData = new FormData();
        setFile(file);
        formData.append('files.image', file);
        formData.append('data', JSON.stringify(tempData));
        try {
            const { data } = await axios.post(`${baseURL}/products`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    setUploadedPercent(
                        parseInt(
                            Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            )
                        )
                    );
                    setTimeout(() => {
                        setUploadedPercent(101);
                    }, 10000);
                }
            });
            setUploadedFile(data.image.url);
            await fetchDeleteProduct(data.id);
        } catch (er) {
            console.warn(er);
        }
    };

    const deleteFile = () => {
        setFile(null);
        setUploadedPercent(0);
    };

    return (
        <Wrapper>
            <Text isBold size={25}>
                Ürün Görseli
            </Text>
            {uploadedPercent === 0 && (
                <FileUploader
                    handleChange={handleChange}
                    multiple={false}
                    name='file'
                    disabled={uploadedPercent !== 0}
                    types={fileTypes}>
                    <DragAndDropFile />
                </FileUploader>
            )}
            {uploadedPercent === 101 && (
                <ShowImage image={uploadedFile} deleteFile={deleteFile} />
            )}
            {uploadedPercent > 0 && uploadedPercent <= 100 && (
                <ProgressBar percent={uploadedPercent} />
            )}
            <Toaster />
        </Wrapper>
    );
};

export default ImageUploadPanel;

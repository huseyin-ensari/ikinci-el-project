import React, { useState } from 'react';
import { Text } from '../basics';
import { Toaster } from '../index';
import DragAndDropFile from '../dragAndDropFile';
import { Wrapper } from './style';
import { FileUploader } from 'react-drag-drop-files';
import toast from 'react-hot-toast';
// import { api, URL } from '../../services/axiosConfigs';
import ShowImage from './showImage';
import ProgressBar from './progressBar';
import axios from 'axios';

const ss = {
    name: 'Bi Değişik Gömlek',
    description: 'Düğmelerinden 2 tanesi yok, kol düğmesi de olmayabilir :)',
    category: '2',
    brand: 'Kigili',
    color: 'Mavi',
    status: 'Az Kullanıldı',
    price: 0,
    isOfferable: true,
    isSold: false,
    users_permissions_user: '438'
};

const fileTypes = ['jpeg', 'jpg', 'png', 'JPEG', 'PNG'];

const ImageUploadPanel = () => {
    const formData = new FormData();
    const [uploadedFile, setUploadedFile] = useState('');
    const [uploadedPercent, setUploadedPercent] = useState(0);

    const handleFile = async (file) => {
        formData.append('files.image', file);
        formData.append('data', ss);
        // max 400kb
        if (file.size > 400 * 1024) {
            toast.error('Görsel en fazla 400kb olabilir');
            return;
        }
        const accessToken = await localStorage.getItem('access-token');

        try {
            const response = await axios.post(
                `https://bootcamp.akbolat.net/products`,
                formData,
                {
                    headers: {
                        authorization: `Bearer ${accessToken}`,
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
                }
            );
            setUploadedFile(response.data.image.url);
        } catch (er) {
            console.log('api hata', er);
        }
    };

    return (
        <Wrapper>
            <Text isBold size={25}>
                Ürün Görseli
            </Text>
            <p>{uploadedPercent}</p>
            <FileUploader
                handleChange={handleFile}
                multiple={false}
                name='file'
                disabled={uploadedPercent !== 0}
                types={fileTypes}>
                {uploadedPercent === 0 && <DragAndDropFile />}
                {uploadedPercent === 101 && <ShowImage image={uploadedFile} />}
                {uploadedPercent > 0 && uploadedPercent < 100 && (
                    <ProgressBar percent={uploadedPercent} />
                )}
            </FileUploader>
            <Toaster />
        </Wrapper>
    );
};

export default ImageUploadPanel;

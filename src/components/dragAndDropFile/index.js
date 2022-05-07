import React from 'react';
import { CloadUpload } from '../../constants/icons';
import { SmallText, Text } from '../basics';
import { ChoseImage, DragAndDropContainer } from './style';

const DragAndDropFile = () => {
    return (
        <DragAndDropContainer>
            <CloadUpload />
            <Text size={14}>Sürükleyip bırakarak yükle</Text>
            <Text size={14}>veya</Text>
            <ChoseImage>Görsel Seçin</ChoseImage>
            <SmallText>PNG ve JPEG Dosya boyutu: max. 100kb</SmallText>
        </DragAndDropContainer>
    );
};

export default DragAndDropFile;

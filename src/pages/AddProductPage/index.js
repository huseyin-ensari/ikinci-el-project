import React, { useEffect, useState } from 'react';
import {
    Container,
    Text,
    InputGrey,
    WideButton,
    TextArea
} from '../../components/basics';
import {
    DropDownMenu,
    ImageUploadPanel,
    PriceInput,
    Toaster,
    ToggleSwitch
} from '../../components';
import { BasicLayout } from '../../layouts';
import {
    Card,
    DetailPanel,
    EachInput,
    Panels,
    TwoInput,
    VerticalDivider
} from './style';
import { fetchColors } from '../../services/colorServices';
import { fetchBrands } from '../../services/brandServices';
import { fetchStatuses } from '../../services/statusServices';
import { useProducts } from '../../contexts/productsContext';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { addProductValitaon } from '../../constants/inputValidations';
import { fetchCreateProduct } from '../../services/productServices';
import { useAuth } from '../../contexts/authContext';

const AddProductPage = () => {
    const { categories } = useProducts();
    const [colors, setColors] = useState([]);
    const [choosedColor, setChoosedColor] = useState('Renk Seç');
    const [brands, setBrands] = useState([]);
    const [choosedBrand, setChoosedBrand] = useState('Marka Seç');
    const [choosedCategory, setChoosedCategory] = useState('Kategori Seç');
    const [statuses, setStatuses] = useState([]);
    const [choosedState, setChoosedState] = useState('Kullanım Durumu Seç');
    const [checked, setChecked] = useState(false);
    const [inputErrors, setInputsError] = useState({});
    const { userID } = useAuth();
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0,
            color: '',
            brand: '',
            category: '',
            status: '',
            isOfferable: false,
            isSold: false,
            users_permissions_user: ''
        },
        validationSchema: addProductValitaon,
        onSubmit: async (values) => {
            const formData = new FormData();

            // if (choosedCategory === 'Kategori Seç') {
            //     setInputsError({ ...inputErrors, category: true });
            //     toast.error('Kategori zorunlu bir alandır.');
            //     return;
            // }
            // let choosedCategoryID = categories?.find(
            //     (category) => category?.name === choosedCategory
            // );
            // bag.setFieldValue('category', choosedCategoryID.id);

            // if (choosedState === 'Kullanım Durumu Seç') {
            //     toast.error('Lütfen kullanım durumu seçin.');
            //     setInputsError({ ...inputErrors, state: true });
            // }
            // if (choosedBrand !== 'Marka Seç') {
            //     bag.setFieldValue('brand', choosedBrand);
            // }
            // if (choosedColor !== 'Renk Seç') {
            //     bag.setFieldValue('color', choosedColor);
            // }

            // await bag.setFieldValue('status', choosedState);
            // bag.setFieldValue('category', choosedCategoryID.id);
            // bag.setFieldValue('users_permissions_user', userID);
            let data = {
                name: 'Bi Değişik Gömlek',
                description:
                    'Düğmelerinden 2 tanesi yok, kol düğmesi de olmayabilir :)',
                category: '2',
                brand: 'Kigili',
                color: 'Mavi',
                status: 'Az Kullanıldı',
                price: 0,
                isOfferable: true,
                isSold: false,
                users_permissions_user: '438'
            };
            console.log('values', values);
            formData.append('data', JSON.stringify(data));
            const response = await fetchCreateProduct(formData);
            console.log('resposne ', response);
        }
    });

    const getColors = async () => {
        const { data } = await fetchColors();
        setColors([...data]);
    };

    const getBrands = async () => {
        const { data } = await fetchBrands();
        setBrands([...data]);
    };

    const getStatuses = async () => {
        const { data } = await fetchStatuses();
        setStatuses([...data]);
    };

    useEffect(() => {
        getColors();
        getBrands();
        getStatuses();
    }, []);

    return (
        <BasicLayout>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <Card>
                        <Panels>
                            <DetailPanel>
                                <Text isBold size={25}>
                                    Ürün Detayları
                                </Text>
                                <Text>Ürün Adı</Text>
                                <InputGrey
                                    id='name'
                                    name='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    placeholder='Ürün Adı'
                                    error={formik.errors.name}
                                />
                                <Text>Açıklama</Text>
                                <TextArea
                                    id='description'
                                    name='description'
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    error={formik.errors.description}
                                    placeholder='Ürün açıklaması girin'
                                />
                                <TwoInput>
                                    <EachInput>
                                        <Text>Kategori</Text>
                                        <DropDownMenu
                                            selectedOption={choosedCategory}
                                            setSelectedOption={
                                                setChoosedCategory
                                            }
                                            options={categories}
                                            error={inputErrors.category}
                                        />
                                    </EachInput>
                                    <EachInput>
                                        <Text>Marka</Text>
                                        <DropDownMenu
                                            selectedOption={choosedBrand}
                                            setSelectedOption={setChoosedBrand}
                                            options={brands}
                                        />
                                    </EachInput>
                                </TwoInput>
                                <TwoInput>
                                    <EachInput>
                                        <Text>Renk</Text>
                                        <DropDownMenu
                                            selectedOption={choosedColor}
                                            setSelectedOption={setChoosedColor}
                                            options={colors}
                                        />
                                    </EachInput>
                                    <EachInput>
                                        <Text>Kullanım Durumu</Text>
                                        <DropDownMenu
                                            selectedOption={choosedState}
                                            setSelectedOption={setChoosedState}
                                            options={statuses}
                                            error={inputErrors.state}
                                        />
                                    </EachInput>
                                </TwoInput>
                                <Text>Fiyat</Text>
                                <PriceInput
                                    id='price'
                                    name='price'
                                    onChange={formik.handleChange}
                                    value={formik.values.price}
                                    error={formik.errors.price}
                                    placeholder='Bir fiyat girin'
                                />
                                <ToggleSwitch
                                    checked={checked}
                                    setChecked={setChecked}
                                    label={'Fiyat ve teklif opsiyonu'}
                                />
                            </DetailPanel>
                            {/* --------------------------------------- */}
                            <VerticalDivider />
                            <ImageUploadPanel />
                        </Panels>
                        <WideButton type='submit'>Kaydet</WideButton>
                    </Card>
                </form>
            </Container>
            <Toaster />
        </BasicLayout>
    );
};

export default AddProductPage;

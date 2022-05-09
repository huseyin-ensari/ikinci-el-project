import React, { useEffect, useState } from 'react';
import {
    Container,
    Text,
    InputGrey,
    WideButton,
    TextArea,
    Loader
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
import { useAuth } from '../../contexts/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const accessToken = document.cookie.split('=')[1];

const AddProductPage = () => {
    const { categories, resetPage } = useProducts();
    const [colors, setColors] = useState([]);
    const [choosedColor, setChoosedColor] = useState('Renk Seç');
    const [brands, setBrands] = useState([]);
    const [choosedBrand, setChoosedBrand] = useState('Marka Seç');
    const [choosedCategory, setChoosedCategory] = useState('Kategori Seç');
    const [statuses, setStatuses] = useState([]);
    const [choosedState, setChoosedState] = useState('Kullanım Durumu Seç');
    const [checked, setChecked] = useState(false);
    const [inputErrors, setInputsError] = useState({});
    const [file, setFile] = useState(null);
    const { userID } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0
            // color: '',
            // brand: '',
            // category: '',
            // status: '',
            // isOfferable: false,
            // users_permissions_user: ''
        },
        validationSchema: addProductValitaon,
        onSubmit: async (values, bag) => {
            const data = new FormData();

            if (choosedCategory === 'Kategori Seç') {
                setInputsError({ ...inputErrors, category: true });
                toast.error('Kategori zorunlu bir alandır.');
                return;
            }
            let choosedCategoryID = categories?.find(
                (category) => category?.name === choosedCategory
            );

            if (choosedState === 'Kullanım Durumu Seç') {
                toast.error('Lütfen kullanım durumu seçin.');
                setInputsError({ ...inputErrors, state: true });
            }

            bag.setFieldValue('status', choosedState);
            const productData = {
                name: values.name,
                description: values.description,
                category: choosedCategoryID.id,
                brand: choosedBrand === 'Marka Seç' ? '' : choosedBrand,
                color: choosedColor === 'Renk Seç' ? '' : choosedColor,
                status: choosedState,
                price: values.price,
                isOfferable: checked,
                isSold: false,
                users_permissions_user: userID
            };
            if (!file) {
                toast.error('Fotoğraf yüklemek zorunludur.');
                return;
            }
            setLoading(true);
            data.append('files.image', file);
            data.append('data', JSON.stringify(productData));
            const response = await axios.post(`${baseURL}/products`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response) {
                resetPage(response.data);
                setLoading(false);
                navigate('/login');
            }
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
                                    error={
                                        formik.errors.name &&
                                        formik.touched.name
                                    }
                                />
                                <Text>Açıklama</Text>
                                <TextArea
                                    id='description'
                                    name='description'
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    error={
                                        formik.errors.description &&
                                        formik.touched.description
                                    }
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
                                    error={
                                        formik.errors.price &&
                                        formik.touched.price
                                    }
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
                            <ImageUploadPanel setFile={setFile} />
                        </Panels>
                        <WideButton type='submit'>
                            {loading ? <Loader /> : 'Kaydet'}
                        </WideButton>
                    </Card>
                </form>
            </Container>
            <Toaster />
        </BasicLayout>
    );
};

export default AddProductPage;

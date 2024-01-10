import { useState } from 'react';
import toast from 'react-hot-toast';
import getBase64FromFile from '../../utils/Base64';
import LinesApiService from '../service/LinesApiService';
import useLinesItem from './LinesItemHook';

const useLinesItemForm = (id, linesChangeHandle) => {
    const { item, setItem } = useLinesItem(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getLineObject = (formData) => {
        const typeId = parseInt(formData.typeId, 10);
        const category = parseInt(formData.category, 10);
        const nick = String(formData.nick);
        const genreId = parseInt(formData.genreId, 10);
        const ocenka = parseInt(formData.ocenka, 10);
        const image = formData.image.startsWith('data:image') ? formData.image : '';
        return {
            typeId,
            category: category.toString(),
            nick: nick.toString(),
            genreId: genreId.toString(),
            ocenka: ocenka.toString(),
            image,
        };
    };

    const handleImageChange = async (event) => {
        const { files } = event.target;
        const file = await getBase64FromFile(files.item(0));
        setItem({
            ...item,
            image: file,
        });
    };

    const handleChange = (event) => {
        if (event.target.type === 'file') {
            handleImageChange(event);
            return;
        }
        console.log(item.propertyType);
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setItem({
            ...item,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getLineObject(item);
        if (form.checkValidity()) {
            if (id === undefined) {
                await LinesApiService.create(body);
            } else {
                await LinesApiService.update(id, body);
            }
            if (linesChangeHandle) linesChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'LinesTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        item,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useLinesItemForm;

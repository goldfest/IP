import PropTypes from 'prop-types';
import imgPlaceholder from '../../../assets/200.png';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useTypes from '../../types/hooks/TypesHook';
import usegenres from '../../types/hooks/genresHook';
import './LinesItemForm.css';

const LinesItemForm = ({ item, handleChange }) => {
    const { types } = useTypes();
    const { genres } = usegenres();

    return (
        <>
            <div className='text-center'>
                <img id='image-preview' className='rounded' alt='placeholder'
                    src={item.image || imgPlaceholder} />
            </div>
            <Select values={types} name='typeId' label='Тип' value={item.typeId} onChange={handleChange}
                required />
            <Input name='category' label='Возрастн. кат.' value={item.category} onChange={handleChange}
                type='number' min='0' step='2' placeholder = 'Выберите значение' required />
            <Input name='nick' label='Название' value={item.nick} onChange={handleChange} type='string' placeholder = 'Введите название' required />
            <Select values={genres} name='genreId' label='Жанр' value={item.genreId} onChange={handleChange}
            required />
            <Input name='ocenka' label='Оценка' value={item.ocenka} onChange={handleChange}
                type='number' min='1' step='1' placeholder = 'Выберите значение' required />
            <Input name='image' label='Изображение' onChange={handleChange}
                type='file' accept='image/*' />
        </>
    );
};

LinesItemForm.propTypes = {
    item: PropTypes.object,
    handleChange: PropTypes.func,
};

export default LinesItemForm;

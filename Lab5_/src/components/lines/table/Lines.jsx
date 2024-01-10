import { Button, ButtonGroup } from 'react-bootstrap';
import Select from '../../input/Select.jsx';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import LinesItemForm from '../form/LinesItemForm.jsx';
import useLinesDeleteModal from '../hooks/LinesDeleteModalHook';
import useTypeFilter from '../hooks/LinesFilterHook';
import useLinesFormModal from '../hooks/LinesFormModalHook';
import useLines from '../hooks/LinesHook';
import LinesTable from './LinesTable.jsx';
import LinesTableRow from './LinesTableRow.jsx';

const Lines = () => {
    const {
        genres,
        types,
        currentTypeFilter,
        currentGenreFilter,
        handleTypeFilterChange,
        handleGenreFilterChange,
    } = useTypeFilter();

    const { lines, handleLinesChange } = useLines(currentTypeFilter, currentGenreFilter);

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useLinesDeleteModal(handleLinesChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentItem,
        handleItemChange,
        handleFormSubmit,
        handleFormClose,
    } = useLinesFormModal(handleLinesChange);

    return (
        <>
            <ButtonGroup>
                <Button className="mb-1 mt-2" variant='primary' onClick={() => showFormModal()}>
                    Добавить товар (диалог)
                </Button>
            </ButtonGroup>
            <Select
                className='mt-2'
                values={types}
                label='Фильтр по типу'
                value={currentTypeFilter}
                onChange={handleTypeFilterChange}
            />

            <Select
                className='mt-2'
                values={genres}
                label='Фильтр по жанру'
                value={currentGenreFilter}
                onChange={handleGenreFilterChange}
            />
            <LinesTable>
                {
                    lines.map((line, index) =>
                        <LinesTableRow key={line.id}
                            index={index} line={line}
                            onDelete={() => showDeleteModal(line.id)}
                            onEdit={() => showFormModal(line.id)}
                        />)
                }
            </LinesTable>
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <LinesItemForm item={currentItem} handleChange={handleItemChange} />
            </ModalForm>
        </>
    );
};

export default Lines;

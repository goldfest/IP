import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { PencilFill, Trash3 } from 'react-bootstrap-icons';

const LinesTableRow = ({
    index, line, onDelete, onEdit,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{line.type.name}</td>
            <td>{line.category}+</td>
            <td>{line.nick}</td>
            <td>{line.genre.name}</td>
            <td>{parseFloat(line.ocenka).toFixed(2)}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilFill /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
        </tr>
    );
};

LinesTableRow.propTypes = {
    index: PropTypes.number.isRequired,
    line: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default LinesTableRow;

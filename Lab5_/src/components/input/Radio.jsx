import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const RadioButton = ({
    name, label, checked, onChange, className, value, group, ...rest
}) => {
    return (
        <Form.Group className={`mb-2 ${className || ''}`} controlId={`${group}-${name}`}>
            <Form.Check type="radio">
                <Form.Check.Input
                    type="radio"
                    name={group || ''}
                    value={value || ''}
                    checked={checked || false}
                    onChange={onChange}
                    {...rest}
                />
                <Form.Check.Label>{label}</Form.Check.Label>
            </Form.Check>
        </Form.Group>
    );
};

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

export default RadioButton;

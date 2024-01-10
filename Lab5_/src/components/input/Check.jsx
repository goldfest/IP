import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Checkbox = ({
    name, label, checked, onChange, className, ...rest
}) => {
    return (
        <Form.Group className={`mb-2 ${className || ''}`} controlId={name}>
            <Form.Check type="checkbox">
                <Form.Check.Input
                    type="checkbox"
                    name={name || ''}
                    checked={checked || false}
                    onChange={onChange}
                    {...rest}
                />
                <Form.Check.Label>{label}</Form.Check.Label>
            </Form.Check>
        </Form.Group>
    );
};

Checkbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Checkbox;

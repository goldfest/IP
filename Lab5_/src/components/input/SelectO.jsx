import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const ButtonGroup = ({
  values, name, label, value, onChange, className,
}) => {
  return (
    <Form.Group className={`mb-2 ${className || ''}`} controlId={name}>
      <Form.Label className='form-label'>{label}</Form.Label>
      <div className="d-flex">
        {
          values.map((type) => (
            <Button
              key={type.id}
              onClick={() => onChange(type.id)}
              className={`btn btn-tag btn-rounded ${value === type.id && 'active'}`}
              data-mdb-close="true"
            >
              {type.name}
            </Button>
          ))
        }
      </div>
    </Form.Group>
  );
};

ButtonGroup.propTypes = {
  values: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default ButtonGroup;

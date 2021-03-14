import FormText from 'react-bootstrap/FormText'

const FormRequiredHint: React.FC = () => {
  return (
    <FormText>
      <p>
        <small>
          <em>* - Required Field(s)</em>
        </small>
      </p>
    </FormText>
  )
}

export default FormRequiredHint

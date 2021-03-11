import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FormError } from '@redwoodjs/forms'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

export type OrderFormData = {
  orderNumber: string
  jobName: string
}

export type OrderSaveData = OrderFormData

export interface OrderFormProps {
  onSave: (data: OrderSaveData, id?: string) => void
  order: IOrder
  resultError?: Error
  resultLoading?: boolean
}

const OrderForm: React.FC<OrderFormProps> = ({
  onSave,
  order,
  resultError,
  resultLoading,
}) => {
  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm<OrderFormData>({
    mode: 'onChange',
    defaultValues: {
      orderNumber: order ? order.orderNumber : '',
      jobName: order ? order.jobName || '' : '',
    },
  })

  const onSubmit = useCallback(
    (data: OrderFormData) => onSave(data, order?.id),
    [onSave, order]
  )

  const submitButtonChild: React.ReactNode = useMemo(() => {
    if (resultLoading) {
      return (
        <>
          <Spinner
            animation="border"
            className="mr-2"
            size="sm"
            variant="light"
          />
          Submitting...
        </>
      )
    } else {
      return 'Submit'
    }
  }, [resultLoading])

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} validated={isValid}>
      <Alert className={resultError ? 'd-block' : 'd-none'} variant="danger">
        <FormError
          error={resultError}
          listClassName="mb-0"
          titleClassName="mb-0"
        />
      </Alert>

      <Form.Group controlId="createOrderForm.orderNumber">
        <Form.Label>Order Number</Form.Label>
        <Form.Control
          aria-describedby="createOrderForm.orderNumberHelpBlock"
          isInvalid={errors.orderNumber !== undefined}
          placeholder="Order Number"
          name="orderNumber"
          ref={register({
            maxLength: {
              value: 75,
              message: 'Order Numbers can be no longer than 75 characters.',
            },
            required: 'An Order Number is required when creating an Order.',
          })}
        />
        <Form.Text
          className={!errors.orderNumber ? 'd-block' : 'd-none'}
          id="createOrderForm.orderNumberHelpBlock"
          muted
        >
          A <em>unique</em> number or name used to identify this Order.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors && errors.orderNumber && errors.orderNumber.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="createOrderForm.jobName">
        <Form.Label>Job Name</Form.Label>
        <Form.Control
          aria-describedby="createOrderForm.jobNameHelpBlock"
          isInvalid={errors.jobName !== undefined}
          placeholder="Job Name"
          name="jobName"
          ref={register({
            maxLength: {
              value: 75,
              message: 'Job Names can be no longer than 75 characters.',
            },
          })}
        />
        <Form.Text
          className={!errors.jobName ? 'd-block' : 'd-none'}
          id="createOrderForm.jobNameHelpBlock"
          muted
        >
          A more human-friendly way of identifying this Order.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {errors && errors.jobName && errors.jobName.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        block
        className="d-flex align-items-center justify-content-center"
        disabled={resultLoading || !isValid || !isDirty}
        type="submit"
      >
        {submitButtonChild}
      </Button>
      <Button block variant="outline-secondary" onClick={() => reset()}>
        Reset Fields
      </Button>
    </Form>
  )
}

export default OrderForm

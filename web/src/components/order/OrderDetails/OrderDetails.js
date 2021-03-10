import Table from 'react-bootstrap/Table'

import LocaleTime from 'src/components/LocaleTime'
import OrderDeleteModal from 'src/components/order/OrderDeleteModal'

const OrderDetails = ({ order }) => {
  return (
    <>
      <OrderDeleteModal />
      <Table className="details-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{order.id}</td>
          </tr>
          <tr>
            <th>Order Number</th>
            <td>{order.orderNumber}</td>
          </tr>
          {order.jobName && (
            <tr>
              <th>Job Name</th>
              <td>{order.jobName}</td>
            </tr>
          )}
          <tr>
            <th>Created</th>
            <td>
              <LocaleTime datetime={order.createdAt} />
            </td>
          </tr>
          <tr>
            <th>Last Updated</th>
            <td>
              <LocaleTime datetime={order.updatedAt} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default OrderDetails

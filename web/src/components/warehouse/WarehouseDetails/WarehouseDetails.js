import Table from 'react-bootstrap/Table'

import LocaleTime from 'src/components/LocaleTime'

const WarehouseDetails = ({ warehouse }) => {
  return (
    <>
      <Table className="details-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{warehouse.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{warehouse.name}</td>
          </tr>
          <tr>
            <th>Created</th>
            <td>
              <LocaleTime datetime={warehouse.createdAt} />
            </td>
          </tr>
          <tr>
            <th>Last Updated</th>
            <td>
              <LocaleTime datetime={warehouse.updatedAt} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default WarehouseDetails

import React from 'react'
import { ReusabeTable } from '../component/table/ReusableTable'
import { Delete, Edit } from "@mui/icons-material"
const Home = () => {
      const data = [
            { id: 1, name: 'John', mobile: 9999999999 },
            { id: 2, name: 'mohit', mobile: 8989898989 },
      ]
      const columns = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'mobile', headerName: 'Mobile No' },
      ]

      const Rowdata = [
            { id: 1, name: 'man', mobile: 9999999999 },
            { id: 2, name: 'xyz', mobile: 8989898989 },
      ]
      const column1 = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'mobile', headerName: 'Mobile No' },
      ]

      const actions = [
            {
                  icon: <Edit color="primary" />,
                  onClick: (row) => console.log('Edit button clicked', row),
            },
            { icon: <Delete color='error' /> }
      ]
      return (
            <div>
                  <ReusabeTable columns={columns} rows={data} actions={actions} width='md' />
                  <ReusabeTable columns={column1} rows={Rowdata} />
                  <ReusabeTable columns={column1} rows={Rowdata} width='xl' />
            </div>
      )
}

export default Home

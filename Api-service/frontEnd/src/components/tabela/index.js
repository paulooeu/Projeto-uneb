import React from 'react'
import MUIDataTable  from 'mui-datatables'
import Dialog from '../dialogo/index'

export default function Tabela({titulo,columns,data}){
  const options = {
    filterType: 'textField',
  };
 

    return (<>
     
    <Dialog />
      <MUIDataTable
        title={titulo}
        columns={columns}
        data={data} 
        options={options} 
        
      />
      </>
    )
  
}

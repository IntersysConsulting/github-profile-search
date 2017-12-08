import React, { Component } from 'react';
import HotTable from 'react-handsontable';

class Table extends Component {
    constructor(props) {
        super(props);
        const columnsConf = [
            { 
              type: 'text',
              readOnly: true
            },
            {
              type: 'text',
              readOnly: true
            },
            {
              type: 'text',
              readOnly: true
            },
            {
              type: 'text',
              readOnly: true
            },
            {
              type: 'text',
              readOnly: false,
              renderer: "html"
            },
            {
              type: 'text',
              readOnly: true,
              renderer: "html"
            }
          ] 
        this.state = {
            value: 'Scala',
            columnHeaders: ['Profile','Location','Followers','GitHub User', 'Github Profile', 'Repositories'],
            columns: columnsConf,
            data: [['Scale', 'Mexico','3','lordzero','<a href="https://github.com/lordzero0000"> lordzero0000 profile </a>','<a href="https://github.com/lordzero0000?tab=repositories">lordzero0000 repos</a>']]
        };
    };

  render() {
    return (
        <div className='table'>
            <HotTable 
                data={this.state.data} 
                contextMenu={false} 
                colHeaders = {this.state.columnHeaders}
                columns = {this.state.columns}
            />
        </div>
    );
  }
}

export default Table;
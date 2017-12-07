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
              readOnly: true
            },
            {
              type: 'text',
              readOnly: true
            }
          ] 
        this.state = {
            value: 'Scala',
            columnHeaders: ['Profile','Location','Followers','GitHub User', 'Github Profile', 'Repositories'],
            columns: columnsConf,
            followers: props.followers || null
        };
    };

  render() {
    return (
        <div>
            <HotTable 
                data={[['some', 'test','yes'], ['handsontable', 'data']]} 
                contextMenu={false} 
                colHeaders = {this.state.columnHeaders}
                columns = {this.state.columns}
            />
        </div>
    );
  }
}

export default Table;
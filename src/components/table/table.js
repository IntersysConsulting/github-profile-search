import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
        <div>
            <HotTable 
                data={[['some', 'test'], ['handsontable', 'data']]} 
                contextMenu={true} 
                colHeaders={true} 
            />
        </div>
    );
  }
}

export default Table;
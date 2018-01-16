import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            columns: columnsConf
        };
    };

  render() {
    return (
        <div className='table'>
            <HotTable 
                data={this.props.data} 
                contextMenu={false} 
                colHeaders = {this.state.columnHeaders}
                columns = {this.state.columns}
            />
        </div>
    );
  }
}

function mapStateToProps({ github }) {
  return { data: github.results }
}


export default connect(mapStateToProps, null)(Table);
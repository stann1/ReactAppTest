import React, { Component } from 'react';
import Store from '../../api/Store';

export default class StoryPage extends Component {
   constructor(){
        super();

        this.state = {
            stories: []
        }
    }

    componentWillMount(){
        this._fetchListData()
    }

    _fetchListData(){
        Store.getAll('stories', (data) => {
            this.setState({stories: data.stories});
        })
    }

    render(){
      return (
        <div>
            <div className="page-header">
                <h1>Topics List</h1>
            </div>
            <div className="col-sm-4 col-sm-offset-4">
          <table className="table table-condensed table-bordered">
          <thead>
            <tr>
                <th>Topic name</th>
                <th>Graph</th>
            </tr>
          </thead>
            <tbody>
                { this.state.stories.map((s) => 
                <tr>
                    <td>{s.name}</td>
                    <td><button className="btn btn-default">Graph</button></td>
                </tr>)
             }
            </tbody>
          </table>
          </div>
        </div>
      );
    }  
}
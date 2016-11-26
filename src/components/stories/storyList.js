import React, {PropTypes} from 'react';

const StoryList = ({stories}) => {
        
    let allStories = stories;
    return (
        <div className="container-fluid">
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
                { allStories.map((s) => { 
                    return(
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td><button className="btn btn-success">Graph</button></td>
                        </tr>
                    );
                })
             }
            </tbody>
          </table>
          </div>
        </div>
    );
};

StoryList.propTypes = {
    stories: PropTypes.array.isRequired,
};

export default StoryList;
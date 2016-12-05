import React, { PropTypes } from 'react';

const TopicList = ({topics}) => {

    let allTopics = topics;
    return (
        <div className="container-fluid">
            <div className="page-header">
                <h1>Topics List</h1>
            </div>
            <div className="col-sm-4 col-sm-offset-4">
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-primary">
                            <th>Topic name</th>
                            <th>Graph</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTopics.map((s) => {
                            return (
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

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
};

export default TopicList;
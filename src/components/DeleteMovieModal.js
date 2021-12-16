import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DeleteMovieModal = props => {
    const { push } = useHistory()
    const handleDelete = e =>{
        axios.delete(`http://localhost:5000/api/movie/${props.id}`)
        .then(resp => {
            console.log(resp)
            props.deleteMovie(props.id)
            push('/movies')
        })
        .catch(err => console.log(err))
    }
    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="Delete" omClick={handleDelete}/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;
function ModalComponent() {
    return (  
        <>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <i className="bi bi-x fs-4 p-2 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"></i>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Tweet</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ModalComponent;
import { useState, useContext } from 'react'
import { AppContext } from '../../App'

const UserAlbum = ({ album, setCurrentAlbum, currentAlbum }) => {
    const currentAlbumId = currentAlbum ? currentAlbum.id : null
    const { addNewPhoto, deleteAlbum, currentAlbumPhotos } = useContext(AppContext)
    const [photo, setPhoto] = useState({
        title: '',
        src: '',
        albumId: album.id
    })
    const changeFieldHandler = event => {
        setPhoto({ ...photo, [event.target.name]: event.target.value })
    }

    return (
        <div className="col">
            <div className="card text-center h-100 mb-3 px-2">
                <div className="card-body d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-octagon-fill position-absolute text-danger" viewBox="0 0 16 16" onClick={() => { if (window.confirm(`You really want to delete album: ${album.title}?`)) { deleteAlbum(album.id) } }} style={{ top: "5px", right: "5px", cursor: "pointer" }}>
                        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                    <img src={album.cover} className="card-img-top" alt="..." />
                </div>
                <h5 className="card-title">{album.title}</h5>

                <h6>{currentAlbumPhotos(album.id).length ? `contains ${currentAlbumPhotos(album.id).length} photo` : 'is empty'}</h6>

                {currentAlbumId !== album.id ? <button className="btn btn-primary btn-sm mb-2" onClick={() => setCurrentAlbum(album)}>View album</button> : <button className="btn btn-primary btn-sm mb-2" onClick={() => setCurrentAlbum(null)}>Close album</button>}

                <button className="btn btn-success btn-sm mb-2"
                    type="button"
                    data-bs-toggle="modal" data-bs-target={`#addPhotoModal_${album.id}`}>
                    add new photo</button>
                <div className="modal fade" id={`addPhotoModal_${album.id}`} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" >Add photo to album "{album.title}"</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                    setPhoto({ ...photo, title: '', src: '' })
                                }}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    className="form-control my-3"
                                    type="text"
                                    name="title"
                                    placeholder="Type photo title"
                                    value={photo.title}
                                    onChange={changeFieldHandler}
                                />
                                <input
                                    className="form-control my-3"
                                    type="text"
                                    name="src"
                                    placeholder="Type photo src"
                                    value={photo.src}
                                    onChange={changeFieldHandler}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        addNewPhoto(photo)
                                        setPhoto({ ...photo, title: '', src: '' })
                                    }
                                    }
                                >
                                    add photo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAlbum
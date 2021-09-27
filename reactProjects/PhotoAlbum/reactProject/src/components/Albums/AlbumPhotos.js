import { useContext } from 'react'
import { AppContext } from '../../App'
import { useParams } from 'react-router-dom'
import AlbumPhoto from './AlbumPhoto'

const AlbumPhotos = ()=>{
	const {photos, getAlbumTitleByAlbumId} = useContext(AppContext)
	const { id, author } = useParams()

	console.log(id)
	console.log(author)


	const albumPhotos = photos.filter(photo => photo.albumId === +id)

	return (
		<div className = 'container mt-3'>
			<h3 className = 'text-center'>Album: "{getAlbumTitleByAlbumId(id)}", by {author}</h3>
			<div className="row row-cols-1 row-cols-md-4">
				{albumPhotos.map(photo => <AlbumPhoto key={photo.id} photo={photo} />)}</div>
		</div>
	)


}

export default AlbumPhotos;
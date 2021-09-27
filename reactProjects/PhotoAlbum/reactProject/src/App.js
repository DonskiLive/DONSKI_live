import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Users from './components/Users/Users';
import Albums from './components/Albums/Albums';
import Home from './components/Home';
import { getUsers, getCurrentUserId, setCurrentUserLocalStorage, setUsersToLocalStorage, login, resetCurrentUser } from './data/usersData';
import Registration from './components/Registration';
import Login from './components/Login';
import UserProfile from './components/Users/UserProfile';
import { getAlbums, setAlbumsToLocalStorage } from './data/albumsData';
import { getPhotos, setPhotosToLocalStorage } from './data/photosData';
import AlbumPhotos from './components/Albums/AlbumPhotos';

export const AppContext = React.createContext()

function App() {
  const [users, setUsers] = useState(getUsers());
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  const addUser = (user) => {
    const isUserExist = users.some(u => u.email === user.email)
    if (!isUserExist) {
      const newUser = { ...user, id: Date.now() }
      const newUsersArray = [...users, newUser]
      setUsers(newUsersArray)
      setUsersToLocalStorage(newUsersArray)
      setCurrentUser(newUser.id)
      setCurrentUserLocalStorage(newUser.id)
      return true
    }
    return false
  }

  const changeCurrentUser = (currentUser) => {
    const idUser = login(currentUser)
    if (idUser) {
      setCurrentUser(idUser);
      setCurrentUserLocalStorage(idUser)
      return true
    }
    return false
  }

  const getCurrentUser = () => {
    return users.find(user => user.id === currentUser)
  }

  const getUserNameById = (id) => {
    return users.find(user => +user.id === id).fName
  }

  const logout = () => {
    setCurrentUser(null)
    resetCurrentUser()
  }

  const updateUser = user => {
    const newUsers = [...users]
    const index = users.indexOf(getCurrentUser()) // users.findIndex(u => u.id === user.id)
    newUsers[index] = user
    setUsers(newUsers)
    setUsersToLocalStorage(newUsers)
  }

  const [albums, setAlbums] = useState(getAlbums());

  const addNewAlbum = album => {
    const newAlbums = [...albums, { ...album, id: Date.now() }]
    setAlbums(newAlbums)
    setAlbumsToLocalStorage(newAlbums)
  }

  const currentUserAlbums = () => {
    return albums.filter(album => album.userId === currentUser)
  }

  const [photos, setPhotos] = useState(getPhotos());

  const addNewPhoto = photo => {
    const newPhotos = [...photos, { ...photo, id: Date.now(), like: 0, dislike: 0 }]
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
  }

  const getAlbumTitleByAlbumId = (id) => {
    return albums.find(album => album.id === +id).title
  }

  const addEvolution = (id, key) => {
    const newPhotos = [...photos]
    const index = photos.findIndex(photo => photo.id === id)
    newPhotos[index][key]++
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
  }

  const deletePhoto = (id) => {
    const newPhotos = [...photos]
    const index = photos.indexOf(photos.find(photo => +photo.id === +id))
    newPhotos.splice(index, 1)
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
  }

  const currentAlbumPhotos = (albumId) => {
    return photos.filter(photo => +photo.albumId === +albumId)
  }

  const deleteAlbum = (id) => {
    const photosDelete = photos.filter(photo => +photo.albumId === +id)
    let newPhotos = [...photos]
    for (let i = photosDelete.length; i > 0; i--) {
      const photoIndex = photos.indexOf(photos.find(photo => +photo.id === +photosDelete[i - 1].id))
      newPhotos.splice(photoIndex, 1)
    }
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)

    const newAlbums = [...albums]
    const albumIndex = albums.indexOf(albums.find(album => +album.id === +id))
    newAlbums.splice(albumIndex, 1)
    setAlbums(newAlbums)
    setAlbumsToLocalStorage(newAlbums)
  }

  const deleteUser = (id) => {
    const albumsDelete = albums.filter(album => +album.userId === +id)
    let newAlbums = [...albums]
    let newPhotos = [...photos]
    let albumPhotos = []
    let photosDelete = []

    for (let i = albumsDelete.length; i > 0; i--) {
      albumPhotos = photos.filter(photo => +photo.albumId === +albumsDelete[i - 1].id)
      photosDelete.push(albumPhotos)
      deleteAlbum(albumsDelete[i - 1].id)
      const albumIndex = albums.indexOf(albums.find(album => +album.id === +albumsDelete[i - 1].id))
      newAlbums.splice(albumIndex, 1)
    }

    photosDelete.forEach((photoArr) => {
      for (let i = photoArr.length; i > 0; i--) {
        const photoIndex = photos.indexOf(photos.find(photo => +photo.id === +photosDelete[i - 1].id))
        newPhotos.splice(photoIndex, 1)
      }
    })

    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
    setAlbums(newAlbums)
    setAlbumsToLocalStorage(newAlbums)

    setCurrentUser(null)
    resetCurrentUser()
    const newUsers = [...users]
    const index = users.indexOf(users.find(user => +user.id === +id))
    newUsers.splice(index, 1)
    setUsers(newUsers)
    setUsersToLocalStorage(newUsers)
  }


  createDemoUser({ avatar: "https://aven-sys.com/wp-content/uploads/2016/03/demo.jpg", email: "demo", fName: "Demo", lName: "p: user", password: "user" })
  function createDemoUser(user) {
    const isUserExist = users.some(u => u.email === user.email)
    const setUserId = Date.now()
    const setAlbumId = Date.now()
    if (!isUserExist) {
      const newUser = { ...user, id: setUserId }
      const newUsersArray = [...users, newUser]
      setUsers(newUsersArray)
      setUsersToLocalStorage(newUsersArray)
      setCurrentUser(newUser.id)
      setCurrentUserLocalStorage(newUser.id)
      const newAlbums = [{cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiCflOG6G1SJgWci31u3Syp2Xrsya-7uMhA&usqp=CAU",
      title: "First Album",
      id: setAlbumId,
      userId: setUserId}]
      setAlbums(newAlbums)
      setAlbumsToLocalStorage(newAlbums)
      
      const newPhotos = [{albumId: setAlbumId,
        dislike: 0,
        id: 11111111,
        like: 0,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7zsadIF5oN75MM7xq_xgVpNOU-P1VyQfxA&usqp=CAU",
        title: "Programmer"},
        {albumId: setAlbumId,
          dislike: 0,
          id: 22222222,
          like: 0,
          src: "https://p.kindpng.com/picc/s/171-1718046_javascript-programming-language-logo-hd-png-download.png",
          title: "Java-Script"},
        {albumId: setAlbumId,
          dislike: 0,
          id: 33333333,
          like: 0,
          src: "https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png",
          title: "React"          
        }
      ]
      setPhotos(newPhotos)
      setPhotosToLocalStorage(newPhotos)

      return true
    }
    return false
  }



  return (
    <AppContext.Provider value={{
      users,
      addUser,
      changeCurrentUser,
      currentUser,
      getUserNameById,
      logout,
      getCurrentUser,
      updateUser,
      addNewAlbum,
      currentUserAlbums,
      addNewPhoto,
      photos,
      albums,
      getAlbumTitleByAlbumId,
      addEvolution,
      deleteAlbum,
      deletePhoto,
      deleteUser,
      currentAlbumPhotos
    }} >
      <Navigation />
      <Switch>
        <Route exact path="/album/:id/:author" component={AlbumPhotos} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route path="/users" component={Users} />
        <Route exact path="/albums/user/:id" component={Albums} />
        <Route path="/albums" component={Albums} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/" component={Home} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
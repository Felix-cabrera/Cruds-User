import { useEffect, useState } from 'react'
import './App.css'
import './modalStyle.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCArd'
import useModal from "./hooks/useModal"

function App() {

  const [isOpenModalCreate, openModalCreate, closeModalCreate]= useModal(false)
  const [isOpenModalAlert, openModalAlert, closeModalAlert]= useModal(false)

  const [infoUpdate, setInfoUpdate] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  },[])
  console.log(users)
  return (
    <main>
      <nav className='nav__container'>
        <h1 className='nav__title'>Users</h1>
        <button className='nav__button' onClick={openModalCreate}>+ Create new user</button>
      </nav>
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isOpenModalCreate={isOpenModalCreate}
        closeModalCreate={closeModalCreate}
      />
      <div className='users__container'>
        {
          users?.map( user =>(
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              openModalCreate={openModalCreate}
              openModalAlert={openModalAlert}
              closeModalAlert={closeModalAlert}
              isOpenModalAlert={isOpenModalAlert}
            />
          ))
        }
      </div>
      <footer className='footer__container'>
        <h2 className='footer__title'>Made with 💖 in academia</h2>
      </footer>
    </main>
  )
}

export default App

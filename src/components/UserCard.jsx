
const UserCard = ({user, deleteUser, setInfoUpdate, openModalCreate, openModalAlert, isOpenModalAlert, closeModalAlert}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id )
        openModalAlert()
    }
    const handleEdit = () => {
        setInfoUpdate(user)
        openModalCreate()
    }

  return (
    <section className="user">
        <div className="user__container">
          <h3 className="user__title">{`${user.first_name} ${user.last_name}`}</h3>
          <hr className="space"/>
          <ul className="user__descrip">
            <li className="user__list"><span>Email: </span><span>{user.email}</span></li>
            <li className="user__list"><span>Birthday: </span><span><i className="fa-solid fa-gift"></i> {user.birthday}</span></li>
          </ul>
          <div className="user__icon">
          <i onClick={handleDelete} className="fa-solid fa-trash icon"></i>
          <i onClick={handleEdit} className="fa-regular fa-pen-to-square icon"></i>
          </div>
        </div>
      <article className={`modal__alert ${isOpenModalAlert && "alert"}`}>
        <div className='modal__container__alert'>
          <h2>The user was deleted</h2>
          <i className="fa-solid fa-circle-exclamation"></i>
          <button className="user__create" onClick={closeModalAlert}>Back</button>
        </div>
      </article>
    </section>
  )
}

export default UserCard
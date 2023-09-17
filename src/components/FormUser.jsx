import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({createUser, infoUpdate, updateUser, setInfoUpdate, isOpenModalCreate, closeModalCreate}) => {

    const {handleSubmit, register, reset }= useForm()

    useEffect(() => {
        reset(infoUpdate)
    },[infoUpdate])

    const submit = data => {
        if(infoUpdate){
            //Update
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
            closeModalCreate()
        } else {
            //Create
            createUser('/users', data)
            closeModalCreate()
        }
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:'',
        })
    }
  return (
    <article className={`modal ${isOpenModalCreate && "is__open"}`}>
        <form onSubmit={handleSubmit(submit)} className="modal__container">
            <button onClick={closeModalCreate} className="modal__close">x</button>
            <h2 className="modal__title">{infoUpdate ? 'Update user': 'Create user'}</h2>
            <div className="user__descrip">
                <label className="modal__label" htmlFor="email">Email</label>
                <input className="user__input" {...register('email')} type="email" id="email" placeholder="email" required/>
            </div>
            <div className="user__descrip">
                <label className="modal__label" htmlFor="password"> Password</label>
                <input className="user__input" {...register('password')} type="password" id="password" placeholder="password" required/>
            </div>
            <div className="user__descrip">
                <label className="modal__label" htmlFor="first_name">First name</label>
                <input className="user__input" {...register('first_name')} type="text" id="first_name" placeholder="First name" required/>
            </div>
            <div className="user__descrip">
                <label className="modal__label" htmlFor="last_name">Last name</label>
                <input className="user__input" {...register('last_name')} type="text" id="last_name" placeholder="Last name" required/>
            </div>
            <div className="user__descrip">
                <label className="modal__label" htmlFor="birthday">Birthday</label>
                <input className="user__input" {...register('birthday')} type="date" id="birthday" placeholder="enter birthday" required/>
            </div>
            <button className="user__create">{ infoUpdate ? 'Update': 'Create'}</button>
        </form>
    </article>
  )
}

export default FormUser
import Styles from './Header.module.css'
import image2 from '../../assets/image2.png'
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from 'react'


export function Header({onAddTask}) {
    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    return (
        <header className={Styles.header}>
            <img src={image2} alt="" />

            <form onSubmit={handleSubmit} className={Styles.newTaskForm}>
            <input placeholder='add a new task' type="text" value={title} onChange={onChangeTitle} />
            <button>
                Create
                <FaCirclePlus size={24} />
                </button>
            </form>
            
        </header>
    )
}
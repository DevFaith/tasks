import styles from './task.module.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export function Task({ task, onComplete, onDelete }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <FaCheckCircle /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textcompleted : ''}>{task.title}</p>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <FaTrashAlt size={20} />
            </button>
        </div>
    );
}

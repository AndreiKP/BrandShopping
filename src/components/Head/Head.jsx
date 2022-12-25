import styles from './Head.module.scss'

export const Head = () => {
    console.log('Head')
    return (
        <div className={styles.Head}> 
        <div>left</div>
        <div>right</div>
        </div>
    )
}
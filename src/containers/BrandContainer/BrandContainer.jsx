import styles from './BrandContainer.module.scss';

export const BrandContainer = ({children}) => {
    console.log('BrandContainer')
    return (
        <div className={styles.BrandContainer}>
            <button>button</button>
            {children}
        </div>
    )
}
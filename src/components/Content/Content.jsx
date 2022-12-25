import styles from "./Content.module.scss";
import { MocApi} from '../MocApi/MocApi';

import { useSelector, useDispatch } from 'react-redux';
import { pusto } from '../../redux/slices/contentSlice';

export const Content = () => {
  const clothes = useSelector((state) => state.counter.clothes)
  const dispatch = useDispatch()
  console.log('Content')
  return (
    <div className={styles.Content}>
      <button onClick={() => {dispatch(pusto())}}>null</button>
      Content
      <header className={styles.AppHeader}>
        <h1>brandshopping</h1>
        <MocApi />
        {clothes.map((clothes, index) => {
          return (
            <div key={index}>
              <img src={clothes.path} alt={clothes.name} />
              <h1>{clothes.price} BYN</h1>
            </div>
          );
        })}
      </header>
    </div>
  );
};
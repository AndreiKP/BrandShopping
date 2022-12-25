
import styles from "./App.module.scss";
import { BrandApp } from "./components/BrandApp/BrandApp";

function App() {
  console.log('App')
  return (
    <div className={styles.App}>
      <BrandApp />
    </div>
  );
}

export default App;
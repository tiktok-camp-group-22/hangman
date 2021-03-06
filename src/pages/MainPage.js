import React from "react";
import EndGameModal from '../features/modal/EndGameModal';
import { Button } from 'react-bootstrap';
import { Display } from '../features/display/Display';
import Banner from '../features/banner/Banner';
import styles from './MainPage.module.css';

function MainPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Banner />
      <div className={styles.mainPage}>
      <Display />
      <Button className={styles.endGameBtn} onClick={() => setModalShow(true)}>
        End Game
      </Button>
      <EndGameModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        header="Are you sure you want to quit?"
        content="Don't give up yet!"
        answer="Try Harder!!"
      />
      </div>
    </div>
  )
}

export default MainPage;
import React from 'react';
import styles from './CSSModule.module.css';
//import './CSSModule.module.css'

const CSSModule = () => {
    return (
        <div className={styles.wrapper}> 
        {/* className="wrapper" 는 적용 안됨...
            className={styles.wrapper}
        */}
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;
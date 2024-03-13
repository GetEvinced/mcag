import styles from "../styles/guidelines.module.css";
import Sc from './sc.js';


  export default function Guidelines({guidelines}) {
    if(guidelines.length > 0) {
        return (guidelines.map((guideline)=> {
                      return (
                        <section id={guideline.name} className={styles.guidelineSection} tabIndex="-1" key={guideline.name}>
                          <h3 id={`heading-${guideline.name}`}>{`Guideline ${guideline.num}. ${guideline.handle}`}</h3>
                          <div dangerouslySetInnerHTML={{ __html: guideline.title }} />
                          <Sc successcriteria={guideline.successcriteria} />
                        </section>
      
                      )
                  }));
    }
  }



import styles from "../styles/toc.module.css";

function SuccessCriteria({successcriteria}) {
    if(successcriteria.length > 0) {
        return (
              <ul>
              {
                  successcriteria.map((sc)=> {
                      return (
                        <li key={sc.name}>
                            <a href={`#${sc.name}`}>{`${sc.num}. ${sc.handle}`}</a>
                        </li>
                      )
                  })
              }
              </ul>
        );
    }
  }

function Guidelines({guidelines}) {
    if(guidelines.length > 0) {
        return (
              <ul>
              {
                  guidelines.map((guideline)=> {
                      return (
              
                      <li key={guideline.name}>
                          <a href={`#${guideline.name}`}>{`${guideline.num}. ${guideline.handle}`}</a>
                          <SuccessCriteria successcriteria={guideline.successcriteria} />
                      </li>
      
                      )
                  })
              }
              </ul>
        );
    }
  }

export default function Toc({data}) {
  return (
    <nav aria-label="Table of contents" className={styles.toc} tabIndex="-1">
        <ul>
        {
            data.principles.map((principle)=> {
                return (
                <li key={principle.name}>
                    <a href={`#${principle.name}`}>{`${principle.num}. ${principle.handle}`}</a>
                    <Guidelines guidelines={principle.guidelines} />
                </li>
                )
            })
        }
        </ul>
    </nav>
  );
}

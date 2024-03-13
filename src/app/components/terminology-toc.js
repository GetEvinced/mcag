import styles from "../styles/toc.module.css";

function Terms({values}) {
    return(
      values.map((value)=> {
        const headingId = value.title.toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '');
        return(
            <li key={headingId}><a href={`#${headingId}`}>{value.title}</a></li>
        )
      })
    )
  }

export default function Toc({data}) {
  return (
    <nav aria-label="Table of contents" className={styles.toc} tabIndex="-1">
        <ul className={styles.terminology}>
        {
                Object.keys(data).map(letter => {
                  if(data[letter].length > 0) {
                    return(
                      <section key={letter}>
                        <li className={styles.termsSection}>{letter.toUpperCase()}</li>
                        <Terms values={data[letter]} />
                      </section>
                    )
                  }
                })

        }
        </ul>
    </nav>
  );
}

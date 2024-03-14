'use client'

import React, { useState, useRef, useEffect } from 'react';

import styles from "../styles/toc.module.css";

const isSmallViewport = typeof window !== 'undefined' && window.innerWidth < 701;

function Terms({values, status}) {
  
  function collapseNav() {
    if (isSmallViewport) {
        status(false)
    }
}
    return(
      values.map((value)=> {
        const headingId = value.title.toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '');
        return(
            <li key={headingId}><a href={`#${headingId}`} onClick={collapseNav}>{value.title}</a></li>
        )
      })
    )
  }

export default function Toc({data}) {
  const [tocStatus, setTocStatus] = useState(true);
  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  

  useEffect(() => {
    if (isSmallViewport) {
      setTocStatus(false)
    }  
  }, [])
  useEffect(() => { 
    if (isSmallViewport) {
      if(!tocStatus) {
        navRef.current.setAttribute('inert', 'true');
        wrapperRef.current.classList.remove('active-toc')
      } else {
        navRef.current.removeAttribute('inert')
        wrapperRef.current.classList.add('active-toc')
      } 
    }
    
  }, [tocStatus])
  return (
    <div className={styles.tocWrapper} ref={wrapperRef}>
    <button 
            className={styles.mNavToggleBtn } 
            aria-expendad={tocStatus}
            aria-controls="toc"
            onClick={()=> setTocStatus(!tocStatus)}>
                Table of contents
        </button>
    <nav aria-label="Table of contents" id="toc" className={styles.toc} ref={navRef} tabIndex="-1">
        <ul className={styles.terminology}>
        {
                Object.keys(data).map(letter => {
                  if(data[letter].length > 0) {
                    return(
                      <>
                        <li className={styles.termsSection} key={`l-${letter}`}>{letter.toUpperCase()}</li>
                        <Terms values={data[letter]} status={setTocStatus} key={`t-${letter}`} />
                      </>
                    )
                  }
                })

        }
        </ul>
    </nav>
    </div>
  );
}

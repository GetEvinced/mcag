'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/toc.module.css";
import Link from 'next/link';

const isSmallViewport = typeof window !== 'undefined' && window.innerWidth < 701;

function SuccessCriteria({successcriteria, status}) { 
    function collapseNav() {
        if (isSmallViewport) {
            status(false)
        }
    }   
    if(successcriteria.length > 0) {
        return (
              <ul>
              {
                  successcriteria.map((sc)=> {
                      return (
                        <li key={sc.name}>
                            <Link href={`#${sc.name}`} onClick={collapseNav}>{`${sc.num}. ${sc.handle}`}</Link>
                        </li>
                      )
                  })
              }
              </ul>
        );
    }
}

function Guidelines({guidelines, status}) {
    function collapseNav() {
        if (isSmallViewport) {
            status(false)
        }
    }
    if(guidelines.length > 0) {
        return (
              <ul>
              {
                  guidelines.map((guideline)=> {
                      return (
              
                      <li key={guideline.name}>
                          <Link href={`#${guideline.name}`} onClick={collapseNav}>{`${guideline.num}. ${guideline.handle}`}</Link>
                          <SuccessCriteria successcriteria={guideline.successcriteria} status={status} />
                      </li>
      
                      )
                  })
              }
              </ul>
        );
    }
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
    <nav 
        aria-label="Table of contents" 
        className={styles.toc} 
        tabIndex="-1" 
        ref={navRef}
        id="toc">
        <ul>
        {
            data.principles.map((principle)=> {
                return (
                <li key={principle.name}>
                    <Link href={`#${principle.name}`}>{`${principle.num}. ${principle.handle}`}</Link>
                    <Guidelines guidelines={principle.guidelines} status={setTocStatus} />
                </li>
                )
            })
        }
        </ul>
    </nav>
    </div>
  );
}

'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/sc.module.css";

function Tests({tests}) {
    const detailsList = (details) => {
        return (
            <ul>
                {details.map((item, i)=> <li key={i}><span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
            </ul>
        )
    }
    const Impact = (impact) => {
        if(impact.length > 1) {
            return (<div>
                <span className="sr-only">Range between {impact[0]} and {impact[1]}</span>
                <span aria-hidden="true">
                    <span className={`badge ${impact[0].toLowerCase()}`}>{impact[0]}</span> &rarr; <span className={`badge ${impact[1].toLowerCase()}`}>{impact[1]}</span>
                </span>
            </div>)
        }
        return <span className={`badge ${impact[0].toLowerCase()}`}>{impact[0]}</span>
    }
    if(tests.length > 0) {
        return (
            <table className={styles.testsTable}>
                <thead>
                    <tr>
                        <th scope="col">Test</th>
                        <th scope="col">Impact</th>
                        <th scope="col">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tests.map((test, i)=> {
                        return(
                            <tr key={`t-${i}`}>
                                <td>
                                    <span dangerouslySetInnerHTML={{ __html: test.text }} />
                                    { test.details.length > 0 && detailsList(test.details) }
                                </td>
                                <td>
                                    { test.impact.length > 0 && Impact(test.impact) }
                                </td> 
                                <td>{test.impactNotes}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

function References({references}) {
        return (
            <table  className={styles.referencesTable}>
                <tbody>
                    {
                        Object.keys(references).map(source => {
                            const sourceName = () => {
                                switch (source) {
                                    case "wcag":
                                        return "WCAG 2.2"
                                    case "appleHumanInterface":
                                        return "Apple Human Interface"
                                    case "appleDeveloperDocs":
                                        return "Apple Developer Docs"
                                    case "androidAccessibilityPrinciples":
                                        return "Android Accessibility Principles"
                                    case "materialDesign":
                                        return "Material Design"
                                    default:
                                        return "";
                                }
                            }
                            const referencesList = (references) => {
                                return (
                                    <ul>
                                        {references.map((reference, i)=> <li key={i}><a href={reference.url}>{`${reference.title}${reference.level? ' ('+reference.level+')' : ''}`}</a></li>)}
                                    </ul>
                                )
                            }
                            return(
                                <tr key={source}>
                                    <th>
                                    { sourceName() }
                                    </th>
                                    <td>
                                    { references[source].length > 0 && referencesList(references[source]) }
                                    </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
}

function TestsTable({sc}) {
    const [tableStatus, setTableStatus] = useState(false);
    const tableRef = useRef(null);

    useEffect(() => {
        !tableStatus ? tableRef.current.setAttribute('inert', 'true') : tableRef.current.removeAttribute('inert')
    }, [tableStatus])
    return(
        <div className={styles.tableSection}>
            <h5 className={styles.accordionHeading}>
                <button 
                    aria-controls={`tests-${sc.name}`} 
                    aria-expanded={tableStatus}
                    onClick={()=> setTableStatus(!tableStatus)}>
                    {`Tests for success criterion ${sc.num}. ${sc.handle}`}
                    <span className={styles.accordionChevron} aria-hidden="true">▾</span>
                </button>
            </h5>
            <section id={`tests-${sc.name}`} ref={tableRef} inert>
                <Tests tests={sc.tests} />
            </section> 
        </div>
    )
}
function ReferencesTable({sc}) {
    const [tableStatus, setTableStatus] = useState(false);
    const tableRef = useRef(null);

    useEffect(() => {
        if(tableRef.current) {
            !tableStatus ? tableRef.current.setAttribute('inert', 'true') : tableRef.current.removeAttribute('inert')
        }
    }, [tableStatus])
    return(
        <div className={styles.tableSection}>
            <h5 className={styles.accordionHeading}>
                <button 
                    aria-controls={`references-${sc.name}`} 
                    aria-expanded={tableStatus}
                    onClick={()=> setTableStatus(!tableStatus)}>
                    {`References for success criterion ${sc.num}. ${sc.handle}`} 
                    <span className={styles.accordionChevron} aria-hidden="true">▾</span>
                </button>
            </h5>
            <section id={`references-${sc.name}`} ref={tableRef} inert>
                <References references={sc.references} />
            </section> 
        </div>
    )
}


export default function Sc({successcriteria}) {

    if(successcriteria.length > 0) {
        return (
            successcriteria.map((sc)=> {
                      return (
                        <div id={sc.name} className={styles.scSection} tabIndex="-1" key={sc.name}>
                            <h4 id={`heading-${sc.name}`}>{`Success Criterion ${sc.num}. ${sc.handle}`}</h4>
                            <p dangerouslySetInnerHTML={{ __html: sc.title }} />
                            <TestsTable sc={sc} />
                            <ReferencesTable sc={sc} />
                        </div>
                      )
                  })
        );
    }
}



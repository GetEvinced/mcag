'use client'
import styles from "../styles/mainNav.module.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


  export default function MainNav() {
    const pathname = usePathname()
    const isCurrent = (path) => {
        console.log(usePathname);
        return pathname === path ? "page" : undefined
    }
    return(
        <>
        <div className="skipLinks">
            { (isCurrent("/") || isCurrent("/terminology")) && <a href="#toc">Skip to table of contents</a>}
            <a href="#content">Skip to content</a>
        </div>
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <Link href="/" aria-current={isCurrent("/")}>MCAG</Link>
                </li>
                <li>
                    <Link href="/about" aria-current={isCurrent("/about")}>About</Link>
                </li>
                <li>
                    <Link href="/terminology" aria-current={isCurrent("/terminology")}>Terminology</Link>
                </li>
                <li>
                    <Link href="/formulas" aria-current={isCurrent("/formulas")}>Formulas</Link>
                </li>
            </ul>
        </nav>
        </>
    )
  }



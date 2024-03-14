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
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <Link href="/" aria-current={isCurrent("/")}>MCAG</Link>
                </li>
                <li>
                    <Link href="/terminology" aria-current={isCurrent("/terminology")}>Terminology</Link>
                </li>
                <li>
                    <Link href="/formulas">Formulas</Link>
                </li>
            </ul>
        </nav>
    )
  }



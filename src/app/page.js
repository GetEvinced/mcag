import styles from "./styles/page.module.css";
import { promises as fs } from 'fs';
import path from 'path';
import Toc from './components/guidelines-toc.js';
import Guidelines from './components/guidelines.js';

export const metadata = {
  title: "Mobile Content Accessibility Guidelines (MCAG)",
  description: "",
};

async function getData() {
  const filePath = path.join(process.cwd(), '/src/app/data/mcag.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  
  return data
}

export default async function Home() {
  const data = await getData();
  return (
      <main className={styles.main} >
        <h1>Mobile Content Accessibility Guidelines (MCAG)</h1>
        <div className={styles.guidelinesWrapper}>
           <Toc data={data} />
          <div className={styles.contentWrapper}>
          <section className={styles.prefix} id="content" tabIndex="-1">
            <h2>What is MCAG?</h2>
            <p>
            MCAG is intended to be a document that reflects the conformance requirements of <a href="https://www.w3.org/TR/WCAG22/">the W3C's Web Content Accessibility Guidelines (WCAG 2.2)</a> but also refers to the unique differences and challenges of mobile technologies that are not adequately expressed in WCAG. The document results from cross-referencing WCAG 2.2 success criteria with the accessibility guidelines of the different platforms and other sources.
            <br />
            MCAG was written into the template and structure of WCAG, and it preserves the four <a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/">POUR</a>. However, since its use is intended for development teams, its internal division relies more on <a href="https://developer.apple.com/design/human-interface-guidelines/accessibility">Apple's Human Interface Guidelines</a> and <a href="https://developer.android.com/guide/topics/ui/accessibility">Android's Accessibility Principles</a>. Accordingly, the guidelines' names, divisions, and success criteria are different. The differences are reflected mainly in wording and affiliation. However, any changes were made with reference and an affinity to WCAG and its content.
            <br />
            MCAG does not pretend to replace WCAG but only provides a uniform interpretation of it for mobile technologies while preserving its conformance requirements.
            </p>
            <p>
            The document in front of you is a first draft and an invitation to cooperation and community discussion on the need for clear and dedicated guidelines for mobile technologies that will meet the needs of users and regulatory requirements. See the <a href="https://github.com/GetEvinced/mcag">GitHub repository</a>
            </p>
          </section>
          {
              data.principles.map((principle)=> {
                  return (
                    <section id={principle.name} tabIndex="-1" key={principle.name}>
                      <h2 id={principle.name}>{`${principle.num}. ${principle.handle}`}</h2>
                      <p dangerouslySetInnerHTML={{ __html: principle.title }} />
                      <Guidelines guidelines={principle.guidelines} />
                    </section>
                  )
              })
          }
          </div>
        </div>
      </main>
  );
}

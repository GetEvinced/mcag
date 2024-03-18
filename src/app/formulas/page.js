import Link from 'next/link';
import styles from "../styles/formulas.module.css";

export const metadata = {
  title: "Formulas",
  description: "Conversion formulas that should help users convert the units defined in the tests or success criteria.",
};
export default async function Formulas() {
  return (

      <main className={styles.main} id="content" tabIndex="-1">
        <h1>Formulas for measurement units conversion</h1>
        <div className={styles.contentWrapper}>
          <p>
          The different mobile platforms use different measurement units, and these are usually relative and depend on the device's pixel density. In the guidelines there are success criteria and tests that require size reference, this page contains conversion formulas that should help users convert the units defined in the tests or success criteria. Each success criterion page that requires dealing with size or area has a link to this page.The formulas in this page were created based on data from the Android and iOS developer documentation and with the assistance of ChatGPT.
          </p>
          <div className={styles.warning}>
            <h2><span aria-hidden="true">⚠</span> Warning</h2>
            <p>
              The formulas on this page have not been sufficiently tested and may not be accurate. They are presented here as an idea of how to normalize the many units of measure from the different platforms to show them uniformly in the success criteria.
            </p>
          </div>
          <section>
            <h2>Scaled Pixels (sp) to Points (pt)</h2>
            <p>To calculate points from scaled pixels, use this formula: </p>
            <code className={styles.formula}>
              points = scaledPixels / displayDensity
            </code>
            <p>Where scaledPixels is the text size in "sp", and displayDensity is the device's screen density.</p>
            <p>Used in: <Link href="/#text-color-contrast">1.4.1 Text Color Contrast</Link></p>
          </section>
          <section>
            <h2>Density-Independent Pixels (dp) to Millimeters (mm)</h2>
<p>Converting density-independent pixels (dp) to millimeters (mm) must consider the device's screen density or dots per inch (dpi).</p>
<p>To convert dp to mm, you divide the number of dp by the product of the screen density (dpi) and the conversion factor (25.4). This conversion helps in dealing with different screen densities and provides a rough estimation of size in millimeters based on the device's density-independent pixels.</p>
<code className={styles.formula}>
mm = dpi × 25.4 / dp​
            </code>
            <ul>
              <li><code>dp</code> is the value in dp that you want to convert to millimeters.</li>
              <li><code>dpi</code> is the screen density of the device in dots per inch.</li>
              <li><code>25.4</code> is the conversion factor from inches to millimeters.</li>
            </ul>
            <p>
              Used in: <Link href="/#touch-target-size">2.1.1 Touch target Size</Link>
            </p>
          </section>
          <section>
            <h2>Scalable Pixels (sp) to Millimeters (mm)</h2>
            <p>Converting Scalable Pixels pixels (sp) to millimeters (mm) must consider the device's screen density or dots per inch (dpi).</p>
            <code className={styles.formula}>
              mm = sp / (dpi × font-size × 25.4​)
            </code>
            <ul>
              <li><code>sp</code> is the value in sp that you want to convert to millimeters.</li>
              <li><code>dpi</code> is the screen density of the device in dots per inch.</li>
              <li><code>font-size</code> is the user's preferred font scale factor.</li>
              <li><code>25.4</code> is the conversion factor from inches to millimeters.</li>
            </ul>
            <p>
              Used in: <Link href="/#touch-target-size">2.1.1 Touch target Size</Link>
            </p>
          </section>
          <section>
            <h2>Points (pt) to Millimeters (mm)</h2>
            <p>Converting points (pt) to millimeters (mm) must consider the device's screen density or dots per inch (dpi).</p>
            <p>However, to accurately convert points to millimeters, requires the exact points per inch (PPI) of the specific device you're targeting, which can vary based on the device model and its screen specifications. </p>
            <code className={styles.formula}>
              mm = pt / (PPI × 25.4)
            </code>
            <ul>
              <li><code>pt</code> is the value in points that you want to convert to millimeters.</li>
              <li><code>PPI</code> (points per inch) represents the screen density of the device in points per inch.</li>
              <li><code>25.4</code> is the conversion factor from inches to millimeters.</li>
            </ul>
            <p>
              Used in: <Link href="/#touch-target-size">2.1.1 Touch target Size</Link>
            </p>
          </section>
        </div>
      </main>
  );
}

import React from 'react';
import styles from './styles.module.css';
import AklizBanner from '@site/static/img/akliz_banner.png';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function AklizReferral(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    return (
      <section className={styles.referral}>
        <Link to={siteConfig.customFields['aklizUrl'] as string}><img src={AklizBanner} /></Link>
        <p className={styles.referralText}>
            The Ender IO Team are official Akliz partners! Akliz provides high-performance game hosting for games like Minecraft, Valheim, Satisfactory, ARK and more! Use our <Link to={siteConfig.customFields['aklizUrl'] as string}>coupon code</Link> for 20% off your first month!
        </p>
      </section>
    );
  }
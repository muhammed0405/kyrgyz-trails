/** @format */
"use client";
import { useTypedSelectorHook } from "@/app/redux/customHooks/useTypedSelectorHook";
import Link from "next/link";
import React from "react";
import styles from "../../styles/regions_page.module.scss";

export default function Page() {
  const regions = useTypedSelectorHook((state) => state.tours.tours);
  return (
    <div className={styles["regions-page"]}>
      <h1 className={styles["fade-in"]}>Regions of Kyrgyzstan</h1>
      <div className={styles["regions-grid"]}>
        {regions.map((region: any, index: any) => (
          <Link href={`/pages/regions/${region.id}`} key={region.id}>
            <div
              className={`${styles["region-card"]} ${styles["fade-in"]}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={styles["background-image"]}
                style={{ backgroundImage: `url(${region.imageUrl})` }}
              ></div>
              <div className={styles["content"]}>
                <h2>{region.name}</h2>
                <p>{region.shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

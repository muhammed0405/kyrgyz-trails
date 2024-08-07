/** @format */
"use client";
import Link from "next/link";
import { useEffect } from "react";
import Search from "./components/search/search";
import { UseTypedDispatch } from "./redux/customHooks/useTypedDispatch";
import { useTypedSelectorHook } from "./redux/customHooks/useTypedSelectorHook";
import styles from "./styles/page.module.scss";
export default function Home() {
  const regions = useTypedSelectorHook((state) => state.tours.regions);
  const { getRegions, getTours } = UseTypedDispatch();

  useEffect(() => {
    getRegions();
    getTours();
  }, []);

  console.log("regions", regions);
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <h1>Откройте для себя красоту Кыргызстана</h1>
        <p>
          Планируйте свое путешествие, бронируйте туры и делитесь впечатлениями
        </p>
        <Search />
      </section>

      <section className={styles.featuredDestinations}>
        <h2>Популярные направления</h2>
        <div className={styles.destinationGrid}>
          {["Иссык-Куль", "Ала-Арча", "Сон-Куль", "Джети-Огуз"].map(
            (destination) => (
              <div key={destination} className={styles.destinationCard}>
                <h3>{destination}</h3>
              </div>
            )
          )}
        </div>
      </section>

      <section className={styles.popularTours}>
        <h2>Все области</h2>
        <div className={styles.regionsGrid}>
          <div className={styles.regionSection}>
            {regions.map((el: any) => (
              <Link href={`/pages/region_details/${el.id}`} key={el.id}>
                <div
                  key={el.name}
                  className={styles.regionCard}
                  style={{
                    background: `url(${el.image})no-repeat center center/cover`,
                  }}
                >
                  <h3>{el.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function useTypedDispatch(): { getRegions: any } {
  throw new Error("Function not implemented.");
}

import React from "react";
import styles from "./tabs.module.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

interface Props {
  height: number;
  weight: number;
  abilities: Array<{
    pokemon_v2_ability: {
      name: string;
    };
  }>;
  types: Array<{
    pokemon_v2_type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
    };
  }>;
}
const Tabs = ({ height, weight, abilities, stats, types }: Props) => {
  return (
    <div className={styles.tabs}>
      <ul role="tablist">
        <li>
          <input type="radio" name="tabs" id="tab1" checked />
          <label
            htmlFor="tab1"
            role="tab"
            aria-selected="true"
            aria-controls="panel1"
            tabIndex={0}
          >
            Profil
          </label>
          <div
            id="tab-content1"
            className={styles.tabContent}
            role="tabpanel"
            aria-labelledby="description"
            aria-hidden="false"
          >
            <div className={styles.profil}>
              <div className={styles.block}>
                <div className={styles.line}>
                  <div className={styles.title}>Typ</div>
                  {types.map((type, index) => (
                    <div key={index}>{type.pokemon_v2_type.name}</div>
                  ))}
                </div>
                <div className={styles.line}>
                  <div className={styles.title}>Výška</div> <div>{height}m</div>
                </div>

                <div className={styles.line}>
                  <div className={styles.title}>Váha</div> <div>{weight}kg</div>
                </div>
              </div>

              <div className={styles.ability}>
                <div className={styles.title}>Dovednosti</div>
                <div>
                  {abilities.map((ability, index) => (
                    <p key={index}>{ability.pokemon_v2_ability.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <input type="radio" name="tabs" id="tab2" />
          <label
            htmlFor="tab2"
            role="tab"
            aria-selected="false"
            aria-controls="panel2"
            tabIndex={0}
          >
            Statistiky
          </label>
          <div
            id="tab-content2"
            className={styles.tabContent}
            role="tabpanel"
            aria-labelledby="specification"
            aria-hidden="true"
          >
            {stats.map((stat) => {
              const {
                base_stat,
                pokemon_v2_stat: { name },
              } = stat;
              return (
                <div className={styles.stats} key={name}>
                  <div className={styles.statsName}>{name}</div>
                  <ProgressBar completed={base_stat} />
                </div>
              );
            })}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;

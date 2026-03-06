// components/ExteriorColours.js

import { Container, Row, Col } from "react-bootstrap";
import { FaPalette } from "react-icons/fa";
import styles from "./index.module.scss";
import Link from "next/link";
import TitleHeader from "../titleHeader";
import { TiArrowRightOutline } from "react-icons/ti";
import { useTranslation } from 'next-i18next'
import ExteriorProductPage from "@/components/exteriorProductPage";
import { homePageColorOptions } from "@/utils/exteriorInteriorFinish";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";


 
const ExteriorColours = () => {
  const { t } = useTranslation('common')
  const router = useRouter();
  const { locale } = router;
  const pageUrls = pageURLS[locale];

  return (
    <div className={styles.exteriorColours}>
    
       <ExteriorProductPage
          title={t("curatedSelectionTitle")}
          subtitle={t("curatedSelectionSubtitle")}
          imageRef={null}
          imageReftwo={null}
          items={homePageColorOptions}
        />
        <div className="d-flex justify-content-center mt-5">
          <Link href={`${pageUrls.products}#color-options`} className={styles.viewOptionsBtn}>
            {t('viewAllOptionsButton')} <TiArrowRightOutline className="ms-1" />
          </Link>
        </div>
    </div>
  );
};

export default ExteriorColours;

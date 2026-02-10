// components/ExteriorColours.js

import { Container, Row, Col } from "react-bootstrap";
import { FaPalette } from "react-icons/fa";
import styles from "./index.module.scss";
import Link from "next/link";
import TitleHeader from "../titleHeader";
import { TiArrowRightOutline } from "react-icons/ti";
import { useTranslation } from 'next-i18next'
import Image from "next/image";

 

const ExteriorProductPage = ({title, subtitle, imageRef, imageReftwo, items}) => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.exteriorColours}>
      
      <TitleHeader
        whyChoose={[]}
        title={title}
        subtitle={subtitle}
      />
      <Container className={styles.container}>
        {imageRef && <Image src={imageRef} alt="Product Image" width={800} height={600} />}
        {imageReftwo && <Image src={imageReftwo} alt="Product Image" width={800} height={600} />}
        <div className={styles.colorGrid}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.swatchWrapper}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
              
            >
              {/* <Link href={`/${color.slug}`} className={styles.swatchLink}> */}
              <Link href={`#`} className={styles.swatchLink}>
                {/* <div
                  className={styles.swatch}
                  style={{ backgroundColor: '#ccc' }}
                /> */}
                {item.image && <Image src={item.image} alt={`${item.colorName} - ${item.modelName}`} width={300} height={200} style={{borderRadius: '100%'}} />}
                <h6>{item.colorName}</h6>
                <p className={styles.label}>{item.modelName}</p>
              </Link>
            </div>
          ))}
        </div>
        
      </Container>
    </div>
  );
};

export default ExteriorProductPage;

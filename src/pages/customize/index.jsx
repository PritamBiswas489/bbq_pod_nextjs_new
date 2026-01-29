import React from "react";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import InnerBanner from "@/components/innerBanner";

import hero2 from "@/assets/front/images/hero-2.webp";

// kitchen
import miniKitchen from "@/assets/front/images/kitchen/mini/2210-1.jpg";
import plusKitchen from "@/assets/front/images/kitchen/plus/1/2690.jpg";
import proKitchen from "@/assets/front/images/kitchen/pro/1/3180.jpg";
import maxKitchen from "@/assets/front/images/kitchen/max/1/3500.jpg";
import ultraKitchen from "@/assets/front/images/kitchen/ultra/1/3760.jpg";
// miniImage
import image1 from "@/assets/front/images/kitchen/mini/1-2210.png";
import image2 from "@/assets/front/images/kitchen/mini/2-2210.png";
import image3 from "@/assets/front/images/kitchen/mini/3-2210.png";
import image4 from "@/assets/front/images/kitchen/mini/4-2210.png";
import image5 from "@/assets/front/images/kitchen/mini/5-2210.png";
import image6 from "@/assets/front/images/kitchen/mini/1.png";
import image7 from "@/assets/front/images/kitchen/mini/2.png";
import image8 from "@/assets/front/images/kitchen/mini/3.png";
import image9 from "@/assets/front/images/kitchen/mini/4.png";
import image10 from "@/assets/front/images/kitchen/mini/5.png";
import image11 from "@/assets/front/images/kitchen/mini/6.png";
import image12 from "@/assets/front/images/kitchen/mini/7.png";
import image13 from "@/assets/front/images/kitchen/mini/8.png";
import image14 from "@/assets/front/images/kitchen/mini/9.png";
import image15 from "@/assets/front/images/kitchen/mini/10.png";
import image16 from "@/assets/front/images/kitchen/mini/11.png";
import image17 from "@/assets/front/images/kitchen/mini/12.png";
import image18 from "@/assets/front/images/kitchen/mini/12-1.png";
import image19 from "@/assets/front/images/kitchen/mini/13.png";
import image20 from "@/assets/front/images/kitchen/mini/14.png";
import image21 from "@/assets/front/images/kitchen/mini/15.png";
import image22 from "@/assets/front/images/kitchen/mini/16.png";
import image23 from "@/assets/front/images/kitchen/mini/17-2210.png";
import image24 from "@/assets/front/images/kitchen/mini/18-2210.png";
import image25 from "@/assets/front/images/kitchen/mini/19-2210.png";
import image26 from "@/assets/front/images/kitchen/mini/20-2210.png";
import image27 from "@/assets/front/images/kitchen/mini/21-2210.png";

// plusImage
import plus1 from "@/assets/front/images/kitchen/plus/2/1-2210.png";
import plus2 from "@/assets/front/images/kitchen/plus/2/2-2210.png";
import plus3 from "@/assets/front/images/kitchen/plus/2/3-2210.png";
import plus4 from "@/assets/front/images/kitchen/plus/2/4-2210.png";
import plus5 from "@/assets/front/images/kitchen/plus/2/5-2210.png";
import plus6 from "@/assets/front/images/kitchen/plus/2/1.png";
import plus7 from "@/assets/front/images/kitchen/plus/2/2.png";
import plus8 from "@/assets/front/images/kitchen/plus/2/3.png";
import plus9 from "@/assets/front/images/kitchen/plus/2/4.png";
import plus10 from "@/assets/front/images/kitchen/plus/2/5.png";
import plus11 from "@/assets/front/images/kitchen/plus/2/6.png";
import plus12 from "@/assets/front/images/kitchen/plus/2/7.png";
import plus13 from "@/assets/front/images/kitchen/plus/2/8.png";
import plus14 from "@/assets/front/images/kitchen/plus/2/9.png";
import plus15 from "@/assets/front/images/kitchen/plus/2/10.png";
import plus16 from "@/assets/front/images/kitchen/plus/2/11.png";
import plus17 from "@/assets/front/images/kitchen/plus/2/12.png";
import plus18 from "@/assets/front/images/kitchen/plus/2/12-1.png";
import plus19 from "@/assets/front/images/kitchen/plus/2/13.png";
import plus20 from "@/assets/front/images/kitchen/plus/2/14.png";
import plus21 from "@/assets/front/images/kitchen/plus/2/15.png";
import plus22 from "@/assets/front/images/kitchen/plus/2/16.png";
import plus23 from "@/assets/front/images/kitchen/plus/2/17-2210.png";
import plus24 from "@/assets/front/images/kitchen/plus/2/18-2210.png";
import plus25 from "@/assets/front/images/kitchen/plus/2/19-2210.png";
import plus26 from "@/assets/front/images/kitchen/plus/2/20-2210.png";
import plus27 from "@/assets/front/images/kitchen/plus/2/21-2210.png";

// proImage
import pro1 from "@/assets/front/images/kitchen/pro/2/1-3180.png";
import pro2 from "@/assets/front/images/kitchen/pro/2/3-3180.png";
import pro3 from "@/assets/front/images/kitchen/pro/2/2-3180.png";
import pro4 from "@/assets/front/images/kitchen/pro/2/4-3180.png";
import pro5 from "@/assets/front/images/kitchen/pro/2/5-3180.png";
import pro6 from "@/assets/front/images/kitchen/pro/2/1-3180-1.png";
import pro7 from "@/assets/front/images/kitchen/pro/2/2-3180-1.png";
import pro8 from "@/assets/front/images/kitchen/pro/2/3-3180-1.png";
import pro9 from "@/assets/front/images/kitchen/pro/2/4--3180.png";
import pro10 from "@/assets/front/images/kitchen/pro/2/5--3180.png";
import pro11 from "@/assets/front/images/kitchen/pro/2/6--3180.png";
import pro12 from "@/assets/front/images/kitchen/pro/2/7--3180.png";
import pro13 from "@/assets/front/images/kitchen/pro/2/8--3180.png";
import pro14 from "@/assets/front/images/kitchen/pro/2/9--3180.png";
import pro15 from "@/assets/front/images/kitchen/pro/2/10-3180.png";
import pro16 from "@/assets/front/images/kitchen/pro/2/11--3180.png";
import pro17 from "@/assets/front/images/kitchen/pro/2/12-2.png";
import pro18 from "@/assets/front/images/kitchen/pro/2/12-3.png";
import pro19 from "@/assets/front/images/kitchen/pro/2/13-1.png";
import pro20 from "@/assets/front/images/kitchen/pro/2/14-1.png";
import pro21 from "@/assets/front/images/kitchen/pro/2/15-1.png";
import pro22 from "@/assets/front/images/kitchen/pro/2/16-1.png";
import pro23 from "@/assets/front/images/kitchen/pro/2/17-3180.png";
import pro24 from "@/assets/front/images/kitchen/pro/2/18-3180.png";
import pro25 from "@/assets/front/images/kitchen/pro/2/19-3180.png";
import pro26 from "@/assets/front/images/kitchen/pro/2/20-3180.png";
import pro27 from "@/assets/front/images/kitchen/pro/2/21-3180.png";

// maxImage
import max1 from "@/assets/front/images/kitchen/max/2/1-3500.png";
import max2 from "@/assets/front/images/kitchen/max/2/3-3500.png";
import max3 from "@/assets/front/images/kitchen/max/2/2-3500.png";
import max4 from "@/assets/front/images/kitchen/max/2/4-3500.png";
import max5 from "@/assets/front/images/kitchen/max/2/5-3500.png";
import max6 from "@/assets/front/images/kitchen/max/2/1-3500-1.png";
import max7 from "@/assets/front/images/kitchen/max/2/2-3500-1.png";
import max8 from "@/assets/front/images/kitchen/max/2/3-3500-1.png";
import max9 from "@/assets/front/images/kitchen/max/2/4--3500.png";
import max10 from "@/assets/front/images/kitchen/max/2/5--3500.png";
import max11 from "@/assets/front/images/kitchen/max/2/6--3500.png";
import max12 from "@/assets/front/images/kitchen/max/2/7--3500.png";
import max13 from "@/assets/front/images/kitchen/max/2/8--3500.png";
import max14 from "@/assets/front/images/kitchen/max/2/9--3500.png";
import max15 from "@/assets/front/images/kitchen/max/2/10-3500.png";
import max16 from "@/assets/front/images/kitchen/max/2/11--3500.png";
import max17 from "@/assets/front/images/kitchen/max/2/12-3500.png";
import max18 from "@/assets/front/images/kitchen/max/2/12-4.png";
import max19 from "@/assets/front/images/kitchen/max/2/13-2.png";
import max20 from "@/assets/front/images/kitchen/max/2/14-2.png";
import max21 from "@/assets/front/images/kitchen/max/2/15-2.png";
import max22 from "@/assets/front/images/kitchen/max/2/16-2.png";
import max23 from "@/assets/front/images/kitchen/max/2/17-3500.png";
import max24 from "@/assets/front/images/kitchen/max/2/18-3500.png";
import max25 from "@/assets/front/images/kitchen/max/2/19-3500.png";
import max26 from "@/assets/front/images/kitchen/max/2/20-3500.png";
import max27 from "@/assets/front/images/kitchen/max/2/21-3500.png";

// ultra

import ultra1 from "@/assets/front/images/kitchen/ultra/2/1-3760.png";
import ultra2 from "@/assets/front/images/kitchen/ultra/2/3-3760.png";
import ultra3 from "@/assets/front/images/kitchen/ultra/2/2-3760.png";
import ultra4 from "@/assets/front/images/kitchen/ultra/2/4-3760.png";
import ultra5 from "@/assets/front/images/kitchen/ultra/2/5-3760.png";
import ultra6 from "@/assets/front/images/kitchen/ultra/2/1-3760-1.png";
import ultra7 from "@/assets/front/images/kitchen/ultra/2/2-3760-1.png";
import ultra8 from "@/assets/front/images/kitchen/ultra/2/3-3760-1.png";
import ultra9 from "@/assets/front/images/kitchen/ultra/2/4--3760.png";
import ultra10 from "@/assets/front/images/kitchen/ultra/2/5--3760.png";
import ultra11 from "@/assets/front/images/kitchen/ultra/2/6--3760.png";
import ultra12 from "@/assets/front/images/kitchen/ultra/2/7--3760.png";
import ultra13 from "@/assets/front/images/kitchen/ultra/2/8--3760.png";
import ultra14 from "@/assets/front/images/kitchen/ultra/2/9--3760.png";
import ultra15 from "@/assets/front/images/kitchen/ultra/2/10-3760.png";
import ultra16 from "@/assets/front/images/kitchen/ultra/2/11--3760.png";
import ultra17 from "@/assets/front/images/kitchen/ultra/2/12-3760.png";
import ultra18 from "@/assets/front/images/kitchen/ultra/2/12-5.png";
import ultra19 from "@/assets/front/images/kitchen/ultra/2/13-3.png";
import ultra20 from "@/assets/front/images/kitchen/ultra/2/14-3.png";
import ultra21 from "@/assets/front/images/kitchen/ultra/2/15-3.png";
import ultra22 from "@/assets/front/images/kitchen/ultra/2/16-3.png";
import ultra23 from "@/assets/front/images/kitchen/ultra/2/17-3760.png";
import ultra24 from "@/assets/front/images/kitchen/ultra/2/18-3760.png";
import ultra25 from "@/assets/front/images/kitchen/ultra/2/19-3760.png";
import ultra26 from "@/assets/front/images/kitchen/ultra/2/20-3760.png";
import ultra27 from "@/assets/front/images/kitchen/ultra/2/21-3760.png";

// outerFrame
import bg1 from "@/assets/front/images/kitchen/mini/1-1.jpg";
import bg2 from "@/assets/front/images/kitchen/mini/2-1.jpg";
import bg3 from "@/assets/front/images/kitchen/mini/3-1.jpg";
import bg4 from "@/assets/front/images/kitchen/mini/4-1.jpg";
import bg5 from "@/assets/front/images/kitchen/mini/5-1.jpg";

// cabinetDoor
import bg6 from "@/assets/front/images/kitchen/mini/1-2210-2.jpg";
import bg7 from "@/assets/front/images/kitchen/mini/2-2210-2.jpg";
import bg8 from "@/assets/front/images/kitchen/mini/3-2210-2.jpg";
import bg9 from "@/assets/front/images/kitchen/mini/4-2210-2.jpg";
import bg10 from "@/assets/front/images/kitchen/mini/5-2210-2.jpg";

// powerCoting
import bg11 from "@/assets/front/images/kitchen/mini/7-2210-1.jpg";
import bg12 from "@/assets/front/images/kitchen/mini/8-2210-1.jpg";
import bg13 from "@/assets/front/images/kitchen/mini/9-2210-1.jpg";
import bg14 from "@/assets/front/images/kitchen/mini/10-2210-1.jpg";
import bg15 from "@/assets/front/images/kitchen/mini/11-2210-1.jpg";
import bg16 from "@/assets/front/images/kitchen/mini/12-2210-2.jpg";

// TRANSFER PRINTING
import bg17 from "@/assets/front/images/kitchen/mini/12-2.jpg";
import bg18 from "@/assets/front/images/kitchen/mini/13-1.jpg";
import bg19 from "@/assets/front/images/kitchen/mini/14-1.jpg";

// SINTERED STONE
import bg20 from "@/assets/front/images/kitchen/mini/15-1.jpg";
import bg21 from "@/assets/front/images/kitchen/mini/16-1.jpg";

// STAINLESS STEEL
import bg22 from "@/assets/front/images/kitchen/mini/17-1.jpg";
import bg23 from "@/assets/front/images/kitchen/mini/18-1.jpg";

// SINTERED STONE
import bg24 from "@/assets/front/images/kitchen/mini/19-1.jpg";
import bg25 from "@/assets/front/images/kitchen/mini/20-1.jpg";
import bg26 from "@/assets/front/images/kitchen/mini/21-1.jpg";

import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/cta";

const Customize = () => {
  // leftImg
  const mini = [
    { img: image1.src },
    { img: image2.src },
    { img: image3.src },
    { img: image4.src },
    { img: image5.src },
    { img: image6.src },
    { img: image7.src },
    { img: image8.src },
    { img: image9.src },
    { img: image10.src },
    { img: image11.src },
    { img: image12.src },
    { img: image13.src },
    { img: image14.src },
    { img: image15.src },
    { img: image16.src },
    { img: image17.src },
    { img: image18.src },
    { img: image19.src },
    { img: image20.src },
    { img: image21.src },
    { img: image22.src },
    { img: image23.src },
    { img: image24.src },
    { img: image25.src },
    { img: image26.src },
    { img: image27.src },
  ];
  const plus = [
    { img: plus1.src },
    { img: plus2.src },
    { img: plus3.src },
    { img: plus4.src },
    { img: plus5.src },
    { img: plus6.src },
    { img: plus7.src },
    { img: plus8.src },
    { img: plus9.src },
    { img: plus10.src },
    { img: plus11.src },
    { img: plus12.src },
    { img: plus13.src },
    { img: plus14.src },
    { img: plus15.src },
    { img: plus16.src },
    { img: plus17.src },
    { img: plus18.src },
    { img: plus19.src },
    { img: plus20.src },
    { img: plus21.src },
    { img: plus22.src },
    { img: plus23.src },
    { img: plus24.src },
    { img: plus25.src },
    { img: plus26.src },
    { img: plus27.src },
  ];
  const pro = [
    { img: pro1.src },
    { img: pro2.src },
    { img: pro3.src },
    { img: pro4.src },
    { img: pro5.src },
    { img: pro6.src },
    { img: pro7.src },
    { img: pro8.src },
    { img: pro9.src },
    { img: pro10.src },
    { img: pro11.src },
    { img: pro12.src },
    { img: pro13.src },
    { img: pro14.src },
    { img: pro15.src },
    { img: pro16.src },
    { img: pro17.src },
    { img: pro18.src },
    { img: pro19.src },
    { img: pro20.src },
    { img: pro21.src },
    { img: pro22.src },
    { img: pro23.src },
    { img: pro24.src },
    { img: pro25.src },
    { img: pro26.src },
    { img: pro27.src },
  ];
  const max = [
    { img: max1.src },
    { img: max2.src },
    { img: max3.src },
    { img: max4.src },
    { img: max5.src },
    { img: max6.src },
    { img: max7.src },
    { img: max8.src },
    { img: max9.src },
    { img: max10.src },
    { img: max11.src },
    { img: max12.src },
    { img: max13.src },
    { img: max14.src },
    { img: max15.src },
    { img: max16.src },
    { img: max17.src },
    { img: max18.src },
    { img: max19.src },
    { img: max20.src },
    { img: max21.src },
    { img: max22.src },
    { img: max23.src },
    { img: max24.src },
    { img: max25.src },
    { img: max26.src },
    { img: max27.src },
  ];
  const ultra = [
    { img: ultra1.src },
    { img: ultra2.src },
    { img: ultra3.src },
    { img: ultra4.src },
    { img: ultra5.src },
    { img: ultra6.src },
    { img: ultra7.src },
    { img: ultra8.src },
    { img: ultra9.src },
    { img: ultra10.src },
    { img: ultra11.src },
    { img: ultra12.src },
    { img: ultra13.src },
    { img: ultra14.src },
    { img: ultra15.src },
    { img: ultra16.src },
    { img: ultra17.src },
    { img: ultra18.src },
    { img: ultra19.src },
    { img: ultra20.src },
    { img: ultra21.src },
    { img: ultra22.src },
    { img: ultra23.src },
    { img: ultra24.src },
    { img: ultra25.src },
    { img: ultra26.src },
    { img: ultra27.src },
  ];

  // RightImg
  const outerFrame = [
    { img: bg1.src },
    { img: bg2.src },
    { img: bg3.src },
    { img: bg4.src },
    { img: bg5.src },
  ];
  const powerCoting = [
    { img: bg6.src },
    { img: bg7.src },
    { img: bg8.src },
    { img: bg9.src },
    { img: bg10.src },
    { img: bg1.src },
    { img: bg11.src },
    { img: bg12.src },
    { img: bg13.src },
    { img: bg14.src },
    { img: bg15.src },
    { img: bg16.src },
  ];

  const transferPainting = [
    { img: bg17.src },
    { img: bg18.src },
    { img: bg19.src },
  ];
  const sinteredStone = [{ img: bg20.src }, { img: bg21.src }];
  const stainless = [{ img: bg22.src }, { img: bg23.src }];
  const sinterdStone = [
    { img: bg24.src },
    { img: bg25.src },
    { img: bg26.src },
  ];

  return (
    <Layout>
      <InnerBanner
        badgeText="Customized Outdoor Kitchen"
        title="BBQ Pods"
        subtitle={[]}
        description1="Unlock better living"
        description2={[]}
        backgroundImage={hero2.src}
        links={[]}
      />
      <section className={style.customizeSection}>
        <div className="container-fluid">
          <div className="row">
            <div className={style.left}>
              <div className={style.display}>
                <Image
                  src={miniKitchen.src}
                  alt=""
                  height={1493}
                  width={2000}
                />
                {/* <Image
                  src={plusKitchen.src}
                  alt=""
                  height={1493}
                  width={2000}
                /> */}
                {/* <Image src={proKitchen.src} alt="" height={1493} width={2000} /> */}
                {/* <Image
                  src={ultraKitchen.src}
                  alt=""
                  height={1493}
                  width={2000}
                /> */}
                {/* leftImg */}
                <ul className={style.mainImg}>
                  {mini.map((image, index) => (
                    <li key={index}>
                      <Link href="#" className={style.absoluteImg}>
                        <Image
                          src={image.img}
                          alt=""
                          width={1200}
                          height={600}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul
                  className={style.mainImg}
                  style={{
                    display: "none",
                  }}
                >
                  {plus.map((image, index) => (
                    <li key={index}>
                      <Link href="#" className={style.absoluteImg}>
                        <Image
                          src={image.img}
                          alt=""
                          width={1200}
                          height={600}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul
                  className={style.mainImg}
                  style={{
                    display: "none",
                  }}
                >
                  {pro.map((pro, index) => (
                    <li key={index}>
                      <Link href="#" className={style.absoluteImg}>
                        <Image src={pro.img} alt="" width={1200} height={600} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul
                  className={style.mainImg}
                  style={{
                    display: "none",
                  }}
                >
                  {max.map((max, index) => (
                    <li key={index}>
                      <Link href="#" className={style.absoluteImg}>
                        <Image src={max.img} alt="" width={1200} height={600} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul
                  className={style.mainImg}
                  style={{
                    display: "none",
                  }}
                >
                  {ultra.map((ultra, index) => (
                    <li key={index}>
                      <Link href="#" className={style.absoluteImg}>
                        <Image
                          src={ultra.img}
                          alt=""
                          width={1200}
                          height={600}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.handeler}>
                <div className={style.handelerHeader}>
                  <h5>Design</h5>
                  <ul>
                    <li>
                      <Link href={"#"} className={style.active}>
                        A-MINI<span>2210</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        A-PLUS<span>2690</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        A-PRO<span>3180</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        A-MAX<span>3500</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        A-ULTRA<span>3760</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={style.handelerBox}>
                  <h5>Outer frame color</h5>
                  <ul className={style.colorList}>
                    {outerFrame.map((bg, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className={style.colorItem}
                          style={{
                            backgroundImage: `url(${bg.img})`,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={style.handelerBox}>
                  <h5>Cabinet door palel color</h5>
                  <div className={style.handelerBoxInner}>
                    <h6>POWDER COATING</h6>
                    <ul className={style.colorList}>
                      {powerCoting.map((bg, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={style.handelerBoxInner}>
                    <h6>TRANSFER PRINTING</h6>
                    <ul className={style.colorList}>
                      {transferPainting.map((bg, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={style.handelerBoxInner}>
                    <h6>SINTERED STONE</h6>
                    <ul className={style.colorList}>
                      {sinteredStone.map((bg, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={style.handelerBox}>
                  <h5>Countertop</h5>
                  <div className={style.handelerBoxInner}>
                    <h6>STAINLESS STEEL</h6>
                    <ul className={style.colorList}>
                      {stainless.map((bg, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={style.handelerBoxInner}>
                    <h6>SINTERED STONE</h6>
                    <ul className={style.colorList}>
                      {sinterdStone.map((bg, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </Layout>
  );
};

export default Customize;

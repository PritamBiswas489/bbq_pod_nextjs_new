import React, { use, useEffect } from "react";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import InnerBanner from "@/components/innerBanner";
import hero2 from "@/assets/front/images/hero-2.webp";
import { useState, useReducer } from "react";


import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/cta";
import Loader from "@/components/loader";
import { mini, plus, pro, max, ultra, outerFrame, powerCoting, transferPainting, sinteredStone, stainless, sinterdStone, categoryList } from "@/utils/imageElements";


const initialState = {
    selectedCategoryId: "a-mini-2210",
    outFrameSelectedIndex: null,
    powderCotingSelectedIndex: null,
    transferPrintingSelectedIndex: null,
    sinteredStoneSelectedIndex: null,
    countertopSteelSelectedIndex: null,
    countertopStoneSelectedIndex: null,
  };

const changingCategoryReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...initialState,
        selectedCategoryId: action.payload,
      };
    case "CHANGE_OUTER_FRAME":
      return {
        ...state,
        outFrameSelectedIndex: action.payload,
      };
    case "CHANGE_POWDER_COTING":
      return {
        ...state,
        powderCotingSelectedIndex: action.payload,
      };
    case "CHANGE_TRANSFER_PRINTING":
      return {
        ...state,
        transferPrintingSelectedIndex: action.payload,
      };
    case "CHANGE_SINTERED_STONE":
      return {
        ...state,
        sinteredStoneSelectedIndex: action.payload,
      };  
    case "CHANGE_COUNTERTOP_STEEL":
      return {
        ...state,
        countertopSteelSelectedIndex: action.payload,
      }
    case "CHANGE_COUNTERTOP_STONE":
      return {
        ...state,
        countertopStoneSelectedIndex: action.payload,
      }
    case "RESET_CUSTOMIZE":
      return initialState;  

    default:
      return state;
  }
};

const Customize = () => {
  // leftImg
  const [categoryState, dispatch] = useReducer(changingCategoryReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOnCategoryChange, setIsLoadingOnCategoryChange] = useState(false);

  useEffect(() => {
    console.log("categoryState changed:", categoryState);
  }, [categoryState]);

  useEffect(() => {
    setIsLoading(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  }, []);

  // Handle loader when category changes
  useEffect(() => {
    if (isLoadingOnCategoryChange) {
      const timer = setTimeout(() => {
        setIsLoadingOnCategoryChange(false);
      }, 500); // Adjust duration as needed
      return () => clearTimeout(timer);
    }
  }, [isLoadingOnCategoryChange]);

  //change product category 
  const changeProductCategory = (category) => {
    setIsLoadingOnCategoryChange(true);
    dispatch({ type: "CHANGE_CATEGORY", payload: category });
  };
  // change outer frame color
  const changeOuterFrame = (index) => {
    dispatch({ type: "CHANGE_OUTER_FRAME", payload: index });
  };
  // change cabinet door palel color
  const changePowderCoating = (index) => {
    dispatch({ type: "CHANGE_TRANSFER_PRINTING", payload: null });
    dispatch({ type: "CHANGE_SINTERED_STONE", payload: null });
    dispatch({ type: "CHANGE_POWDER_COTING", payload: index + 5 });
  }
  //change transfer printing
  const changeTransferPrinting = (index) => {
    dispatch({ type: "CHANGE_POWDER_COTING", payload: null });
    dispatch({ type: "CHANGE_SINTERED_STONE", payload: null });
    dispatch({ type: "CHANGE_TRANSFER_PRINTING", payload: index + 17 });
  }  
  const changeSinteredStone = (index) => {
    dispatch({ type: "CHANGE_TRANSFER_PRINTING", payload: null });
    dispatch({ type: "CHANGE_POWDER_COTING", payload: null });
    dispatch({ type: "CHANGE_SINTERED_STONE", payload: index + 20 });
  };
  const changeCountertopSteel = (index) => {
    dispatch({ type: "CHANGE_COUNTERTOP_STEEL", payload: index + 22 });
  };
  const changeCountertopStone = (index) => {
    dispatch({ type: "CHANGE_COUNTERTOP_STONE", payload: index + 24 });
  };
  return (
    <Layout>
      <Loader isVisible={isLoadingOnCategoryChange} />
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
                  src={
                    categoryList.find(
                      (cat) => cat.id === categoryState.selectedCategoryId,
                    ).image
                  }
                  alt=""
                  height={1493}
                  width={2000}
                />
                {/* leftImg */}
                <ul className={style.mainImg}>
                  {categoryList
                    .find((cat) => cat.id === categoryState.selectedCategoryId)
                    .elements.map((image, index) => {
                      let displayStyle = { display: "none" };
                      if (image.part === "Outer_frame_color") {
                        displayStyle =
                          index === categoryState.outFrameSelectedIndex
                            ? { display: "block" }
                            : { display: "none" };
                      }
                      else if(image.part === "Powder_Coating"){
                        displayStyle =
                        categoryState.powderCotingSelectedIndex &&    index === categoryState.powderCotingSelectedIndex  
                            ? { display: "block" }
                            : { display: "none" };
                      }
                      else if(image.part === "transfer_printing"){
                        displayStyle =
                        categoryState.transferPrintingSelectedIndex &&    index === categoryState.transferPrintingSelectedIndex  
                            ? { display: "block" }
                            : { display: "none" };
                      }
                      else if(image.part === "SINTERED_STONE"){
                        displayStyle =
                        categoryState.sinteredStoneSelectedIndex &&    index === categoryState.sinteredStoneSelectedIndex  
                            ? { display: "block" } :
                            { display: "none" };

                      }else if(image.part === "Countertop_steel"){
                        displayStyle =
                        categoryState.countertopSteelSelectedIndex &&    index === categoryState.countertopSteelSelectedIndex
                            ? { display: "block" }
                            : { display: "none" };
                      }
                      else if(image.part === "Countertop_stone"){
                        displayStyle =
                        categoryState.countertopStoneSelectedIndex &&    index === categoryState.countertopStoneSelectedIndex
                            ? { display: "block" }
                            : { display: "none" };
                      }
                      return (
                        <li key={index} style={displayStyle}>
                          <Link href={""} className={style.absoluteImg}>
                            <img
                              src={image.img}
                              alt=""
                              width={1200}
                              height={600}
                            />
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.handeler}>
                <div className={style.handelerHeader}>
                  <h5>Design</h5>
                  <ul>
                    {categoryList.map((category) => (
                      <li key={category.id}>
                        <Link
                          className={
                            categoryState.selectedCategoryId === category.id
                              ? style.active
                              : ""
                          }
                          onClick={(e) =>{
                             e.preventDefault();
                             changeProductCategory(category.id)
                          } }
                          href={""}
                        >
                          {category.name}
                          <span>{category.model}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={style.handelerBox}>
                  <h5>Outer frame color</h5>
                  <ul className={style.colorList}>
                    {outerFrame.map((bg, index) => (
                      <li key={index}>
                        <Link
                          href={"#"}
                          className={style.colorItem}
                          style={{
                            backgroundImage: `url(${bg.img})`,
                            ...(categoryState.outFrameSelectedIndex === index
                              ? { border: "4px solid #f7502f" }
                              : {}),
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            changeOuterFrame(index);
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
                            href={"#"}
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                              ...(categoryState.powderCotingSelectedIndex && categoryState.powderCotingSelectedIndex - 5 === index  ? { border:"4px solid #f7502f" } : {})
                            }}
                            onClick={(e)=>{
                               e.preventDefault();
                               changePowderCoating(index);

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
                            href={""}
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                              ...(categoryState.transferPrintingSelectedIndex && categoryState.transferPrintingSelectedIndex - 17 === index  ? { border:"4px solid #f7502f" } : {})
                            }}
                            onClick={(e)=>{
                               e.preventDefault();
                               changeTransferPrinting(index);
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
                            href={""}
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                              ...(categoryState.sinteredStoneSelectedIndex && categoryState.sinteredStoneSelectedIndex - 20 === index  ? { border:"4px solid #f7502f" } : {})
                            }}
                            onClick={(e)=>{
                               e.preventDefault();
                               changeSinteredStone(index);
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
                            href={""}
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                              ...(categoryState.countertopSteelSelectedIndex && categoryState.countertopSteelSelectedIndex - 22 === index  ? { border:"4px solid #f7502f" } : {})
                            }}
                            onClick={(e)=>{
                              e.preventDefault();
                              changeCountertopSteel(index);
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
                        <li key={index} >
                          <Link
                            href={""}
                            className={style.colorItem}
                            style={{
                              backgroundImage: `url(${bg.img})`,
                              ...(categoryState.countertopStoneSelectedIndex && categoryState.countertopStoneSelectedIndex - 24 === index  ? { border:"4px solid #f7502f" } : {})
                            }}
                            onClick={(e)=>{
                              e.preventDefault();
                              changeCountertopStone(index);
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

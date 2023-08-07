import React from "react";
import Image from "next/image";
import styles from "../styles/indexPage.module.scss";
import Header from "components/Header";
import Section from "components/Section";
import BodyText from "components/Body";
import { data } from "dataSource";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Index() {
  console.log("Data: ", data[13])
  return (
    <div className={styles.pageWrapper}>
      <Section bgColor="#c9f414">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring", stiffness: 50 }}
          viewport={{ once: false }}
          className={styles.ponzi}
        >
          <Image src="/pyramid.png" width={560} height={550} alt="Pyramid" />
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>1. {data[0].header.toUpperCase()}</Header>
          <BodyText>{data[0].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#FEA794">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 17 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>2. {data[1].header.toUpperCase()}</Header>
          <BodyText>{data[1].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.pastor}
        >
          <Image src="/Pastor.png" width={560} height={650} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#309ead">
        <motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>3. {data[2].header.toUpperCase()}</Header>
          <BodyText>{data[2].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.luthuli}
        >
          <Image src="/Luthuli.png" width={600} height={840} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#03F1FA">
        <div className={styles.bodyLeft}>
          <Header level={1}>4. {data[3].header.toUpperCase()}</Header>
          <BodyText>{data[3].body}</BodyText>
        </div>
        <motion.img
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 2, stiffness: 100 }}
          viewport={{ once: false }}
          src="/WashWash.png"
          alt="washwash"
          className={styles.washwash}
        />
      </Section>
      <Section bgColor="#F97F89">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: false }}
          className={styles.nywele}
        >
          <Image src="/shuka.png" width={600} height={760} alt="Shuka" />
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>5. {data[4].header.toUpperCase()}</Header>
          <BodyText>{data[4].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#329dad">
        <motion.div
          className={styles.ben10}
          initial={{ x: 200 }}
          whileInView={{ x: -10 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <Image src="/ben10.png" width={680} height={560} alt="Pastor" />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>6. {data[5].header.toUpperCase()}</Header>
          <BodyText>{data[5].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#991e21">
        <motion.div
          initial={{ opacity: 0, scale: "50%" }}
          whileInView={{ opacity: 1, scale: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className={styles.iphone}
        >
          <Image src="/HAND.png" width={680} height={560} alt="iPhone" />
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>7. {data[6].header.toUpperCase()}</Header>
          <BodyText>{data[6].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#dfd946">
        <motion.img
          initial={{ opacity: 0, scale: "50%" }}
          whileInView={{ opacity: 1, scale: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          src="/streetboy.png"
          alt="Streetboy"
          className={styles.shitstorm}
        />
        <div className={styles.bodyLeft}>
          <Header level={1}>8. {data[7].header.toUpperCase()}</Header>
          <BodyText>{data[7].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#d1383b">
        <motion.div
          initial={{ opacity: 0, scale: "0%" }}
          whileInView={{ opacity: 1, scale: "70%", rotate: "360deg" }}
          transition={{ duration: 1, stiffness: 100 }}
          viewport={{ once: false }}
          className={styles.logbook}
        >
          <Image src="/LOGBOOK.png" width={680} height={580} alt="Logbook" />
        </motion.div>
        <div className={styles.bodyRight}>
          <Header level={1}>9. {data[8].header.toUpperCase()}</Header>
          <BodyText>{data[8].body}</BodyText>
        </div>
      </Section>
      <Section bgColor="#8ab035">
        <motion.div
          initial={{ x: 100, opacity: 0, y: 100 }}
          whileInView={{ x: 0, opacity: 1, y: 20 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>10. {data[9].header.toUpperCase()}</Header>
          <BodyText>{data[9].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className={styles.house}
        >
          <Image src="/house.png" width={680} height={800} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#3560b0">
        <motion.img
          initial={{ y: 200 }}
          whileInView={{ y: 10 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          src="/multilevel.png"
          alt="Multilevel"
          className={styles.multilevel}
        />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 10 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>11. {data[10].header.toUpperCase()}</Header>
          <BodyText>{data[10].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#e9868b">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.patapotea}
        >
          <Image src="/patapotea.png" width={480} height={600} alt="Pastor" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>12. {data[11].header.toUpperCase()}</Header>
          <BodyText>{data[11].body}</BodyText>
        </motion.div>
      </Section>
      <Section bgColor="#bfe3aa">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>13. {data[12].header.toUpperCase()}</Header>
          <BodyText>{data[12].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.newspaper}
        >
          <Image src={data[12].image} width={680} height={800} alt="Pastor" />
        </motion.div>
      </Section>
      <Section bgColor="#f7ce91">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 100 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>14. {data[17].header.toUpperCase()}</Header>
          <BodyText>{data[17].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.duka}
        >
          <Image src={data[17].image} width={595} height={700} alt="Betting" />
        </motion.div>
      </Section>
      <Section bgColor="#99e5e3">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>15. {data[13].header.toUpperCase()}</Header>
          <BodyText>{data[13].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={styles.biz}
        >
          <Image
            src={data[13].image}
            width={680}
            height={800}
            alt="Naanza Biz"
          />
        </motion.div>
      </Section>
      <Section bgColor="#ebeeb2">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 100 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyLeft}
        >
          <Header level={1}>16. {data[14].header.toUpperCase()}</Header>
          <BodyText>{data[14].body}</BodyText>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          src={data[14].image}
          alt="vote"
          className={styles.vote}
        />
      </Section>
      <Section bgColor="#99e5e3">
        <motion.div
          initial={{ y: -1 }}
          whileInView={{ y: 5 }}
          transition={{ duration: 1.5, stiffness: 10 }}
          viewport={{ once: false }}
          className={styles.bodyRight}
        >
          <Header level={1}>17. {data[15].header.toUpperCase()}</Header>
          <BodyText>{data[15].body}</BodyText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
          className={styles.phone}
        >
          <Image src={data[15].image} width={640} height={700} alt="phone" />
        </motion.div>
      </Section>
    </div>
  );
}

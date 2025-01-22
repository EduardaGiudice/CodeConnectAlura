"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import errorImage from "../../public/errorImage.png"
import styles from "./error/error.module.css"
import { ArrowBack } from "@/components/icons/ArrowBack";
import { Heading } from "@/components/Heading";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);


  return (
    <div className={styles.container}>
      <Image src={errorImage} alt="imagem de erro" />
      <Heading style={{ color: "white" }}>Opa! Um erro ocorreu.</Heading>
      <h3>Não conseguimos carregar a página, volte para seguir navegando</h3>
      <div >
       <Link href="/">Voltar ao feed <ArrowBack color='#81Fe88'/></Link>
      </div>
    </div>
  );
}

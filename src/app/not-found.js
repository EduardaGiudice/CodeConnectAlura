import Image from "next/image";
import notFoundImage from "../../public/notFoundImage.png"
import { Heading } from "@/components/Heading";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Link from "next/link";
import styles from './not-found.module.css'


export default function NotFound (){
    return (
      <div className={styles.container}>
        <Image src={notFoundImage} />
        <Heading style={{ color: "white" }}>
          Ops! Página não encontrada!
        </Heading>
        <div >
          <p style={{color: 'white'}}>Você pode voltar ao feed e continuar buscando projetos incíveis</p>
          <Link href="/">
            Voltar ao feed <ArrowBack color="#81Fe88" />
          </Link>
        </div>
      </div>
    );
}
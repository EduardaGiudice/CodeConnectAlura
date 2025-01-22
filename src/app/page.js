import { CardPost } from "@/components/CardPost/Index";
import styles from "./page.module.css";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page, search) {
  try {

    const where = {}

    if (search) {
      where.title = {
        contains: search,
        mode: 'insensitive'
      }
    } else {
      
    }

    const perPage = 4;

    const skip = (page - 1) * perPage

    const totalItems = await db.post.count({where})

    const totalPages = Math.ceil(totalItems / perPage)

    const prev = page > 1 ? page -1 : null

    const next = page < totalPages ? page + 1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { created_at: 'desc' },
      include: {
        author: true,
      },
    });

    return { data: posts, prev, next};
  } catch (error) {
    console.log("falha ao obter post");
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1)
  const search = searchParams.q
  const { data: posts, prev, next } = await getAllPosts(currentPage, search);
  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.link}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: search } }}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: search } }}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}

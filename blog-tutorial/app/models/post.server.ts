import type { Post } from "@prisma/client";
import { prisma } from "~/db.server";

/**
 * postテーブルから一括取得
 * @returns 
 */
export async function getPosts() {
  return prisma.post.findMany();
}

/**
 * postテーブルから条件取得
 * @param slug 
 * @returns 
 */
export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

/**
 * テーブルに投稿内容を挿入するメソッド
 * @param post 
 * @returns 
 */
export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}
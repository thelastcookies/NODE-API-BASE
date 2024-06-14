import prisma from "../prisma";

export const createUser = (email: string, name?: string) => {
    return prisma.user.create({
        data: {
            email,
            name,
        },
    });
};

export const getUsers = () => {
    return prisma.user.findMany();
};



// import { BaseService } from "./base.ts";
// import { Prisma } from "@prisma/client";
//
// class UserService extends BaseService {
//     async getAllUsers() {
//         return this.prisma.user.findMany();
//     }
//
//     async createUser({ name, email, posts }) {
//         const postData = posts
//             ? posts.map((post: Prisma.PostCreateInput) => {
//                 return { title: post.title, content: post.content || undefined }
//             })
//             : [];
//
//         return this.prisma.user.create({
//             data: { name, email, posts: { create: postData, }, },
//         });
//     }
//
//     async getUserDrafts(id: number) {
//         return this.prisma.user
//             .findUnique({ where: { id, }, })
//             .posts({ where: { published: false }, });
//     }
// }
//
// export default new UserService();

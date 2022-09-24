interface Post{
    id: number;
    title: string;
    uploadDate: string;
    img?: string;
    userId: number;
    content: string;
    comments: string[];

}

export {Post}
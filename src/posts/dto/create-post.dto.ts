export class CreatePostDto {
  user: string;
  post_date: string;
  description: string;
  likes: number;
  url_image?: string;
  comments?: [
    {
      user: string;
      comment: string;
    },
  ];
}

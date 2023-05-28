export interface userProps {
    _id: string,
    name: string,
    user: string,
    birthdate: Date | string,
    email: string,
    password: string,
    profile_photo: string
}

export interface loginProps {
  name: string,
  profile_photo: string
}

export interface postProps {
  _id: string,
  user: string,
  post_date: Date | string,
  description: string,
  likes: number,
  comments: commentProps[],
  url_image: string
}

export interface commentProps {
  _id: string,
  user: string,
  comment: string
}

export interface PromiseType {
  user: userProps, 
  auth: boolean
}

export interface InputErrors {
  user: string,
  pass: string,
  serverError: string,
  [key: string]: string
}
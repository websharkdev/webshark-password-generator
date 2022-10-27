export interface Image {
  src: string
  alt: string
  size?: 'xl' | 'lg' | 'md' | 'xs'
}

export interface HomeSwiperItem {
  id: number
  image: Image
}

/*
    TODO

    01. Add folder hooks
        001. check best practicals of custom hooks
    02. Check react-hanger (it's shit 4 do some changes with arrays)

*/

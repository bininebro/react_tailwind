export interface MainBannerResponse {
  mainBannerId: number
  title: string
  sort: number
  pcImageUrl: string
  mobileImageUrl: string
  linkUrl: string
  startDate: string
  endDate: string
  creator: string
  updater: string
  deleter?: any
  createdAt: string
  updatedAt: string
  deletedAt?: any
}

export interface MainShortcutResponse {
  mainShortcutId: number
  title: string
  sort: number
  imageUrl: string
  linkUrl: string
  creator: string
  updater: string
  deleter?: any
  createdAt: string
  updatedAt: string
  deletedAt?: any
}

//

export interface Collections {
  items: Item2[]
  totalCount: number
}

export interface Item2 {
  id: number
  type: string
  code: string
  title: string
  subtitle: string
  description: string
  trialPeriod?: any
  installmentPrice?: any
  installmentPeriod?: any
  rating: number
  startDate?: any
  endDate?: any
  viewType?: string
  createdAt: string
  items: Item[]
  media: Media[]
  thumbnail?: Media
  taggings: Tagging[]
  singleCollections: any[]
}

interface Tagging {
  createdAt: string
  updatedAt: string
  deletedAt?: any
  collectionId: number
  tagId: number
  isOpen: boolean
  tag: Tag
}

interface Tag {
  createdAt: string
  updatedAt: string
  deletedAt?: any
  id: number
  code: string
  name: string
  description?: any
  type: string
}

export interface Item {
  createdAt: string
  updatedAt: string
  deletedAt?: any
  uuid: string
  name: string
  body?: any
  collectionId: number
  key: string
  seq: number
  entityType: string
  entityId: number
  optionKey?: any
  publication: Publication
  prdType: number
}

interface Publication {
  id: number
  title: string
  code: string
  productId: number
  prdType: number
  offeringType: string
  rating: number
  isExistResidual: boolean
  isAdult: number
  preface: string
  prefaceIconUrl: string
  productName: string
  brandName: string
  media: Media[]
  isTrial: boolean
  tagsOnImage: string[]
  tagsOnDesc: any[]
  priceInfo: PriceInfo
  discounts: Discount[]
  applyCoupon: boolean
}

interface Discount {
  id: number
  name?: any
  type: string
  calcMethod: string
  value: number
  activeFrom?: any
  activeTo?: any
  qty: number
  remain?: any
}

interface PriceInfo {
  price: number
  discountPrice: number
  discountRate: number
}

interface Media {
  seq: number
  type: string
  uri: string
  mimeType: string
  deviceType?: any
}

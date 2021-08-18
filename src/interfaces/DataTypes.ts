export interface DataTypes {
  id: string
  name: string
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  } | null
  startYear: number
}

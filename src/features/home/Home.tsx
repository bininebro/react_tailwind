import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Banner from "./components/Banner"
import ShopingBlock from "./components/ShopingBlock"
import { getMainExhibitionAsync } from "../utlis/homeAsync"
import { CardList } from "./components/CardList"

export const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { mainExhibition } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getMainExhibitionAsync())
  }, [dispatch])

  const single = useMemo(() => {
    return mainExhibition?.items.filter(
      item => item.type === "SINGLE" && item.viewType === "TILE",
    )
  }, [mainExhibition])

  return (
    <>
      <Banner />
      <ShopingBlock />
      <img
        src="https://cf.channel.io/pub-file/50553/624ea0d446dedf2e9132/channeltalk.png"
        className="z-10 fixed bottom-10 right-10  "
        width={50}
      />
      {single &&
        single.map(item => {
          return <CardList items={item} key={item.id} />
        })}
    </>
  )
}

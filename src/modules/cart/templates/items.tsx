import { HttpTypes } from '@medusajs/types'
import Item from '@modules/cart/components/item'

type ItemsTemplateProps = {
  items?: HttpTypes.StoreCartLineItem[]
}

const ItemsTemplate = ({ items }: ItemsTemplateProps) => {
  return (
    <>
      {items
        ?.sort((a, b) => {
          return (a.created_at ?? '') > (b.created_at ?? '') ? -1 : 1
        })
        .map((item) => {
          return <Item key={item.id} item={item} />
        })}
    </>
  )
}

export default ItemsTemplate

import {OptimisticSortOrder} from '@/components/OptimisticSortOrder'
import {studioUrl} from '@/sanity/lib/api'
import {createDataAttribute, stegaClean} from 'next-sanity'
import Link from 'next/link'
import {ArrowRight, Phone} from "@phosphor-icons/react/dist/ssr"

export function Navbar(props) {
  const {data} = props
  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null



  return (
    <header data-sanity={dataAttribute?.('menuItems')}>
      <div className="container">
        <div className="menu">
          <div className="bars">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="links">
          <OptimisticSortOrder id={data?._id!} path="menuItems">
            {data?.menuItems?.map((menuItem) => {
              return (
                <Link
                  key={menuItem._key}
                  data-sanity={dataAttribute?.([
                    'menuItems',
                    {_key: menuItem._key as unknown as string},
                  ])}
                  href={menuItem.link}
                >
                  {stegaClean(menuItem.title)}
                </Link>
              )
            })}
          </OptimisticSortOrder>
        </div>
        <div className="cta">
          <a href={data?.menuMainButton?.link}>
            <button>
              <div className="center">
                {/* <i className="ph ph-phone" /> */}
                <Phone />
                <p>{data?.menuMainButton?.title}</p> <ArrowRight />
              </div>
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}

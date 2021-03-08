import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoWithCircle } from '@styled-icons/entypo/InfoWithCircle'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Turistando"
        description="A simple prroject to show the coolest places to visit."
        canonical="https:/turistando.felipidis.com.br"
        openGraph={{
          url: 'https:/turistando.felipidis.com.br',
          title: 'Turistando',
          description: 'A simple prroject to show the coolest places to visit.',
          images: [
            {
              url: 'https://turistando.felipidis.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Turistando'
            }
          ],
          site_name: 'Turistando'
        }}
      />
      <LinkWrapper href="/about">
        <InfoWithCircle size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

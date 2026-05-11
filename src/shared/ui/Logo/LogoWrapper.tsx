import Image from 'next/image'

type TThemeVariant = { themeVariant: 'light' | 'dark' }

export const LogoWrapper = ({ themeVariant }: TThemeVariant) => {
  return (
    <>
      {themeVariant === 'light' ? (
        <Image src="/logotype.svg" alt="SpeiL logo" width={227} height={71} />
      ) : (
        <Image src="/logotype-light.svg" alt="SpeiL logo" width={227} height={71} />
      )}
    </>
  )
}

type TThemeVariant = { themeVariant: 'light' | 'dark' }

export const LogoWrapper = ({ themeVariant }: TThemeVariant) => {
  return (
    <>
      {themeVariant === 'light' ? (
        <img src="/logotype.svg" alt="SpeiL logo" />
      ) : (
        <img src="/logotype-light.svg" alt="SpeiL logo" />
      )}
    </>
  )
}

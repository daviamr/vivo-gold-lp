function Index({ children, bgBlack = false, isOpen = true }: DefaultModalProps) {

  if (!isOpen) return (<div />)

  return (
    <div className={`h-screen flex justify-center items-center p-4 ${bgBlack && 'absolute w-full left-0 bg-black/90'}`}>
      {children}
    </div>
  )
}

export default Index

type DefaultModalProps = {
  children: any,
  bgBlack?: boolean,
  isOpen?: boolean
}
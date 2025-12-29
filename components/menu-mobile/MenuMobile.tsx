import Image from "next/image"
import Link from "next/link"

function Index({ isOpen = true, typePerson }: MenuMobileProps) {
  return (
    <div className={`flex flex-col duration-300 h-0 overflow-hidden ${isOpen ? 'h-27 px-2 my-2' : ''}`}>
      <Link href={'/pf'}
        className={`cursor-pointer duration-300 hover:text-default-purple hover:font-bold
        ${(typePerson === 'pf') ? 'font-bold text-default-purple' : ''}`}>
        Para Você
      </Link>
      <Link href={'/pj'}
        className={`cursor-pointer duration-300 hover:text-default-purple hover:font-bold
          ${(typePerson === 'pj') ? 'font-bold text-default-purple' : ''}`}>
        Para Empresas
      </Link>

      <Image src={'/logo-gold.webp'} alt="Logo Gold" width={112} height={60}/>
    </div>
  )
}

type MenuMobileProps = {
  isOpen: boolean,
  typePerson?: string
}

export default Index
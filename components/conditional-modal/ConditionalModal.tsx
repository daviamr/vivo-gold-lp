'use client'

import { usePathname } from 'next/navigation'
import ModalPfPj from '../modal-pf-pj/ModalPfPj'

function Index({ typePerson }: { typePerson: string }) {
  const pathname = usePathname()

  if (pathname.endsWith('/checkout')) return null

  return <ModalPfPj typePerson={typePerson} />
}

export default Index
import React from 'react'
import { useRouter } from 'next/router'

const ShortName = () => {
    const router = useRouter();
    const { shortName } = router.query
  return (
    <div>
        {shortName}
    </div>
  )
}

export default ShortName
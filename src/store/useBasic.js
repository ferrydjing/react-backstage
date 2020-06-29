import { useState } from 'react'
import { createModel } from 'hox'

const useBasicModel = () => {
  const [isMobile, setIsMobile] = useState(false)

  const judgeIsMobile = () => {
    console.log('isMobile:', document.body.clientWidth < 768)
    setIsMobile(document.body.clientWidth < 768)
  }

  return { isMobile, judgeIsMobile }
}

export default createModel(useBasicModel)

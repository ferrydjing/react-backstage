import React, { memo } from 'react'
import { PageInfo } from '_c'

const Button = (props) => {
  return (
    <div>
      <PageInfo>
        <p>
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
        </p>
      </PageInfo>
    </div>
  )
}

export default memo(Button)

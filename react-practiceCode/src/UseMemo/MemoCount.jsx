import React, { useRef,memo } from 'react'

 const Count = () => {
    const renderedCount = useRef(0);
  return (
    <div>
        <p>Nothing Changed here but Rendered :{renderedCount.current++} time'(s)</p>
    </div>
  )
}

export default memo(Count) 
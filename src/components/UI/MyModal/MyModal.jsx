import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({children, visile, setVisible}) => {

  const rootClasses = [cl.myModal]
  if(visile) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}

export default MyModal
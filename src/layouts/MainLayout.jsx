import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='{styles.appContainer}'>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout

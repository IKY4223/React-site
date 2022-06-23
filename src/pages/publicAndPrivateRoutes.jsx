import React from 'react'
import { Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router'

const publicAndPrivateRoutes = () => {
  return (
    <div>
      {privateRoutes.map(route => 
            <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
            />    
        )}  
        {publicRoutes.map(route => 
            <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
            />    
        )}  
    </div>
  )
}

export default publicAndPrivateRoutes
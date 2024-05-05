import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation, useMatches } from "react-router-dom";
import '../../Stylesheets/BreadCrumb/BreadCrumb.css'

const BreadCrumb = () => {
    //const location = useLocation();
    
    //console.log(location.pathname);

    //const Rutas = useMatches();
    //console.log(rutas);
    
    return (
        <div className='navBreadCrumbContainer'>
        <Breadcrumb separator='>' className='navBreadCrumb'>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
  )
}

export default BreadCrumb

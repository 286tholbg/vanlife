import React, { useEffect, useState} from "react";
import { NavLink, Link, useParams,  Outlet } from "react-router-dom";

export default function HostVanDetail() {

    const [currentVan, setCurrentVan] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))

        }, [id])

        const activeStyles = {
            fontWeight: "bold",
            textDecoration: "underline",
            color: "#161616"
        }

        if(!currentVan){
            return <h1>Loading...</h1>
        }

    const vanElement = currentVan.map(van => (
        <div key={van.id} className="host-van-detail">
            <img src={van.imageUrl} width={150}/>
            <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${van.type}`}>
                    {van.type}
                </i>
                <h3>{van.name}</h3>
                <h4>{van.price} / Day</h4>
            </div>
        </div>
    ))

    return (
       <section>
            <Link 
                to={".."}
                end
                className="back-button"
                relative="path">&larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                {vanElement}

            {/* Navigation Bar for Vans Details */}
            <nav className="host-van-detail-nav">
                <NavLink to="." style={({isActive}) => isActive ? activeStyles : null }>Details</NavLink>
                <NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null }>Pricing</NavLink>
                <NavLink to="photos" style={({isActive}) => isActive ? activeStyles : null }>Photos</NavLink>
            </nav>

            <Outlet />
            </div>
       </section>
    )
}
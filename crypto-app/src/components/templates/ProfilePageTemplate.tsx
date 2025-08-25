import { useParams } from 'next/navigation';
import React from 'react'
import Breadcrumb from '../molecules/Breadcrumb/Breadcrumb';
import Navbar from '../organisms/Navbar/Navbar';
import UserProfile from '../organisms/UserProfile/UserProfile';

const ProfilePageTemplate = () => {

    const params = useParams();
    const uid = Array.isArray(params.uid) ? params.uid[0] : params.uid;

    return (
        <>
            <Navbar />
            <Breadcrumb header="profile" />
            <UserProfile uid={uid ?? ""} />
        </>
    )
}

export default ProfilePageTemplate
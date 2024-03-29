import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/smallbits/SectionTitle';
import { UserInfoTable } from './UserInfoTable';
import { UserContext } from '../../contexts/user.context';

export const MyAccount = () => {
    const { t, i18n } = useTranslation();
    // Load user context
    const userContext = useContext(UserContext);
    // Import its methods
    const {
        isAuthenticated,
        user,
        getUserInfo
    } = userContext;

    // Get user info on component mount
    useEffect(() => {
        getUserInfo();
    }, []);

    return isAuthenticated ? (
        <>
            <SectionTitle text={`${t('welcome-text-trailing-firstname')}, ${user?.firstName}`} />
            <UserInfoTable />
        </>
    ) : (
        <div>Not logged</div>
    );

}

import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/ui/smallbits/PageTitle';
import { LoginForm } from '../components/user/LoginForm';
import { MyAccount } from '../components/user/MyAccount';
import { UserContext } from '../contexts/user.context';
import { ServerStatus } from '../components/ui/ServerStatus';
import {SUNBEAM_ENDPOINT} from '../config/env';
// RESTRICTED

export const AccountMy = () => {
  const { t, i18n } = useTranslation();
  // Load user context
  const userContext = useContext(UserContext);
  // Import its methods
  const {
    isAuthenticated,
    user,
    login,
    logout,
    getUserInfo
  } = userContext;

  const handleEndSession = () => {
    logout();
  }

  return (
    <div>
      <img src={`${SUNBEAM_ENDPOINT}/files?filename=1697281811384.jpg`} alt="image-banner"  className='h-40 w-full'/>
      <PageTitle text={t('my-account-title')} />
      {isAuthenticated ?
        (
          <>
            <MyAccount />
            <div
              className='m-4 text-white cursor-pointer p-2 rounded-md max-w-xs text-center bg-red-500 hover:bg-red-600'
              onClick={handleEndSession}
            >
              {t('end-session-button-text')}
            </div>
          </>
        ) : (
          <LoginForm />
        )
      }
      <ServerStatus />
    </div>
  );

}

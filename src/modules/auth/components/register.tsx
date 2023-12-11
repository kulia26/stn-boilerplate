'use client';

import React, { FC } from 'react';
import { AuthRegisterForm } from '@stn-ui/forms';
import { useAuthorize } from '@/modules/auth/hooks/use-authorize';

export const Register: FC = () => {
  const { handleFormSubmit } = useAuthorize('register');

  return <AuthRegisterForm onSubmit={handleFormSubmit} />;
};

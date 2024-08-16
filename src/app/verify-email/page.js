'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VerifyEmail() {
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      axios
        .post('https://timebank-305bb7cb7d96.herokuapp.com/verify-email', { token })
        .then(() => {
          setVerificationStatus('Email verified successfully!');
        })
        .catch((error) => {
          setVerificationStatus(
            `Verification failed: ${error.response?.data?.message || error.message}`,
          );
        });
    } else {
      setVerificationStatus('Invalid verification link.');
    }
  }, [searchParams]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold mb-4'>Email Verification</h1>
      <p className='text-xl'>{verificationStatus}</p>
    </div>
  );
}

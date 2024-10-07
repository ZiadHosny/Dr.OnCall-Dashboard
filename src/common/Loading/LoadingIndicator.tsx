import React from 'react';
import { Rings } from 'react-loader-spinner';
import { useAppSelector } from '../../stores/hooks';

export const LoadingIndicator = () => {
    const isLoading = useAppSelector((state) => state.loading.isLoading);

    return isLoading ? (
        <div
            className='overlay absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700'
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}>
            <Rings
                height="100"
                width="100"
                color="blue"
                ariaLabel="loading"
            />
        </div>
    ) : null;
};
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                margin: 0,
                padding: 0,
            }}
        >
            <img
                src="/404.jpg"
                alt="404 Not Found"
                style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                }}
            />
        </div>
    );
};

export default NotFound;
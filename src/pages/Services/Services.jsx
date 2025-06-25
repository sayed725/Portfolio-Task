import React from 'react';
import PageHeader from '../../shared/PageHeader';
import WhatDo from './WhatDo';

const Services = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <div className='max-w-7xl mx-auto'>
              <PageHeader title="Popular Services" />

              <WhatDo />
              
            </div>
        </div>
    );
};

export default Services;
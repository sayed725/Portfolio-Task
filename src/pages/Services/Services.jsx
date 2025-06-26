import React from 'react';
import PageHeader from '../../shared/PageHeader';
import WhatDo from './WhatDo';
import PopularServices from '../../components/PopularServices/PopularServices';
import Pricing from '../../components/Pricing/Pricing';

const Services = () => {
    return (
        <div className='min-h-screen'>
            <div className=''>
              <PageHeader title="Popular Services" />

             <div>
                 <WhatDo />
             </div>

             <div>
                <PopularServices />
             </div>

             <div>
                <Pricing />
             </div>
              
            </div>
        </div>
    );
};

export default Services;
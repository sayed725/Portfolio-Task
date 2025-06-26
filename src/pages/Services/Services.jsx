import React, { useEffect } from 'react';
import PageHeader from '../../shared/PageHeader';
import WhatDo from './WhatDo';
import PopularServices from '../../components/PopularServices/PopularServices';
import Pricing from '../../components/Pricing/Pricing';

const Services = () => {


    // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




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
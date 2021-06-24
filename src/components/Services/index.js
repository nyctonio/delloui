import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-5.svg';

import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './ServicesElements'

export default function Services() {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall revenue
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Benifits</ServicesH2>
                    <ServicesP>
                        You can access our platform online anywhere in the world.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benifits</ServicesH2>
                    <ServicesP>
                        Unlock your premium membership card that returns 5% cashback.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>  
        </>
    )
}

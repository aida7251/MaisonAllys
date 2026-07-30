import { useState } from "react";

import HeroServices from "../components/HeroServices";
import IntroServices from "../components/IntroServices";
import ServicesGrid from "../components/ServicesGrid";
import ServiceDrawer from "../components/ServiceDrawer";
import WhyChooseServices from "../components/WhyChooseServices";
// import ProcessServices from "../components/ProcessServices";

export default function Services() {

    const [selectedService, setSelectedService] = useState(null);

    return (
        <>

            <HeroServices />

            <IntroServices />

            <ServicesGrid
                onSelectService={setSelectedService}
            />

            <ServiceDrawer
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />
            <WhyChooseServices />
            {/* <ProcessServices /> */}

        </>
    );
}
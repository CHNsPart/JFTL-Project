import React from 'react';


const About = () => {
  return (
    <div className="min-h-[100%] py-20 flex flex-col justify-center items-center w-full">
      <h1 className="text-7xl mb-10 w-full text-center text-bold font-black text-brandBlue">
        About Us
      </h1>

      <div className="w-full h-fit flex flex-row justify-start items-start lg:my-0 md:my-0">

        <div className="w-full h-fit flex flex-col justify-start items-start lg:my-0 md:my-0">
        
         <p className="py-2 text-md w-full pl-5 pr-2.5 text-justify">
            Incorporated in 2015, Japan Fast Trade Ltd (JFTL) started its journey as a joint venture (JV) between Japan and Bangladesh with an aim to explore and develop new opportunities based on the resources available in the seafood segment in and around the Sundarbans, the world’s largest single terrain mangrove forest and the pride of Bangladesh. The ultimate aim being developing an economic movement in one of the remotest and disadvantaged part of Bangladesh and thereby helping local underprivileged people to have an access to economic freedom and a better way of living.
          </p>
          <p className="py-2 text-md w-full pl-5 pr-2.5 text-justify">
At present, JFTL is a JV between J Group, Japan and Azma International Ltd (AIL), Bangladesh. Since 1977, J Group is a trusted name in the food industry in Japan whereas AIL is new in this sector in Bangladesh. Besides investment, both the member of the JV team actively participates in managing the entire chain of the business. AIL mainly manages the operational part that include product sourcing, hatchery operation, farming, processing & production, storage & export. On the other hand, J group looks after the sales & marketing part along with technical planning & guidance for the business. Around fifteen valuable business partners from four major continents (America, Europe, Asia & Australia) have been an important part of this entire economic process and thereby contributing to the development of the local stakeholders as well as Bangladesh.
          </p>
        <p className="py-2 text-md w-full pl-5 pr-2.5 text-justify">
As part of our commitment to offer the best possible seafoods from the mother nature to our valued clients, we focus most on Quality Assurance (QA) at each and every stage of our operation. Challenges are everywhere, but JFTL QA team along with the guidance & support from J Group Japan QC team have been working in maintaining our standards and also striving for continuous improvement. We are certified by internationally recognized food safety standards like HACCP & BRC.
          </p>
        </div>
        <div className="w-full h-fit flex flex-col justify-center justify-self-start items-center lg:my-0 md:my-20">
          <p className="py-2 text-md w-full pl-2.5 pr-5 text-justify">
In addition to our regular operations, we never shifted our focus from our core commitment to the development of the local society and the lifestyle of the underprivileged people. So, as part of our Corporate Social Responsibility (CSR), other than offering employment & training opportunities for both the genders, we regularly conduct some other social & development activities like offering Pure Drinking Water to the locals, Medical Supports, Education Scholarships, developing Road Communications, River Bank Maintenance & Protection, Sluice Gate Repair, Cyclone Recovery Program, optimized quality Rationing System for the employee, etc. Also as part of our commitment to saving the Environment, we use Effluent Treatment Plant (ETP) to treat the used processing plant water and recycle those back to the plant again.
          </p>
          <p className="py-2 text-md w-full pl-2.5 pr-5 text-justify">
In addition to our regular operations, we never shifted our focus from our core commitment to the development of the local society and the lifestyle of the underprivileged people. So, as part of our Corporate Social Responsibility (CSR), other than offering employment & training opportunities for both the genders, we regularly conduct some other social & development activities like offering Pure Drinking Water to the locals, Medical Supports, Education Scholarships, developing Road Communications, River Bank Maintenance & Protection, Sluice Gate Repair, Cyclone Recovery Program, optimized quality Rationing System for the employee, etc. Also as part of our commitment to saving the Environment, we use Effluent Treatment Plant (ETP) to treat the used processing plant water and recycle those back to the plant again.
          </p>
        </div>
{/*           <div className="w-full h-screen">
            <div className="h-16 w-16 shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
              <GiBurningForest size={30} className="text-brandBlue" />
            </div>
          </div> */}
         
          
{/*           <div className="w-[30rem]">
            <button
              className={`bg-gradient-to-r from-lightBrandBlue to-darkBrandBlue w-48 h-16 rounded-full text-white text-md tracking-wider mt-5`}
            >
              Know More
            </button>
          </div> */}
        </div>
{/*         <div className="w-full hidden lg:flex flex-col justify-center justify-self-start items-center">
          <Image
            src={map}
            className="max-h-[500px] lg:h-auto md:max-h-[500px] max-w-[300px]"
            height={'auto'}
            width={'auto'}
          />
        </div> */}
      </div>
  );
};

export default About;

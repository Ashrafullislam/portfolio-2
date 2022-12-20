import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import UnderLine from '../../../UnderLine/UnderLine';
import './MySkills.css';

const MySkills = () => {
  return (
    <section className='w-full h-auto bg-primary py-5  '>
  
        {/* main skill div start  */}
        <div className='w-10/12 mx-auto'>
        <UnderLine > </UnderLine>
        <h4 className="text-warning text-lg ml-5 "> Skills </h4>
      <h1 className="lg:text-4xl  font-bold ml-5 "> My Skills </h1>
      <div className='w-full mt-14 bg-primary shadow mx-auto prog-line '>
        <div>
         <label className='m-0' > Html </label>
         <ProgressBar
          width="90%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="95"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>

        <div>
         <label > Css </label>
         <ProgressBar
          width="90%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="90"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>
        
        <div>
         <label > React Bootstrap </label>
         <ProgressBar
          width="92%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="92"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>
       
        <div>
         <label > Tailwind </label>
         <ProgressBar 
         backgroundColor="red"
          width="90%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="90"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="white"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>

        <div>
         <label > Javascript </label>
         <ProgressBar
          width="80%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="80"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>
        <div>
         <label > React js </label>
         <ProgressBar
          width="77%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="77"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>
        <div>
         <label > Node js </label>
         <ProgressBar
          width="75%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="70"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>
        <div>
         <label > Express js </label>
         <ProgressBar
          width="70%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="70"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>
        <div>
         <label > Firebase  </label>
         <ProgressBar
          width="82%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="82"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>

        <div>
         <label > Mongo Db </label>
         <ProgressBar
          width="70%"
          height="10px"
          rect
          fontColor="#c2d0ea"
          percentage="70"
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="red"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent:  "#ff014f",
            poor: 'red',
          }}
          trackBorderColor="grey"
        />
        </div>

      </div>
        </div>
      
    </section>
  );
};

export default MySkills;

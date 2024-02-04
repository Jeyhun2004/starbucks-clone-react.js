import React from "react";

const contents = [
    {
        title: 'Introducing Oleato™',
        paragraph: 'A luxuriously smooth coffee experience perfectly balanced with Partanna® extra virgin olive oil.',
        btn: 'Order now',
        image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88469.jpg",
    },
    {
        title: 'Love at First Sip Duo, now in the app',
        paragraph: 'Join Starbucks® Rewards and say “be mine” to the Chocolate-Covered Strawberry Crème Frappuccino® drink or Chocolate Hazelnut Cookie Cold Brew, perfect for sharing. Here for a limited time.',
        btn: 'Download to order',
        image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88566.jpg",
    },
    {
        title: 'Your go-to brought to you',
        paragraph: 'Enjoy 20% off Starbucks orders of $15+ on DoorDash. Offer valid 1/22-2/4. New customers only. Max discount up to $5. Terms apply.*',
        btn: 'Order now',
        image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88373.jpg",
    },
];
const Right_contents = [
    {
        title: 'Savory and satisfying',
        paragraph: 'Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the way.',
        btn: 'Order now',
        image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88294.jpg",
    },
    {
        title: 'Our latest collection',
        paragraph: 'Damon Brown celebrates Black culture and his take on community using surprising color palettes, angles, and shapes in this artist series.',
        btn: 'Meet Damon',
        image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88488.jpg",
    },
    {
        title: '“This is our community. We’re in it together.”',
        paragraph: `- Olivia, Starbucks Partner (Employee) Our partners uplift each other and their communities every day.`,
        btn: 'Learn more',
        image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88333.jpg",
    },
];


function Header() {
    return (
      <div className="p-5">
        <div>
          {/* Content 1 */}
          <div className="flex items-center mb-10 bg-darkyellow">
            <div className="w-full md:w-1/2">
              <img src={contents[0].image} className="w-full h-[643px]" alt={contents[0].title} />
            </div>
            <div className='w-full md:w-1/2 h-[643px]'>
              <div className="p-5 md:p-40">
                <h1 className="text-[50px]">{contents[0].title}</h1>
                <p className="text-[22px] pb-5">{contents[0].paragraph}</p>
                <a className="border border-black rounded-full px-4 pt-[2px] pb-[5px] cursor-pointer">
                  {contents[0].btn}
                </a>
              </div>
            </div>
          </div>
  
          {/* Content 2 */}
          <div className="flex items-center mb-10 bg-skycolor">
            <div className='w-full md:w-1/2 h-[643px]'>
              <div className="p-5 md:p-40">
                <h1 className="text-[50px]">{Right_contents[0].title}</h1>
                <p className="text-[22px] pb-5">{Right_contents[0].paragraph}</p>
                <a className="border border-black rounded-full px-4 pt-[2px] pb-[5px] cursor-pointer">
                  {Right_contents[0].btn}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={Right_contents[0].image} className="w-full h-[643px]" alt={Right_contents[0].title} />
            </div>
          </div>
  
          {/* Content 3 */}
          <div className="flex items-center mb-10 bg-ping h-[432px]">
            <div className="w-full md:w-1/2">
              <img src={contents[1].image} className="w-full" alt={contents[1].title} />
            </div>
            <div className='w-full md:w-1/2 '>
              <div className="p-5 md:p-[100px]">
                <h1 className="text-[50px]">{contents[1].title}</h1>
                <p className="text-[22px] pb-5">{contents[1].paragraph}</p>
                <a className="border border-black rounded-full px-4 pt-[2px] pb-[5px] cursor-pointer">
                  {contents[1].btn}
                </a>
              </div>
            </div>
          </div>
  
          {/* Content 4 */}
          <div className="flex items-center mb-10 bg-yellowed h-[432px]">
            <div className='w-full md:w-1/2 '>
              <div className="p-5 md:p-[100px]">
                <h1 className="text-[50px]">{Right_contents[1].title}</h1>
                <p className="text-[22px] pb-5">{Right_contents[1].paragraph}</p>
                <a className="border border-black rounded-full px-4 pt-[2px] pb-[5px] cursor-pointer">
                  {Right_contents[1].btn}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={Right_contents[1].image} className="w-full" alt={Right_contents[1].title} />
            </div>
          </div>
  
          {/* Content 5 */}
          <div className="flex items-center mb-10 bg-darkgreen text-white h-[432px]">
            <div className="w-full md:w-1/2">
              <img src={contents[2].image} className="w-full" alt={contents[2].title} />
            </div>
            <div className='w-full md:w-1/2 '>
              <div className="p-5 md:p-[100px]">
                <h1 className="text-[50px]">{contents[2].title}</h1>
                <p className="text-[22px] pb-5">{contents[2].paragraph}</p>
                <a className="border border-white rounded-full px-4 pt-[2px] pb-[5px] cursor-pointer">
                  {contents[2].btn}
                </a>
              </div>
            </div>
          </div>
  
          {/* Content 6 */}
          <div className="flex items-center mb-10 bg-normalgreen text-white h-[432px]">
            <div className='w-full md:w-1/2 '>
              <div className="p-5 md:p-[100px]">
                <h1 className="text-[50px]">{Right_contents[2].title}</h1>
                <p className="text-[22px] pb-5">{Right_contents[2].paragraph}</p>
                <a className="border border-white rounded-full px-4 pt-[2px] pb-[5px] cursor-pointer">
                  {Right_contents[2].btn}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={Right_contents[2].image} className="w-full" alt={Right_contents[2].title} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Header;

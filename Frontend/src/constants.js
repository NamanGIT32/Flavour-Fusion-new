import react from 'react';
import { useState } from "react";
export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

import { Link } from 'react-router-dom';
import { TbProgressHelp } from "react-icons/tb";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
  import { RiMenu3Fill,RiContactsLine } from "react-icons/ri";
  import { BiHome } from "react-icons/bi";
  import { FcAbout } from "react-icons/fc";
  import { Icon } from "@chakra-ui/react";
  import { BiSolidUser } from "react-icons/bi";
  import { useRef } from 'react';
  
  export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <>
        <Button ref={btnRef} backgroundColor='#374151'
          _hover={{ bg: '#111827' }}
          onClick={onOpen} >
        <RiMenu3Fill className='text-2xl font-semibold text-white'/>

        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>FlavourFusion</DrawerHeader>
  
            <DrawerBody>
            <ul className="flex gap-1 flex-col font-roboto font-medium text-lg ">
          <li className='hover:bg-slate-100 py-2 px-3 transition-all transition-200 rounded-sm'>
            <Link to="/" className="flex items-center gap-1" onClick={onClose}><BiHome />Home</Link>
          </li>
          <li className='hover:bg-slate-100 py-2 px-3 transition-all transition-200 rounded-sm'>
            <Link to="/about" className="flex items-center gap-1" onClick={onClose}><FcAbout/>About</Link>
          </li>
          {/* <li className='hover:bg-slate-100 py-2 px-3 transition-all transition-200 rounded-sm'>
            <Link to="/instamart">Instamart</Link>
          </li> */}
          <li className='hover:bg-slate-100 py-2 px-3 transition-all transition-200 rounded-sm' onClick={onClose}>
            <Link to="/help" className="flex items-center gap-1"><TbProgressHelp /> Help</Link>
          </li>
          {/* <li className='hover:bg-slate-100 py-2 px-3 transition-all transition-200 rounded-sm'>  
            <Link to="/contact" className="flex items-center gap-1" onClick={onClose}><RiContactsLine />Contact</Link>
          </li> */}
         
        </ul>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <div>
          {isLoggedIn ? (
            <Button onClick={()=> {setIsLoggedIn(false)}} colorScheme="white" variant="outline" fontSize={18}  gap={1}>
              <Icon as={BiSolidUser} />
              Log in  
            </Button>
          ) : (
            <Button onClick={()=> {setIsLoggedIn(true)}} colorScheme="white" variant="outline" fontSize={18}  gap={1}>
              <Icon as={BiSolidUser}/>
              Log out
            </Button>
          )}
        </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export const RestaurantList = [
  {
    info: {
      id: "425509",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Sector C",
      areaName: "BHEL",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "425509",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "547",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-20 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bade922d-e924-4654-b08d-5b64e7a833f3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-sector-c-bhel-bhopal-425509",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "559939",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "dyqagxmz85eo8lbykj0k",
      locality: "2nd Phase",
      areaName: "BHEL",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "559939",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "582",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-19 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bade922d-e924-4654-b08d-5b64e7a833f3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-2nd-phase-bhel-bhopal-559939",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "638996",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Sector B",
      areaName: "Indrapuri",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "638996",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "5588",
      avgRatingString: "4.1",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-19 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bade922d-e924-4654-b08d-5b64e7a833f3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-sector-b-indrapuri-bhopal-638996",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "699962",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
      locality: "Shaheed Bhagat Singh Market",
      areaName: "Indrapuri Main Rd",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "699962",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "2233",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-20 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-bade922d-e924-4654-b08d-5b64e7a833f3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-shaheed-bhagat-singh-market-indrapuri-main-rd-bhopal-699962",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

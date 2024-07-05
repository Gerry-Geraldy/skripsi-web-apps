import {
  faWifi,
  faTv,
  faBath,
  faShower,
  faBed,
  faFan,
  faChair,
  faLightbulb,
  faBroom,
  faShieldAlt,
  faUtensils,
  faHandsWash,
  faFirstAid,
  faFireExtinguisher,
  faCamera,
  faDoorOpen,
  faMapMarkerAlt,
  faPlane,
  faMonument,
  faBanSmoking,
  faBan,
  faClock,
  faUserFriends,
  faShoppingBag,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";

import {
  Thumbnail,
  Kost1,
  Kost2,
  Kost3,
} from "../../public/Kost Image/Kost  No 1";

import {
  Thumbnail2,
  Kamar,
  Kamar2,
  KamarMandi,
  TerasKamar,
} from "../../public/Kost Image/Kost No 5";
import {
  Thumbnail6,
  kamar6,
  kamarmandi6,
} from "../../public/Kost Image/Kost No 6";
import {
  Thumbnail11,
  dapur11,
  kamartidur11,
  toilet11,
} from "../../public/Kost Image/Kost No 11";

export const kosts = [
  {
    id: 1,
    name: "Kost Tukad Pancoran",
    bed: "Single Bed",
    parking: true,
    size: "Single",
    review: 134,
    rating: 5,
    price: "800.000",
    day: "per month",
    region: "Denpasar Selatan",
    dateAdded: "2023-06-01",
    image: Thumbnail,
    images: [Thumbnail, Kost1, Kost2, Kost3],
    roomSpecifications: [
      { name: "3 x 3 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Lemari Pakaian", icon: faChair },
    ],
    includes: [
      { name: "Free WiFi", icon: faWifi },
      { name: "Air Conditioning", icon: faFan },
      { name: "Electricity", icon: faLightbulb },
      { name: "Shared Kitchen", icon: faUtensils },
    ],
    safety: [
      { name: "Security cameras on property", icon: faCamera },
      { name: "24/7 Security", icon: faShieldAlt },
    ],
    meetingPoint: {
      name: "Jl Tukad Pancoran Gg 2D No 5",
      icon: faMapMarkerAlt,
    },
    additionalInfo: {
      houseRules: [
        { name: "No smoking inside the rooms", icon: faBanSmoking },
        { name: "No pets allowed", icon: faBan },
        { name: "Quiet hours from 10:00 PM to 7:00 AM", icon: faClock },
        {
          name: "Visitors are not allowed to stay overnight",
          icon: faUserFriends,
        },
        { name: "Maintain cleanliness in shared areas", icon: faBroom },
      ],
      nearbyPlaces: [
        { name: "Bali Museum - 6 km", icon: faMonument },
        { name: "Sanur Beach - 8 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 14 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 5 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 4 km", icon: faShoppingBag },
      ],
    },
  }, //Selesai
  {
    id: 2,
    name: "Kost Pesanggaran",
    bed: "Double Bed",
    parking: true,
    size: "Teenager",
    review: 258,
    rating: 4,
    price: "800.000",
    day: "per month",
    region: "Denpasar Selatan",
    dateAdded: "2023-05-01",
    image: Thumbnail2,
    images: [Thumbnail2, Kamar, Kamar2, KamarMandi, TerasKamar],
    roomSpecifications: [
      { name: "4 x 4 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Ruang Tamu", icon: faChair },
    ],
    includes: [
      { name: "Free WiFi", icon: faWifi },
      { name: "Air Conditioning", icon: faFan },
      { name: "Token Electricity", icon: faLightbulb },
      { name: "Hot Water", icon: faShower },
      { name: "Private Bathroom", icon: faBath },
      { name: "Daily Cleaning Service", icon: faBroom },
      { name: "Shared Kitchen", icon: faUtensils },
      { name: "Laundry Service", icon: faHandsWash },
    ],
    safety: [
      { name: "First aid kit", icon: faFirstAid },
      { name: "Fire extinguisher", icon: faFireExtinguisher },
      { name: "Security cameras on property", icon: faCamera },
      { name: "24/7 Security", icon: faShieldAlt },
      { name: "Emergency exits", icon: faDoorOpen },
      { name: "Smoke detectors", icon: faFireExtinguisher },
    ],
    meetingPoint: {
      name: "Jl Raya Pesanggaran Gg 8 No 22, Perum Bank Pedungan ",
      icon: faMapMarkerAlt,
    },
    additionalInfo: {
      houseRules: [
        { name: "No smoking inside the rooms", icon: faBanSmoking },
        { name: "No pets allowed", icon: faBan },
        { name: "Quiet hours from 10:00 PM to 7:00 AM", icon: faClock },
        {
          name: "Visitors are not allowed to stay overnight",
          icon: faUserFriends,
        },
        { name: "Maintain cleanliness in shared areas", icon: faBroom },
      ],
      nearbyPlaces: [
        { name: "Bali Museum - 8 km", icon: faMonument },
        { name: "Sanur Beach - 8 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 10 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 5 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 10 km", icon: faShoppingBag },
      ],
    },
  }, //Selesai
  {
    id: 3,
    name: "Kost Gang Mulya Sari",
    bed: "Double Bed",
    parking: false,
    size: "Double",
    review: 320,
    rating: 3,
    price: "1.000.000",
    day: "per month",
    region: "Denpasar Barat",
    dateAdded: "2023-07-01",
    image: Thumbnail6,
    images: [kamar6, kamarmandi6],
    roomSpecifications: [
      { name: "5 x 5 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Ruang Kerja", icon: faChair },
    ],
    includes: [
      { name: "Air Conditioning", icon: faFan },
      { name: "Electricity", icon: faLightbulb },
      { name: "Free Water", icon: faShower },
      { name: "Private Bathroom", icon: faBath },
      { name: "Daily Cleaning Service", icon: faBroom },
      { name: "24/7 Security", icon: faShieldAlt },
      { name: "Shared Kitchen", icon: faUtensils },
    ],
    safety: [
      { name: "First aid kit", icon: faFirstAid },
      { name: "Fire extinguisher", icon: faFireExtinguisher },
      { name: "Security cameras on property", icon: faCamera },
      { name: "24/7 Security", icon: faShieldAlt },
      { name: "Emergency exits", icon: faDoorOpen },
      { name: "Smoke detectors", icon: faFireExtinguisher },
    ],
    meetingPoint: {
      name: "Gang Mulya Sari No 1, Sesetan ",
      icon: faMapMarkerAlt,
    },
    additionalInfo: {
      houseRules: [{ name: "No pets allowed", icon: faBan }],
      nearbyPlaces: [
        { name: "Bali Museum - 2 km", icon: faMonument },
        { name: "Sanur Beach - 12 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 13 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 5 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 3 km", icon: faShoppingBag },
      ],
    },
  }, //Selesai
  {
    id: 4,
    name: "Kost Ibu Luh Arnadi",
    bed: "Single Bed",
    parking: true,
    size: "Luxury",
    review: 410,
    rating: 4,
    price: "1.200.000",
    day: "per month",
    region: "Denpasar Selatan",
    dateAdded: "2023-08-01",
    image: Thumbnail11,
    images: [Thumbnail11, kamartidur11, dapur11, toilet11],
    roomSpecifications: [
      { name: "6 x 6 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Balkon", icon: faChair },
    ],
    includes: [
      { name: "Free WiFi", icon: faWifi },
      { name: "Air Conditioning", icon: faFan },
      { name: "Electricity", icon: faLightbulb },
      { name: "Hot Water", icon: faShower },
      { name: "Television", icon: faTv },
      { name: "Private Bathroom", icon: faBath },
      { name: "Daily Cleaning Service", icon: faBroom },
      { name: "24/7 Security", icon: faShieldAlt },
      { name: "Shared Kitchen", icon: faUtensils },
      { name: "Laundry Service", icon: faHandsWash },
    ],
    safety: [
      { name: "First aid kit", icon: faFirstAid },
      { name: "Fire extinguisher", icon: faFireExtinguisher },
      { name: "Security cameras on property", icon: faCamera },
      { name: "24/7 Security", icon: faShieldAlt },
      { name: "Emergency exits", icon: faDoorOpen },
      { name: "Smoke detectors", icon: faFireExtinguisher },
    ],
    meetingPoint: {
      name: "At the main entrance of the property, near the security post.",
      icon: faMapMarkerAlt,
    },
    additionalInfo: {
      houseRules: [
        { name: "No smoking inside the rooms", icon: faBanSmoking },
        { name: "No pets allowed", icon: faBan },
        { name: "Quiet hours from 10:00 PM to 7:00 AM", icon: faClock },
        {
          name: "Visitors are not allowed to stay overnight",
          icon: faUserFriends,
        },
        { name: "Maintain cleanliness in shared areas", icon: faBroom },
      ],
      nearbyPlaces: [
        { name: "Bali Museum - 10 km", icon: faMonument },
        { name: "Sanur Beach - 15 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 20 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 12 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 8 km", icon: faShoppingBag },
      ],
    },
  },
];

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

export const kosts = [
  {
    id: 1,
    name: "Kost Ibu Made",
    bed: "Double Bed",
    parking: true,
    size: "Family",
    review: 258,
    rating: 4,
    price: "1.500.000",
    day: "per month",
    region: "Denpasar Selatan",
    dateAdded: "2023-05-01",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    ],
    roomSpecifications: [
      { name: "4 x 4 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Ruang Tamu", icon: faChair },
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
        { name: "Bali Museum - 5 km", icon: faMonument },
        { name: "Sanur Beach - 10 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 12 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 4 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 6 km", icon: faShoppingBag },
      ],
    },
  },
  {
    id: 2,
    name: "Kost Ibu Yuni",
    bed: "Single Bed",
    parking: true,
    size: "Single",
    review: 134,
    rating: 5,
    price: "1.000.000",
    day: "per month",
    region: "Denpasar Timur",
    dateAdded: "2023-06-01",
    image:
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    roomSpecifications: [
      { name: "3 x 3 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Lemari Pakaian", icon: faChair },
    ],
    includes: [
      { name: "Free WiFi", icon: faWifi },
      { name: "Air Conditioning", icon: faFan },
      { name: "Electricity", icon: faLightbulb },
      { name: "Daily Cleaning Service", icon: faBroom },
      { name: "24/7 Security", icon: faShieldAlt },
      { name: "Shared Kitchen", icon: faUtensils },
    ],
    safety: [
      { name: "First aid kit", icon: faFirstAid },
      { name: "Fire extinguisher", icon: faFireExtinguisher },
      { name: "Security cameras on property", icon: faCamera },
      { name: "24/7 Security", icon: faShieldAlt },
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
        { name: "Bali Museum - 6 km", icon: faMonument },
        { name: "Sanur Beach - 8 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 14 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 5 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 4 km", icon: faShoppingBag },
      ],
    },
  },
  {
    id: 3,
    name: "Kost Pak Budi",
    bed: "Queen Bed",
    parking: false,
    size: "Couple",
    review: 320,
    rating: 3,
    price: "2.000.000",
    day: "per month",
    region: "Denpasar Barat",
    dateAdded: "2023-07-01",
    image:
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e5a6fa2eea41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    roomSpecifications: [
      { name: "5 x 5 meter", icon: faBed },
      { name: "Kamar Mandi Dalam", icon: faBath },
      { name: "Ruang Kerja", icon: faChair },
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
        { name: "Bali Museum - 3 km", icon: faMonument },
        { name: "Sanur Beach - 12 km", icon: faUmbrella },
        { name: "Ngurah Rai International Airport - 15 km", icon: faPlane },
        { name: "Bajra Sandhi Monument - 7 km", icon: faMonument },
        { name: "Denpasar Traditional Market - 5 km", icon: faShoppingBag },
      ],
    },
  },
  {
    id: 4,
    name: "Kost Mbak Susi",
    bed: "King Bed",
    parking: true,
    size: "Luxury",
    review: 410,
    rating: 4,
    price: "3.000.000",
    day: "per month",
    region: "Denpasar Utara",
    dateAdded: "2023-08-01",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
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

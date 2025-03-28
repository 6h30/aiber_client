import { Suggestion, Offer, RideOption, AdvanceBooking, ExploreItem, Location } from './types';
import { SVGS, IMAGES } from '@/constants/assets';

export const suggestions: Suggestion[] = [
  { id: '1', name: 'Duc& Agency', address: 'Sang Tao, Tan Thuan Dong Ward, District 7, Ho Chi Minh City' },
  { id: '2', name: 'AVinh Transportation Station', address: 'Vo Van Kiet St., Ward 7, District 6, Ho Chi Minh City, 70000, Vietnam' },
  { id: '3', name: 'Work', address: 'Phu My Hung, Tan Phong Ward, District 7, Ho Chi Minh City' },
];

export const offers: Offer[] = [
  { id: '1', title: 'DucBa Church', discount: '20% Off', image: IMAGES.ntdb },
  { id: '2', title: 'Ben Thanh Market', discount: '15% Off', image: IMAGES.cbt },
  { id: '3', title: 'SG Opera House', discount: '20% Off', image: IMAGES.nhtp },
  { id: '4', title: 'Dragon Wharf', discount: '20% Off', image: IMAGES.bnr },
];

export const rideOptions: RideOption[] = [
  { id: '1', title: 'Advance Booking', description: '', icon: SVGS.calendar },
  { id: '2', title: 'Book for Family', description: '', icon: IMAGES.familyHome },
  { id: '3', title: 'Car Plus', description: '', icon: SVGS.carModern },
  { id: '4', title: '7-Seater Car', description: '', icon: SVGS.carGroup },
];

export const advanceBookings: AdvanceBooking[] = [
  {
    id: "1",
    title: "Advance Booking",
    description: "Your driver will arrive on time or early",
    image: IMAGES.advBooking,
  },
  {
    id: "2",
    title: "Book for Family",
    description: "Car with child seat available", 
    image: IMAGES.family,
  },
  {
    id: "3",
    title: "Car Plus",
    description: "Spacious car for your comfort",
    image: IMAGES.carPlus,
  },
  {
    id: "4", 
    title: "7-Seater Car",
    description: "Car for your group",
    image: IMAGES.seatGroup,
  },
];

export const exploreItems: ExploreItem[] = [
  { id: '1', image: IMAGES.moveS2 },
  { id: '2', image: IMAGES.moveS3 },
];

export const recentLocations: Location[] = [
  {
    id: "1",
    name: "MI Head Office",
    address: "Sang Tao, Tan Thuan Dong Ward, District 7, Ho Chi Minh City, 70000, Vietnam",
    distance: "2.9km",
  },
  {
    id: "2", 
    name: "Work - Platinum Global Company",
    address: "Sang Tao, Tan Thuan Dong Ward, District 7, Ho Chi Minh City, 70000, Vietnam",
    distance: "4.8km",
  },
  {
    id: "3",
    name: "47/20B Huynh Tan Phat St.",
    address: "Tan Thuan Dong Ward, District 7, Ho Chi Minh City, 70000, Vietnam", 
    distance: "1.3km",
  },
  {
    id: "4",
    name: "Near Duong Sang Tao",
    address: "Tan Thuan Dong Ward, District 7, Ho Chi Minh City",
    distance: "2.9km",
  },
  {
    id: "5",
    name: "Anh Vinh Transportation Station",
    address: "Vo Van Kiet St., Ward 7, District 5, Ho Chi Minh City, 70000, Vietnam",
    distance: "10km",
  },
];

export const suggestedLocations: Location[] = [
  {
    id: "6",
    name: "Crescent Mall",
    address: "Ton Dat Tien St., District 7, Ho Chi Minh City",
    distance: "3.5km",
  },
  {
    id: "7",
    name: "Ben Thanh Market", 
    address: "Le Loi St., District 1, Ho Chi Minh City",
    distance: "8km",
  },
];

export const savedLocations: Location[] = [
  {
    id: "8",
    name: "Home",
    address: "123 Nguyen Thi Thap St., District 7, Ho Chi Minh City",
    distance: "1.5km",
  },
];
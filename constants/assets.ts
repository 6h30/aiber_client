import React from 'react';
import { SvgProps } from 'react-native-svg';

const SETTING_SVG_PATH = '@/assets/svgs/setingSvgs';
const BOOKING_SVG_PATH = '@/assets/svgs/bookingSvgs';
const BOOKING_IMG_PATH = '@/assets/images/bookingImgs';
const KRAB_HOT_SPOT_IMG_PATH = '@/assets/images/bookingImgs/krabHotSpot';
const ONBOARDING_IMG_PATH = '@/assets/images/onBoarding';
const FONTS_PATH = '@/assets/fonts';

// Import tất cả SVG
import GoogleLogo from '@/assets/svgs/setingSvgs/googleLogo.svg';
import AppleLogo from '@/assets/svgs/setingSvgs/appleLogo.svg';
import FacebookLogo from '@/assets/svgs/setingSvgs/facebookLogo.svg';
import HomeIcon from '@/assets/svgs/setingSvgs/home48.svg';
import PersonIcon from '@/assets/svgs/setingSvgs/person48.svg';
import ReceiptIcon from '@/assets/svgs/setingSvgs/receipt48.svg';
import RewardIcon from '@/assets/svgs/setingSvgs/reward24.svg';
import LoginIcon from '@/assets/svgs/setingSvgs/login.svg';
import PersonCircleIcon from '@/assets/svgs/setingSvgs/personCircle.svg';
import TextEditIcon from '@/assets/svgs/setingSvgs/textedit24.svg';
import PromotionsIcon from '@/assets/svgs/setingSvgs/promotions.svg';
import TimeCircleIcon from '@/assets/svgs/setingSvgs/timeCircle.svg';
import WalletMIcon from '@/assets/svgs/setingSvgs/walletM.svg';
import FlagIcon from '@/assets/svgs/setingSvgs/flag.svg';
import FlagHabbitIcon from '@/assets/svgs/setingSvgs/flagHabbit.svg';
import HelpIcon from '@/assets/svgs/setingSvgs/help.svg';
import LogoutIcon from '@/assets/svgs/setingSvgs/logout.svg';
import CogIcon from '@/assets/svgs/setingSvgs/cog.svg';
import HomeSlIcon from '@/assets/svgs/setingSvgs/homesl24.svg';

// Import Booking Flow SVGs
import MapIcon from '@/assets/svgs/bookingSvgs/mapIcon.svg';
import ShareIcon from '@/assets/svgs/bookingSvgs/share.svg';
import ShieldIcon from '@/assets/svgs/bookingSvgs/shield.svg';
import TimeStopIcon from '@/assets/svgs/bookingSvgs/timeStop.svg';
import UpArrowIcon from '@/assets/svgs/bookingSvgs/upArrow.svg';
import StartIconYellow from '@/assets/svgs/bookingSvgs/startIconYellow.svg';
import StarIcon from '@/assets/svgs/bookingSvgs/starIcon.svg';
import ReceiptBillIcon from '@/assets/svgs/bookingSvgs/receiptBill.svg';
import SearchCircleIcon from '@/assets/svgs/bookingSvgs/searchCircle.svg';
import MoreDotIcon from '@/assets/svgs/bookingSvgs/moreDot.svg';
import PersonCheckIcon from '@/assets/svgs/bookingSvgs/personCheck.svg';
import MailIcon from '@/assets/svgs/bookingSvgs/mailIcon.svg';
import MessageChatIcon from '@/assets/svgs/bookingSvgs/messageChat.svg';
import InfoCircleIcon from '@/assets/svgs/bookingSvgs/infoCircle.svg';
import LikeChatIcon from '@/assets/svgs/bookingSvgs/likeChat.svg';
import HandMoneyIcon from '@/assets/svgs/bookingSvgs/handMoney.svg';
import HeadPhoneIcon from '@/assets/svgs/bookingSvgs/headPhone.svg';
import HistoryPickIcon from '@/assets/svgs/bookingSvgs/historyPick.svg';
import FocusCameraIcon from '@/assets/svgs/bookingSvgs/focusCamera.svg';
import GalleryImgIcon from '@/assets/svgs/bookingSvgs/galleryImg.svg';
import HandDragIcon from '@/assets/svgs/bookingSvgs/handDrag.svg';
import DeleteCircleIcon from '@/assets/svgs/bookingSvgs/deleteCircle.svg';
import EditAddIcon from '@/assets/svgs/bookingSvgs/editAdd.svg';
import EditPencilIcon from '@/assets/svgs/bookingSvgs/editPencil.svg';
import FeedIcon from '@/assets/svgs/bookingSvgs/feed.svg';
import CogSettingIcon from '@/assets/svgs/bookingSvgs/cogSetting.svg';
import CopyPasteIcon from '@/assets/svgs/bookingSvgs/copyPaste.svg';
import CreditCardIcon from '@/assets/svgs/bookingSvgs/creditCard.svg';
import CursorTargetIcon from '@/assets/svgs/bookingSvgs/cursorTaget.svg';
import CashBriefcaseIcon from '@/assets/svgs/bookingSvgs/cashBriefcase.svg';
import CashNetworkIcon from '@/assets/svgs/bookingSvgs/cashNetwork.svg';
import CheckSquareIcon from '@/assets/svgs/bookingSvgs/checkSquare.svg';
import CheckTickIcon from '@/assets/svgs/bookingSvgs/checkTick.svg';
import Car4Icon from '@/assets/svgs/bookingSvgs/car4.svg';
import CameraIcon from '@/assets/svgs/bookingSvgs/cameraIcon.svg';
import CameraImgIcon from '@/assets/svgs/bookingSvgs/cameraImg.svg';
import CameraOffIcon from '@/assets/svgs/bookingSvgs/cameraOff.svg';
import CalendarEditIcon from '@/assets/svgs/bookingSvgs/calendarEdit.svg';
import ArrowRightIcon from '@/assets/svgs/bookingSvgs/arrowRight.svg';
import ArrowUpIcon from '@/assets/svgs/bookingSvgs/arrowUp.svg';
import AddCircleIcon from '@/assets/svgs/bookingSvgs/addCircle.svg';
import PickPointIcon from '@/assets/svgs/bookingSvgs/pickPoint.svg';
import PhoneCallIcon from '@/assets/svgs/bookingSvgs/phoneCall.svg';
import LocationPickIcon from '@/assets/svgs/bookingSvgs/locationPick.svg';
import CarGroupIcon from '@/assets/svgs/bookingSvgs/carGroup.svg';
import CarModernIcon from '@/assets/svgs/bookingSvgs/carModern.svg';
import CoinCashIcon from '@/assets/svgs/bookingSvgs/coinCash.svg';
import HomePointIcon from '@/assets/svgs/bookingSvgs/homePoint.svg';
import CalendarIcon from '@/assets/svgs/bookingSvgs/calendar.svg';

    // Định nghĩa type cho SVG
    type SvgComponent = React.FC<SvgProps>; 

// Export các SVG component
export const SVGS = {
    // Social Media
    google: GoogleLogo as SvgComponent,
    apple: AppleLogo as SvgComponent,
    facebook: FacebookLogo as SvgComponent,

    // Navigation
    home: HomeIcon as SvgComponent,
    person: PersonIcon as SvgComponent,
    receipt: ReceiptIcon as SvgComponent,
    reward: RewardIcon as SvgComponent,
    login: LoginIcon as SvgComponent,
    personCircle: PersonCircleIcon as SvgComponent,
    textEdit: TextEditIcon as SvgComponent,

    // Setting
    promotions: PromotionsIcon as SvgComponent,
    timeCircle: TimeCircleIcon as SvgComponent,
    walletM: WalletMIcon as SvgComponent,
    flag: FlagIcon as SvgComponent,
    flagHabbit: FlagHabbitIcon as SvgComponent,
    help: HelpIcon as SvgComponent,
    logout: LogoutIcon as SvgComponent,
    cog: CogIcon as SvgComponent,
    homeSl: HomeSlIcon as SvgComponent,

    // Booking Flow
    map: MapIcon as SvgComponent,
    share: ShareIcon as SvgComponent,
    shield: ShieldIcon as SvgComponent,
    timeStop: TimeStopIcon as SvgComponent,
    upArrow: UpArrowIcon as SvgComponent,
    startIconYellow: StartIconYellow as SvgComponent,
    star: StarIcon as SvgComponent,
    receiptBill: ReceiptBillIcon as SvgComponent,
    searchCircle: SearchCircleIcon as SvgComponent,
    moreDot: MoreDotIcon as SvgComponent,
    personCheck: PersonCheckIcon as SvgComponent,
    mail: MailIcon as SvgComponent,
    messageChat: MessageChatIcon as SvgComponent,
    infoCircle: InfoCircleIcon as SvgComponent,
    likeChat: LikeChatIcon as SvgComponent,
    handMoney: HandMoneyIcon as SvgComponent,
    headPhone: HeadPhoneIcon as SvgComponent,
    historyPick: HistoryPickIcon as SvgComponent,
    focusCamera: FocusCameraIcon as SvgComponent,
    galleryImg: GalleryImgIcon as SvgComponent,
    handDrag: HandDragIcon as SvgComponent,
    deleteCircle: DeleteCircleIcon as SvgComponent,
    editAdd: EditAddIcon as SvgComponent,
    editPencil: EditPencilIcon as SvgComponent,
    feed: FeedIcon as SvgComponent,
    cogSetting: CogSettingIcon as SvgComponent,
    copyPaste: CopyPasteIcon as SvgComponent,
    creditCard: CreditCardIcon as SvgComponent,
    cursorTarget: CursorTargetIcon as SvgComponent,
    cashBriefcase: CashBriefcaseIcon as SvgComponent,
    cashNetwork: CashNetworkIcon as SvgComponent,
    checkSquare: CheckSquareIcon as SvgComponent,
    checkTick: CheckTickIcon as SvgComponent,
    car4: Car4Icon as SvgComponent,
    camera: CameraIcon as SvgComponent,
    cameraImg: CameraImgIcon as SvgComponent,
    cameraOff: CameraOffIcon as SvgComponent,
    calendarEdit: CalendarEditIcon as SvgComponent,
    arrowRight: ArrowRightIcon as SvgComponent,
    arrowUp: ArrowUpIcon as SvgComponent,
    addCircle: AddCircleIcon as SvgComponent,
    pickPoint: PickPointIcon as SvgComponent,
    phoneCall: PhoneCallIcon as SvgComponent,
    locationPick: LocationPickIcon as SvgComponent,
    carGroup: CarGroupIcon as SvgComponent,
    carModern: CarModernIcon as SvgComponent,
    coinCash: CoinCashIcon as SvgComponent,
    homePoint: HomePointIcon as SvgComponent,
    calendar: CalendarIcon as SvgComponent,
};

export const IMAGES = {
    // Onboarding Images
    welcome: require(`${ONBOARDING_IMG_PATH}/welcome.png`),
    step1: require(`${ONBOARDING_IMG_PATH}/step1.png`),
    step2: require(`${ONBOARDING_IMG_PATH}/step2.png`),
    step3: require(`${ONBOARDING_IMG_PATH}/step3.png`),

    // Krab Hot Spot Images
    ntdb: require(`${KRAB_HOT_SPOT_IMG_PATH}/ntdb.png`),
    cbt: require(`${KRAB_HOT_SPOT_IMG_PATH}/cbt.png`),
    nhtp: require(`${KRAB_HOT_SPOT_IMG_PATH}/nhtp.png`),
    bnr: require(`${KRAB_HOT_SPOT_IMG_PATH}/bnr.png`),

    // Booking Images
    moveS2: require(`${BOOKING_IMG_PATH}/moveS2.png`),
    moveS3: require(`${BOOKING_IMG_PATH}/moveS3.png`),
    vnFlag: require(`${BOOKING_IMG_PATH}/vnFlag.png`),
    seatGroup: require(`${BOOKING_IMG_PATH}/seatGroup.png`),
    moreSeat: require(`${BOOKING_IMG_PATH}/moreSeat.png`),
    carPlus: require(`${BOOKING_IMG_PATH}/carPlus.png`),
    bookFamily: require(`${BOOKING_IMG_PATH}/bookFamily.png`),
    advBooking: require(`${BOOKING_IMG_PATH}/advBooking.png`),
    family: require(`${BOOKING_IMG_PATH}/Family.png`),
    familyHome: require(`${BOOKING_IMG_PATH}/familyHome.png`),
};

export const FONTS = {
    spaceMono: require(`${FONTS_PATH}/SpaceMono-Regular.ttf`),
};

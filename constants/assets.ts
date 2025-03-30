import React from 'react';
import { SvgProps } from 'react-native-svg';

const SETTING_SVG_PATH = '@/assets/svgs/setingSvgs';
const BOOKING_SVG_PATH = '@/assets/svgs/bookingSvgs';
const BOOKING_IMG_PATH = '@/assets/images/bookingImgs';
const BOOKING_CAR_IMG_PATH = '@/assets/images/bookingImgs/carType';
const KRAB_HOT_SPOT_IMG_PATH = '@/assets/images/bookingImgs/krabHotSpot';
const ONBOARDING_IMG_PATH = '@/assets/images/onBoarding';
const FONTS_PATH = '@/assets/fonts';

// Import tất cả SVG
import AddCircleIcon from '@/assets/svgs/bookingSvgs/addCircle.svg';
import AppleLogo from '@/assets/svgs/setingSvgs/appleLogo.svg';
import ArrowRightIcon from '@/assets/svgs/bookingSvgs/arrowRight.svg';
import ArrowUpIcon from '@/assets/svgs/bookingSvgs/arrowUp.svg';
import CalendarEditIcon from '@/assets/svgs/bookingSvgs/calendarEdit.svg';
import CalendarIcon from '@/assets/svgs/bookingSvgs/calendar.svg';
import CameraIcon from '@/assets/svgs/bookingSvgs/cameraIcon.svg';
import CameraImgIcon from '@/assets/svgs/bookingSvgs/cameraImg.svg';
import CameraOffIcon from '@/assets/svgs/bookingSvgs/cameraOff.svg';
import Car4Icon from '@/assets/svgs/bookingSvgs/car4.svg';
import CarGroupIcon from '@/assets/svgs/bookingSvgs/carGroup.svg';
import CarModernIcon from '@/assets/svgs/bookingSvgs/carModern.svg';
import CashBriefcaseIcon from '@/assets/svgs/bookingSvgs/cashBriefcase.svg';
import CashNetworkIcon from '@/assets/svgs/bookingSvgs/cashNetwork.svg';
import CheckSquareIcon from '@/assets/svgs/bookingSvgs/checkSquare.svg';
import CheckTickIcon from '@/assets/svgs/bookingSvgs/checkTick.svg';
import CogIcon from '@/assets/svgs/setingSvgs/cog.svg';
import CogSettingIcon from '@/assets/svgs/bookingSvgs/cogSetting.svg';
import CoinCashIcon from '@/assets/svgs/bookingSvgs/coinCash.svg';
import CopyPasteIcon from '@/assets/svgs/bookingSvgs/copyPaste.svg';
import CreditCardIcon from '@/assets/svgs/bookingSvgs/creditCard.svg';
import CursorTargetIcon from '@/assets/svgs/bookingSvgs/cursorTaget.svg';
import DeleteCircleIcon from '@/assets/svgs/bookingSvgs/deleteCircle.svg';
import EditAddIcon from '@/assets/svgs/bookingSvgs/editAdd.svg';
import EditPencilIcon from '@/assets/svgs/bookingSvgs/editPencil.svg';
import FacebookLogo from '@/assets/svgs/setingSvgs/facebookLogo.svg';
import FeedIcon from '@/assets/svgs/bookingSvgs/feed.svg';
import FlagHabbitIcon from '@/assets/svgs/setingSvgs/flagHabbit.svg';
import FlagIcon from '@/assets/svgs/setingSvgs/flag.svg';
import FocusCameraIcon from '@/assets/svgs/bookingSvgs/focusCamera.svg';
import GalleryImgIcon from '@/assets/svgs/bookingSvgs/galleryImg.svg';
import GoogleLogo from '@/assets/svgs/setingSvgs/googleLogo.svg';
import HandDragIcon from '@/assets/svgs/bookingSvgs/handDrag.svg';
import HandMoneyIcon from '@/assets/svgs/bookingSvgs/handMoney.svg';
import HeadPhoneIcon from '@/assets/svgs/bookingSvgs/headPhone.svg';
import HelpIcon from '@/assets/svgs/setingSvgs/help.svg';
import HistoryPickIcon from '@/assets/svgs/bookingSvgs/historyPick.svg';
import HoleFlagIcon from '@/assets/svgs/bookingSvgs/holeFlag.svg';
import HomeIcon from '@/assets/svgs/setingSvgs/home48.svg';
import HomePointIcon from '@/assets/svgs/bookingSvgs/homePoint.svg';
import HomeSlIcon from '@/assets/svgs/setingSvgs/homesl24.svg';
import InfoCircleIcon from '@/assets/svgs/bookingSvgs/infoCircle.svg';
import LikeChatIcon from '@/assets/svgs/bookingSvgs/likeChat.svg';
import LocationPickIcon from '@/assets/svgs/bookingSvgs/locationPick.svg';
import LoginIcon from '@/assets/svgs/setingSvgs/login.svg';
import LogoutIcon from '@/assets/svgs/setingSvgs/logout.svg';
import MailIcon from '@/assets/svgs/bookingSvgs/mailIcon.svg';
import MapIcon from '@/assets/svgs/bookingSvgs/mapIcon.svg';
import MessageChatIcon from '@/assets/svgs/bookingSvgs/messageChat.svg';
import MoreDotIcon from '@/assets/svgs/bookingSvgs/moreDot.svg';
import PersonCheckIcon from '@/assets/svgs/bookingSvgs/personCheck.svg';
import PersonCircleIcon from '@/assets/svgs/setingSvgs/personCircle.svg';
import PersonIcon from '@/assets/svgs/setingSvgs/person48.svg';
import PhoneCallIcon from '@/assets/svgs/bookingSvgs/phoneCall.svg';
import PickPointIcon from '@/assets/svgs/bookingSvgs/pickPoint.svg';
import PromotionsIcon from '@/assets/svgs/setingSvgs/promotions.svg';
import ReceiptBillIcon from '@/assets/svgs/bookingSvgs/receiptBill.svg';
import ReceiptIcon from '@/assets/svgs/setingSvgs/receipt48.svg';
import RewardIcon from '@/assets/svgs/setingSvgs/reward24.svg';
import ScrollVerticalIcon from '@/assets/svgs/bookingSvgs/scrollVertical.svg';
import SearchCircleIcon from '@/assets/svgs/bookingSvgs/searchCircle.svg';
import ShapesIcon from '@/assets/svgs/bookingSvgs/shapes.svg';
import ShareIcon from '@/assets/svgs/bookingSvgs/share.svg';
import ShieldIcon from '@/assets/svgs/bookingSvgs/shield.svg';
import StartIconYellow from '@/assets/svgs/bookingSvgs/startIconYellow.svg';
import StarIcon from '@/assets/svgs/bookingSvgs/starIcon.svg';
import TextEditIcon from '@/assets/svgs/setingSvgs/textedit24.svg';
import TickerAddIcon from '@/assets/svgs/bookingSvgs/tickerAdd.svg';
import TimeCircleIcon from '@/assets/svgs/setingSvgs/timeCircle.svg';
import TimeStopIcon from '@/assets/svgs/bookingSvgs/timeStop.svg';
import UpArrowIcon from '@/assets/svgs/bookingSvgs/upArrow.svg';
import WalletMIcon from '@/assets/svgs/setingSvgs/walletM.svg';

// Định nghĩa type cho SVG
type SvgComponent = React.FC<SvgProps>;

// Export các SVG component
export const SVGS = {
    // Social Media
    apple: AppleLogo as SvgComponent,
    facebook: FacebookLogo as SvgComponent,
    google: GoogleLogo as SvgComponent,

    // Navigation
    home: HomeIcon as SvgComponent,
    homeSl: HomeSlIcon as SvgComponent,
    login: LoginIcon as SvgComponent,
    person: PersonIcon as SvgComponent,
    personCircle: PersonCircleIcon as SvgComponent,
    receipt: ReceiptIcon as SvgComponent,
    reward: RewardIcon as SvgComponent,
    textEdit: TextEditIcon as SvgComponent,

    // Setting
    cog: CogIcon as SvgComponent,
    flag: FlagIcon as SvgComponent,
    flagHabbit: FlagHabbitIcon as SvgComponent,
    help: HelpIcon as SvgComponent,
    logout: LogoutIcon as SvgComponent,
    promotions: PromotionsIcon as SvgComponent,
    tickerAdd: TickerAddIcon as SvgComponent,
    timeCircle: TimeCircleIcon as SvgComponent,
    walletM: WalletMIcon as SvgComponent,

    // Booking Flow
    addCircle: AddCircleIcon as SvgComponent,
    arrowRight: ArrowRightIcon as SvgComponent,
    arrowUp: ArrowUpIcon as SvgComponent,
    calendar: CalendarIcon as SvgComponent,
    calendarEdit: CalendarEditIcon as SvgComponent,
    camera: CameraIcon as SvgComponent,
    cameraImg: CameraImgIcon as SvgComponent,
    cameraOff: CameraOffIcon as SvgComponent,
    car4: Car4Icon as SvgComponent,
    carGroup: CarGroupIcon as SvgComponent,
    carModern: CarModernIcon as SvgComponent,
    cashBriefcase: CashBriefcaseIcon as SvgComponent,
    cashNetwork: CashNetworkIcon as SvgComponent,
    checkSquare: CheckSquareIcon as SvgComponent,
    checkTick: CheckTickIcon as SvgComponent,
    cogSetting: CogSettingIcon as SvgComponent,
    coinCash: CoinCashIcon as SvgComponent,
    copyPaste: CopyPasteIcon as SvgComponent,
    creditCard: CreditCardIcon as SvgComponent,
    cursorTarget: CursorTargetIcon as SvgComponent,
    deleteCircle: DeleteCircleIcon as SvgComponent,
    editAdd: EditAddIcon as SvgComponent,
    editPencil: EditPencilIcon as SvgComponent,
    feed: FeedIcon as SvgComponent,
    focusCamera: FocusCameraIcon as SvgComponent,
    galleryImg: GalleryImgIcon as SvgComponent,
    handDrag: HandDragIcon as SvgComponent,
    handMoney: HandMoneyIcon as SvgComponent,
    headPhone: HeadPhoneIcon as SvgComponent,
    historyPick: HistoryPickIcon as SvgComponent,
    holeFlag: HoleFlagIcon as SvgComponent,
    homePoint: HomePointIcon as SvgComponent,
    infoCircle: InfoCircleIcon as SvgComponent,
    likeChat: LikeChatIcon as SvgComponent,
    locationPick: LocationPickIcon as SvgComponent,
    mail: MailIcon as SvgComponent,
    map: MapIcon as SvgComponent,
    messageChat: MessageChatIcon as SvgComponent,
    moreDot: MoreDotIcon as SvgComponent,
    personCheck: PersonCheckIcon as SvgComponent,
    phoneCall: PhoneCallIcon as SvgComponent,
    pickPoint: PickPointIcon as SvgComponent,
    receiptBill: ReceiptBillIcon as SvgComponent,
    scrollVertical: ScrollVerticalIcon as SvgComponent,
    searchCircle: SearchCircleIcon as SvgComponent,
    shapes: ShapesIcon as SvgComponent,
    share: ShareIcon as SvgComponent,
    shield: ShieldIcon as SvgComponent,
    startIconYellow: StartIconYellow as SvgComponent,
    star: StarIcon as SvgComponent,
    timeStop: TimeStopIcon as SvgComponent,
    upArrow: UpArrowIcon as SvgComponent,
};

export const IMAGES = {
    // Onboarding Images
    step1: require(`${ONBOARDING_IMG_PATH}/step1.png`),
    step2: require(`${ONBOARDING_IMG_PATH}/step2.png`),
    step3: require(`${ONBOARDING_IMG_PATH}/step3.png`),
    welcome: require(`${ONBOARDING_IMG_PATH}/welcome.png`),

    // Krab Hot Spot Images
    bnr: require(`${KRAB_HOT_SPOT_IMG_PATH}/bnr.png`),
    cbt: require(`${KRAB_HOT_SPOT_IMG_PATH}/cbt.png`),
    nhtp: require(`${KRAB_HOT_SPOT_IMG_PATH}/nhtp.png`),
    ntdb: require(`${KRAB_HOT_SPOT_IMG_PATH}/ntdb.png`),

    // Booking Images
    advBooking: require(`${BOOKING_IMG_PATH}/advBooking.png`),
    bookFamily: require(`${BOOKING_IMG_PATH}/bookFamily.png`),
    carPlus: require(`${BOOKING_IMG_PATH}/carPlus.png`),
    family: require(`${BOOKING_IMG_PATH}/Family.png`),
    familyHome: require(`${BOOKING_IMG_PATH}/familyHome.png`),
    krabAuto: require(`${BOOKING_CAR_IMG_PATH}/krab-auto.png`),
    krabGo: require(`${BOOKING_CAR_IMG_PATH}/krab-go.png`),
    krabMoto: require(`${BOOKING_CAR_IMG_PATH}/krab-moto.png`),
    krabPro: require(`${BOOKING_CAR_IMG_PATH}/krab-pro.png`),
    moreSeat: require(`${BOOKING_IMG_PATH}/moreSeat.png`),
    moveS2: require(`${BOOKING_IMG_PATH}/moveS2.png`),
    moveS3: require(`${BOOKING_IMG_PATH}/moveS3.png`),
    seatGroup: require(`${BOOKING_IMG_PATH}/seatGroup.png`),
    vnFlag: require(`${BOOKING_IMG_PATH}/vnFlag.png`),
};

export const FONTS = {
    spaceMono: require(`${FONTS_PATH}/SpaceMono-Regular.ttf`),
};

import { StyleSheet, StatusBar } from "react-native"


export default StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center',
    
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  requestPreviewItem: {
    backgroundColor: 'white',
    shadowOffset:{  width: 5,  height: 8,  },
    shadowColor: 'black',
    shadowOpacity: 0.10,
    shadowRadius: 13,
    borderRadius: 5,
    padding: 18,
    marginTop: 20,
    borderWidth: 0.4, 
    borderColor: '#e7e7e7',

  },
  requestCardPadding: {
    paddingHorizontal: 18,
  },
  requestPreviewCarImages: {
    flexDirection: 'row',
    marginVertical: 20
  },
  requestPreviewCarImageContainer: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  requestPreviewCarImageSource: {
    flex:1, 
    width: undefined, 
    height: undefined

  },
  marginRight10: {
    marginRight: 10,
  },
  carImageOpacity: {
    opacity: 0.4
  },
  moreImagesText: {
    color: 'white',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  requestPreviewQuoteCount: {
    backgroundColor: '#3EC97C',
    borderRadius: 50,
    paddingVertical: 6.5,
    width: 108,
    justifyContent: 'center',
    alignItems: 'center'

  },
  requestPreviewQuoteCountText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'circular-medium'
  },
  requestPreviewLowerSection: {
    flexDirection: 'row',
  },
  requestPreviewLowerSectionItem: {
    flex: 1
  },
  requestPreviewRightArrow: {
    width: 23,
    height: 23,
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: -3.5


  },
  requestPreviewToplineText: {
    fontFamily: 'circular-medium',
    flexDirection: 'row'
  },
  requestPreviewToplineTextLeft: {
    flex: 1,
    color: '#24272C',
    fontFamily: 'circular',
    fontSize: 18,
    lineHeight: 18
  },
  requestPreviewToplineTextRight: {
    flex: 1,
    color: '#979797',
    fontFamily: 'circular',
    textAlign: 'right',
    fontSize: 13
  },
  requestPreviewAvgPriceText: {
    position: 'relative',
    bottom: -6
  },
  requestPreviewAvgPriceTextBold: {
    fontFamily: 'circular-bold'
  },
  requestPreviewLocationDetails: {
    width: 300,
     flexDirection: 'row', 
     alignSelf: 'flex-start',
     marginTop: 8,
     marginBottom: 5

  },
  requestPreviewLocationDetailsItem: {
  },
  requestPreviewLocationDetailsText: {
    color: '#717376',
    fontFamily: 'circular',
    fontSize: 15
  },
  requestPreviewMiddleDot: {
    marginHorizontal: 11,
    backgroundColor: '#D8D8D8',
    height: 5.5,
    width: 5.5,
    borderRadius: 100,
    position: 'relative',
    bottom: -7
  },
  pageHeader: {
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  pageHeaderTitle: {
    fontFamily: 'circular-medium',
    fontSize: 24
  },
  paddingContainer: {
    paddingHorizontal: 20
  },
  splashIllustration: {
  },
  splashIllustrationContainer: {
    flex: 0.8,
    flexDirection: 'column',
    paddingVertical: 20,
  },
  splashLogoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoSplashScreen: {

    marginTop: 80
  },
  upperLoginSection: {
    flex: 0.25,
    justifyContent: 'center',


  },
  mainLoginSection: {
    flex: 1,
    justifyContent: 'center',

  },
  loginSection: {
    paddingBottom: 15
  },
  loginSectionLogo: {
    width: 207,
    height: 51,   
    marginTop: 50,
    marginBottom: 55
  },
  loginSectionTitle: {
    color: '#24272C',
    fontSize: 26,
    fontFamily: 'circular-bold',
    marginBottom: 20
  },
  loginSectionInput: {
    backgroundColor: '#F2F2F2',
    color: 'black',
    fontFamily: 'circular',
    fontSize: 18,
    borderRadius: 4,
    padding: 14,
    marginBottom: 14,

  },
  loginButtonInner: {
    justifyContent: 'center', 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  loginButtonContainer: {
    backgroundColor: '#3EC97C',
    borderRadius: 4,
    paddingVertical: 13,
    marginTop: 10,
    shadowOffset:{  width: 7,  height: 12,  },
    shadowColor: '#3EC97C',
    shadowOpacity: 0.3,
    shadowRadius: 40,

  },
  rightArrowLogin: {
    width: 21,
    height: 15
  },
  loginText: {
    color: 'white',
    fontFamily: 'circular-medium',
    marginRight: 8,
    fontSize: 18.5

  },
  wavesContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column', 
    position: 'absolute', 
    bottom: 0,
    zIndex: -1000
  },
  wavesImage: {
    resizeMode: 'stretch',
  },
  loginBottomText: {
    marginBottom: 35,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBottomText1: {
    textAlign: 'center',
    fontFamily: 'circular-medium',    
  },
  loginBottomText2: {
    textAlign: 'center',
    fontFamily: 'circular-bold',
    color: '#822881',
    marginTop: 4,
    fontSize: 20
  },
  signupBottomText: {
    paddingVertical: 25
  },
  signupBottomText1: {
    textAlign: 'center',
    fontFamily: 'circular-medium',    
  },
  signupBottomText2: {
    textAlign: 'center',
    fontFamily: 'circular-bold',
    color: '#822881',
    marginTop: 4,
    fontSize: 20
  },
  forgotPasswordText: {
    color: '#24272C',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 25,

  },
  confirmBookingCardItem: {
    flexDirection: 'row',
    
    backgroundColor: 'white',
    borderColor: '#F0F0F0',
    borderWidth: 1,
    padding: 13,
    borderRadius: 5,
    marginBottom: 10


  },
  confirmBookingCardItemSelected: {
    shadowOffset:{  width: 5,  height: 8,  },
    shadowColor: 'black',
    shadowOpacity: 0.10,
    shadowRadius: 13,
  },
  confirmBookingCardLeft: {
     flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  confirmBookingCardSelect: {
    width: 28,
    height: 28
  },
  confirmBookingCardNumber: {
    marginLeft: 14,
    fontFamily: 'circular',
    fontSize: 16.5
  },
  confirmBookingCardRight: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  confirmBookingCardType: {
    width: 48.5,
    height: 30
  },
  confirmBookingMeta: {
    flexDirection: 'row',
    marginVertical: 22,
    borderTopColor: '#F3F3F3',
    borderTopWidth: 2,
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 2,
    paddingVertical: 11

  },
  confirmBookingMetaItem: {
    flex: 1,
  },
  confirmBookingMetaTitle: {
    color: '#B8B9BA',
    fontFamily: 'circular-medium',
    fontSize: 13,
    marginBottom: 1
  },
  confirmBookingMetaDesc: {
    color: '#222',
    fontFamily: 'circular-bold',
    fontSize: 16.5
  },
  confirmBookingTitle: {
    fontSize: 24,
    color: '#222',
    fontFamily: 'circular-bold',    
  },
  confirmBookingDetails: {
    flexDirection: 'row',
    marginTop: 20
  },
  confirmBookingProviderLogoContainer: {

  },
  confirmBookingProvider: {
    marginTop: 8
  },
  confirmBookingProviderLogo: {
    width: 90,
    height: 55,
    borderColor: '#F6F6F6',
    borderWidth: 1,
    marginRight: 11

  },
  confirmBookingLocationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -4
  },
  confirmBookingLocationIcon: {
    height: 32,
    width: 16,
    marginRight: 1.8

  },
  confirmBookingLocationText: {
    color: '#AFB1B3',
    fontFamily: 'circular',
    fontSize: 12.5
  },
  confirmBookingProviderName: {
    color: '#222',
    fontFamily: 'circular',
    fontSize: 16,
    lineHeight: 16
  },
  requestPreviewItemBookedLine: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1.7

  },
  requestPreviewItemBookedTextContainer: {
    borderColor: '#3EC97C',
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    width: 122,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -15.5,
    marginLeft: 18,
    backgroundColor: 'white',
    zIndex: 1000
  },
  requestPreviewItemBookedText: {
    color: '#3EC97C',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'circular-medium'
  },
  requestPreviewItemBookedItem: {
    marginVertical: 5,
    marginBottom: 10
  },
  requestPreviewItemBookedWashBookingInfo: {
    flexDirection: 'row', 
    alignSelf: 'flex-start',
  },
  requestPreviewItemBookedWashMiddleDot: {
    marginHorizontal: 11,
    backgroundColor: '#D8D8D8',
    height: 5.5,
    width: 5.5,
    borderRadius: 100,
    position: 'relative',
    bottom: -7

  },
  requestPreviewItemBookedWashBookingDetailsItem: {
    
  },
  requestPreviewItemBookedWashItem: {
    marginTop: 25,
    flexDirection: 'row'
  },
  requestPreviewItemBookedWashProviderLogoContainer: {

  },
  requestPreviewItemBookedWashProviderLogo: {
      width: 65,
      height: 39,
      borderColor: '#F6F6F6',
      borderWidth: 1,
      marginRight: 11
  },
  requestPreviewItemBookedItemParent: {
    flex: 1
  },
  requestPreviewItemBookedWashProviderName: {
    fontFamily: 'circular',
    fontSize: 16,
    color: '#222'
  },
  requestPreviewItemBookedWashBookingTime: {
    fontFamily: 'circular',
    fontSize: 13,
    color: '#717376'   
  },
  requestPreviewItemBookedWashBookingCost: {
    fontFamily: 'circular-bold',
    fontSize: 13,
    color: '#717376'   
  },
  requestPreviewBookingRightArrow: {
    width: 23,
    height: 23,
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: -6.5
  },
  requestPreviewExpiredFooter: {
  },
  requestPreviewItemExpiredTextContainer: {
    borderColor: '#C7C7C7',
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    width: 90,
    backgroundColor: 'white',
    zIndex: 1000

  },
  requestPreviewItemExpiredText: {
    color: '#C7C7C7',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'circular-medium'
  },
  newRequestHeaderIcon: {
    width:23,
    height: 23,
    bottom: -4
  },
  noRequestContainer: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    paddingHorizontal: 25
  },
  noRequestIllustration: {
    width: 242,
    height: 193,
    alignSelf: 'center'
  },
  noRequestTitle: {
    color: '#24272C',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'circular-bold',
    marginTop: 25,
    marginBottom: 10
  },
  noRequestCTA: {
    shadowOffset:{  width: 10,  height: 15,  },
    shadowColor: '#3EC97C',
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  noRequestCTAicon: {

  },
  noRequestCTAtext: {

  },



});
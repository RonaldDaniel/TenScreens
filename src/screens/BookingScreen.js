import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import glamorous from 'glamorous-native';
import Constants  from '../global/Constants';
const {width,height} = Dimensions.get('window');
const win = Dimensions.get('window');
const mainpadding = width*0.5;
const ratio = win.width / 400;
const imageRatio = 0.19;
const Container = glamorous(View)({
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Constants.Colors.backgroundColor
})
const TopView = glamorous(View)({
  paddingTop: 50,
  width: '100%',
  backgroundColor: 'white'
})
const Title = glamorous(Text)({
  color: Constants.Colors.FontBlack,
  fontSize: 24,
  paddingLeft: 20,
  fontWeight: '400',
})
const TopTab = glamorous(View) ({
  flexDirection: 'row',
  width: '100%',
  marginTop: 35,
})
const TabButton = glamorous(TouchableOpacity) (({active} = this.props) => ({
  width: '50%',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 18,
  borderBottomWidth: active ? 3 : 0,
  borderColor: Constants.Colors.ACTIVE,
}))
const Tabs = ({active,onPress,title} = this.props)=> 
<TabButton active = {active} onPress = {onPress}>
  <CustomText size = {14} color = {active ? Constants.Colors.ACTIVE : Constants.Colors.PASSIVE}>{title}</CustomText>
</TabButton>
const CustomText = glamorous(Text)(({size,color,weight} = this.props) => ({
  fontSize: size || 18,
  color: color || 'black',
  fontWeight: weight || 'normal'
}))
const BottomView = glamorous(View)({
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: 20,
  alignItems: 'flex-start',
  justifyContent: 'center',
})
const BookingItem  = glamorous(View) ({
  flexDirection: 'column',
  width: '100%',
  borderRadius: 5,
  backgroundColor: 'white',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 5,
  marginTop: 16,
  paddingVertical: 16,
  justifyContent: 'center',
  alignItems: 'flex-start',
})
const BookingTitleRow = glamorous(View) ({
  flexDirection: 'row',
  paddingHorizontal: 20,
  width: '100%',
  paddingBottom: 10,
})
const DesRow = glamorous(View) ({
  flexDirection: 'row',
  width: '60%',
  paddingLeft: 20,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: 19
})
const DesMidOval = glamorous(View) ({
  width: 5,
  height: 5,
  borderRadius: 3,
  marginBottom: 2,
  backgroundColor: '#DBDBDB'
})
const ImageRow = glamorous(View) ({
  flexDirection: 'row',
  width: '100%',
  marginBottom: 16,
  paddingHorizontal: 20,
  justifyContent: 'space-between'
})
const BookingLine = glamorous(View) ({
  width: '100%',
  height: 1,
  backgroundColor: '#ECECEC'
})
const ImageItem = glamorous(View) ({
  width: win.width * imageRatio,
  height: 267*ratio*imageRatio,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})
const ImageMore = glamorous(View)({
  flexDirection: 'column',
  width: win.width * imageRatio,
  height: 267*ratio*imageRatio,
  position: 'absolute',
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)'
})
const CompanyRow = glamorous(View) ({
  flexDirection: 'row',
  marginTop: 16,
  alignItems: 'center',
  paddingHorizontal: 20,
  justifyContent: 'flex-start'
})
const CompanyTitleCol = glamorous(View) ({
  flexDirection: 'column',
  height: 33,
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})
const PayDesRow = glamorous(View) (({bottom} = this.props) => ({
  flexDirection: 'row',
  width: '100%',
  marginTop: 16,
  paddingHorizontal: 20,
  paddingBottom: 0 || 5,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
}))
const WashDate = glamorous(View) ({
  flexDirection: 'column',
  paddingRight: 20,
  height: 38,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})
const PaymentPaid = glamorous(View) ({
  flexDirection: 'column',
  height: 38,
  paddingRight: 10,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})
const ButtonRow = glamorous(View) ({
  flexDirection: 'row',
  width: '100%',
  paddingHorizontal: 20,
})
const ViewBookingButton  =  glamorous(TouchableOpacity) ({
  width: '100%',
  marginTop: 15,
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  backgroundColor: Constants.Colors.ACTIVE,
  borderRadius: 5,
})
export default class BookingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upComing: true,
    }
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <TopView>
          <Title>Bookings</Title>
          <TopTab>
            <Tabs active = {this.state.upComing} title = {'Upcoming'} onPress={() => this.setState({upComing: true})} />
            <Tabs active = {!this.state.upComing} title = {'Completed'} onPress={() => this.setState({upComing: false})} />
          </TopTab>
        </TopView>
        { 
          this.state.upComing ? 
          <BottomView>
            <BookingItem>
              <BookingTitleRow>
                <CustomText color={Constants.Colors.FontBlack} size = {16}>Vauxhall Corsa</CustomText>
              </BookingTitleRow>
              <DesRow>
                <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>CV62 BNB</CustomText>
                <DesMidOval />
                <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>Newcastle NE1</CustomText>
              </DesRow>
              <ImageRow>
                <ImageItem>
                  <Image 
                    source = {Constants.Images.BOOKINGCAR1} 
                    style={styles.image} 
                    resizeMode = 'contain'/>
                </ImageItem>
                <ImageItem>
                  <Image 
                    source = {Constants.Images.BOOKINGCAR2} 
                    style={styles.image} 
                    resizeMode = 'contain'/>
                </ImageItem>
                <ImageItem>
                  <Image 
                    source = {Constants.Images.BOOKINGCAR3} 
                    style={styles.image} 
                    resizeMode = 'contain'/>
                </ImageItem>
                <TouchableOpacity>
                  <ImageItem>
                    <Image 
                      source = {Constants.Images.BOOKINGCAR1} 
                      style={styles.image} 
                      resizeMode = 'contain'/>
                    <ImageMore>
                      <CustomText size = {12} color = {'white'}>+2 more</CustomText>
                    </ImageMore>
                  </ImageItem>
                </TouchableOpacity>
              </ImageRow>
              <BookingLine />
              <CompanyRow>
                <Image source = {Constants.Images.TIMEWASHLOGO} style={{resizeMode: 'stretch',width: 50,height: 33,borderWidth: 1,borderColor: '#ECECEC',marginRight: 8,}} />
                <CompanyTitleCol>
                  <CustomText color = {Constants.Colors.FontBlack} size = {13}>OXO Care</CustomText>
                  <CustomText color = {Constants.Colors.FONTGRAY} size = {11}>Newcastle NE1</CustomText>
                </CompanyTitleCol>
              </CompanyRow>
              <PayDesRow>
                <WashDate>
                  <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>Wash Date -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.ACTIVE}>21 May 2019, 10:00AM</CustomText>
                </WashDate>
                <PaymentPaid>
                  <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>Payment paid -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.ACTIVE}>£9.25</CustomText>
                </PaymentPaid>
              </PayDesRow>
              <ButtonRow>
                <ViewBookingButton>
                  <CustomText size = {13} color = {'white'}>View Booking</CustomText>
                </ViewBookingButton>
              </ButtonRow>
            </BookingItem>
          </BottomView>
          :
          <BottomView>
            <BookingItem>
              <BookingTitleRow>
                <CustomText color={Constants.Colors.FontBlack} size = {16}>Vauxhall Corsa</CustomText>
              </BookingTitleRow>
              <DesRow>
                <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>CV62 BNB</CustomText>
                <DesMidOval />
                <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>Newcastle NE1</CustomText>
              </DesRow>
              <ImageRow>
                <ImageItem>
                  <Image 
                    source = {Constants.Images.BOOKINGCAR1} 
                    style={styles.image} 
                    resizeMode = 'contain'/>
                </ImageItem>
                <ImageItem>
                  <Image 
                    source = {Constants.Images.BOOKINGCAR2} 
                    style={styles.image} 
                    resizeMode = 'contain'/>
                </ImageItem>
                <ImageItem>
                  <Image 
                    source = {Constants.Images.BOOKINGCAR3} 
                    style={styles.image} 
                    resizeMode = 'contain'/>
                </ImageItem>
                <TouchableOpacity>
                  <ImageItem>
                    <Image 
                      source = {Constants.Images.BOOKINGCAR1} 
                      style={styles.image} 
                      resizeMode = 'contain'/>
                    <ImageMore>
                      <CustomText size = {12} color = {'white'}>+2 more</CustomText>
                    </ImageMore>
                  </ImageItem>
                </TouchableOpacity>
              </ImageRow>
              <BookingLine />
              <CompanyRow>
                <Image source = {Constants.Images.TIMEWASHLOGO} style={{resizeMode: 'stretch',width: 50,height: 33,borderWidth: 1,borderColor: '#ECECEC',marginRight: 8,}} />
                <CompanyTitleCol>
                  <CustomText color = {Constants.Colors.FontBlack} size = {13}>OXO Care</CustomText>
                  <CustomText color = {Constants.Colors.FONTGRAY} size = {11}>Newcastle NE1</CustomText>
                </CompanyTitleCol>
              </CompanyRow>
              <PayDesRow bottom = {5}>
                <WashDate>
                  <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>Wash Date -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.FontBlack}>21 May 2019, 10:00AM</CustomText>
                </WashDate>
                <PaymentPaid>
                  <CustomText size = {12} color = {Constants.Colors.FONTGRAY}>Payment paid -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.FontBlack}>£9.25</CustomText>
                </PaymentPaid>
              </PayDesRow>
            </BookingItem>
          </BottomView>
        }
      </Container>
    );
  }
}

const styles =  StyleSheet.create({
  image: {
    width: win.width * imageRatio,
    height: 267*ratio*imageRatio,
  }
})
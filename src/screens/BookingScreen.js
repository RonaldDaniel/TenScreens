import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import glamorous from 'glamorous-native';
import Constants  from '../global/Constants'

const Container = glamorous(View)({
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Constants.Colors.backgroundColor
})
const TopView = glamorous(View)({
  paddingTop: 70,
  width: '100%',
  backgroundColor: 'white'
})
const Title = glamorous(Text)({
  color: Constants.Colors.FontBlack,
  fontSize: 24,
  paddingLeft: 20,
})
const TopTab = glamorous(View) ({
  flexDirection: 'row',
  width: '100%',
  marginTop: 50,
})
const TabButton = glamorous(TouchableOpacity) (({active} = this.props) => ({
  width: '50%',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 15,
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
  alignItems: 'flex-start',
  justifyContent: 'center',
})
const BookingItem  = glamorous(View) ({
  flexDirection: 'column',
  paddingVertical: 10,
  paddingHorizontal: 10,
  width: '90%',
  borderRadius: 5,
  backgroundColor: 'white',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 3,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'flex-start',
})
const DesRow = glamorous(View) ({
  flexDirection: 'row',
  width: '60%',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 15,
})
const DesMidOval = glamorous(View) ({
  width: 5,
  height: 5,
  borderRadius: 3,
  backgroundColor: Constants.Colors.PASSIVE
})
const ImageRow = glamorous(View) ({
  flexDirection: 'row',
  width: '100%',
  marginBottom: 20,
  justifyContent: 'space-between'
})
const BookingLine = glamorous(View) ({
  width: '100%',
  height: 1,
  backgroundColor: Constants.Colors.PASSIVE
})
const ImageItem = glamorous(View) ({
  width: 69,
  height: 46,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})
const ImageMore = glamorous(View)({
  flexDirection: 'column',
  width: 69,
  height: 46,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)'
})
const CompanyRow = glamorous(View) ({
  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'flex-start'
})
const CompanyTitleCol = glamorous(View) ({
  flexDirection: 'column',
  height: 33,
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})
const PayDesRow = glamorous(View) ({
  flexDirection: 'row',
  width: '100%',
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'space-between',
})
const WashDate = glamorous(View) ({
  flexDirection: 'column',
  paddingRight: 20,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: 40,
})
const PaymentPaid = glamorous(View) ({
  flexDirection: 'column',
  height: 40,
  paddingRight: 20,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})
const ViewBookingButton  =  glamorous(TouchableOpacity) ({
  width: '100%',
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Constants.Colors.ACTIVE,
  paddingVertical: 15,
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
              <CustomText color={Constants.Colors.FontBlack} size = {16}>Vauxhall Corsa</CustomText>
              <DesRow>
                <CustomText size = {12} color = {Constants.Colors.PASSIVE}>CV62 BNB</CustomText>
                <DesMidOval />
                <CustomText size = {12} color = {Constants.Colors.PASSIVE}>Newcastle NE1</CustomText>
              </DesRow>
              <ImageRow>
                <Image source = {Constants.Images.BOOKINGCAR1} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                <Image source = {Constants.Images.BOOKINGCAR2} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                <Image source = {Constants.Images.BOOKINGCAR3} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                <TouchableOpacity>
                  <ImageItem>
                    <Image source = {Constants.Images.BOOKINGCAR1} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                    <ImageMore>
                      <CustomText size = {12} color = {'white'}>+2 more</CustomText>
                    </ImageMore>
                  </ImageItem>
                </TouchableOpacity>
              </ImageRow>
              <BookingLine />
              <CompanyRow>
                <Image source = {Constants.Images.TIMEWASHLOGO} style={{resizeMode: 'stretch',width: 50,height: 33,borderWidth: 1,borderColor: Constants.Colors.PASSIVE,marginRight: 5,}} />
                <CompanyTitleCol>
                  <CustomText color = {Constants.Colors.FontBlack} size = {13}>OXO Care</CustomText>
                  <CustomText color = {Constants.Colors.PASSIVE} size = {11}>Newcastle NE1</CustomText>
                </CompanyTitleCol>
              </CompanyRow>
              <PayDesRow>
                <WashDate>
                  <CustomText size = {12} color = {Constants.Colors.PASSIVE}>Wash Date -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.ACTIVE}>21 May 2019, 10:00AM</CustomText>
                </WashDate>
                <PaymentPaid>
                  <CustomText size = {12} color = {Constants.Colors.PASSIVE}>Payment paid -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.ACTIVE}>£9.25</CustomText>
                </PaymentPaid>
              </PayDesRow>
              <ViewBookingButton>
                <CustomText size = {13} color = {'white'}>View Booking</CustomText>
              </ViewBookingButton>
            </BookingItem>
          </BottomView>
          :
          <BottomView>
            <BookingItem>
              <CustomText color={Constants.Colors.FontBlack} size = {16}>Vauxhall Corsa</CustomText>
              <DesRow>
                <CustomText size = {12} color = {Constants.Colors.PASSIVE}>CV62 BNB</CustomText>
                <DesMidOval />
                <CustomText size = {12} color = {Constants.Colors.PASSIVE}>Newcastle NE1</CustomText>
              </DesRow>
              <ImageRow>
                <Image source = {Constants.Images.BOOKINGCAR1} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                <Image source = {Constants.Images.BOOKINGCAR2} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                <Image source = {Constants.Images.BOOKINGCAR3} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                <TouchableOpacity>
                  <ImageItem>
                    <Image source = {Constants.Images.BOOKINGCAR1} style={{resizeMode: 'stretch',width: 69,height: 46}} />
                    <ImageMore>
                      <CustomText size = {12} color = {'white'}>+2 more</CustomText>
                    </ImageMore>
                  </ImageItem>
                </TouchableOpacity>
              </ImageRow>
              <BookingLine />
              <CompanyRow>
                <Image source = {Constants.Images.TIMEWASHLOGO} style={{resizeMode: 'stretch',width: 50,height: 33,borderWidth: 1,borderColor: Constants.Colors.PASSIVE,marginRight: 5,}} />
                <CompanyTitleCol>
                  <CustomText color = {Constants.Colors.FontBlack} size = {13}>OXO Care</CustomText>
                  <CustomText color = {Constants.Colors.PASSIVE} size = {11}>Newcastle NE1</CustomText>
                </CompanyTitleCol>
              </CompanyRow>
              <PayDesRow>
                <WashDate>
                  <CustomText size = {12} color = {Constants.Colors.PASSIVE}>Wash Date -</CustomText>
                  <CustomText size = {12} color = {Constants.Colors.FontBlack}>21 May 2019, 10:00AM</CustomText>
                </WashDate>
                <PaymentPaid>
                  <CustomText size = {12} color = {Constants.Colors.PASSIVE}>Payment paid -</CustomText>
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

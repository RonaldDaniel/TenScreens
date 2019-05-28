import React from 'react';
import { StyleSheet, Text, View, Button, Animated, KeyboardAvoidingView, TouchableHighlight, Platform, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, StatusBar, Dimensions, ScrollView, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Constants, Font } from 'expo';
import FullWidthImage from 'react-native-fullwidth-image';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './assets/styles/Styles';


const {height} = Dimensions.get('window')


const FirstRoute = () => (
  <View style={[styles.scene]} >
    

         {/*
         <ScrollView style={{
    flexDirection: 'row',
    paddingBottom: 100
  }} contentContainerStyle={[{
    backgroundColor: '#F9F9F9',
    flex: 1,
    paddingBottom: 100
  }, styles.paddingContainer]}>
     

 
     
        <TouchableOpacity activeOpacity={0.55} style={styles.requestPreviewItem}>
          <View style={styles.requestPreviewToplineText}>
            <Text style={styles.requestPreviewToplineTextLeft}>Vauxhall Corsa</Text>
            <Text style={styles.requestPreviewToplineTextRight}>Expires in 21 hrs</Text>
          </View>

          <View style={styles.requestPreviewLocationDetails}>
            <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>CV62 BNB</Text>
            <View style={[styles.requestPreviewMiddleDot, styles.requestPreviewLocationDetailsItem]}/>
            <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>Newcastle NE1</Text>
          </View>

          <View style={styles.requestPreviewCarImages}>
            <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
              <Image source={require('./assets/images/car1/1.png')} style={styles.requestPreviewCarImageSource}/>
            </View>
            <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
              <Image source={require('./assets/images/car1/2.png')} style={styles.requestPreviewCarImageSource}/>
            </View>
            <View style={[styles.requestPreviewCarImageContainer]} aspectRatio={15 / 9}>
              <Image source={require('./assets/images/car1/3.png')} style={[styles.requestPreviewCarImageSource, styles.carImageOpacity]}/>
              <Text style={styles.moreImagesText}>+2 more</Text>
            </View>
          </View>


          <View style={styles.requestPreviewLowerSection}>
            <View style={styles.requestPreviewLowerSectionItem}>
              <View style={[styles.requestPreviewQuoteCount]}>
                <Text style={styles.requestPreviewQuoteCountText}>12 Quotes</Text>
              </View>
            </View>

            <View style={styles.requestPreviewLowerSectionItem}>
              <Text style={styles.requestPreviewAvgPriceText}>Avg. Price - 
                <Text style={styles.requestPreviewAvgPriceTextBold}> £8.70</Text>
              </Text>
            </View>
            <View style={{
    flex: 0.4
  }}>
              <Image source={require('./assets/icons/rightArrow.png')} style={styles.requestPreviewRightArrow}/>
            </View>
            

          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.55} style={styles.requestPreviewItem}>
          <View style={styles.requestPreviewToplineText}>
            <Text style={styles.requestPreviewToplineTextLeft}>Ford Fiesta</Text>
            <Text style={styles.requestPreviewToplineTextRight}>Expires in 21 hrs</Text>
          </View>

          <View style={styles.requestPreviewLocationDetails}>
            <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>CV62 BNB</Text>
            <View style={[styles.requestPreviewMiddleDot, styles.requestPreviewLocationDetailsItem]}/>
            <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>Newcastle NE1</Text>
          </View>

          <View style={styles.requestPreviewCarImages}>
            <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
               <Image source={require('./assets/images/car2/1.png')} style={styles.requestPreviewCarImageSource}/>
            </View>
            <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
               <Image source={require('./assets/images/car2/2.png')} style={styles.requestPreviewCarImageSource}/>
            </View>
            <View style={[styles.requestPreviewCarImageContainer]} aspectRatio={15 / 9}>
             <Image source={require('./assets/images/car2/3.png')} style={[styles.requestPreviewCarImageSource, styles.carImageOpacity]}/>
              <Text style={styles.moreImagesText}>+2 more</Text>
            </View>
          </View>


          <View style={styles.requestPreviewLowerSection}>
            <View style={styles.requestPreviewLowerSectionItem}>
              <View style={[styles.requestPreviewQuoteCount]}>
                <Text style={styles.requestPreviewQuoteCountText}>12 Quotes</Text>
              </View>
            </View>

            <View style={styles.requestPreviewLowerSectionItem}>
              <Text style={styles.requestPreviewAvgPriceText}>Avg. Price - 
                <Text style={styles.requestPreviewAvgPriceTextBold}> £8.70</Text>
              </Text>
            </View>
            <View style={{
    flex: 0.4
  }}>
              <Image source={require('./assets/icons/rightArrow.png')} style={styles.requestPreviewRightArrow}/>
            </View>
            

          </View>
        </TouchableOpacity> 





    </ScrollView>
    */}

    <View style={{flexDirection: 'row', backgroundColor: '#F9F9F9', flex: 1}}>
      <View style={styles.noRequestContainer}>

        <Image source={require('./assets/images/newRequestIllustration.png')} style={styles.noRequestIllustration}/>

        <Text style={styles.noRequestTitle}>Create a new request</Text>


        <TouchableOpacity activeOpacity={0.6} style={[styles.loginButtonContainer, styles.noRequestCTA]}>
          <View style={styles.loginButtonInner}>
            <Image source={require('./assets/images/plusIcon.png')} style={styles.rightArrowLogin}/>
            <Text style={[styles.loginText, {marginLeft: 10}]}>Create wash request</Text>
          </View>
        </TouchableOpacity>


      </View>
    </View>

    
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene]} >
    <ScrollView style={{
    flexDirection: 'row',
    paddingBottom: 100
  }} contentContainerStyle={[{
    backgroundColor: '#F9F9F9',
    flex: 1,
    paddingBottom: 100
  }, styles.paddingContainer]}>
     
        <TouchableOpacity activeOpacity={0.55} style={[styles.requestPreviewItem, {paddingHorizontal: 0}]}>

          <View style={styles.requestCardPadding}>
            <View style={styles.requestPreviewToplineText}>
              <Text style={styles.requestPreviewToplineTextLeft}>Ford Fiesta</Text>
              <Text style={styles.requestPreviewToplineTextRight}>Booked a wash</Text>
            </View>

            <View style={styles.requestPreviewLocationDetails}>
              <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>CV62 BNB</Text>
              <View style={[styles.requestPreviewMiddleDot, styles.requestPreviewLocationDetailsItem]}/>
              <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>Newcastle NE1</Text>
            </View>

            <View style={[styles.requestPreviewCarImages, {marginBottom: 0}]}>
              <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
                <Image source={require('./assets/images/car2/1.png')} style={styles.requestPreviewCarImageSource}/>
              </View>
              <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
                <Image source={require('./assets/images/car2/2.png')} style={styles.requestPreviewCarImageSource}/>
              </View>
              <View style={[styles.requestPreviewCarImageContainer]} aspectRatio={15 / 9}>
                <Image source={require('./assets/images/car2/3.png')} style={[styles.requestPreviewCarImageSource, styles.carImageOpacity]}/>
                <Text style={styles.moreImagesText}>+2 more</Text>
              </View>
            </View>
          </View>

          <View  style={styles.requestPreviewItemBookedItem}>
            <View style={styles.requestPreviewItemBookedTextContainer}>
              <Text style={styles.requestPreviewItemBookedText}>Booked a Wash</Text>
            </View>
            <View style={styles.requestPreviewItemBookedLine}/>
          </View>

          <View style={[styles.requestPreviewItemBookedWashItem, styles.requestCardPadding]}>
             <View style={{flex: 1, flexDirection: 'row'}}>
               <View style={styles.requestPreviewItemBookedWashProviderLogoContainer}>
                  <Image source={require('./assets/images/oxo.png')} style={styles.requestPreviewItemBookedWashProviderLogo}/>
               </View>
               <View style={styles.requestPreviewItemBookedWashProvider}>
                  <Text style={styles.requestPreviewItemBookedWashProviderName}>Car Service & Cleaners</Text>
                  <View style={styles.requestPreviewItemBookedWashBookingInfo}>
                    <Text style={[styles.requestPreviewItemBookedWashBookingTime, styles.requestPreviewItemBookedWashBookingDetailsItem]}>19 May, 10:15AM</Text>
                    <View style={[styles.requestPreviewItemBookedWashMiddleDot, styles.requestPreviewItemBookedWashBookingDetailsItem]}/>
                    <Text style={[styles.requestPreviewItemBookedWashBookingCost, styles.requestPreviewItemBookedWashBookingDetailsItem]}>£8.70</Text>
                  </View>
               </View>
            </View>
            <View style={{flex: 0.3}}>
              <Image source={require('./assets/icons/rightArrow.png')} style={styles.requestPreviewBookingRightArrow}/>
            </View>

          </View>

        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.55} style={styles.requestPreviewItem}>
          <View style={styles.requestPreviewToplineText}>
            <Text style={styles.requestPreviewToplineTextLeft}>Vauxhall Corsa</Text>
            <Text style={styles.requestPreviewToplineTextRight}>Expired</Text>
          </View>

          <View style={styles.requestPreviewLocationDetails}>
            <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>CV62 BNB</Text>
            <View style={[styles.requestPreviewMiddleDot, styles.requestPreviewLocationDetailsItem]}/>
            <Text style={[styles.requestPreviewLocationDetailsText, styles.requestPreviewLocationDetailsItem]}>Newcastle NE1</Text>
          </View>

          <View style={styles.requestPreviewCarImages}>
            <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
              <Image source={require('./assets/images/car.jpg')} style={styles.requestPreviewCarImageSource}/>
            </View>
            <View style={[styles.requestPreviewCarImageContainer, styles.marginRight10]} aspectRatio={15 / 9}>
              <Image source={require('./assets/images/car.jpg')} style={styles.requestPreviewCarImageSource}/>
            </View>
            <View style={[styles.requestPreviewCarImageContainer]} aspectRatio={15 / 9}>
              <Image source={require('./assets/images/car.jpg')} style={[styles.requestPreviewCarImageSource, styles.carImageOpacity]}/>
              <Text style={styles.moreImagesText}>+2 more</Text>
            </View>
          </View>
          <View style={styles.requestPreviewExpiredFooter}>
            <View style={styles.requestPreviewItemExpiredTextContainer}>
              <Text style={styles.requestPreviewItemExpiredText}>Expired</Text>
            </View>
          </View>
        </TouchableOpacity>
    </ScrollView>    
  </View>
);

class NavigateScreen extends React.Component {




  constructor(props) {
    super(props);
    this.state = { username: '',  password: '', fontLoaded: false,
    isLoading: true};
  } 

 
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        10
      )
    );
  }


  async componentDidMount() {
  
      const data = await this.performTimeConsumingTask();

      if (data !== null) {
        this.setState({ isLoading: false });
      }

      await Font.loadAsync({
        'circular': require('./assets/fonts/CircularStd-Book.otf'),
        'circular-medium': require('./assets/fonts/CircularStd-Medium.otf'),
        'circular-bold': require('./assets/fonts/CircularStd-Bold.otf'),
      });

      this.setState({ fontLoaded: true });
   
  }






  render() {




    const {navigate} = this.props.navigation;

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#3EC97C'
      }}>
        
      {
      this.state.fontLoaded ? (

        <View style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 50
        }}>
        



            <Button onPress={() => navigate('SplashScreen')} title="Splash screen" color="#fff"/>
            <Button onPress={() => navigate('Login')} title="Login screen" color="#fff"/>
            <Button onPress={() => navigate('Signup')} title="Signup Screen" color="#fff"/>
            <Button onPress={() => navigate('Requests')} title="Requests screen" color="#fff"/>

            



        </View>

        ) : null
      }

      </View>

                
                      
            
              
    );
  }
}


class SplashScreen extends React.Component {


  state = {
    fontLoaded: false
  };




  async componentDidMount() {


    await Font.loadAsync({
      'circular': require('./assets/fonts/CircularStd-Book.otf'),
      'circular-medium': require('./assets/fonts/CircularStd-Medium.otf'),
      'circular-bold': require('./assets/fonts/CircularStd-Bold.otf'),
    });

    this.setState({
      fontLoaded: true
    });

  }




  render() {
    const {navigate} = this.props.navigation;





    return (

      <View style={{
        flex: 1,
        backgroundColor: '#3EC97C'
      }}>
        
      {
      this.state.fontLoaded ? (

        <View style={{
          flex: 1,
          flexDirection: 'column'
        }}>

            

            <View style={styles.splashLogoContainer}>
              <Image
        source={require('./assets/images/animatedLogoDraft.gif')}
        style={styles.logoSplashScreen}
        width={270.25}
        height={65.55}
        />

            </View>
           
            <View style={styles.splashIllustrationContainer}>
              <FullWidthImage style={styles.splashIllustration} source={require('./assets/images/splashIllustration.png')} ratio={3 / 4}/>
            </View>
          </View>

        ) : null
      }

      </View>



      );
  }
}

class Login extends React.Component {


  state = {
    fontLoaded: false,
    email: null,
    password: null
  };




  async componentDidMount() {


    await Font.loadAsync({
      'circular': require('./assets/fonts/CircularStd-Book.otf'),
      'circular-medium': require('./assets/fonts/CircularStd-Medium.otf'),
      'circular-bold': require('./assets/fonts/CircularStd-Bold.otf'),
    });

    this.setState({
      fontLoaded: true
    });

  }




  render() {
    const {navigate} = this.props.navigation;





    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
      }}>

      {
      this.state.fontLoaded ? (


        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff'
        }}>

        <KeyboardAvoidingView style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff'
        }} behavior="padding" enabled>
        
      

        <ImageBackground
        source={require('./assets/images/loginBackground.png')}
        style={{
          width: '100%',
          height: '100%'
        }}> 


            <View style={{
          flex: 1,
          flexDirection: 'column',
          paddingHorizontal: 20
        }}>

              <ScrollView style={styles.loginSection} keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
                <Image source={require('./assets/images/blackLogo.png')} style={styles.loginSectionLogo}/>
              

              
                <Text style={styles.loginSectionTitle}>Login to your account</Text>
                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(email) => this.setState({
          email
        })}
        value={this.state.email}
        placeholder="Email"
        placeholderTextColor="#b5b5b5"
        keyboardType="email-address"
        />
                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(password) => this.setState({
          password
        })}
        value={this.state.password}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#b5b5b5"
        />


                <TouchableOpacity activeOpacity={0.6} style={styles.loginButtonContainer}>
                  <View style={styles.loginButtonInner}>
                    <Text style={styles.loginText}>Login</Text>
                    <Image source={require('./assets/images/rightArrowLogin.png')} style={styles.rightArrowLogin}/>
                  </View>
                </TouchableOpacity>

                
                <TouchableOpacity activeOpacity={0.4}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>


              </ScrollView>



              

              




            </View>

          </ImageBackground>




        </KeyboardAvoidingView>
        <View style={styles.loginBottomText}>

          <Text style={styles.loginBottomText1}>Don’t have an account?</Text>
          <TouchableOpacity activeOpacity={0.4}>
            <Text style={styles.loginBottomText2}>Create an account</Text>
          </TouchableOpacity>

        </View>

        </View>


        ) : null
      }



      </View>





      );
  }
}

class Signup extends React.Component {


  state = {
    fontLoaded: false,
    email: null,
    password: null,
    name: null,
    phone: null,
    confirmPassword: null
  };




  async componentDidMount() {


    await Font.loadAsync({
      'circular': require('./assets/fonts/CircularStd-Book.otf'),
      'circular-medium': require('./assets/fonts/CircularStd-Medium.otf'),
      'circular-bold': require('./assets/fonts/CircularStd-Bold.otf'),
    });

    this.setState({
      fontLoaded: true
    });

  }




  render() {


    const {navigate} = this.props.navigation;





    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
      }}>

      {
      this.state.fontLoaded ? (


        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff'
        }}>

        <KeyboardAvoidingView style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff'
        }} behavior="padding" enabled>
        
      

        <ImageBackground
        source={require('./assets/images/loginBackground.png')}
        style={{
          width: '100%',
          height: '100%'
        }}> 


            <View style={{
          flex: 1,
          flexDirection: 'column',
          paddingHorizontal: 20
        }}>

              <ScrollView style={styles.loginSection} keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
                <Image source={require('./assets/images/blackLogo.png')} style={styles.loginSectionLogo}/>
              


              
                <Text style={styles.loginSectionTitle}>Get started with your first wash on TimeWash!</Text>
                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(name) => this.setState({
          name
        })}
        value={this.state.name}
        placeholder="Full name"
        placeholderTextColor="#b5b5b5"
        />
                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(email) => this.setState({
          email
        })}
        value={this.state.email}
        placeholder="Email"
        placeholderTextColor="#b5b5b5"
        keyboardType="email-address"
        />

                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(phone) => this.setState({
          phone
        })}
        value={this.state.phone}
        placeholder="Phone number"
        placeholderTextColor="#b5b5b5"
        keyboardType="phone-pad"
        />


                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(password) => this.setState({
          password
        })}
        value={this.state.password}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#b5b5b5"
        />
                <TextInput
        style={styles.loginSectionInput}
        onChangeText={(confirmPassword) => this.setState({
          confirmPassword
        })}
        value={this.state.confirmPassword}
        secureTextEntry={true}
        placeholder="Confirm password"
        placeholderTextColor="#b5b5b5"
        />

                <TouchableOpacity activeOpacity={0.6} style={styles.loginButtonContainer}>
                  <View style={styles.loginButtonInner}>
                    <Text style={styles.loginText}>Sign up</Text>
                    <Image source={require('./assets/images/rightArrowLogin.png')} style={styles.rightArrowLogin}/>
                  </View>
                </TouchableOpacity>

               
                <View style={styles.signupBottomText}>

                  <Text style={styles.signupBottomText1}>Have an account?</Text>
                  <TouchableOpacity activeOpacity={0.4}>
                    <Text style={styles.signupBottomText2}>Login now</Text>
                  </TouchableOpacity>

                </View>


              </ScrollView>



              

              




            </View>

          </ImageBackground>




        </KeyboardAvoidingView>


        </View>


        ) : null
      }



      </View>





      );
  }
}

class TabBarIconCustom extends React.Component {

  render (){

    return (

       <View style={{alignItems: 'center', justifyContent: 'center', minWidth: 55}}>
          <Icon size={25} name={this.props.icon} style={{color: this.props.tintColor, marginBottom: 1}} />
          <Text style={{fontSize: 12,fontFamily: 'circular-medium', textAlign: 'center', color: this.props.tintColor}}>{this.props.title}</Text>
        </View>

    );
  }


}




class Requests extends React.Component {


  state = {
    index: 0,
    fontLoaded: false,
    routes: [
      {
        key: 'first',
        title: 'Active Requests'
      },
      {
        key: 'second',
        title: 'Past Requests'
      },
    ]
  };

  static defaultProps = {
    draggableRange: {
      top: 580,
      bottom: 0,
    }
  }

  _draggedValue = new Animated.Value(120)






  async componentDidMount() {


    await Font.loadAsync({
      'circular': require('./assets/fonts/CircularStd-Book.otf'),
      'circular-medium': require('./assets/fonts/CircularStd-Medium.otf'),
      'circular-bold': require('./assets/fonts/CircularStd-Bold.otf'),
    });

    this.setState({
      fontLoaded: true
    });

    //this._panel.show();

  }




  render() {
    const {navigate} = this.props.navigation;


    const {top, bottom} = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{scale: draggedValue}]


    return (

      <View style={{
        borderWidth: 0,
        flex: 1,
        backgroundColor: '#fff', 
        
      }}>
        
      {
      this.state.fontLoaded ? (

        <View style={{
          borderWidth: 0,
          flex: 1,
          backgroundColor: '#F9F9F9', 
        }}>

            <View style={[styles.paddingContainer, styles.pageHeader]}>
              <Text style={styles.pageHeaderTitle}>My Requests</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={require('./assets/images/newRequestIcon.png')} style={styles.newRequestHeaderIcon}/>
              </TouchableOpacity>
              
            </View>

            <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        style={{
          borderWidth: 0
        }}


        renderTabBar={props => <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: '#3EC97C',
            height: 3.5,
            borderWidth: 0
          }}
          style={{
            backgroundColor: '#ffffff',
            borderWidth: 0,
            color: 'red'
          }}
          labelStyle={{
            fontSize: 16.5,
            fontFamily: 'circular-medium',
            borderWidth: 0
          }}
          activeColor={'#3EC97C'}
          inactiveColor={'#8D8E90'}
          upperCaseLabel={false}
          getLabelText={({route}) => route.title}
          />
        }
        renderHeader={this._renderHeader}
        labelStyle={{
          color: 'red',
          borderWidth: 0
        }}


        swipeVelocityThreshold={800}

        onIndexChange={index => this.setState({
          index
        })}
        initialLayout={{
          width: Dimensions.get('window').width
        }}
        >
            
            </TabView>

            
            {/*<SlidingUpPanel
              showBackdrop={true}
              ref={c => (this._panel = c)}
              draggableRange={this.props.draggableRange}
              animatedValue={this._draggedValue}
              allowDragging={true}
              friction={0.5}
              >

              <View style={styles2.panel}>
                <View style={styles2.container}>

                  <Text style={styles.confirmBookingTitle}>Confirm booking</Text>

                  <View style={styles.confirmBookingDetails}>
                     <View style={styles.confirmBookingProviderLogoContainer}>
                      <Image source={require('./assets/images/oxo.png')} style={styles.confirmBookingProviderLogo}/>
                     </View>
                     <View style={styles.confirmBookingProvider}>
                        <Text style={styles.confirmBookingProviderName}>Car Service & Cleaners</Text>
                        <View style={styles.confirmBookingLocationInfo}>
                          <Image source={require('./assets/images/locationIcon.png')} style={styles.confirmBookingLocationIcon}/>
                          <Text style={styles.confirmBookingLocationText}>Newcastle NE1</Text>
                        </View>
                     </View>
                  </View>

                  <View style={styles.confirmBookingMeta}>
                    <View style={styles.confirmBookingMetaItem}>
                      <Text style={styles.confirmBookingMetaTitle}>DATE</Text>
                      <Text style={styles.confirmBookingMetaDesc}>19 Jan</Text>
                    </View>
                    <View style={[styles.confirmBookingMetaItem, {alignItems: 'center'}]}>
                      <Text style={styles.confirmBookingMetaTitle}>TIME</Text>
                      <Text style={styles.confirmBookingMetaDesc}>10:45AM</Text>
                    </View>
                    <View style={[styles.confirmBookingMetaItem, {alignItems: 'flex-end'}]}>
                      <Text style={styles.confirmBookingMetaTitle}>AMOUNT</Text>
                      <Text style={styles.confirmBookingMetaDesc}>£8.50</Text>
                    </View>
                  </View>

                  <View>

                    <View style={[styles.confirmBookingCardItem, styles.confirmBookingCardItemSelected]}>
                      <View style={styles.confirmBookingCardLeft}>
                        <Image source={require('./assets/images/tick.png')} style={styles.confirmBookingCardSelect}/>
                        <Text style={styles.confirmBookingCardNumber}>•••• 8184</Text>
                      </View>
                      <View style={styles.confirmBookingCardRight}>
                        <Image source={require('./assets/images/mastercard.png')} style={styles.confirmBookingCardType}/>
                      </View>
                    </View>
                    <View style={styles.confirmBookingCardItem}>
                      <View style={styles.confirmBookingCardLeft}>
                        <Image source={require('./assets/images/circle.png')} style={styles.confirmBookingCardSelect}/>
                        <Text style={styles.confirmBookingCardNumber}>•••• 8184</Text>
                      </View>
                      <View style={styles.confirmBookingCardRight}>
                        <Image source={require('./assets/images/mastercard.png')} style={styles.confirmBookingCardType}/>
                      </View>
                    </View>


                  </View>
                  
                  <TouchableOpacity activeOpacity={0.6} style={styles.loginButtonContainer}>
                    <View style={styles.loginButtonInner}>
                      <Text style={styles.loginText}>Book now</Text>
                      <Image source={require('./assets/images/rightArrowLogin.png')} style={styles.rightArrowLogin}/>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            </SlidingUpPanel>*/}

          </View>

        ) : null
      }

      </View>



      );
  }
}



const MainNavigator = createStackNavigator({
  NavigateScreen: {
    screen: NavigateScreen
  },

  Requests: { 
      screen: createMaterialBottomTabNavigator({
        Requests: { 
          screen: Requests,
          navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
              <TabBarIconCustom title="Requests" tintColor={tintColor} icon="car"/>
            ),
            
          } 
        },
        Bookings: { 
          screen: Requests,
          navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
              <TabBarIconCustom title="Bookings" tintColor={tintColor} icon="calendar-check-o"/>
            )
          } 
        },
        Search: { 
          screen: Requests,
          navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
              <TabBarIconCustom title="Search" tintColor={tintColor} icon="search"/>
            )
          } 
        },
        Account: { 
          screen: Requests,
          navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (

              <TabBarIconCustom title="Account" tintColor={tintColor} icon="user-circle"/>
            )
          } 
        },
        

        }, {
        initialRouteName: 'Requests',
        shifting: false,
        activeColor: '#3EC97C',
        inactiveColor: '#D8D8D8',
        labeled: false,
        barStyle: { backgroundColor: '#fff', minHeight: 63 },
        labelStyle: {
          fontSize: 22,
          fontFamily: 'circular-medium',
        },
      

      })
  },

  SplashScreen: {
    screen: SplashScreen
  },
 
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },

},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    },
  }
);



const styles2 = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,

  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    bottom: -120,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
}


const App = createAppContainer(MainNavigator);

export default App;



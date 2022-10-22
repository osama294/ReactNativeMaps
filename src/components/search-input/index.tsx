import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, Text, Platform, UIManager, ScrollView, LayoutAnimation, Keyboard, TouchableOpacity, ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import _debounce from 'lodash/debounce';
import {getLocation, heightConverter, heightPercentageToDP, widthPercentageToDP} from '../../utils';
import {colors, spacings} from '../../config/theme';
import styles from './style';
import {RootState} from '../../store/root-reducer';
import { VerticalSpacer } from '../vertical-spacer';
import { Button } from '../button';
import RBSheet from 'react-native-raw-bottom-sheet';
import { TabView, SceneMap , TabBar } from 'react-native-tab-view';


interface Props {
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  showBottomSheet? : boolean;
}

export const SearchInput = ({iconPosition = 'left', disabled, showBottomSheet}: Props) => {

  
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const refRBSheet2 = useRef();
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const [categories,setCategories] = useState([])
  const [categoriesExp,setCategoriesExp] = useState([])
  const dispatch = useDispatch();
  const [routes] = React.useState([
    { key: 'first', title: 'Item' },
    { key: 'second', title: 'Experience' },
  ]);
  const FirstRoute = () => (

    <ScrollView>
            <VerticalSpacer size={spacings.lg} />
     
</ScrollView>
  );
 
  
  const SecondRoute = () => (

    <ScrollView>
      <VerticalSpacer size={spacings.lg} />

      
</ScrollView>
  );


const CONTENT = [
  
  {
    isExpanded: false,
    category_name: 'Select Category',
    type: "Item"
  },
  {
    isExpanded: false,
    category_name: 'Select Location',
    type: "Item"
   
  },
  {
    isExpanded: false,
    category_name: 'Start Date',
    type: "Item"
  
  },
 
  
];
const CONTENT_EXP = [

  {
    isExpanded: false,
    category_name: 'Select Category',
    type: "Experience"
  },
  {
    isExpanded: false,
    category_name: 'Select Location',
    type: "Experience"
   
  },
  {
    isExpanded: false,
    category_name: 'Start Date',
    type: "Experience"
  
  },
 
  
];

useEffect(() => {
  
console.log("asdasdsa")



},[])





  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  };


  
  


  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [listDataSourceExp, setListDataSourceExp] = useState(CONTENT_EXP);
  const [multiSelect, setMultiSelect] = useState(false);

  const showAddCard =()=>{
    refRBSheet2.current.open()

  
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };

  const updateLayoutExp = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSourceExp];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSourceExp(array);
  };

  return (
    <View style={styles.mainContainer}>
      {iconPosition === 'left' && (
        <Feather name="search" color={colors.darkGrey} size={ heightPercentageToDP(2.2)} style = {{marginVertical : spacings.xs,marginHorizontal:spacings.sm}} />
      )}
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.black}
        autoCapitalize="none"
        style={styles.textInput}
        
        showSoftInputOnFocus={!showBottomSheet}
        pointerEvents={disabled ? 'none' : 'auto'}
        onFocus={()=>{

          if(showBottomSheet == true){
            showAddCard()
          }
          Keyboard.dismiss()


        }}
      />
      {iconPosition === 'right' && (
        <Feather name="search" color={colors.darkGrey} size={ heightPercentageToDP(2.2)} />
      )}
       <RBSheet

ref={refRBSheet2}


height={heightPercentageToDP(70.0)}
customStyles={{
  wrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
 
    
  },
  draggableIcon: {
    backgroundColor: "#000"
  }
}}
>
<VerticalSpacer size={spacings.lg} />
<View style={{flexDirection: 'row',justifyContent : 'center', width : "100%"}}>

        <Text style = {styles.contentTextBold3}>Search</Text>

        <TouchableOpacity
                style={{ marginLeft :  widthPercentageToDP(80)}}
                onPressIn={() =>  refRBSheet2.current.close()}>
                <Text >Done</Text>
              </TouchableOpacity>
              </View>
              {loading ? (
                <ActivityIndicator
                  color="black"
                  style={{marginLeft: 8}} />
              ) : null}
      
<VerticalSpacer size={spacings.sm} />

<TabView 
   style = {{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
        height : heightPercentageToDP(100),
    width : widthPercentageToDP(95),
    backgroundColor: colors.ternary,
    position: 'relative',
    justifyContent:'center',
    left: widthPercentageToDP(3),
    right: widthPercentageToDP(3),
    bottom: 0,
    elevation: 0,
   }}
   
   navigationState={{ index, routes }}
   renderScene={renderScene}
   onIndexChange={setIndex}
   initialLayout={{ width: widthPercentageToDP(20)}}
   renderTabBar={props => <TabBar {...props} style={{backgroundColor: 'transparent',  justifyContent:'center' }}
    activeColor = {colors.ternary} 

    inactiveColor = {colors.primary} 


    indicatorStyle={{ backgroundColor: colors.primary, 

    height: heightPercentageToDP(6) , 
    borderRadius : heightPercentageToDP(5)}}  
    labelStyle = {{fontSize : heightPercentageToDP(2.5),top:heightPercentageToDP(0.3)}} 
    tabStyle = {{backgroundColor : "transparent"}} 
    />}

 />
    
<VerticalSpacer size={spacings.sm} />

   


  </RBSheet>
    </View>
  );
};

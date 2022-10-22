import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {createRef, useCallback, useRef, useState} from 'react';
import { Button, HeaderAccountContent, TextInputTwo } from '../../components';

import {View, Text, ScrollView,Dimensions,TouchableOpacity, Platform,
  TextInput as RNTextInput,
  FlatList,
  Alert} from 'react-native';
import { VerticalSpacer } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import { colors } from '../../config/theme';
import {
  AppStackParamList,
  RootStackParamList,
  TabParamList,
} from '../../navigators/routes';
import * as Yup from 'yup';
import _isEmpty from 'lodash/isEmpty';
import MapView, {
  Polygon,
  Polyline,
  Marker,
  LatLng
} from 'react-native-maps';
import styles from './style';
import { spacings } from '../../config/theme';
import {heightPercentageToDP,widthPercentageToDP } from '../../utils';
import RBSheet from 'react-native-raw-bottom-sheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

type MapScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Map'>,
  CompositeNavigationProp<
    StackNavigationProp<AppStackParamList>,
    StackNavigationProp<RootStackParamList>
  >
>;

interface Props {
  navigation: MapScreenNavigationProp;
}
export const MapScreen = ({navigation}: Props) => {
const NameValidationSchema = Yup.object().shape({
    area_name: Yup.string()
    .required("Area Name cannot be empty"),
  });
const {width} = Dimensions.get('window');
const refRBSheet2 = useRef();
const [savedArea, setSavedArea] = useState(Array<any>);
const [stroke, setStroke] = useState(2);
const [lat, setLat] = useState(33.669062232621165);
const [long, setLong] = useState(73.0749646713819);
const [stroke2, setStroke2] = useState(0.0001);
const [isActiveDraw, setDrawMode] = useState<boolean>(true);
const [editing,setEditing] = useState(Array<LatLng>)
const [selectedArea,setselectedArea] = useState(Array<LatLng>)
const [isModalVisible, setModalVisible] = useState(false);
let areaNameref = createRef<RNTextInput>();
const mapRef = useRef(null);
const handleClear = useCallback(() => {{
setEditing([])
}
}, []);
const handleIsDraw = useCallback(() => {

  setDrawMode((prevMode) => !prevMode);
}, [handleClear, isActiveDraw]);


  const toggleModal = () => {

    setModalVisible(!isModalVisible);
  };

  var index = 0;
  const onPanDrag = (e) => {
  console.log(index++)
  if(!isActiveDraw && (index % 10 == 0)){
  setEditing([...editing, e.nativeEvent.coordinate])
  }
  }

 
  function calcArea(locations) {

    if (!locations.length) {    
      return 0;
    }
    if (locations.length < 3) {
      return 0;
    }
    let radius = 6371000;
    
    const diameter = radius * 2;
    const circumference = diameter * Math.PI;
    const listY = [];
    const listX = [];
    const listArea = [];
    
    
    const latitudeRef = locations[0].latitude;
    const longitudeRef = locations[0].longitude;
    for (let i = 1; i < locations.length; i++) {
      let latitude = locations[i].latitude;
      let longitude = locations[i].longitude;

      listY.push(calculateYSegment(latitudeRef, latitude, circumference));
    
      listX.push(calculateXSegment(longitudeRef, longitude, latitude, circumference));
    
    }
    
    // calculate areas for each triangle segment
    for (let i = 1; i < listX.length; i++) {
      let x1 = listX[i - 1];
      let y1 = listY[i - 1];
      let x2 = listX[i];
      let y2 = listY[i];
      listArea.push(calculateAreaInSquareMeters(x1, x2, y1, y2));
    
    }
    // sum areas of all triangle segments
    let areasSum = 0;
    listArea.forEach(area => areasSum = areasSum + area)
    // get abolute value of area, it can't be negative
    let areaCalc = Math.abs(areasSum * 9);// Math.sqrt(areasSum * areasSum); 
    return areaCalc;
    }
    
    function calculateAreaInSquareMeters(x1, x2, y1, y2) {
    return (y1 * x2 - x1 * y2) / 2;
    }
    
    function calculateYSegment(latitudeRef, latitude, circumference) {
    return (latitude - latitudeRef) * circumference / 360.0;
    }
    
    function calculateXSegment(longitudeRef, longitude, latitude, circumference) {
    return (longitude - longitudeRef) * circumference * Math.cos((latitude * (Math.PI / 180))) / 360.0;
    }

  const renderItem = ({ item }) => (

    <Item id = {item.id} title={item.area} area_sf={item.area_sf}  area_lf={item.area_lf} area = {item.area_latlng}/>
  
  );
  
  const dispatch = useDispatch();
  const Item = ({id,title,area_sf,area_lf,area}) => (
    <TouchableOpacity
    onPress={ async () => {
      setselectedArea(area)
      mapRef.current.animateToRegion({
        latitude: area[0].latitude,
        longitude: area[0].longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }, 2000);
       refRBSheet2.current.close()
    }}
  >
  <View style={styles.item}>
      <Text style={styles.contentTextBold}>{title}</Text>
      <View style={{flexDirection: 'row' }}>
      <Text style={styles.contentText}>{area_sf} SF</Text>
      <View style = {{width:'10%'}}></View>

      </View>
    </View>
    </TouchableOpacity>
  );

return (
<SafeAreaView style={styles.mainContainer}>
<HeaderAccountContent
   title={"MAPS"}
   />
    <View style = {styles.contentContainer}>
        <VerticalSpacer size={spacings.xs}/>
<VerticalSpacer size={spacings.xs}/>

<MapView
    style={[styles.map,{backgroundColor : 'red',height :heightPercentageToDP(80)}]}
    minZoomLevel={10}
    ref={mapRef}
    maxZoomLevel = {20}
    scrollEnabled = {isActiveDraw}
  initialRegion={{
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  zoomEnabled={true}
zoomTapEnabled= {true}
mapType = {'satellite'}
onPanDrag={(e)=>{onPanDrag(e)}}
>

{selectedArea.map(polyline => (
                  <Polygon
                  
                  coordinates={selectedArea}
                  strokeColor={colors.primary}
                    strokeWidth={3}
                  />
                ))}

{  editing.map(polyline => (
                  <Polyline
               
                  coordinates={editing}
                  strokeColor="red"
                    strokeWidth={stroke}
                  />
                ))}

{editing.map(polyline => (
                  <Polygon
                  coordinates={editing}
                  strokeColor="#0000FF"
                    strokeWidth={stroke2}
                  />
                ))}
    <Marker
  coordinate={{ latitude : 33.669062232621165 , longitude : 73.0749646713819}}
      title={'OBS Technologia'}
    />
</MapView>
<TouchableOpacity style={{position : 'absolute', backgroundColor : 'black',height : heightPercentageToDP(4)}} onPress={ () => {
refRBSheet2.current.open()
}}>
<Ionicons name='list' color={colors.primary} size={heightPercentageToDP(3)} style = {{marginHorizontal : widthPercentageToDP(5),position:'absolute',overflow:'hidden',backgroundColor:'black',padding:5,borderRadius:heightPercentageToDP(2),top:heightPercentageToDP(4)}}/>
</TouchableOpacity>
<View style = {{flexDirection : 'row',justifyContent:'space-evenly',position:'absolute', marginTop: heightPercentageToDP(70),width:'100%'}}>
<TouchableOpacity style={styles.button} onPress={ () => {
  if(isActiveDraw == false){
setStroke(0.0001)
setStroke2(3)
  }else{
    setStroke(2)
    setStroke2(0.0001)
  }
  handleIsDraw()
  }}>
        {isActiveDraw ? (
          <Text style={styles.title}>Start Drawing</Text>
        ) : (
          <Text style={styles.title}>Stop Drawing</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{width:"35%"}]} onPress={ () => {
 setDrawMode(true)
  if(editing.length > 0) {
toggleModal()
  }else{
     Alert.alert('Alert',"No Area Selected yet")

  }
}}>
        <Text style={styles.title}>Finish</Text>
    </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={ () => {
  setDrawMode(true)
  handleClear()
}}>
        <Text style={styles.title}>Clear</Text>
    </TouchableOpacity>
    </View>
</View>
<RBSheet
ref={refRBSheet2}
closeOnDragDown={true}
closeOnPressMask={true}
height={heightPercentageToDP(85.0)}
customStyles={{
  wrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  draggableIcon: {
    backgroundColor: "#000"
  }
}}
>
  <VerticalSpacer size ={spacings.md}/>

<View style={{flexDirection: 'row', justifyContent: 'center'}}>
<VerticalSpacer size ={spacings.md}/>
<Text style = {styles.contentTextBold}>LIST OF AREAS</Text>
              </View>
 <VerticalSpacer size ={spacings.md}/>
{savedArea.length == 0 &&
<Text style={[styles.contentText,{textAlign : 'center',marginTop:30}]}>No Areas saved yet</Text>
}
 <FlatList
    data={savedArea}
    renderItem={(renderItem)}
    keyExtractor={item => item.id}
  />
  </RBSheet>
  <Modal isVisible={isModalVisible} style = {{}}>
  <View style = {{backgroundColor : "white", borderRadius : heightPercentageToDP(0.5),height:heightPercentageToDP(30)}}>
        <VerticalSpacer size={spacings.sm} />
        {/* <Ionicons name='close' color={colors.primary} size={ heightPercentageToDP(2.2)} style = {{ marginLeft : 'auto', right : 10}}    onPress={toggleModal}/> */}

        <VerticalSpacer size={spacings.md}/>
        <Text style = {[styles.title,{color :'black',fontSize : heightPercentageToDP(2.2)}]}>NAME THE AREA</Text>
        <VerticalSpacer size={spacings.md}/>
        <KeyboardAwareScrollView
          bounces={false}
          scrollEnabled = {false}
          keyboardShouldPersistTaps="always">
             <Formik
              initialValues={{
             area_name : ''

              }}
              onSubmit={(values, action) => {



                setSavedArea([...savedArea,{
                  area : values.area_name,
                  area_latlng : editing,
                  area_sf : calcArea(editing),
  
                }])
                toggleModal()
                setEditing([])
              }}
              validateOnChange={false}
              validationSchema={NameValidationSchema}>
              {({handleChange,handleSubmit, values, errors, isSubmitting}) => (
                <View>
           <TextInputTwo
                  showLabel = {false}
                   iconname='user'
                    placeholder='Name'
                    placeholderTextColor={colors.lightGrey}
                    
                    value={values.area_name}
                    
                    editable = {true}
                    autoCapitalize="none"
                    onChangeText={handleChange('area_name')}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      areaNameref.current &&
                      areaNameref.current.focus()
                    }
                    error={!_isEmpty(errors) && errors.area_name}
                  />
                  <VerticalSpacer size={spacings.md}/>
                  <Button disabled={isSubmitting}
                   onPress={handleSubmit}
                   buttonStyle = {{width : '50%',height: heightPercentageToDP(4),marginTop : heightPercentageToDP(3)}}
                  >
                   Save
                  </Button>
                  <VerticalSpacer size={spacings.xl}/>
        </View>

          )}
            </Formik>
        </KeyboardAwareScrollView>
</View>
      </Modal>
<VerticalSpacer size={Platform.OS === 'ios' ? spacings.xl : spacings.xl} />
</SafeAreaView>
);
};

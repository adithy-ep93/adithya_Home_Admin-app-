import React from 'react';
import {Text,Image,StyleSheet,TouchableOpacity, View, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import {Button, Divider,Card,Title } from 'react-native-paper';
const  Orderdetails=({navigation})=>{
    return(
      <View style={{flex:1,backgroundColor:colors.backgroundcolor}}> 
      <View style={styles.header}>
        <TouchableOpacity style={{bottom:5,left:20}} onPress={()=> navigation.goBack()}>
          <AntDesign style={styles.iconItem}
           name="left"
           size ={20}
           color={colors.backgroundcolor}/>
          </TouchableOpacity> 
          <View style={{width:148,height:47,paddingLeft:90}}>
          <Image style={{flex:1,width:48,height:10,bottom:32, left:5    ,tintColor:'#fff'}}
          source=
          {require('../../Assets/appbar.png')}/>
         </View>
         <Text style={styles.text}>HOME SERVE</Text>
        <Text style={styles.headingStyle}>Order Details</Text>
      </View>
      <View style={styles.cardView}>
              <Card.Content>
                 <Text style={{fontSize:14,fontWeight:'bold',marginTop:20,left:-1,top:-11,color:colors.secondaryText}}>Service Date  </Text>
                 <Text style={{fontSize:12,fontWeight:'normal',top:-1,color:colors.secondaryText}}>02 April 2021  |  10:00 am</Text>
                 <Divider style={{backgroundColor:'rgba(51,52,88,0.06)', width:307,left:-1,top:-26}}/>
              </Card.Content>
              </View>  
              <View style={styles.cardView2}>
              <Card.Content>
                 <Text style={{fontSize:14,fontWeight:'bold',marginTop:20,top:-11,left:-1,color:colors.secondaryText}}>Requested Services </Text>
                 <Text style={{fontSize:13,fontWeight:'200',top:-4,color:colors.secondaryText}}>Home Sanitization</Text>
                 <Text style={{fontSize:12,fontWeight:'normal',top:-4,color:colors.secondaryText}}>Size of house:    2BHK</Text>
                 <Text style={{fontSize:12,fontWeight:'normal',top:-4,color:colors.secondaryText}}>Storey:         Single</Text>
                 <Divider style={{backgroundColor:'rgba(51,52,88,0.06)', width:307,left:-1,top:-61}}/>
              </Card.Content>
              </View>  
              <View style={styles.cardView3}>
              <Card.Content>
                 <Text style={{fontSize:14,fontWeight:'bold',marginTop:20,left:-1,top:-11,color:colors.secondaryText}}>Service Address  </Text>
                 <Text style={{fontSize:12,fontWeight:'normal',top:-1,color:colors.secondaryText}}>kjdbksfbfbzjvjfbjabj,</Text>
                 <Text style={{fontSize:12,fontWeight:'normal',top:-1,color:colors.secondaryText}}>lfknjadvfv v klvnjznfv,</Text>
                 <Text style={{fontSize:12,fontWeight:'normal',top:-1,color:colors.secondaryText}}>jbvhjbhbvbhzfbh</Text>
                 <Divider style={{backgroundColor:'rgba(51,52,88,0.06)', width:307,left:-1,top:-59}}/>
              </Card.Content>
              </View>  
              <View style={styles.cardView4}>
              <Card.Content>
                 <Text style={{fontSize:14,fontWeight:'bold',marginTop:20,top:-10,left:1,color:colors.secondaryText}}>Total amount:                                                     ???1899     </Text>
                 <Text style={{fontSize:13,fontWeight:'normal',top:-8,left:2,color:colors.secondaryText}}>Discount:                                                                  -???50</Text>
                 <Text style={{fontSize:13,fontWeight:'bold',top:5,color:colors.secondaryText}}>Total Payable:                                                       ???1,849   </Text>
                 <Divider style={{backgroundColor:'rgba(51,52,88,0.06)', width:307,left:-1,marginTop:-19}}/>
              </Card.Content>
              </View>  
              <View style={styles.iconss}>
          <TouchableOpacity style={{bottom:5,left:20}} onPress={()=> navigation.goBack()}>
            <AntDesign style={styles.iconItem}
             name="doubleleft"
             size ={15}
             />
            </TouchableOpacity> 
            </View>
            <View style={styles.iconsss}>
          <TouchableOpacity style={{bottom:5,left:20}} onPress={()=> navigation.goBack()}>
            <AntDesign style={styles.iconItem}
             name="doubleright"
             size ={15}
             />
            </TouchableOpacity> 
            </View>
              <View style={styles.button}>
            <TouchableOpacity style={{borderWidth:1,borderRadius:7,backgroundColor: colors.backgroundcolor,
                 height:30,width:"30%", justifyContent:"center",marginBottom:480}}>
            <Text style={{fontSize:14,fontWeight:'bold' ,color:colors.Appbar,
             alignSelf:"center",alignContent:"center",alignItems:"center"}}>Previous</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.button2}>
            <TouchableOpacity style={{borderWidth:1,borderRadius:7,backgroundColor: colors.backgroundcolor,
                 height:30,width:"30%", justifyContent:"center",marginBottom:480}}>
            <Text style={{fontSize:14,fontWeight:'bold' ,color:colors.primarycolor,
             alignSelf:"center",alignContent:"center",alignItems:"center"}}>Next</Text>
            </TouchableOpacity>
            </View>
            </View>
              );
} ;
const styles=StyleSheet.create({
header:{
    width:'100%',
    height:145,
    flexDirection:'row',
    paddingTop:1,
    alignItems:'center',
    elevation:1,borderBottomStartRadius:12,
    borderBottomEndRadius:12,
    backgroundColor:colors.primarycolor
},
headingStyle: {
  marginTop: 95,
  marginBottom: 10,
  fontSize: 15,
  fontWeight: '900',
  textAlign: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: colors.backgroundcolor,
  left:-120,
  paddingLeft:-40,
  paddingRight:10
},
cardTitle:{
  marginTop:35,
   color:colors.primarycolor, 
  fontWeight:'bold',
   fontSize:16 ,
   left:120
},
cardView:{
  marginTop:25,
  width:338,
  height:80,
  left: 12,
  bottom:8,
  borderRadius:10,
  backgroundColor:'#F5F5F5'
},
button:{
top:-130,
left:50
},
button2:{
bottom:640,
left:185
},
cardView2:{
  marginTop:17,
  width:338,
  height:100,
  left: 12,
  bottom:8,
  borderRadius:10,
  backgroundColor:'#F5F5F5'
},
cardView3:{
  marginTop:17,
  width:338,
  height:105,
  left: 12,
  bottom:8,
  borderRadius:10,
  backgroundColor:'#F5F5F5'
},
cardView4:{
  marginTop:17,
  width:338,
  height:98,
  left: 12,
  bottom:8,
  borderRadius:10,
  backgroundColor:'#F5F5F5'
},
cardStyle:{
  marginTop:5,
  backgroundColor:colors.backgroundcolor,
  borderRadius:16,
  left:15,
  justifyContent:'space-between',
  marginBottom:5,
  marginRight:10,
  marginLeft:6
},
text:{
  fontSize: 15,
  fontWeight: '900',
  fontWeight: 'bold',
  color: colors.backgroundcolor,
  paddingLeft:-7,
  bottom:30
},
iconItem:{
  marginBottom:50,
  paddingLeft:-5,
  left:-15,
  bottom:10
},
iconss:{
  top:34,
  right:120,
  alignItems:'center',
  elevation:1,
  color:'#F5F5F5'
},
iconsss:{
  paddingTop:10,
  top:-42,
  right:-80,
  alignItems:'center',
  elevation:1,
  color:'#F5F5F5'
}
});
export default Orderdetails;
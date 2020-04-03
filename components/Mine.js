import React, { Component } from 'react'
import { 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View, 
    Text,
    StatusBar,
    Image,
    Animated,
    ImageBackground,
    TouchableOpacity,
    TextInput} from 'react-native';
import Button from 'react-native-button';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class Mine extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(40),
            imageUrl:require('../assets/red.png')
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
    }
    render() {
        return (
            <SafeAreaView>
				<ScrollView>
                    <View>
                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flex:1}}>
                            <Button onPress={()=>{this.takephoto()}}>拍照</Button>
                        </View>
                        <View style={{height:200,marginTop:2,flexDirection:'row',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>{this.takephoto()}}>
								<Image style={{width:500,height:"95%"}} source={this.state.imageUrl} />
							</TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    <View style={{backgroundColor:"white",height:30,width:"100%",}}>
                        <Image source={require("../assets/icon/singlecenter.png")} style={{marginLeft:20,height:"100%"}}></Image>
                    </View>
                    <View style={{backgroundColor:'white',width:'100%',height:100}}>
                       <Image source={require("../assets/first.png")} style={{width:'100%',height:"100%"}}></Image>
                    </View>
                    <View style={{backgroundColor:'white',width:'100%',height:100}}>
                       <Image source={require("../assets/second.png")} style={{width:'100%',height:"100%"}}></Image>
                    </View>
                    <View style={{backgroundColor:'white',width:'100%',height:100}}>
                       <Image source={require("../assets/third.png")} style={{width:'100%',height:"100%"}}></Image>
                    </View>
                    <View style={{backgroundColor:"white",height:30,width:"100%",marginTop:5}}>
                        <Image source={require("../assets/icon/yizu.png")} style={{marginLeft:20,height:"100%"}}></Image>
                    </View>
                    <View style={{backgroundColor:'white',width:'100%',height:100}}>
                       <Image source={require("../assets/forth.png")} style={{width:'100%',height:"100%"}}></Image>
                    </View>
                    <TouchableOpacity  onPress={()=>{Actions.Fabu()}}>
                    <View style={{backgroundColor:'white',width:'100%',height:100}}>
                        <Image source={require("../assets/fifth.png")} style={{width:'100%',height:"100%" }}></Image>
                    </View>
                    </TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
        )
    }
}
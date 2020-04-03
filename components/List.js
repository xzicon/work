import React, { Component } from 'react'
import {View, Text,SafeAreaView,ScrollView,TextInput,Image} from 'react-native';

export default class List extends Component {
    render() {
        return (
            <>
			<SafeAreaView>
				<ScrollView>
				<View style={{flexDirection:'row',height:40,justifyContent:"center",backgroundColor:'white',marginTop:10}}>
						<View style={{
							width:'80%',
							marginRight:10,
							backgroundColor:'#eee',
							flexDirection:'row',
							alignItems:'center',
							borderRadius:7,
							paddingLeft:10
							
						}}>
						   <TextInput placeholder='请输入商品名称' placeholderTextColor="#999"/> 
						   <Image style={{width:20,height:20,marginLeft:220}} source={require('../assets/icon/search.png')}/>	
						</View>
				</View> 
				<View style={{flexDirection:'row',height:40,backgroundColor:"white"}}>
					<Text style={{marginTop:10,marginLeft:45,color:'#f23030'}}>
						综合
					</Text>
					<Text style={{marginTop:10,marginLeft:61,color:'#bfbfbf'}}>
						销量
					</Text>
					<Text style={{marginTop:10,marginLeft:61,color:'#bfbfbf'}}>
						新品
					</Text>
					<Text style={{marginTop:10,marginLeft:61,color:'#bfbfbf'}}>
						价格
					</Text>
					<Text style={{marginTop:10,marginLeft:61,color:'#bfbfbf'}}>
						信用
					</Text>
				</View>
				<View style={{flexDirection:'row',height:190,justifyContent:"center",backgroundColor:"#fff"}}>
					<View style={{width:"40%",height:'100%',backgroundColor:"white",marginTop:10}}>
						<Image style={{width:"85%",height:"100%"}} source={require('../assets/left.png')}/>
					</View>
					<View style={{width:"40%",height:'100%',backgroundColor:"white",marginTop:10}}>
						<Image style={{width:"85%",height:"100%",marginLeft:"15%"}} source={require('../assets/right.png')}/>
					</View>
				</View>
				<View style={{flexDirection:"row",height:50,backgroundColor:"white",justifyContent:"center"}}>
					<Text style={{fontSize:12,marginLeft:10,marginTop:10,width:"35%"}}>
					Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
					</Text>
					<Text style={{fontSize:12,marginLeft:40,marginTop:10,width:'35%'}}>
					Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
					</Text>
				</View>
				<View style={{flexDirection:'row',height:15}}>
					<View style={{width:"50%",backgroundColor:'white'}}>
						<Text style={{marginLeft:"23%"}}>
							36.00
						</Text>
					</View>
					<View style={{width:"50%",backgroundColor:"#fff"}}>
						<Text style={{marginLeft:"12%"}}>
							36.00
						</Text>
					</View>
				</View>
				
				<View style={{flexDirection:'row',height:190,justifyContent:"center",backgroundColor:"#fff",marginTop:1}}>
					<View style={{width:"40%",height:'100%',backgroundColor:"#fff",marginTop:10}}>
						<Image style={{width:"85%",height:"100%"}} source={require('../assets/left.png')}/>
					</View>
					<View style={{width:"40%",height:'100%',backgroundColor:"#fff",marginTop:10}}>
						<Image style={{width:"85%",height:"100%",marginLeft:"15%"}} source={require('../assets/right.png')}/>
					</View>
				</View>
				<View style={{flexDirection:"row",height:50,backgroundColor:"#fff",justifyContent:"center"}}>
					<Text style={{fontSize:12,marginLeft:10,marginTop:10,width:"35%"}}>
					Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
					</Text>
					<Text style={{fontSize:12,marginLeft:40,marginTop:10,width:'35%'}}>
					Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
					</Text>
				</View>
				<View style={{flexDirection:'row',height:15}}>
					<View style={{width:"50%",backgroundColor:'white'}}>
						<Text style={{marginLeft:"23%"}}>
							36.00
						</Text>
					</View>
					<View style={{width:"50%",backgroundColor:"#fff"}}>
						<Text style={{marginLeft:"12%"}}>
							36.00
						</Text>
					</View>
				</View>

				<View style={{flexDirection:'row',height:190,justifyContent:"center",backgroundColor:"#fff",marginTop:1}}>
					<View style={{width:"40%",height:'100%',backgroundColor:"#fff",marginTop:10}}>
						<Image style={{width:"85%",height:"100%"}} source={require('../assets/left.png')}/>
					</View>
					<View style={{width:"40%",height:'100%',backgroundColor:"#fff",marginTop:10}}>
						<Image style={{width:"85%",height:"100%",marginLeft:"15%"}} source={require('../assets/right.png')}/>
					</View>
				</View>
				<View style={{flexDirection:"row",height:50,backgroundColor:"#fff",justifyContent:"center"}}>
					<Text style={{fontSize:12,marginLeft:10,marginTop:10,width:"35%"}}>
					Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
					</Text>
					<Text style={{fontSize:12,marginLeft:40,marginTop:10,width:'35%'}}>
					Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
					</Text>
				</View>
				<View style={{flexDirection:'row',height:200}}>
					<View style={{width:"50%",backgroundColor:'white'}}>
						<Text style={{marginLeft:"23%"}}>
							36.00
						</Text>
					</View>
					<View style={{width:"50%",backgroundColor:"#fff"}}>
						<Text style={{marginLeft:"12%"}}>
							36.00
						</Text>
					</View>
				</View>
				</ScrollView>
			</SafeAreaView>
		
		</>
        )
    }
}
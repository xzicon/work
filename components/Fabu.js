import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    View, 
    Text, 
    SafeAreaView,
    StyleSheet,
    ToastAndroid,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
    one:{
        backgroundColor:'#f23030',
        height:55,
        flexDirection:'row'
    },
    two:{
        color:'#f5f5f5',
        fontSize:23,
        justifyContent:'center',
        marginTop:10,
        marginLeft:170
    },
    three:{
        color:'#f5f5f5',
        fontSize:40,
        marginLeft:130,
        marginTop:-15
    },
    four:{
        flexDirection:'row',
        backgroundColor:'#f5f5f5',
        paddingBottom:10
    },
    five:{
        fontSize:16,
        marginTop:11,
        width:305
    },
    six:{
        fontSize:15,
        marginTop:11,
    },
    seven:{
        fontSize:17,
        marginTop:10,
        marginLeft:20
    },
    eight:{
        backgroundColor:'#f23030',
        color:'white',
        borderRadius:20,
        width:80,
        marginLeft:40,
        marginTop:20
    },
    nine:{
        backgroundColor:'#f23030',
        color:'white',
        borderRadius:20,
        width:80,
        marginLeft:90,
        marginTop:20
    },
    ten:{
        marginTop:20,
        marginLeft:100,
        fontSize:15
    }
})
export default class Fabu extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            pages:1,
            yi:'已回复',
            wei:'未回复'
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.pages)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    upPage = ()=>{
        var page = this.state.pages;
        if(page>1){
            page --;
            this.setState({
                pages:page
            })
        }else{
            ToastAndroid.show("暂无其他数据", ToastAndroid.TOP);
        }

    }
    downPage = ()=>{
        var page = this.state.pages;
        page ++;
        this.setState({
            pages:page
        })
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.one}>
                        <Icon 
                            name='chevron-left'
                            color={'white'}
                            size={25}
                            style={{marginLeft:10,marginTop:13}}
                            onPress={()=>Actions.per()}
                        />
                        <Text style={styles.two}>我的发布</Text>
                        <Text style={styles.three}>...</Text>
                    </View>
                    {
                        this.state.data.map((item)=>(
                            <View style={styles.four}>
                                <Text style={styles.five}>{item.title.length<15?item.title:item.title.substr(0,16)+'...'}</Text>
                                <Text style={styles.six}>{item.create_at.substr(0,10)}</Text>
                                <Text style={styles.seven}>{Math.round(Math.random())==0?this.state.yi:this.state.wei}</Text>
                            </View>
                        ))
                    }
                    <View style={{flexDirection:'row'}}>
                        <Button style={styles.eight} onPress={()=>this.upPage()}>上一页</Button>
                        <Text style={{marginTop:25,marginLeft:90}}>第{this.state.pages}页</Text>
                        <Button style={styles.nine} onPress={()=>this.downPage()}>下一页</Button>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}
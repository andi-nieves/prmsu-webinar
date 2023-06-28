import React, { useState, useCallback } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'

import NameCard from '../Components/NameCard';

const obj = {
    fname: 'Andy',
    mname: 'Fuentecilla',
    lname: 'Nieves'
}

const items = [{
    title: 'Title 1',
    description: 'Do ex in nostrud est laboris veniam minim.',
    image: 'https://images.unsplash.com/photo-1647891937869-bc31fe3f9836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
},
{
    title: 'Title 2',
    description: 'Do ex in nostrud est laboris veniam minim.',
    image: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
},
{
    title: 'Title 3',
    description: 'Do ex in nostrud est laboris veniam minim.',
    image: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
}
]

function Home({ navigation }) {
    const [name, setName] = useState()
    const onPressHandler = useCallback(() => {
        setName(obj)
    }, [])

    return <View style={style.container}>
        <View style={style.item1}>
            <Text style={{ fontSize: 20, color: 'white' }}>Header</Text>
            <Text style={{ color: 'white', textAlign: 'center' }}>Dolor anim consequat consequat exercitation ad ea minim magna cillum magna commodo occaecat ut.</Text>
        </View>
        <View style={style.item2}>
            <TouchableOpacity style={style.menu}><Text style={style.text}>Home</Text></TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => navigation.navigate('Gallery')}><Text style={style.text}>Gallery</Text></TouchableOpacity>
            <TouchableOpacity style={style.menu}><Text style={style.text}>About Us</Text></TouchableOpacity>
        </View>
        <View>
            {items.map(item => <View style={style.cardWrapper} key={item.title}>
                <Image style={{ height: 50, width: 50, marginRight: 10 }} source={{ uri: item.image }} />
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text>{item.description}</Text>
                </View>
                
            </View>)}
        </View>
        {/* <Text>Sample text</Text> */}
        {/* <NameCard name={name} />
        <Button title="Update name" onPress={onPressHandler} /> */}
    </View>
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#C69EFF',
        flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    item1: {
        height: 100,
        backgroundColor: '#301761',
        alignItems: 'center',
        padding: 10
    }
    ,
    item2: {
        height: 50,
        backgroundColor: '#814DDE',
        flexDirection: 'row',
        // gap: 10
    },
    menu: {
        padding: 10,
        backgroundColor: 'rgba(50, 50, 50, 0.2)'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255, 0.1)',
        marginBottom: 10,
        padding: 10
    }
})

export default Home;

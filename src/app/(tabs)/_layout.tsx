import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout(){
    return  (
        <Tabs screenOptions={ {tabBarActiveTintColor: 'black', tabBarShowLabel: false,}}>
            <Tabs.Screen 
            name="index" 
            options={{ 
                headerTitle: 'For you', 
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="home" size={26} color={color} /> 
                ),
            }} />
            <Tabs.Screen
                name="new"
                options={{
                title: 'New post',
                tabBarIcon: ({ color }) => <FontAwesome size={26} name="plus-square-o" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome size={26} name="user" color={color} />,
                }}
            />
        </Tabs>
    )
}
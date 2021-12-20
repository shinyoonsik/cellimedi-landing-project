import React from 'react';
import Header from '../screens/Header';
import SimpleHeader from '../screens/SimpleHeader';
import { createStackNavigator } from '@react-navigation/stack';
import SeegeneClinick from '../screens/SeegeneClinick';
import BangClinick from '../screens/BangClinick';
import JamsilClinick from '../screens/JamsilClinick';
import SongpaClinick from '../screens/SongpaClinick';
import RecentVisitHistory from '../screens/RecentVisitHistory';
import Diagnosis from '../screens/Diagnosis';
import Inspection from '../screens/Inspection';
import Treatment from '../screens/Treatment';
import TempHeader from '../screens/TempHeader';
import Heart from '../screens/Heart';
import Neurocognitive from '../screens/Neurocognitive';
import Cardiovascular from '../screens/Cardiovascular';
import Musculoskeletal from '../screens/Musculoskeletal';
import Metabolism from '../screens/Metabolism';
import Immune from '../screens/Immune';
import SkinAndBody from '../screens/SkinAndBody';
import Etc from '../screens/Etc';

const Stack = createStackNavigator();

export default function MyDoctorStackNavigation() {
    return(
        <Stack.Navigator initialRouteName="SeegeneClinick">
            <Stack.Screen name="SeegeneClinick" component={SeegeneClinick} options={{ headerTitle: props => <Header {...props} />}} />
            <Stack.Screen name="JamsilClinick" component={JamsilClinick} options={{ headerTitle: props => <Header {...props} />}} />
            <Stack.Screen name="BangClinick" component={BangClinick} options={{ headerTitle: props => <Header {...props} />}} />
            <Stack.Screen name="SongpaClinick" component={SongpaClinick} options={{ headerTitle: props => <Header {...props} />}} />
            <Stack.Screen name="RecentVisitHistory" component={RecentVisitHistory} options={{ headerTitle: props => <TempHeader title='최근 내원 이력'{...props} />}}/>
            <Stack.Screen name="Diagnosis" component={Diagnosis}  options={{ headerTitle: props => <SimpleHeader title='진료'{...props} />}}/>
            <Stack.Screen name="Inspection" component={Inspection}  options={{ headerTitle: props => <SimpleHeader title='검사'{...props} />}}/>
            <Stack.Screen name="Treatment" component={Treatment}  options={{ headerTitle: props => <SimpleHeader title='치료'{...props} />}}/>
            <Stack.Screen name="Heart" component={Heart}  options={{ headerTitle: props => <TempHeader title="기능별 건강" {...props} />}}/>
            <Stack.Screen name="Neurocognitive" component={Neurocognitive}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
            <Stack.Screen name="Cardiovascular" component={Cardiovascular}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
            <Stack.Screen name="Musculoskeletal" component={Musculoskeletal}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
            <Stack.Screen name="Metabolism" component={Metabolism}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
            <Stack.Screen name="Immune" component={Immune}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
            <Stack.Screen name="SkinAndBody" component={SkinAndBody}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
            <Stack.Screen name="Etc" component={Etc}  options={{ headerTitle: props => <TempHeader title='기능별 건강' {...props} />}}/>
        </Stack.Navigator>
    )
}

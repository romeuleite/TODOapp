import React from "react";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";

//import api from "../../services/api";


import styles from "./styles";


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const task = route.params.task;

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color='#9917b9' />
                </TouchableOpacity>
            </View>

            <View style={styles.task}>
                <Text style={[styles.taskProperty, { marginTop: 0 }]}>Tarefa:</Text>
                <Text style={styles.taskValue}>{task.name}</Text>

                <Text style={styles.taskProperty}>Duração:</Text>
                <Text style={styles.taskValue}>{task.duration}</Text>

                <Text style={styles.taskProperty}>Deadline:</Text>
                <Text style={styles.taskValue}>{task.deadline}</Text>

            </View>
        </View>
    );
}
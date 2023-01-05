import React, {useState, useEffect} from "react";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import styles from "./styles";


export default function Task() {
    const [tasks, setTasks] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(task) {
        navigation.navigate('Detail',{task});
    }

    async function loadTasks(){
        const response = await api.get('tasks');

        setTasks(response.data);
    }

    useEffect(()=> {
        loadTasks();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText} onPress={() => navigateToDetail()}>
                Lista de tarefas
            </Text>

            <FlatList
                data={tasks}
                style={styles.taskList}
                keyExtractor={task => String(task.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item:task }) => (
                    <View style={styles.task} >
                        <Text style={styles.taskProperty}>Tarefa:</Text>
                        <Text style={styles.taskValue}>{task.name}</Text>

                        <Text style={styles.taskProperty}>Deadline:</Text>
                        <Text style={styles.taskValue}>{task.deadline}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(task)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color='#e020r1' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
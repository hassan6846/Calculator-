import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Pills = (props: any) => {
    return (
        <TouchableOpacity style={styles.press}>
            <Text style={styles.text}>{props.val}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    press: {
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 60,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        flexDirection: "row",
    },
    text: {
        color: "#109dff",
        fontSize: 18,
        fontWeight: "400"

    }
});

export default Pills;

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const SquarBtns = (props: any) => {
    return (
        <TouchableOpacity style={[styles.square, { backgroundColor: props.backgroundColor }]}>
                  <Text style={[styles.txt, { color: props.textColor }]}>{props.val}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    square: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    txt: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default SquarBtns;

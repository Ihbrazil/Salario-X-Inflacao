import React from 'react';
import { Text, View } from 'react-native';

import estiloGlobal from '../estilos/estilos';
import estiloValor from './estilo';

export default function ItemValor(props) {
    return (
        <View style={[estiloGlobal.container, props.estilo]}>
            <Text style={estiloValor.textoValores}>{props.ano}</Text>
            <Text style={estiloValor.textoValores}>{props.valor}</Text>
        </View>
    );
}
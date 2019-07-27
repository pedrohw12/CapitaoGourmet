import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { consumido: 0, status: "Necessitado de pizza", retirar: 0 };

    this.addPizza = this.addPizza.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.retirarPizza = this.retirarPizza.bind(this);
    this.zerarPizza = this.zerarPizza.bind(this);
  }

  atualizar() {
    let s = this.state;

    if (s.consumido < 15) {
      s.status = <Text style={{ color: "red" }}>Necessitado de pizza</Text>;
    } else if (s.consumido >= 15 && s.consumido <= 25) {
      s.status = "Bom";
    } else if (s.consumido >= 26 && s.consumido <= 32) {
      s.status = "Pirata ";
    } else if (s.consumido >= 33 && s.consumido <= 35) {
      s.status = "Pirata acima da média";
    } else {
      s.status = <Text style={{ color: "green" }}>Capitão Gancho</Text>;
    }
    this.setState(s);
  }

  addPizza() {
    let s = this.state;
    s.consumido += 1;
    this.setState(s);
    this.atualizar(s);
  }

  retirarPizza() {
    let s = this.state;
    s.consumido -= 1;
    this.setState(s);
    this.atualizar(s);
  }

  zerarPizza() {
    let s = this.state;
    s.consumido = 0;
    this.setState(s);
    this.atualizar(s);
  }

  render() {
    return (
      <ImageBackground
        source={require("./images/capitaoGancho.png")}
        style={styles.bgimage}
      >
        <Text style={styles.appTitulo}>Capitão Gancho</Text>
        <View style={styles.body}>
          <TextInput style={styles.input} placeholder="Nome do pirata" />
          <View style={styles.infoArea}>
            <View style={styles.titulos}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text>
                <Text style={styles.areaDado}>{this.state.consumido}</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>
          </View>

          <View style={styles.btnArea}>
            <View style={styles.botoes}>
              <TouchableOpacity style={styles.to1} onPress={this.retirarPizza}>
                <Text style={styles.txtBtn}>-1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.to2} onPress={this.addPizza}>
                <Text style={styles.txtBtn}>+1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.to3} onPress={this.zerarPizza}>
                <Text style={styles.txtBtn}>Zerar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rodape}>
              <Text style={styles.final}>Powered by @pedrowand</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  titulos: {
    flexDirection: "row"
  },
  body: {
    flex: 2
  },
  input: {
    fontSize: 25
  },
  bgimage: {
    flex: 1,
    width: null
  },
  appTitulo: {
    fontSize: 25,
    color: "black",
    backgroundColor: "#C8A2C8"
  },
  infoArea: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  area: {
    flex: 1,
    alignItems: "center"
  },
  areaTitulo: {
    fontWeight: "bold",
    fontSize: 20
  },
  areaDado: {
    fontSize: 15
  },
  Texto: {
    backgroundColor: "transparent",
    color: "#000000",
    fontSize: 30
  },
  btnArea: {
    flexDirection: "column",
    flex: 1
  },
  to1: {
    backgroundColor: "#007FFF",
    flex: 3,
    marginHorizontal: 10,
    borderRadius: 45
  },
  to2: {
    backgroundColor: "#007FFF",
    flex: 3,
    marginHorizontal: 10,
    borderRadius: 45
  },
  to3: {
    backgroundColor: "#007FFF",
    flex: 3,
    marginHorizontal: 10,
    borderRadius: 45
  },
  txtBtn: {
    textAlign: "center",
    padding: 12
  },
  final: {
    fontWeight: "bold",
    fontSize: 10
  },
  botoes: {
  flexDirection: "row",
  flex: 4
  },
  rodape: {
    flex: 2,
    justifyContent: "flex-end"
  }
});

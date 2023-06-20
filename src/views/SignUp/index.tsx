// import React, { useState, useEffect } from "react";
// import {
//     View,
//     Text,
//     TextInput,
//     StyleSheet,
//     ImageBackground,
//     TouchableOpacity,
//     Image,
//     Alert,
// } from "react-native";
// import * as S from './styles';
// import { useNavigation } from "@react-navigation/native";

// const SignupScreen = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [currentpassword, setCurrentPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const navigation = useNavigation()

//     const handleEmailChange = (email) => {
//         setEmail(email);
//     };

//     const handlePasswordChange = (password) => {
//         setPassword(password);
//     };

//     const handleCurrentPasswordChange = (currentpassword) => {
//         setCurrentPassword(currentpassword);
//     };

//     const validate = () => {
//         let emailError = "";
//         let passwordError = "";

//         if (!email.includes("@")) {
//             emailError = "Invalid email";
//         }

//         if (password.length < 6) {
//             passwordError = "Password must be at least 6 characters";
//         }

//         if (emailError || passwordError) {
//             setEmailError(emailError);
//             setPasswordError(passwordError);
//             return false;
//         }

//         return true;
//     };


//     const handleSignupPress = () => {
//         const isValid = validate();
       
//             navigation.navigate('Home')
      
//     };
//     const handleLoginPress = () => {
//         // const isValid = validate();

//         navigation.navigate('Login')

//     };

//     useEffect(() => {

//     }, []);


//     return (

//         <View style={{ flex: 1 }}>
//             <S.BackgroundImage
//                 source={require("../../assets/Banner_logo.jpg")}
//                 resizeMode="cover">
//             </S.BackgroundImage>
//             <View style={styles.container}>
//                 <Image
//                     source={require("../../assets/Logo_icon.png")}
//                     style={styles.logo}
//                 />

//                 <Text style={styles.logoText}>Sign Up</Text>
//                 <TextInput
//                     placeholder="Email"
//                     value={email}
//                     onChangeText={handleEmailChange}
//                     style={styles.input}
//                     placeholderTextColor="black"
//                 />

//                 <TextInput
//                     placeholder="Password"
//                     value={password}
//                     onChangeText={handlePasswordChange}
//                     secureTextEntry
//                     style={styles.input}
//                     placeholderTextColor="black"
//                 />
//                 <TextInput
//                     placeholder="Current Password"
//                     value={password}
//                     onChangeText={handleCurrentPasswordChange}
//                     secureTextEntry
//                     style={styles.input}
//                     placeholderTextColor="black"
//                 />
//                 <Text style={styles.error}>{passwordError}</Text>
//                 <TouchableOpacity onPress={handleSignupPress} style={[styles.button]}>
//                     <Text style={styles.text}>Sign up</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={handleLoginPress} style={{ justifyContent: 'flex-end' }}>
//                     <Text style={{ color: "black" }}>If you have Already Register <Text style={{ color: 'rgb(178,34,34)' }}>Login</Text></Text>
//                 </TouchableOpacity>
//             </View>
//         </View>

//     );
// };

// export default SignupScreen;

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         resizeMode: "cover",

//     },
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },
//     input: {
//         marginTop: 5,
//         width: "100%",
//         height: 40,
//         borderWidth: 2,
//         borderColor: "rgb(178,34,34)",
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 20,
//     },
//     error: {
//         color: "black",
//     },
//     button: {
//         backgroundColor: "rgb(178,34,34)",
//         padding: 12,
//         margintop: 10,
//         borderRadius: 25,
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100%",
//         marginBottom: 10,
//         marginLeft: 10
//     },
//     text: {
//         color: "white",
//         fontWeight: "bold",
//         fontSize: 16,
//         textTransform: "uppercase",
//     },
//     Signuptext: {
//         color: "black",
//         fontWeight: "bold",
//         fontSize: 12,
//         textTransform: "uppercase",
//         marginBottom: 20,
//     },
//     Logo: {
//         width: 35,
//         height: 35,
//         marginRight: 10,
//     },
//     LoginLogo: {
//         flexDirection: "row",
//     },
//     logo: {
//         width: 60,
//         height: 60,
//     },
//     logoText: {
//         fontSize: 24,
//         fontWeight: "bold",
//         color: "rgb(178,34,34)",
//         marginBottom: 10
//     },
// });

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as S from './styles';
const SignupScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const handleNameChange = (name) => {
        setName(name);
    };

    const handleEmailChange = (email) => {
        setEmail(email);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };

    const handleSignupPress = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, email: email, password: password }),
        };

        fetch("http://127.0.0.1:8000/api/signup", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                navigation.navigate("Home");
            })
            .catch((error) => {
                console.log(error);
                setError("Signup failed");
            });
    };
    const handleLoginPress = () => {
                // const isValid = validate();
        
                navigation.navigate('Login')
        
            };

    return (
        <View style={styles.container}>
            <S.BackgroundImage
                source={require("../../assets/Banner_logo.jpg")}
                resizeMode="cover">
            </S.BackgroundImage>
            <View style={styles.containermain}>
                <Image
                    source={require("../../assets/Logo_icon.png")}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>Sign Up</Text>
                <TextInput
                    placeholder="Username"
                    value={name}
                    onChangeText={handleNameChange}
                    style={styles.input}
                    placeholderTextColor="black"
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={handleEmailChange}
                    style={styles.input}
                    placeholderTextColor="black"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor="black"
                />
                <Text style={styles.error}>{error}</Text>
                <TouchableOpacity onPress={handleSignupPress} style={styles.button}>
                    <Text style={styles.text}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLoginPress} style={{ justifyContent: 'flex-end' }}>
                    <Text style={{ color: "black" }}>If you have Already Register <Text style={{ color: 'rgb(178,34,34)' }}>Login</Text></Text>
               </TouchableOpacity>
            </View>

        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containermain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    logoText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "rgb(178, 34, 34)",
        marginBottom: 10,
    },
    input: {
        marginTop: 5,
        width: "100%",
        height: 40,
        borderWidth: 2,
        borderColor: "rgb(178, 34, 34)",
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "rgb(178, 34, 34)",
        padding: 12,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginBottom: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "uppercase",
    },
    logo: {
        width: 60,
        height: 60,
      },
});


import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../reusableComponents/AppTextInput";
import AppButton from "../reusableComponents/AppButton";
import AppErrors from "../reusableComponents/AppErrors";
import AppFormField from "../reusableComponents/AppFormField";

let schema = yup.object().shape({
  name: yup.string().required().min(6).label("Name"),
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

function RegisterScreen() {
  return (
    <View style={styles.registerContainer}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
        {({ handleSubmit }) => {
          return (
            <>
              <AppFormField
                icon="face-woman"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Name"
                name="name"
              />
              <AppFormField
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Email"
                textContentType="emailAddress"
                name="email"
              />
              <AppFormField
                icon="account-lock"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
                name="password"
              />
              <AppButton
                name="login"
                color="secondaryColor"
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  registerContainer: {
    padding: 10,
    marginTop: 30,
  },
});

export default RegisterScreen;

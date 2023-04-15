import { StyleSheet, View, TextInput } from "react-native";
import { useForm, useController } from "react-hook-form";

import { ActionButton } from "../../../components";
import { COLORS } from "../../../constants";

const InputField = ({ placeholder, isPassword, isEmail, control }) => {
  const { field } = useController({
    name: placeholder,
    control,
    rules: {
      required: true,
      pattern: isEmail ? /^\S+@\S+$/i : undefined,
    },
  });

  return (
    <TextInput
      secureTextEntry={isPassword}
      keyboardType={isEmail ? "email-address" : "default"}
      style={[styles.inputField, { width: "100%" }]}
      placeholder={placeholder}
      value={field.value}
      onchangeText={field.onChange}
    />
  );
};

const SignUpForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View style={[styles.inputContainer, { width: "90%" }]}>
      <View>
        <InputField placeholder="Name" control={control} />
        <InputField placeholder="Username" control={control} />
        <InputField placeholder="Email" isEmail control={control} />
        <InputField placeholder="Password" isPassword control={control} />
      </View>

      <ActionButton
        action={handleSubmit(onSubmit)}
        text="Sign Up"
        btnStyle={styles.registerBtn}
        txtStyle={styles.registerTxt}
      />
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    // height: 100,
    justifyContent: "space-between",
  },
  inputField: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 10,
  },
  registerBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  registerTxt: {
    color: "white",
    fontSize: 18,
  },
});

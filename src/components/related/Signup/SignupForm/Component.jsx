import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Wrapper, Label, Input, SubmitButton } from "./styles";

const Component = ({ signUpRequested }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      signUpRequested({
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Label htmlFor="email">E-mail*</Label>
      <Input
        id="email"
        name="email"
        placeholder="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Label htmlFor="password">Password*</Label>
      <Input
        id="password"
        name="password"
        placeholder="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Label htmlFor="confirmPassword">Confirm password*</Label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        placeholder="confirmPassword"
        type="confirmPassword"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      <SubmitButton type="submit">Sign up</SubmitButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  signUpRequested: () => {},
};

Component.propTypes = {
  signUpRequested: PropTypes.func.isRequired,
};

export default Component;
